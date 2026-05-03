# Upward Physio

Production-ready marketing site for **Upward Physio** — a physical therapy practice specializing in occupational health and workplace wellness.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **React Hook Form + Zod**, and **Resend** for the contact form.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Copy the env template and add your keys
cp .env.example .env.local
# Open .env.local and fill in RESEND_API_KEY (optional for first run)

# 3. Run the dev server
npm run dev
```

Visit **http://localhost:3000**.

> The contact form works without a Resend key — it will log submissions to the
> server console instead of sending email. Add a key when you're ready to wire
> it up for real.

---

## Environment variables

| Variable               | Required | Purpose                                                                |
| ---------------------- | -------- | ---------------------------------------------------------------------- |
| `RESEND_API_KEY`       | optional | Resend API key. Get one at https://resend.com/api-keys                 |
| `CONTACT_TO_EMAIL`     | optional | Where contact-form messages are delivered. Defaults to siteConfig.     |
| `CONTACT_FROM_EMAIL`   | optional | "From" address. Must be a verified domain (or `onboarding@resend.dev`).|
| `NEXT_PUBLIC_SITE_URL` | optional | Used for SEO metadata. Set to your production URL when deployed.       |

See `.env.example` for the template.

---

## Project structure

```
upward-physio/
├── app/
│   ├── about/page.tsx              # /about
│   ├── api/contact/route.ts        # POST handler — sends email via Resend
│   ├── contact/page.tsx            # /contact
│   ├── corporate/page.tsx          # /corporate (highest-priority conversion page)
│   ├── services/page.tsx           # /services
│   ├── globals.css                 # Tailwind base + design tokens
│   ├── layout.tsx                  # Root layout (fonts, metadata, nav, footer)
│   └── page.tsx                    # / (homepage)
├── components/
│   ├── ui/                         # button, input, textarea, label primitives
│   ├── contact-form.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── logo.tsx                    # Inline SVG logo + wordmark
│   ├── navbar.tsx                  # Sticky responsive nav with mobile menu
│   ├── section.tsx                 # Animated section wrapper
│   └── service-card.tsx
├── lib/
│   ├── contact-schema.ts           # Zod schema (shared client + server)
│   ├── site-config.ts              # Site metadata + services data
│   └── utils.ts                    # cn() helper
├── public/
│   ├── logo-mark.svg               # Standalone logo mark
│   └── logo-styleguide.png         # Original style guide reference
├── .env.example
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts              # Brand colors live here
└── tsconfig.json
```

---

## Brand tokens

The two brand colors are defined in `tailwind.config.ts`:

- **Navy** — `#0A2540` → use as `bg-navy`, `text-navy`
- **Sage** — `#5F7A56` → use as `bg-sage`, `text-sage`

Both have full color scales (`navy-50` through `navy-950`, `sage-50` through `sage-700`) for hover states, backgrounds, and accents. Off-white background is `bg-offwhite` (`#F8F9FA`).

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. Visit https://vercel.com/new and import the repo.
3. Add your environment variables in the Vercel dashboard (`RESEND_API_KEY` etc.).
4. Deploy. The default settings work out of the box.

---

## Customization checklist

Before launch, update these:

- [ ] `lib/site-config.ts` — phone, email, address
- [ ] Replace Unsplash placeholder images with real practice photos
- [ ] Replace placeholder testimonials in `app/page.tsx`
- [ ] Update the case-study stats in `app/corporate/page.tsx` with real numbers
- [ ] Verify your Resend sending domain
- [ ] Add `app/privacy/page.tsx` and `app/terms/page.tsx` (footer links exist)
- [ ] Replace the OpenStreetMap iframe in `app/contact/page.tsx` with the real address
- [ ] Add a real `og-image.png` to `/public` for social previews

---

## Tech notes for hobbyists

A few things worth knowing as you poke around:

- **The contact form uses `fetch('/api/contact')`** rather than a Server Action so the form state stays simple and the API route is independently testable. Both approaches are valid in Next 15 — pick what you're comfortable with.
- **All the heavy interactive components are marked `"use client"`** at the top. Server components (the page files) handle layout and data; client components handle interactivity.
- **The Logo is inline SVG**, not an image file. This keeps it crisp at any size and lets you recolor it with CSS variables.
- **Animations use Framer Motion's `whileInView`** with `viewport={{ once: true }}` so things fade in on scroll without re-triggering. Cheap and feels nice.

Have fun.
# upward_physio5
