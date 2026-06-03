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

Production is back on GitHub Pages. The canonical Pages custom domain is `www.dreamcatcher.ai`; the apex `dreamcatcher.ai` is configured at DNS level for GitHub Pages and redirects to `www`.

Current web DNS at Porkbun:

- `A @` -> GitHub Pages IPv4 records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `AAAA @` -> GitHub Pages IPv6 records `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
- `CNAME www` -> `dreamcatcher-tech.github.io`

DNS snapshots and rollback notes live under `dns-backups/`. Commit a pre-change backup before any DNS write and a verified post-change backup afterwards.

Fly/Caddy fallback hosting has been removed; production is GitHub Pages only.

## Content direction

The page positions Dreamcatcher around dedicated, portable AI agents that work through Telegram, WhatsApp, email and phone, with human oversight and privacy-first architecture. Channel links are labelled honestly as pilot/coming soon until they are implemented.
