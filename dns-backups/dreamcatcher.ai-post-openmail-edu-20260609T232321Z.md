# DNS post-change snapshot: edu.dreamcatcher.ai OpenMail records

- Timestamp UTC: `20260609T232321Z`
- Provider backup: `dreamcatcher.ai-provider-after-openmail-edu-20260609T232321Z.json`
- Public DNS backup: `dreamcatcher.ai-public-after-openmail-edu-20260609T232321Z.json`
- DNS provider: Porkbun (`dreamcatcher.ai`)

## Intended records

- MX `edu.dreamcatcher.ai` -> `mxa.eu.mailgun.org`, priority `10`, TTL `600`
- MX `edu.dreamcatcher.ai` -> `mxb.eu.mailgun.org`, priority `10`, TTL `600`
- TXT `edu.dreamcatcher.ai` -> `v=spf1 include:mailgun.org ~all`, TTL `600`
- TXT `openmail._domainkey.edu.dreamcatcher.ai` -> OpenMail DKIM public key, TTL `600`

## Provider records observed

```json
[
  {
    "content": "mxb.eu.mailgun.org",
    "id": "554403385",
    "name": "edu.dreamcatcher.ai",
    "prio": "10",
    "ttl": "600",
    "type": "MX"
  },
  {
    "content": "mxa.eu.mailgun.org",
    "id": "554403381",
    "name": "edu.dreamcatcher.ai",
    "prio": "10",
    "ttl": "600",
    "type": "MX"
  },
  {
    "content": "k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwR+UFgHdqagDJ++YLPE3shiOfX9O0tUZkmXVgCs4aenKtYyxwMrNlb+g8uXghB7DikmtVqlWLbp1XoXdjqpn0eKlkdolZZdbess8vALhn2RU1vsoYmVLOTuLe1i/i6DxbNo44mchWOX4yFP3XZN2DNRaqpQXDN/4BR03jnvYeQKkt/LCVUlZqNxzIZzNE5wIsMjYx7hORkqGW6FlclgILuqjwJ071wc5j2RHbL/a5Ewhb4quTmlSK+SpzWYfW/ejk6d3Np3fW35yCS+QGOahCuggkWi/Svc6cFD6dhlORy+7M4vHrNmIfqDNZl6jpuu7lom/glgqF1xHRHDCMtfTYwIDAQAB",
    "id": "554403415",
    "name": "openmail._domainkey.edu.dreamcatcher.ai",
    "prio": "0",
    "ttl": "600",
    "type": "TXT"
  },
  {
    "content": "v=spf1 include:mailgun.org ~all",
    "id": "554403402",
    "name": "edu.dreamcatcher.ai",
    "prio": "0",
    "ttl": "600",
    "type": "TXT"
  }
]
```

## Public resolver checks

```json
{
  "dkim_public": true,
  "mx_mxa_public": true,
  "mx_mxb_public": true,
  "provider_relevant_record_count": 4,
  "spf_public": true
}
```

Cloudflare and Google DNS-over-HTTPS both returned the intended MX, SPF TXT, and DKIM TXT records during verification. Preserve unrelated `dreamcatcher.ai` DNS records.
