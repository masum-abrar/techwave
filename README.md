# TechWave Cellular — Website

Premium redesign of the TechWave Cellular site, built with **Next.js 15 (App Router) + TypeScript**. No UI framework — one hand-written stylesheet (`app/globals.css`).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

Deploy: push to GitHub and import into **Vercel** (zero config), or any Node host.

## Edit business info

Everything — name, address, hours, reviews, photos, services, FAQs — lives in **`lib/site.ts`**.

WhatsApp/phone (+971 54 433 8737) is set in `lib/site.ts`. To change it or add an email:

```ts
phone: "+971 50 000 0000",
whatsapp: "971500000000",   // digits only
email: "sales@yourdomain.ae",
```

Once set, Call / WhatsApp / Email cards appear automatically, and the enquiry form sends straight to WhatsApp (or email).

## Pages

- `/` Home — hero, at-a-glance, services, why us, photo gallery (lightbox), Google reviews, live open/closed hours (Dubai time), map, CTA
- `/about` — story, values, gallery, hours, reviews
- `/contact` — address, enquiry form, hours, full-width map, FAQ
- `/privacy-policy`

## Brand

- Theme: "backlit sign" — black wall, electric-blue **TECH**, white **WAVE**, soft blue glow (matches the shop sign)
- Logo: `components/Logo.tsx` (wordmark), favicon `app/icon.svg` (TW mark)
- Intro animation: `components/Intro.tsx` (timing lives in `app/globals.css`, "Intro" sections)
- Colours: black `#05070C`, electric blue `#1F5BFF` / `#3D82FF`, white
- Fonts (self-hosted via `@fontsource`): Orbitron (display), Michroma (wide labels), Manrope (body)

Store photos live in `public/images/` (taken from the store video). Extra photos from the Google profile are listed in `lib/site.ts`; any that fail to load hide themselves automatically.

## Video

The store video is `public/video/store.mp4` (poster: `store-poster.jpg`). Replace the file with the same name to swap it.
It plays muted on loop inside the phone frame (hero, "See our stock" and About page); visitors tap for sound.
