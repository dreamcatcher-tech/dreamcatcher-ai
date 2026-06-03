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

Production `dreamcatcher.ai` is served by the Fly app `dreamcatcher-ai-home`. The container runs Caddy on raw TCP ports 80/443 so Caddy can manage Let's Encrypt certificates for both `dreamcatcher.ai` and `www.dreamcatcher.ai`.

```bash
npm run build
fly deploy --app dreamcatcher-ai-home --remote-only --ha=false
```

DNS is managed at Porkbun. Current web records point the apex and `www` to the Fly app's shared IPv4 and dedicated IPv6 addresses. DNS snapshots and rollback notes live under `dns-backups/`.

GitHub Pages and Vercel static config are retained as non-production/static fallback paths; `/chat` redirects to `/` because the former web-chat surface has been retired.

## Content direction

The page positions Dreamcatcher around dedicated, portable AI agents that work through Telegram, WhatsApp, email and phone, with human oversight and privacy-first architecture. Channel links are labelled honestly as pilot/coming soon until they are implemented.
