# dreamcatcher.ai DNS pre-Fly HTTPS-fix snapshot

- Generated: `2026-06-03T09:21:24Z`
- Source: Porkbun API plus Cloudflare/Google public DNS
- Reason: GitHub Pages certificate is stuck in `bad_authz`, so `https://dreamcatcher.ai/` fails with a GitHub wildcard certificate mismatch.
- Full JSON backup: `dreamcatcher.ai-before-fly-https-fix-20260603T092124Z.json`

## Current web records before this DNS change

- id `552603333` `A` `dreamcatcher.ai` -> `185.199.108.153` TTL `600`
- id `552603334` `A` `dreamcatcher.ai` -> `185.199.109.153` TTL `600`
- id `552603345` `A` `dreamcatcher.ai` -> `185.199.110.153` TTL `600`
- id `552603346` `A` `dreamcatcher.ai` -> `185.199.111.153` TTL `600`
- id `552603355` `AAAA` `dreamcatcher.ai` -> `2606:50c0:8000::153` TTL `600`
- id `552603358` `AAAA` `dreamcatcher.ai` -> `2606:50c0:8001::153` TTL `600`
- id `552603362` `AAAA` `dreamcatcher.ai` -> `2606:50c0:8002::153` TTL `600`
- id `552603370` `AAAA` `dreamcatcher.ai` -> `2606:50c0:8003::153` TTL `600`
- id `552603372` `CNAME` `www.dreamcatcher.ai` -> `dreamcatcher-tech.github.io` TTL `600`

## Restore target for previous GitHub Pages state

- `A @ 185.199.108.153` TTL `600`
- `A @ 185.199.109.153` TTL `600`
- `A @ 185.199.110.153` TTL `600`
- `A @ 185.199.111.153` TTL `600`
- `AAAA @ 2606:50c0:8000::153` TTL `600`
- `AAAA @ 2606:50c0:8001::153` TTL `600`
- `AAAA @ 2606:50c0:8002::153` TTL `600`
- `AAAA @ 2606:50c0:8003::153` TTL `600`
- `CNAME www dreamcatcher-tech.github.io` TTL `600`

Do not delete Google MX or Google site-verification TXT records during rollback.
