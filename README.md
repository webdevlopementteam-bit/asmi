# Asmi Enterprises — Landing Page

Next.js 15 (App Router) + React 19 + Tailwind CSS v4, written in JSX.

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
```

## Where to edit
- **app/page.jsx** — all 16 sections. Business data (phone, address, GST, products, prices, FAQs) sits in constants at the top of the file.
- **app/globals.css** — brand colours (`ink`, `cream`, `lemon`, `aqua`), fonts and animations.
- **public/products/** — product photos. Replace a file with the same name to swap an image.

## Before going live
- The enquiry form currently only shows a success message. Connect `onSubmit` in the `Quote` section to an API route, email service or CRM.
- Fragrance names in the air-freshener section are placeholders — rename them to your real variants.
- Price board figures are the indicative prices from the IndiaMART storefront; update as needed.
