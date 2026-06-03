# dreamcatcher.ai DNS post-change backup: returned to GitHub Pages

- Generated: 20260603T105915Z
- Provider: Porkbun API + public DNS-over-HTTPS snapshots
- Full JSON backup: `dreamcatcher.ai-post-github-pages-return-20260603T105915Z.json`
- GitHub Pages custom domain: `www.dreamcatcher.ai`
- GitHub Pages build type/status: `legacy` / `built`
- GitHub Pages HTTPS certificate state: `new` — This domain was recently added. The certificate request process will begin shortly.

## Web records now

- `A` `@` -> `185.199.111.153` TTL `600` id `552635523`
- `A` `@` -> `185.199.110.153` TTL `600` id `552635508`
- `A` `@` -> `185.199.108.153` TTL `600` id `552635494`
- `A` `@` -> `185.199.109.153` TTL `600` id `552635503`
- `AAAA` `@` -> `2606:50c0:8003::153` TTL `600` id `552635533`
- `AAAA` `@` -> `2606:50c0:8002::153` TTL `600` id `552635530`
- `AAAA` `@` -> `2606:50c0:8001::153` TTL `600` id `552635529`
- `AAAA` `@` -> `2606:50c0:8000::153` TTL `600` id `552635526`
- `CNAME` `www` -> `dreamcatcher-tech.github.io` TTL `600` id `552635540`

## Verification summary

- Apex A records match GitHub Pages: `True`
- Apex AAAA records match GitHub Pages: `True`
- `www` CNAME points to `dreamcatcher-tech.github.io`: `True`
- GitHub Pages HTTP serves the homepage at apex/www: `True`
- Browser-valid HTTPS now: apex `False`, www `False`

## Pending non-DNS item

GitHub Pages has accepted the `www.dreamcatcher.ai` custom domain and moved the certificate state from the prior `bad_authz` failure to `new`. Do not enable HTTPS enforcement until GitHub reports the certificate as `approved` and `curl https://www.dreamcatcher.ai/` verifies without `-k`.

## Preserved mail / verification records sampled

- `MX` `agent` -> `inbound-smtp.us-east-1.amazonaws.com` TTL `600` id `550597257`
- `MX` `mail.agent` -> `feedback-smtp.us-east-1.amazonses.com` TTL `600` id `550597338`
- `MX` `@` -> `aspmx.l.google.com` TTL `3600` id `509508525`
- `MX` `@` -> `alt4.aspmx.l.google.com` TTL `3600` id `509508530`
- `MX` `@` -> `alt3.aspmx.l.google.com` TTL `3600` id `509508529`
- `MX` `@` -> `alt2.aspmx.l.google.com` TTL `3600` id `509508534`
- `MX` `@` -> `alt1.aspmx.l.google.com` TTL `3600` id `509508533`
- `TXT` `@` -> `google-site-verification=FSXGlm03UYU-1wmnpAJygU2X74NaL2_7DNOQup3rIjs` TTL `1800` id `509508538`
- `TXT` `mail.agent` -> `v=spf1 include:amazonses.com -all` TTL `600` id `550597380`
- `TXT` `_dmarc.agent` -> `v=DMARC1; p=reject; rua=mailto:dmarc@agent.dreamcatcher.ai` TTL `600` id `550597422`
