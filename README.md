# Dreamcatcher.ai

Static public homepage for [dreamcatcher.ai](https://dreamcatcher.ai/).

The site intentionally uses plain HTML, CSS, SVG/PNG assets, and tiny Node check/build scripts. There is no Next.js app, no browser chat UI, and no authentication gate.

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

The page now positions Dreamcatcher around **durable knowledge cores** rather than generic AI agents:

- **Intentional knowledge concentration:** people leave knowledge trails anyway; Dreamcatcher turns scattered school/work/family breadcrumbs into owned, protected, useful knowledge.
- **Enduring knowledge core:** not a bigger context window — a long-lived place where work, records, history, values, judgment and distilled wisdom accumulate.
- **Personal software:** records stay in the durable core; software, models and services come to them. Servers become plumbing, not prisons.
- **Semantic checkpoint:** approvals, policies, redaction, denial and escalation guard the boundary.
- **Confidential enclave:** precious records can sit in a smaller inner zone that returns redacted answers or refusals rather than raw material.
- **Collective wisdom of the cores:** family, school and team cores can interact through permissioned, auditable wisdom streams.

Main visual asset: `assets/durable-core-architecture.png`, generated with the configured OpenAI image generator backend.


## Slide deck publishing

Public Dreamcatcher slide decks live under `slides/` in this repository. The private Obsidian vault remains the canonical drafting/source-capture area; do not submodule or expose the vault. Copy only public-safe deck Markdown, components, images, and metadata into this repo, update `slides/index.html` with a card/preview/blurb/date/topic, then run `npm run lint` and `npm run build` before committing.
