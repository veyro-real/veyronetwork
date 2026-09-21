# Veyro Network

The Next.js content hub for **veyronetwork.xyz**. It explains agentic payments through the simple Veyro experience: search X, find a meme coin, set a spending limit, and understand the result.

The project contains 21 editorial guides, category navigation, related-article links, canonical metadata, Open Graph descriptions, JSON-LD, a sitemap, robots support, and persistent links to [veyro.casa](https://veyro.casa) and [tryveyro.casa](https://tryveyro.casa).

## Domain map

- `veyro.casa` — the main Veyro landing page.
- `tryveyro.casa` — the live Veyro app and the demo link used by this content hub.
- `veyro.wtf` — an additional custom domain for the same live `veyro-live` Railway service. It is not linked from the main landing page or used as the content hub's canonical demo URL.

## Run locally

```bash
npm ci
npm run dev
```

To verify the content and production output:

```bash
npm run check:seo
npm run build
```

The site is ready to run from Railway's repository root. It does not deploy or push anything by itself.
