# Dreamcatcher.ai

Static public homepage for [dreamcatcher.ai](https://dreamcatcher.ai/).

The site intentionally uses plain HTML, CSS, SVG assets, and tiny Node check/build scripts. There is no Next.js app, no browser chat UI, and no authentication gate.

## Local checks

```bash
npm run lint
npm run build
python3 -m http.server 3100 --directory dist
```

Then open <http://127.0.0.1:3100/>.

## Deployment

Vercel is configured as a static project via `vercel.json`:

- `framework: null`
- `buildCommand: node scripts/build.mjs`
- `outputDirectory: dist`
- `/chat` redirects to `/` because the former web-chat surface has been retired.

## Content direction

The page positions Dreamcatcher around dedicated, portable AI agents that work through Telegram, WhatsApp, email and phone, with human oversight and privacy-first architecture. Channel links are labelled honestly as pilot/coming soon until they are implemented.
