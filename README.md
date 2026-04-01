# MakOS — Express.js Portfolio

Exact replica of [outstanding-ways-490618.framer.app](https://outstanding-ways-490618.framer.app/) built with Express.js + Handlebars.

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects the `vercel.json` config
5. Click **Deploy** ✓

## Pages
- `/` — Home with sidebar, marquee, carousel & works grid
- `/works/:slug` — Individual project detail page
- `404` — Custom not found page

## Customisation
- **Profile photo / name** → edit `views/home.hbs`
- **Projects** → edit the `projects` array in `index.js`
- **Colours / fonts** → edit `public/css/style.css`
