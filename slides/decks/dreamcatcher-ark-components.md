---
title: Ark Components
slug: dreamcatcher-ark-components
status: reviewed
audience: Dreamcatcher / Kristin School
prepared_by: Tom Thompson
contact: tom@DreamCatcher.ai
affiliation: Parent of Harry Thompson (Junior School applicant, unconfirmed)
created: 2026-06-04
updated: 2026-06-05
format: reveal.js external Markdown, no build
assets:
  logo: ../assets/dreamcatcher-logo.svg
  hero: ../assets/ark-components-hero.svg
components:
  architecture_cycle: ../components/ark-components-architecture-cycle.html
  ecosystem_cycle: ../components/ark-community-ecosystem-cycle.html
source_notes:
  - ../README.md
  - ../Deck Seed - Ark Components.md
---

<div class="dc-shell dc-cover" style="--cover-image: none; position: relative;">
  <img src="../assets/ark-components-cover-bg.svg" alt="" aria-hidden="true" style="position:absolute; right:-260px; top:58px; width:56%; max-height:none; height:auto; opacity:.76; box-shadow:none; border-radius:0; background:transparent; z-index:0;">
  <div class="dc-brand" style="position:relative; z-index:2;"><img src="../assets/dreamcatcher-logo.svg" alt="Dreamcatcher logo"><span>Dreamcatcher</span></div>
  <div style="position:relative; z-index:2; max-width:820px;">
    <div class="dc-kicker">Prepared for Kristin School</div>
    <h1 class="dc-title">Ark Components</h1>
    <p class="dc-subtitle">An open, self-sovereign architecture for durable personal AI: a person-owned Ark, a live Agent, a Conscience boundary, Archive, Vault, Model Socket, Toolbay, Open Ports, and Outlast continuity.</p>
  </div>
  <div class="dc-footerline" style="position:relative; z-index:2;"><span>Prepared by Tom Thompson · tom@DreamCatcher.ai</span><span>Parent of Harry Thompson (Junior School applicant, unconfirmed)</span></div>
</div>

---

<div class="dc-shell">
  <div class="dc-kicker">What an Ark is</div>
  <div class="dc-grid-2">
    <div>
      <h2>A portable operating system for continuity.</h2>
      <p class="dc-bigline">An Ark carries precious continuity for its owner — the person, family, or institution it serves.</p>
    </div>
    <div class="dc-card">
      <h3>What it represents</h3>
      <p>Durable, portable, protected, and specific enough to build around. The Ark is the owner’s long-running home for history, permissions, the Agent, tools, models, and carefully governed action.</p>
      <div class="dc-pill-row"><span class="dc-pill">continuity</span><span class="dc-pill">custody</span><span class="dc-pill">portability</span><span class="dc-pill">protection</span><span class="dc-pill">ownership</span></div>
    </div>
  </div>
</div>

---

<div class="dc-shell">
  <div class="dc-kicker">Ark + Agent</div>
  <h2>The Ark is the owned place. The Agent is the live experience.</h2>
  <div class="dc-grid-3" style="margin-top: 24px;">
    <div class="dc-card"><h3>Ark</h3><p>The Ark holds continuity: history, custody, permissions, provenance, recovery, and the owner’s long-running context.</p></div>
    <div class="dc-card"><h3>Agent</h3><p>The Agent works inside and with the Ark. It can speak, plan, act, ask, and explain — but it is not the whole Ark and it is not just the model.</p></div>
    <div class="dc-card"><h3>Replaceable capabilities</h3><p>Models plug into the Model Socket. Tools and services plug into the Toolbay. The Conscience governs both.</p></div>
  </div>
</div>

---

<iframe class="dc-component-frame" src="../components/ark-components-architecture-cycle.html" title="Ark components architecture diagram variants"></iframe>

---

<div class="dc-shell">
  <div class="dc-kicker">Archive and Vault</div>
  <div class="dc-grid-2">
    <div class="dc-card"><h3>Archive</h3><p>The long-running history: work, learning evidence, projects, feedback, values, preferences, decisions, provenance, and reflections.</p><p class="dc-muted">The Archive is how continuity compounds over years.</p></div>
    <div class="dc-card"><h3>Vault</h3><p>The tightly constrained chamber for sensitive material: credentials, keys, payment rails, recovery material, biometrics, private records, and high-risk permissions.</p><p class="dc-muted">The Vault answers, redacts, or refuses without casually exposing raw secrets.</p></div>
  </div>
</div>

---

<div class="dc-shell">
  <div class="dc-kicker">Sockets and bays</div>
  <div class="dc-grid-2">
    <div>
      <h2>Modular by design.</h2>
      <p class="dc-bigline">The Agent should be able to change models, tools, and services without the owner starting again.</p>
    </div>
    <div class="dc-card">
      <h3>The operating posture</h3>
      <ul>
        <li>the Agent works in and with the Ark;</li>
        <li>models plug into the Model Socket;</li>
        <li>tools and services plug into the Toolbay;</li>
        <li>the Archive preserves long context;</li>
        <li>the Vault stays private and constrained;</li>
        <li>the Conscience governs movement across boundaries.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="dc-shell">
  <div class="dc-kicker">Conscience</div>
  <div class="dc-grid-2">
    <div>
      <h2>The boundary with judgement.</h2>
      <p class="dc-bigline">The Conscience governs flows into, out of, and within the Ark.</p>
    </div>
    <div class="dc-card">
      <h3>It checks and explains</h3>
      <ul>
        <li>owner permissions, age, role, law, policy, safety, privacy, and cost;</li>
        <li>what a model may see;</li>
        <li>what a tool may do;</li>
        <li>what a parent, teacher, child, or external service may receive.</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="dc-shell">
  <div class="dc-kicker">Open Ports</div>
  <h2>Ownership is proved by leaving, inspecting, and restoring.</h2>
  <div class="dc-grid-3" style="margin-top: 24px;">
    <div class="dc-card"><h3>Open source where possible</h3><p>Underlying mechanisms should be understandable, reviewable, and replaceable rather than trapped behind a vendor wall.</p></div>
    <div class="dc-card"><h3>Protocol-shaped exits</h3><p>Export, restore, migration, permission grants, and audit trails should be protocol-shaped, not screenshot-shaped.</p></div>
    <div class="dc-card"><h3>Owner control</h3><p>The Ark belongs to its owner. Institutions can contribute and verify without taking ownership.</p></div>
  </div>
</div>

---

<div class="dc-shell">
  <div class="dc-kicker">App locality</div>
  <h2>Bring the app to the Ark, not your life to the app.</h2>
  <div class="dc-grid-3" style="margin-top: 24px;">
    <div class="dc-card"><h3>Old SaaS</h3><p>The application became the useful place, so the person’s records, identity, history, and permissions were pulled outward into vendor accounts.</p></div>
    <div class="dc-card"><h3>Ark-centred</h3><p>Data, keys, history, policy, and provenance stay unified in the Ark. Apps, models, tools, and services become the interchangeable parts.</p></div>
    <div class="dc-card"><h3>Conscience-gated</h3><p>Services can still provide transport, backup, inference, coordination, publishing, and recovery — but they cross a governed boundary.</p></div>
  </div>
</div>

---

<div class="dc-shell">
  <div class="dc-kicker">Outlast</div>
  <div class="dc-grid-2">
    <div class="dc-card">
      <h3>The promise</h3>
      <p>The Ark should outlast the model, the tool, the app, the school year, the vendor contract, and the device.</p>
      <div class="dc-pill-row"><span class="dc-pill">export</span><span class="dc-pill">restore</span><span class="dc-pill">migrate</span><span class="dc-pill">audit</span><span class="dc-pill">revoke</span></div>
    </div>
    <div>
      <h2>Continuity is the product.</h2>
      <p class="dc-bigline">Models, tools, apps, and services are replaceable capabilities around the person-owned Ark.</p>
    </div>
  </div>
</div>

---

<div class="dc-shell">
  <div class="dc-kicker">Not only students</div>
  <h2>An Ark can be assigned to any person.</h2>
  <div class="dc-grid-3" style="margin-top: 24px;">
    <div class="dc-card"><h3>Child Ark</h3><p>Learning history, support, reflection, age-appropriate permissions, and carefully bounded help.</p></div>
    <div class="dc-card"><h3>Parent Ark</h3><p>Family context, values, records, lived judgement, resource coordination, and safe contribution to the child’s world.</p></div>
    <div class="dc-card"><h3>Teacher Ark</h3><p>Learning design, feedback, classroom evidence, professional memory, and school-approved channels into student work.</p></div>
  </div>
</div>

---

<iframe class="dc-component-frame" src="../components/ark-community-ecosystem-cycle.html" title="Permissioned community of parent, teacher, and child Ark diagrams"></iframe>

---

<div class="dc-shell">
  <div class="dc-kicker">Reference sentence</div>
  <h2>The Ark is the owned continuity layer.</h2>
  <p class="dc-bigline" style="max-width: 1120px; font-size: 42px; line-height: 1.14;">Archive remembers. Vault protects. Agent works. Conscience governs. Model Socket and Toolbay make capabilities replaceable. Open Ports prove ownership. Outlast is the promise.</p>
</div>
