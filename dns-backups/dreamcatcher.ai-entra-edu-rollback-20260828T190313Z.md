# Rollback: Entra verification for `edu.dreamcatcher.ai`

- Captured: `20260828T190313Z`
- Provider snapshot: `dns-backups/dreamcatcher.ai-provider-before-entra-edu-20260828T190313Z.json`
- Public snapshot: `dns-backups/dreamcatcher.ai-public-before-entra-edu-20260828T190313Z.json`
- Intended addition: one TXT record at `edu.dreamcatcher.ai` with value `MS=ms61661472` and provider TTL `3600`.

## Rollback

Delete only the TXT record at `edu.dreamcatcher.ai` whose exact content is `MS=ms61661472`. Preserve the existing OpenMail/Mailgun MX, SPF, DKIM, and every unrelated DNS record. Removing the TXT record does not automatically remove the verified domain from Microsoft Entra; if full rollback is required, remove the Entra custom domain only after no user UPN depends on it.
