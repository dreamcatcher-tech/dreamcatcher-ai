---
title: Defragmenting the User
subtitle: From SaaS sprawl to durable cores
slug: defragmenting-the-user
created: 2026-06-04T12:29:42+12:00
status: seed
format: reveal-md-no-build
theme: dreamcatcher-dark
source_note: "[[Deck Seed - Defragmenting the User]]"
assets:
  hero_image: "../assets/defragmenting-the-user-orbit-02-tool-owned-vs-person-gravity.png"
  previous_hero_image: "../assets/defragmenting-the-user-hero.png"
  orbit_image_options:
    - "../assets/defragmenting-the-user-orbit-02-tool-owned-vs-person-gravity.png"
    - "../assets/defragmenting-the-user-orbit-01-split-vs-orbit.png"
    - "../assets/defragmenting-the-user-orbit-03-recomposition-current.png"
components:
  orbit_cycle: "../components/defragmenting-user-orbit-cycle.html"
---

# Defragmenting the User

## From SaaS sprawl to durable cores

![Generated image: tool-owned panels slice the person on the left, while a whole person/core has tools orbiting on the right.](../assets/defragmenting-the-user-orbit-02-tool-owned-vs-person-gravity.png)

Notes:
The old world makes the user a cross-cutting concern. The new world makes the user the core.

---

## The pattern we know, but rarely name

- SaaS sprawl
- identity sprawl
- data silos
- integration spaghetti
- split-brain user state

> **The person is smeared across the stack.**

---

## The technical term

# Cross-cutting concern

In old software, some concerns cut across every module.

In old SaaS, **the user** cuts across every application.

---

## Dreamcatcher's phrase

# Defragmenting the user

> The person should not be smeared across the tools. The tools should orbit the person.

---

## Tools should orbit the person

<iframe class="dc-component-frame" src="../components/defragmenting-user-orbit-cycle.html" title="Tap to cycle generated images of tools orbiting a unified person instead of fragmenting them"></iframe>

Notes:
Tap or click the image to cycle through three generated visual directions. The chosen default is the clearest: tool-owned panels slice the person on the left; a whole person/core has tools orbiting on the right.

---

## The car stereo analogy

Left: the car stereo I wanted as a kid.

Right: the car audio system I want now.

> Complexity collapses into one trusted connection.

Image brief: maximalist lights/buttons/CD/equalizer versus blank face + Bluetooth-like audio orb.

---

## The phone app analogy

Today: a home screen full of accounts, utilities, badges, permissions, and partial records.

Future: one voice-first agent orb.

> The future app is not another app. It is where the other apps stop owning the user.

---

## Enterprise today

Email. Accounting. CRM. HR. Support. BI. On-prem systems. Documents. Chat. Browser tools.

The same person exists as a thin slice in each one.

SSO helps you log in.

> **SSO does not put you back together.**

---

## Enterprise with a durable core

The durable core holds continuity:

- records
- keys and approvals
- knowledge trail
- policies and preferences
- history and provenance
- personal software context

Services become replaceable tools around the core.

---

## Architectural inversion

Before:

```text
Application owns record → user gets account → integrations recover coherence
```

After:

```text
Durable core owns continuity → services orbit → software comes to the core
```
