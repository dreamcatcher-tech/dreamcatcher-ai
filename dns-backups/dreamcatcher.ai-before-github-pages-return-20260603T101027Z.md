# dreamcatcher.ai DNS pre-change backup: return to GitHub Pages

- Generated: 20260603T101027Z
- Provider: Porkbun API + public DNS-over-HTTPS snapshots
- Full JSON backup: `dreamcatcher.ai-before-github-pages-return-20260603T101027Z.json`
- Intended change: move production web DNS from Fly/Caddy back to GitHub Pages.

## Current records / rollback target if GitHub Pages fails

- `A` `dreamcatcher.ai` -> `66.241.124.100` TTL `600` id `552625854`
- `A` `www.dreamcatcher.ai` -> `66.241.124.100` TTL `600` id `552625869`
- `AAAA` `dreamcatcher.ai` -> `2a09:8280:1::11e:d1f0:0` TTL `600` id `552625866`
- `AAAA` `www.dreamcatcher.ai` -> `2a09:8280:1::11e:d1f0:0` TTL `600` id `552625873`
- `CNAME` `_acme-challenge.dreamcatcher.ai` -> `dreamcatcher.ai.pq9jpml.flydns.net` TTL `600` id `552626148`
- `MX` `dreamcatcher.ai` -> `alt1.aspmx.l.google.com` TTL `3600` id `509508533`
- `MX` `mail.agent.dreamcatcher.ai` -> `feedback-smtp.us-east-1.amazonses.com` TTL `600` id `550597338`
- `MX` `dreamcatcher.ai` -> `aspmx.l.google.com` TTL `3600` id `509508525`
- `MX` `dreamcatcher.ai` -> `alt4.aspmx.l.google.com` TTL `3600` id `509508530`
- `MX` `dreamcatcher.ai` -> `alt3.aspmx.l.google.com` TTL `3600` id `509508529`
- `MX` `dreamcatcher.ai` -> `alt2.aspmx.l.google.com` TTL `3600` id `509508534`
- `MX` `agent.dreamcatcher.ai` -> `inbound-smtp.us-east-1.amazonaws.com` TTL `600` id `550597257`
- `NS` `dreamcatcher.ai` -> `fortaleza.porkbun.com` TTL `86400` id `509507808`
- `NS` `dreamcatcher.ai` -> `salvador.porkbun.com` TTL `86400` id `509507807`
- `NS` `dreamcatcher.ai` -> `maceio.porkbun.com` TTL `86400` id `509507806`
- `NS` `dreamcatcher.ai` -> `curitiba.porkbun.com` TTL `86400` id `509507809`
- `TXT` `dreamcatcher.ai` -> `google-site-verification=FSXGlm03UYU-1wmnpAJygU2X74NaL2_7DNOQup3rIjs` TTL `1800` id `509508538`
- `TXT` `mail.agent.dreamcatcher.ai` -> `v=spf1 include:amazonses.com -all` TTL `600` id `550597380`
- `TXT` `agentmail._domainkey.agent.dreamcatcher.ai` -> `v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnqQLy1j53lF67CVOSuy4fn4mrKkax2t8bndZxIF4O4BeC/tk0f19OkOTyqJP8ydhetP6NbOUJJ6PNMHXiaKotuTgK73X6BTHUjY0xbJwydnDXB7aewfGFE3PNuwmPhniYnAjAAbzxBvIqI5dW4I51xebkGWHFtEH31LqpM4M/K1Qz2RxUbVEOogfgTvFDfgJoNxI7uVkArqxgoyi2b0G4YMqsuZcZETLhUo867qYUyaBrwp/xF7gHogybvIfNGkJlpLtyB6IFXTiwOHNiMLSlWLV3ZV+dNBg1+1My8yM5ZhOkSx5hkDSxroZqq85NAA0H7qEhZmChoJBxYjFj/IuOQIDAQAB` TTL `600` id `550597157`
- `TXT` `_dmarc.agent.dreamcatcher.ai` -> `v=DMARC1; p=reject; rua=mailto:dmarc@agent.dreamcatcher.ai` TTL `600` id `550597422`
- `TXT` `_fly-ownership.dreamcatcher.ai` -> `app-pq9jpml` TTL `600` id `552626164`
- `TXT` `_fly-ownership.www.dreamcatcher.ai` -> `app-pq9jpml` TTL `600` id `552626170`
- `TXT` `_github-challenge-dreamcatcher-ai.dreamcatcher.ai` -> `d1b1a0f05a` TTL `1800` id `509508543`
- `TXT` `_github-pages-challenge-dreamcatcher-agents.agents.dreamcatcher.ai` -> `1f7e6295f1b976aaabe937162d6304` TTL `600` id `550385762`

To roll back to the current Fly/Caddy state, restore the web records shown above from the JSON snapshot, especially:

- `A` `@` -> `66.241.124.100`
- `AAAA` `@` -> `2a09:8280:1::11e:d1f0:0`
- `A` `www` -> `66.241.124.100`
- `AAAA` `www` -> `2a09:8280:1::11e:d1f0:0`

## Intended GitHub Pages target

- `A` `@` -> `185.199.108.153`
- `A` `@` -> `185.199.109.153`
- `A` `@` -> `185.199.110.153`
- `A` `@` -> `185.199.111.153`
- `AAAA` `@` -> `2606:50c0:8000::153`
- `AAAA` `@` -> `2606:50c0:8001::153`
- `AAAA` `@` -> `2606:50c0:8002::153`
- `AAAA` `@` -> `2606:50c0:8003::153`
- `CNAME` `www` -> `dreamcatcher-tech.github.io`

Remove Fly-only helper records for `_acme-challenge` / `_fly-ownership` once GitHub Pages is the target.

Do **not** delete unrelated mail or verification records during this web-hosting change.
