import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error(
    "Missing STRIPE_SECRET_KEY environment variable. " +
    "Add it to your .env.local file. " +
    "Get your key from https://dashboard.stripe.com/apikeys"
  );
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-03-31.basil" as const,
});

export default stripe;
