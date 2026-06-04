# dreamcatcher.ai DNS post-change backup: mail authentication SPF/DMARC

- Generated: 20260604T045834Z
- Provider: Porkbun API + public DNS-over-HTTPS snapshots
- Full JSON backup: `dreamcatcher.ai-post-mail-auth-spf-dmarc-20260604T045834Z.json`
- Change completed: added Google Workspace SPF and non-enforcing DMARC records for `dreamcatcher.ai`.

## Intended records now present

- `TXT` `dreamcatcher.ai` -> `v=spf1 include:_spf.google.com ~all` TTL `600` id `552876022`
- `TXT` `_dmarc.dreamcatcher.ai` -> `v=DMARC1; p=none; rua=mailto:dmarc@dreamcatcher.ai` TTL `600` id `552876028`

## Verification evidence

- cloudflare_spf_present: `True`
- google_spf_present: `True`
- cloudflare_dmarc_present: `True`
- google_dmarc_present: `True`

Observed TXT answers:

- Cloudflare `dreamcatcher.ai TXT`: `['google-site-verification=FSXGlm03UYU-1wmnpAJygU2X74NaL2_7DNOQup3rIjs', 'v=spf1 include:_spf.google.com ~all']`
- Google `dreamcatcher.ai TXT`: `['google-site-verification=FSXGlm03UYU-1wmnpAJygU2X74NaL2_7DNOQup3rIjs', 'v=spf1 include:_spf.google.com ~all']`
- Cloudflare `_dmarc.dreamcatcher.ai TXT`: `['v=DMARC1; p=none; rua=mailto:dmarc@dreamcatcher.ai']`
- Google `_dmarc.dreamcatcher.ai TXT`: `['v=DMARC1; p=none; rua=mailto:dmarc@dreamcatcher.ai']`

## Scope notes

- Preserved unrelated MX, web, Google/GitHub verification, AgentMail, Fly, DKIM, and NS records.
- Google Workspace DKIM alignment is still pending Google Admin access; this change should allow SPF to pass for Gmail-originated `tom@dreamcatcher.ai` mail.
- To roll back this mail-auth change, delete only the two TXT records listed above, or restore from the pre-change backup JSON/markdown committed immediately before this change.
