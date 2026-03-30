# Gagan Chandra — Portfolio

Personal portfolio built with [Astro](https://astro.build) using the [astro-zen](https://github.com/immois/astro-zen) template.

## Requirements
- Node.js 18+
- npm (comes with Node.js)

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321 in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to https://vercel.com → New Project → Import your repo
3. Vercel auto-detects Astro — just click Deploy

## Deploy to Netlify

1. Push to GitHub
2. Go to https://netlify.com → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`

## Customise

All your personal data lives in one file:
`src/config/index.ts`

Edit name, bio, projects, experience, links — everything updates automatically.

## ⚠️ Replace placeholder avatar

Replace these files with a real photo of yourself:
- `public/gagan-big.jpg` (About section)
- `public/gagan-small.jpg` (Header logo)
