# TS Calisthenics Academy — Landing Page

Marketing site built for **TS Calisthenics Academy**, a calisthenics and street-workout academy in Argentina. *Client project.*

🔗 **Live:** [ts-calisthenics.vercel.app](https://ts-calisthenics.vercel.app)

## Goal

Turn visitors into first-class bookings. Every section moves the visitor toward one action — booking a first class or messaging the academy on WhatsApp — while building trust through real coaches, real photos and community challenges.

## Features

- **Hero, story and academy sections** with a raw, high-contrast dark visual identity
- **Programs & pricing** — three plans, with checkout links for paid plans
- **Coaches** profiles, **class schedule**, **community challenges** and **testimonials**
- **Gallery** with photos and video, parallax scroll sections
- **Floating WhatsApp button** for direct contact
- Mobile-first, responsive layout; respects `prefers-reduced-motion`; WCAG AA contrast targets

## Tech stack

- [React 18](https://react.dev) + TypeScript
- [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animations
- Radix UI primitives, React Icons
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build
npm run preview   # serve the production build
```

## Structure

```
src/
├── components/   # one component per page section (Hero, Programas, Coaches, Horarios...)
│   └── ui/       # reusable UI pieces (cards, carousel, parallax, avatar)
├── lib/          # utilities (cn)
└── App.tsx       # section order
assets/           # client photos, logo and video
```

---

Photos, logo and branding belong to TS Calisthenics Academy.
