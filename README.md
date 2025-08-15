
# Princess Collections — Preview (Next.js + Tailwind)

Mobile‑first, bold fashionista preview site for Princess Collections.

## Features
- Pages: Home, Products, Gallery, New Arrivals, Contact
- Vibrant pink/purple/navy theme with modern, semi‑calligraphic vibe
- Smooth animations (framer‑motion), hover effects, responsive layout
- "Payments Coming Soon" (API stub ready for Daraja integration later)

## Quick Start (Local)
```bash
npm i
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel (Recommended)
1. Create/Log in at https://vercel.com with `princesscollections994@gmail.com`.
2. Click **New Project** → **Import** this folder (upload via GitHub or "Import project from your computer").
3. Framework is auto‑detected (Next.js). No build changes needed.
4. Deploy. Your preview will be available at a URL like:
   `https://princess-collections-preview.vercel.app` (Vercel will choose the exact subdomain).

### (Later) MPESA Paybill — Daraja Integration
- Replace `app/api/pay/mpesa/route.js` with a serverless function that calls Daraja STK Push.
- Use environment variables on Vercel:
  - `DARAJA_CONSUMER_KEY`
  - `DARAJA_CONSUMER_SECRET`
  - `DARAJA_SHORTCODE` (your **Paybill** number)
  - `DARAJA_PASSKEY`
  - `DARAJA_CALLBACK_URL`
- Use `TransactionType: "CustomerPayBillOnline"` and format phone as `2547XXXXXXXX`.

## Customization
- Edit copy, images, and products in `app/*` and `lib/products.js`.
- Colors live in Tailwind `theme.extend.colors` and CSS variables.

## Support
Email: hello@princesscollections.co.ke
