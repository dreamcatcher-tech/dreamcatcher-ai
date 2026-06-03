# dreamcatcher.ai DNS rollback snapshot

- Generated: `2026-06-03T07:13:09Z`
- Source: Porkbun API `dns/retrieve` before GitHub Pages cutover
- Full JSON backup: `dreamcatcher.ai-porkbun-before-github-pages-20260603T071309Z.json`

## Web records before cutover

- `A` `dreamcatcher.ai` -> `216.150.1.1` TTL `10800` id `509508524`

## Restore target for the previous web state

If GitHub Pages cutover has to be reverted, set the apex web record back to:

- `A @ 216.150.1.1` TTL `10800`

Do not delete Google MX or Google site-verification TXT records during a web-hosting rollback.
