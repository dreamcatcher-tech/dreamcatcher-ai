# dreamcatcher.ai DNS post-Fly HTTPS-fix snapshot

- Generated: `2026-06-03T09:43:51Z`
- Full JSON backup: `dreamcatcher.ai-post-fly-https-fix-20260603T094351Z.json`
- Production host: Fly app `dreamcatcher-ai-home`, Caddy-managed Let's Encrypt certificates.

## Current web records

- id `509508539` `CNAME` `_aa01f2bce6378add2eea0961c3087f26.dreamcatcher.ai` -> `_0f7ad858d363534bb43f884c41c8affd.duyqrilejt.acm-validations.aws` TTL `600`
- id `552626148` `CNAME` `_acme-challenge.dreamcatcher.ai` -> `dreamcatcher.ai.pq9jpml.flydns.net` TTL `600`
- id `552626154` `CNAME` `_acme-challenge.www.dreamcatcher.ai` -> `www.dreamcatcher.ai.pq9jpml.flydns.net` TTL `600`
- id `552626164` `TXT` `_fly-ownership.dreamcatcher.ai` -> `app-pq9jpml` TTL `600`
- id `552626170` `TXT` `_fly-ownership.www.dreamcatcher.ai` -> `app-pq9jpml` TTL `600`
- id `509508544` `CNAME` `accounts.dreamcatcher.ai` -> `accounts.clerk.services` TTL `600`
- id `550364828` `CNAME` `agents.dreamcatcher.ai` -> `dreamcatcher-agents.github.io.` TTL `600`
- id `509508545` `CNAME` `clerk.dreamcatcher.ai` -> `frontend-api.clerk.services` TTL `600`
- id `509508541` `CNAME` `clk._domainkey.dreamcatcher.ai` -> `dkim1.70plyqi6o7qr.clerk.services` TTL `600`
- id `509508542` `CNAME` `clk2._domainkey.dreamcatcher.ai` -> `dkim2.70plyqi6o7qr.clerk.services` TTL `600`
- id `509508547` `CNAME` `clkmail.dreamcatcher.ai` -> `mail.70plyqi6o7qr.clerk.services` TTL `600`
- id `552625854` `A` `dreamcatcher.ai` -> `66.241.124.100` TTL `600`
- id `552625866` `AAAA` `dreamcatcher.ai` -> `2a09:8280:1::11e:d1f0:0` TTL `600`
- id `509508533` `MX` `dreamcatcher.ai` -> `alt1.aspmx.l.google.com` TTL `3600`
- id `509508534` `MX` `dreamcatcher.ai` -> `alt2.aspmx.l.google.com` TTL `3600`
- id `509508529` `MX` `dreamcatcher.ai` -> `alt3.aspmx.l.google.com` TTL `3600`
- id `509508530` `MX` `dreamcatcher.ai` -> `alt4.aspmx.l.google.com` TTL `3600`
- id `509508525` `MX` `dreamcatcher.ai` -> `aspmx.l.google.com` TTL `3600`
- id `509507809` `NS` `dreamcatcher.ai` -> `curitiba.porkbun.com` TTL `86400`
- id `509507808` `NS` `dreamcatcher.ai` -> `fortaleza.porkbun.com` TTL `86400`
- id `509507806` `NS` `dreamcatcher.ai` -> `maceio.porkbun.com` TTL `86400`
- id `509507807` `NS` `dreamcatcher.ai` -> `salvador.porkbun.com` TTL `86400`
- id `509508538` `TXT` `dreamcatcher.ai` -> `google-site-verification=FSXGlm03UYU-1wmnpAJygU2X74NaL2_7DNOQup3rIjs` TTL `1800`
- id `552625869` `A` `www.dreamcatcher.ai` -> `66.241.124.100` TTL `600`
- id `552625873` `AAAA` `www.dreamcatcher.ai` -> `2a09:8280:1::11e:d1f0:0` TTL `600`

## Verification

- `provider_apex_a_matches_fly`: `True`
- `provider_apex_aaaa_matches_fly`: `True`
- `provider_www_a_matches_fly`: `True`
- `provider_www_aaaa_matches_fly`: `True`
- `provider_no_github_pages_web_records`: `True`
- `public_cloudflare_apex_a_matches_fly`: `True`
- `public_cloudflare_apex_aaaa_matches_fly`: `True`
- `public_cloudflare_www_a_matches_fly`: `True`
- `public_cloudflare_www_aaaa_matches_fly`: `True`
- `public_google_apex_a_matches_fly`: `True`
- `public_google_apex_aaaa_matches_fly`: `True`
- `public_google_www_a_matches_fly`: `True`
- `public_google_www_aaaa_matches_fly`: `True`

## HTTPS evidence

- `dreamcatcher.ai` curl exit: `0`
- `dreamcatcher.ai` server header Caddy: `True`
- `dreamcatcher.ai` content `hero`: `True`
- `dreamcatcher.ai` content `channels`: `True`
- `dreamcatcher.ai` content `human_judgment`: `True`
- `dreamcatcher.ai` certificate notAfter: `Sep  1 08:43:35 2026 GMT`
- `www.dreamcatcher.ai` curl exit: `0`
- `www.dreamcatcher.ai` server header Caddy: `True`
- `www.dreamcatcher.ai` content `hero`: `True`
- `www.dreamcatcher.ai` content `channels`: `True`
- `www.dreamcatcher.ai` content `human_judgment`: `True`
- `www.dreamcatcher.ai` certificate notAfter: `Sep  1 08:43:35 2026 GMT`

Mail and verification records were preserved.
