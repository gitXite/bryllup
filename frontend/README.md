# 💍 Bryllup — M & D

Bryllupsside bygget med **React 19**, **Vite 6**, **Tailwind CSS v4** og **Motion**.

## Kom i gang

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # → dist/
npm run preview  # forhåndsvis build lokalt
```

## Stack

| Lag        | Teknologi                              |
|------------|----------------------------------------|
| UI         | React 19                               |
| Bundler    | Vite 6                                 |
| Styling    | Tailwind CSS v4 via `@tailwindcss/vite`|
| Tokens     | `@theme` i `src/styles/global.css`     |
| Animasjoner| Motion (`motion/react`)                |
| Fonter     | Cormorant Garamond + Jost              |

## Tilpass innholdet

Rediger **`src/config.ts`** — den eneste filen du trenger å endre.

## Prosjektstruktur

```
src/
├── App.tsx                    ← rotkompontent, setter det hele sammen
├── main.tsx                   ← Vite entry point
├── config.ts                  ← all bryllupsdata her
├── types/index.ts             ← delte TypeScript-typer
├── styles/global.css          ← @import tailwindcss + @theme tokens
└── components/
    ├── IntroOverlay.tsx       ← AnimatePresence intro-sekvens
    ├── Nav.tsx                ← sticky nav + mobil-meny
    ├── Hero.tsx               ← staggered Framer entré
    ├── Countdown.tsx          ← AnimatePresence siffer-flip
    ├── Reveal.tsx             ← gjenbrukbar whileInView wrapper
    └── RSVPForm.tsx           ← kontrollert skjema med validering
```

## RSVP-backend

Finn kommentaren i `src/components/RSVPForm.tsx`:

```ts
// 🔌 Replace with your API endpoint:
// await fetch("/api/rsvp", { method: "POST", ... });
```

## Deploy

```bash
npm run build   # genererer dist/
```

Last opp `dist/` til **Vercel**, **Netlify**, **Cloudflare Pages** o.l.
