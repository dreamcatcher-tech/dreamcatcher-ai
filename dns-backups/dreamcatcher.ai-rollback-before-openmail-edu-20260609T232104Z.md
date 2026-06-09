# DNS rollback snapshot: edu.dreamcatcher.ai OpenMail records

- Timestamp UTC: `20260609T232104Z`
- Provider backup: `dreamcatcher.ai-provider-before-openmail-edu-20260609T232104Z.json`
- Public DNS backup: `dreamcatcher.ai-public-before-openmail-edu-20260609T232104Z.json`
- DNS provider: Porkbun (`dreamcatcher.ai`)
- Intended change after this backup: add OpenMail mail records for `edu.dreamcatcher.ai` only.

## Provider records currently in scope before change

```json
[]
```

## Rollback instruction

To roll back the OpenMail DNS change, restore the records for names `edu` and `openmail._domainkey.edu` to the provider state shown above. Preserve all unrelated `dreamcatcher.ai` records. If the pre-change list is empty, rollback means deleting only the OpenMail records created for `edu` / `openmail._domainkey.edu` and leaving all other records untouched.
