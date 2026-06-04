# dreamcatcher.ai DNS pre-change backup: mail authentication SPF/DMARC

- Generated: 20260604T045214Z
- Provider: Porkbun API + public DNS-over-HTTPS snapshots
- Full JSON backup: `dreamcatcher.ai-before-mail-auth-spf-dmarc-20260604T045214Z.json`
- Intended change: add Google Workspace SPF and non-enforcing DMARC for `dreamcatcher.ai` so controlled Gmail-originated mail is no longer labeled unauthenticated by AgentMail.

## Existing relevant mail-auth state

- No existing apex SPF TXT record detected in Porkbun provider state.
- No existing `_dmarc.dreamcatcher.ai` DMARC TXT record detected in Porkbun provider state.

## Records to add/update

- `TXT` `dreamcatcher.ai` -> `v=spf1 include:_spf.google.com ~all` TTL `600`
- `TXT` `_dmarc.dreamcatcher.ai` -> `v=DMARC1; p=none; rua=mailto:dmarc@dreamcatcher.ai` TTL `600`

## Rollback target

- Delete only the SPF TXT record `dreamcatcher.ai` with content `v=spf1 include:_spf.google.com ~all`.
- Delete only the DMARC TXT record `_dmarc.dreamcatcher.ai` with content `v=DMARC1; p=none; rua=mailto:dmarc@dreamcatcher.ai`.
- Do **not** delete unrelated MX, DKIM, Google/GitHub verification, AgentMail, Fly, NS, or web records.

## Full provider record inventory at backup time

- `A` `dreamcatcher.ai` -> `185.199.108.153` TTL `600` id `552635494`
- `A` `dreamcatcher.ai` -> `185.199.109.153` TTL `600` id `552635503`
- `A` `dreamcatcher.ai` -> `185.199.110.153` TTL `600` id `552635508`
- `A` `dreamcatcher.ai` -> `185.199.111.153` TTL `600` id `552635523`
- `AAAA` `dreamcatcher.ai` -> `2606:50c0:8000::153` TTL `600` id `552635526`
- `AAAA` `dreamcatcher.ai` -> `2606:50c0:8001::153` TTL `600` id `552635529`
- `AAAA` `dreamcatcher.ai` -> `2606:50c0:8002::153` TTL `600` id `552635530`
- `AAAA` `dreamcatcher.ai` -> `2606:50c0:8003::153` TTL `600` id `552635533`
- `CNAME` `_aa01f2bce6378add2eea0961c3087f26.dreamcatcher.ai` -> `_0f7ad858d363534bb43f884c41c8affd.duyqrilejt.acm-validations.aws` TTL `600` id `509508539`
- `CNAME` `accounts.dreamcatcher.ai` -> `accounts.clerk.services` TTL `600` id `509508544`
- `CNAME` `agents.dreamcatcher.ai` -> `dreamcatcher-agents.github.io.` TTL `600` id `550364828`
- `CNAME` `clerk.dreamcatcher.ai` -> `frontend-api.clerk.services` TTL `600` id `509508545`
- `CNAME` `clk._domainkey.dreamcatcher.ai` -> `dkim1.70plyqi6o7qr.clerk.services` TTL `600` id `509508541`
- `CNAME` `clk2._domainkey.dreamcatcher.ai` -> `dkim2.70plyqi6o7qr.clerk.services` TTL `600` id `509508542`
- `CNAME` `clkmail.dreamcatcher.ai` -> `mail.70plyqi6o7qr.clerk.services` TTL `600` id `509508547`
- `CNAME` `www.dreamcatcher.ai` -> `dreamcatcher-tech.github.io` TTL `600` id `552635540`
- `MX` `agent.dreamcatcher.ai` -> `inbound-smtp.us-east-1.amazonaws.com` TTL `600` id `550597257`
- `MX` `dreamcatcher.ai` -> `alt1.aspmx.l.google.com` TTL `3600` id `509508533`
- `MX` `dreamcatcher.ai` -> `alt2.aspmx.l.google.com` TTL `3600` id `509508534`
- `MX` `dreamcatcher.ai` -> `alt3.aspmx.l.google.com` TTL `3600` id `509508529`
- `MX` `dreamcatcher.ai` -> `alt4.aspmx.l.google.com` TTL `3600` id `509508530`
- `MX` `dreamcatcher.ai` -> `aspmx.l.google.com` TTL `3600` id `509508525`
- `MX` `mail.agent.dreamcatcher.ai` -> `feedback-smtp.us-east-1.amazonses.com` TTL `600` id `550597338`
- `NS` `dreamcatcher.ai` -> `curitiba.porkbun.com` TTL `86400` id `509507809`
- `NS` `dreamcatcher.ai` -> `fortaleza.porkbun.com` TTL `86400` id `509507808`
- `NS` `dreamcatcher.ai` -> `maceio.porkbun.com` TTL `86400` id `509507806`
- `NS` `dreamcatcher.ai` -> `salvador.porkbun.com` TTL `86400` id `509507807`
- `TXT` `_dmarc.agent.dreamcatcher.ai` -> `v=DMARC1; p=reject; rua=mailto:dmarc@agent.dreamcatcher.ai` TTL `600` id `550597422`
- `TXT` `_github-challenge-dreamcatcher-ai.dreamcatcher.ai` -> `d1b1a0f05a` TTL `1800` id `509508543`
- `TXT` `_github-pages-challenge-dreamcatcher-agents.agents.dreamcatcher.ai` -> `1f7e6295f1b976aaabe937162d6304` TTL `600` id `550385762`
- `TXT` `agentmail._domainkey.agent.dreamcatcher.ai` -> `v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnqQLy1j53lF67CVOSuy4fn4mrKkax2t8bndZxIF4O4BeC/tk0f19OkOTyqJP8ydhetP6NbOUJJ6PNMHXiaKotuTgK73X6BTHUjY0xbJwydnDXB7aewfGFE3PNuwmPhniYnAjAAbzxBvIqI5dW4I51xebkGWHFtEH31LqpM4M/K1Qz2RxUbVEOogfgTvFDfgJoNxI7uVkArqxgoyi2b0G4YMqsuZcZETLhUo867qYUyaBrwp/xF7gHogybvIfNGkJlpLtyB6IFXTiwOHNiMLSlWLV3ZV+dNBg1+1My8yM5ZhOkSx5hkDSxroZqq85NAA0H7qEhZmChoJBxYjFj/IuOQIDAQAB` TTL `600` id `550597157`
- `TXT` `dreamcatcher.ai` -> `google-site-verification=FSXGlm03UYU-1wmnpAJygU2X74NaL2_7DNOQup3rIjs` TTL `1800` id `509508538`
- `TXT` `mail.agent.dreamcatcher.ai` -> `v=spf1 include:amazonses.com -all` TTL `600` id `550597380`
