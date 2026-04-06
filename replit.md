# Chocolate Storefront

A Next.js e-commerce storefront for a chocolate shop, migrated from Vercel to Replit.

## Tech Stack

- **Framework**: Next.js 16.2.2 (App Router, Turbopack)
- **UI**: React 19, Tailwind CSS v4, Framer Motion, Lucide React
- **State**: Zustand (cart store)
- **Payments**: Stripe (@stripe/react-stripe-js, @stripe/stripe-js, stripe)
- **Language**: TypeScript

## Project Structure

```
src/
  app/           # Next.js App Router pages
    page.tsx     # Home
    shop/        # Shop listing
    product/[id] # Product detail
    order-success/ # Post-purchase page
    contact/     # Contact page
    faq/         # FAQ page
  components/    # Shared UI components (CartDrawer, etc.)
  lib/           # Utilities (products.ts)
  store/         # Zustand stores (useCartStore.ts)
```

## Running the App

```bash
npm run dev    # Development server on port 5000
npm run build  # Production build
npm run start  # Production server on port 5000
```

## Replit Configuration

- Dev server runs on port 5000, bound to `0.0.0.0` for Replit proxy compatibility
- Workflow: "Start application" runs `npm run dev`

## Environment Variables

If using Stripe payments, add these secrets:
- `STRIPE_SECRET_KEY` — Stripe secret key (server-side only)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — Stripe publishable key (client-safe)
