# How to Start Building an AI SaaS for Enterprise with AstraFlow

Slides for the online workshop **"How to Start Building an AI SaaS for Enterprise with AstraFlow"** by Aldi x UCLOUD Global.

- Event (Luma): https://luma.com/c0socj8g
- Built with [Slidev](https://sli.dev)

## Run locally

```bash
npm install && npx slidev
```

Then open http://localhost:3030.

## Build

```bash
npx slidev build
```

The static site is written to `dist/`. `vite.config.ts` disables CSS minification on purpose (works around a lightningcss error with Slidev 53 + UnoCSS).

Optional exports (PDF/PNG + contact sheet): `./scripts-export.sh`.

## Deploy

`netlify.toml` builds with `npx slidev build`, publishes `dist`, and rewrites `/*` to `/index.html` so slide routes like `/5` work.

## Note

The QR codes in `public/qr/` and the clone link shown in the slides are placeholders. Replace them with the real starter repo before the workshop.
