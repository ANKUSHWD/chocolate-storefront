import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import { getProductById } from "@/lib/products";

interface CartItemPayload {
  id: string;
  quantity: number;
}

interface StripeLineItem {
  price_data: {
    currency: string;
    product_data: {
      name: string;
      description: string;
      images: string[];
    };
    unit_amount: number;
  };
  quantity: number;
}

export async function POST(req: NextRequest) {
  try {
    const { items }: { items: CartItemPayload[] } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001";

    // Build Stripe line items from our product catalog
    const lineItems: StripeLineItem[] = [];
    for (const cartItem of items) {
      const product = getProductById(cartItem.id);
      if (!product) continue;

      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
            description: product.desc,
            images: [
              `https://lh3.googleusercontent.com/aida-public/${product.img}`,
            ],
          },
          unit_amount: product.priceInCents,
        },
        quantity: cartItem.quantity,
      });
    }

    if (lineItems.length === 0) {
      return NextResponse.json({ error: "No valid items" }, { status: 400 });
    }

    /* Stripe checkout disabled for deployment to avoid key issues
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      line_items: lineItems as any,
      mode: "payment",
      success_url: `${baseUrl}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/shop`,
      shipping_address_collection: {
        allowed_countries: ["US", "GB", "CA", "AU", "IN", "DE", "FR", "SG"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 0, currency: "usd" },
            display_name: "Standard Shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 7 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 1500, currency: "usd" },
            display_name: "Express Courier",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 2 },
              maximum: { unit: "business_day", value: 3 },
            },
          },
        },
      ],
      metadata: {
        source: "aura-luxury-storefront",
      },
    });
    
    return NextResponse.json({ url: session.url });*/

    return NextResponse.json({ url: `${baseUrl}/order-success?mock=true` });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("Stripe checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
