---
title: Ark Components
slug: dreamcatcher-ark-components
status: draft
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
    <p class="dc-subtitle">An open, self-sovereign architecture for durable personal AI: a person-owned Ark with a Conscience boundary, Archive, Vault, Model Socket, Toolbay, and open ports.</p>
  </div>
  <div class="dc-footerline" style="position:relative; z-index:2;"><span>Prepared by Tom Thompson · tom@DreamCatcher.ai</span><span>Parent of Harry Thompson (Junior School applicant, unconfirmed)</span></div>
</div>

---

<div class="dc-shell">
  <div class="dc-kicker">What an Ark is</div>
  <div class="dc-grid-2">
    <div>
      <h2>A portable operating system for continuity.</h2>
      <p class="dc-bigline">An Ark carries precious continuity for the person it is assigned to.</p>
    </div>
    <div class="dc-card">
      <h3>What it represents</h3>
      <p>Durable, portable, protected, and specific enough to build around. The Ark is the owner’s long-running home for history, permissions, tools, models, and carefully governed action.</p>
      <div class="dc-pill-row"><span class="dc-pill">continuity</span><span class="dc-pill">custody</span><span class="dc-pill">portability</span><span class="dc-pill">protection</span><span class="dc-pill">ownership</span></div>
    </div>
  </div>
</div>

---

<div class="dc-shell">
  <div class="dc-kicker">The simple operating system</div>
  <h2>The Ark stays. Capabilities plug in.</h2>
  <div class="dc-grid-3" style="margin-top: 24px;">
    <div class="dc-card"><h3>Model Socket</h3><p>The AI model plugs into a defined socket. Better, safer, cheaper, or local models can replace it without replacing the Ark.</p></div>
    <div class="dc-card"><h3>Toolbay</h3><p>Tools, connectors, workflows, and interfaces come and go. The Ark composes them, constrains them, and can revoke them.</p></div>
    <div class="dc-card"><h3>Conscience</h3><p>The active boundary checks what can cross, asks for approval when needed, and explains decisions instead of hiding them.</p></div>
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
      <p class="dc-bigline">The owner should be able to change the intelligence engine and the tools without starting again.</p>
    </div>
    <div class="dc-card">
      <h3>The operating posture</h3>
      <ul>
        <li>models plug into the Model Socket;</li>
        <li>tools plug into the Toolbay;</li>
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
  <div class="dc-kicker">Open ownership</div>
  <h2>Self-sovereign ownership has to be inspectable.</h2>
  <div class="dc-grid-3" style="margin-top: 24px;">
    <div class="dc-card"><h3>Open source where possible</h3><p>Underlying mechanisms should be understandable, reviewable, and replaceable rather than trapped behind a vendor wall.</p></div>
    <div class="dc-card"><h3>Open protocols</h3><p>Export, restore, migration, permission grants, and audit trails should be protocol-shaped, not screenshot-shaped.</p></div>
    <div class="dc-card"><h3>Owner control</h3><p>The Ark belongs to the individual it is assigned to. Institutions can contribute and verify without taking ownership.</p></div>
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
      <p class="dc-bigline">Everything else is a replaceable capability around the person-owned Ark.</p>
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
  <p class="dc-bigline" style="max-width: 1120px;">A durable personal operating system where the Archive remembers, the Vault protects, the Conscience governs, models plug into sockets, tools plug into bays, and the owner can outlast every replaceable part.</p>
</div>
