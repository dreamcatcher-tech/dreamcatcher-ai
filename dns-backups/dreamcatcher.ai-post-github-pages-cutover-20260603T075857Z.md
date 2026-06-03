# dreamcatcher.ai DNS post-cutover snapshot

- Generated: `2026-06-03T07:58:57Z`
- Source: Porkbun API plus Cloudflare/Google public DNS after GitHub Pages cutover
- Full JSON backup: `dreamcatcher.ai-post-github-pages-cutover-20260603T075857Z.json`
- Pre-cutover backup commit: `f507201`

## Intended web records now present

- `A @ 185.199.108.153`
- `A @ 185.199.109.153`
- `A @ 185.199.110.153`
- `A @ 185.199.111.153`
- `AAAA @ 2606:50c0:8000::153`
- `AAAA @ 2606:50c0:8001::153`
- `AAAA @ 2606:50c0:8002::153`
- `AAAA @ 2606:50c0:8003::153`
- `CNAME www dreamcatcher-tech.github.io`

## Provider web records observed

- id `552603333` `A` `dreamcatcher.ai` -> `185.199.108.153` TTL `600`
- id `552603334` `A` `dreamcatcher.ai` -> `185.199.109.153` TTL `600`
- id `552603345` `A` `dreamcatcher.ai` -> `185.199.110.153` TTL `600`
- id `552603346` `A` `dreamcatcher.ai` -> `185.199.111.153` TTL `600`
- id `552603355` `AAAA` `dreamcatcher.ai` -> `2606:50c0:8000::153` TTL `600`
- id `552603358` `AAAA` `dreamcatcher.ai` -> `2606:50c0:8001::153` TTL `600`
- id `552603362` `AAAA` `dreamcatcher.ai` -> `2606:50c0:8002::153` TTL `600`
- id `552603370` `AAAA` `dreamcatcher.ai` -> `2606:50c0:8003::153` TTL `600`
- id `552603372` `CNAME` `www.dreamcatcher.ai` -> `dreamcatcher-tech.github.io` TTL `600`

## Verification

- `provider_apex_a_matches_github_pages`: `True`
- `provider_apex_aaaa_matches_github_pages`: `True`
- `provider_www_cname_matches_owner_pages_host`: `True`
- `provider_no_old_vercel_apex_a`: `True`
- `public_cloudflare_apex_a_matches_github_pages`: `True`
- `public_google_apex_a_matches_github_pages`: `True`
- `public_cloudflare_apex_aaaa_matches_github_pages`: `True`
- `public_google_apex_aaaa_matches_github_pages`: `True`
- `public_cloudflare_www_cname_matches_owner_pages_host`: `True`
- `public_google_www_cname_matches_owner_pages_host`: `True`

## HTTP evidence

- URL: `http://dreamcatcher.ai/`
- Server header contains GitHub: `True`
- Content `hero`: `True`
- Content `channels`: `True`
- Content `human_judgment`: `True`

## GitHub Pages status

- Custom domain: `dreamcatcher.ai`
- HTML URL: `http://dreamcatcher.ai/`
- HTTPS enforced: `False`
- HTTPS certificate: `None`

Mail and verification records were not intentionally changed.
