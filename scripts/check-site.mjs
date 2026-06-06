import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (file) => readFileSync(join(root, file), 'utf8');
const fail = (message) => {
  console.error(`✗ ${message}`);
  process.exitCode = 1;
};
const pass = (message) => console.log(`✓ ${message}`);

const requiredFiles = [
  'index.html',
  'styles.css',
  'assets/dreamcatcher-mark.svg',
  'assets/dreamcatcher-logo.png',
  'assets/dreamcatcher-logo-180.png',
  'assets/agent-capsule.svg',
  'assets/durable-ark-architecture.png',
  'assets/ark-components-hero.svg',
  'assets/social-card.svg',
  'robots.txt',
  'sitemap.xml',
  '.nojekyll',
  'CNAME',
  'slides/index.html',
  'slides/reveal-runner.html',
  'slides/decks/dreamcatcher-ark-components.md',
  'slides/decks/defragmenting-the-user.md',
  'slides/decks/kristin-school-knowledge-that-endures.md',
  'slides/decks/kristin-school-pilot-validation-portfolio.md',
  'slides/decks/kristin-school-resource-avenues-child-safety-first.md',
  'slides/decks/kristin-school-three-things-to-push-on.md',
  'slides/decks/class-coach-ai-learning-companion.md',
  'slides/components/ark-components-architecture-cycle.html',
  'slides/components/ark-community-ecosystem-cycle.html',
  'slides/components/knowledge-cascade.html',
  'slides/components/pilot-validation-map.html',
  'slides/components/ai-school-measurement-board.html',
  'slides/components/resource-avenues-map.html',
  'slides/components/three-paths-operating-map.html',
  'slides/components/defragmenting-user-orbit-cycle.html',
  'slides/assets/dreamcatcher-logo.svg',
  'slides/assets/ark-components-hero.svg',
  'slides/assets/ark-components-cover-bg.svg',
  'slides/assets/defragmenting-the-user-hero.png',
  'slides/assets/defragmenting-the-user-orbit-01-split-vs-orbit.png',
  'slides/assets/defragmenting-the-user-orbit-02-tool-owned-vs-person-gravity.png',
  'slides/assets/defragmenting-the-user-orbit-03-recomposition-current.png',
  'slides/assets/kristin-knowledge-that-endures-cover.png',
  'slides/assets/conscience-visibility-spectrum.png',
  'slides/assets/parent-energy-channel.png',
  'slides/decks/kristin-school-give-parents-something-to-push-on.md',
  'slides/decks/kristin-school-run-the-school-before-release.md',
  'slides/components/parent-energy-operating-board.html',
  'slides/components/guardian-test-matrix.html',
  'slides/components/school-simulation-tiers.html',
  'slides/components/simulation-dashboard-lab.html',
  'slides/components/classcoach-logo-cycle.html',
  'slides/components/classcoach-learning-loop.html',
  'slides/components/classcoach-upgrade-ladder.html',
  'slides/assets/school-simulation-sandbox.png',
  'slides/assets/leaving-school-enduring-capsule.png',
  'slides/assets/classcoach-cover.svg',
  'slides/assets/classcoach-logo-01.svg',
  'slides/assets/classcoach-logo-02.svg',
  'slides/assets/classcoach-logo-03.svg',
  'slides/assets/classcoach-logo-04.svg',
  'slides/assets/classcoach-logo-05.svg',
  'slides/assets/classcoach-logo-06.svg',
];
for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) fail(`Missing ${file}`);
}
const forbiddenFiles = [
  'slides/decks/kristin-school-enduring-knowledge-cores.md',
  'slides/pdfs/kristin-school-enduring-knowledge-cores.pdf',
  'slides/pdfs',
  'dist',
  'vercel.json',
  'assets/durable-core-architecture.png',
  'slides/assets/kristin-enduring-cores-cover.png',
  'slides/components/child-core-influence-model.html',
  'slides/decks/studybuddy-ai-learning-companion.md',
  'slides/components/studybuddy-learning-loop.html',
  'slides/components/studybuddy-upgrade-ladder.html',
  'slides/assets/studybuddy-cover.svg',
  'slides/assets/studybuddy-logo.png',
  'slides/assets/studybuddy-mark.svg',
];
for (const file of forbiddenFiles) {
  if (existsSync(join(root, file))) fail(`Retired public path must not exist: ${file}`);
}

const html = read('index.html');
const css = read('styles.css');
const social = read('assets/social-card.svg');
const capsule = read('assets/agent-capsule.svg');
const slidesIndex = read('slides/index.html');
const runner = read('slides/reveal-runner.html');
const pkg = JSON.parse(read('package.json'));
const gitignore = read('.gitignore');

const mustContain = [
  ['portable Arks', html],
  ['assets/dreamcatcher-logo-180.png', html],
  ['../assets/dreamcatcher-logo-180.png', slidesIndex],
  ['Your knowledge should accumulate, not evaporate', html],
  ['Not a bigger context window', html],
  ['Ark', html],
  ['Conscience', html],
  ['Vault', html],
  ['Personal software', html],
  ['Arks can turn knowledge into wisdom', html],
  ['Collective wisdom of the Arks', html],
  ['Published decks', html],
  ['slides/reveal-runner.html?deck=decks/kristin-school-pilot-validation-portfolio.md', html],
  ['slides/reveal-runner.html?deck=decks/kristin-school-resource-avenues-child-safety-first.md', html],
  ['slides/reveal-runner.html?deck=decks/kristin-school-give-parents-something-to-push-on.md', html],
  ['slides/reveal-runner.html?deck=decks/kristin-school-run-the-school-before-release.md', html],
  ['slides/reveal-runner.html?deck=decks/class-coach-ai-learning-companion.md', html],
  ['Class Coach', html],
  ['Class Coach', slidesIndex],
  ['Sophie and Tom Thompson', read('slides/decks/class-coach-ai-learning-companion.md')],
  ['International Baccalaureate (IB)', read('slides/decks/class-coach-ai-learning-companion.md')],
  ['classcoach-logo-cycle.html', read('slides/decks/class-coach-ai-learning-companion.md')],
  ['classcoach-logo-06.svg', read('slides/components/classcoach-logo-cycle.html')],
  ['classcoach-learning-loop.html', read('slides/decks/class-coach-ai-learning-companion.md')],
  ['classcoach-upgrade-ladder.html', read('slides/decks/class-coach-ai-learning-companion.md')],
  ['The output is understanding', read('slides/decks/class-coach-ai-learning-companion.md')],
  ['specialist eyes', read('slides/components/classcoach-upgrade-ladder.html')],
  ['Permitted teacher signal', read('slides/components/classcoach-learning-loop.html')],
  ['Ark Components', slidesIndex],
  ['slides/reveal-runner.html?deck=decks/dreamcatcher-ark-components.md', html],
  ['dreamcatcher-ark-components.md', slidesIndex],
  ['Agent', read('slides/decks/dreamcatcher-ark-components.md')],
  ['Model Socket', read('slides/decks/dreamcatcher-ark-components.md')],
  ['Toolbay', read('slides/decks/dreamcatcher-ark-components.md')],
  ['Archive', read('slides/decks/dreamcatcher-ark-components.md')],
  ['Outlast', read('slides/decks/dreamcatcher-ark-components.md')],
  ['Bring the app to the Ark', read('slides/decks/dreamcatcher-ark-components.md')],
  ['Version F: Ark-to-Ark crossing', read('slides/components/ark-components-architecture-cycle.html')],
  ['click to cycle through six versions', read('slides/components/ark-components-architecture-cycle.html')],
  ['Vault crossing', read('slides/components/ark-components-architecture-cycle.html')],
  ['Give the Parents Something to Push On', slidesIndex],
  ['Run the School Before We Release It', slidesIndex],
  ['Guardian tests', read('slides/decks/kristin-school-give-parents-something-to-push-on.md')],
  ['synthetic students', read('slides/decks/kristin-school-run-the-school-before-release.md')],
  ['Telegram', html],
  ['WhatsApp', html],
  ['Email', html],
  ['Call the agent', html],
  ['mailto:concierge@agent.dreamcatcher.ai', html],
  ['Dreamcatcher%20Concierge%20pilot%20request', html],
  ['assets/dreamcatcher-concierge-profile.png', html],
  ['assets/dreamcatcher-concierge.vcf', html],
  ['https://esm.sh/@tabler/icons-webfont@3.44.0/dist/tabler-icons.min.css', html],
  ['ti-brand-whatsapp', html],
  ['ti-brand-telegram', html],
  ['external-link-icon', html],
  ['https://t.me/dreamcatcher_concierge_bot', html],
  ['https://wa.me/64223571853?text=', html],
  ['tel:+64223571853', html],
  ['sms:+64223571853?', html],
  ['Download contact card', html],
  ['Ark', capsule],
  ['Your knowledge should', social],
  ['Dreamcatcher.ai Slides', slidesIndex],
  ['Ark Pilot Validation Portfolio', slidesIndex],
  ['The Knowledge That Endures', slidesIndex],
  ['Defragmenting the User', slidesIndex],
  ['defragmenting-the-user-orbit-02-tool-owned-vs-person-gravity.png', html],
  ['defragmenting-the-user-orbit-02-tool-owned-vs-person-gravity.png', slidesIndex],
  ['defragmenting-user-orbit-cycle.html', read('slides/decks/defragmenting-the-user.md')],
  ['Child-Safety-First Resource Avenues', slidesIndex],
  ['Three Things to Push On', slidesIndex],
  ['slides/reveal-runner.html?deck=decks/kristin-school-three-things-to-push-on.md', html],
  ['Conscience', read('slides/decks/kristin-school-pilot-validation-portfolio.md')],
  ['Conscience', read('slides/decks/kristin-school-three-things-to-push-on.md')],
  ['reveal.js@6.0.1', runner],
  ['js-yaml@4.2.0', runner],
  ['Download PDF', runner],
  ['print-pdf', runner],
  ['autoprint', runner],
  ['window.print()', runner],
  ['Save as PDF', runner],
  ['target="_blank"', runner],
  ['rel="noopener"', runner],
  ['dc-pdf-export', runner],
  ['dc-print-help', runner],
  ['dc-print-requested', runner],
  ['window.Reveal = deck', runner],
  ['dreamcatcher.ai', read('CNAME')],
];
for (const [needle, haystack] of mustContain) {
  if (!haystack.includes(needle)) fail(`Expected content not found: ${needle}`);
}

const classCoachDeck = read('slides/decks/class-coach-ai-learning-companion.md');
for (const hiddenClassCoachText of ['tom@DreamCatcher.ai', 'tom@dreamcatcher.ai', 'contact:', 'StudyBuddy', 'studybuddy-']) {
  if (classCoachDeck.includes(hiddenClassCoachText)) fail(`Class Coach deck should not include stale/contact text: ${hiddenClassCoachText}`);
}

const forbidden = [
  'next-auth',
  '_next/',
  'React',
  'app/(chat)',
  'href="/chat"',
  'href="/login"',
  'start=website_pilot',
  'Open Telegram draft',
  'Draft only',
  'https://wa.me/?text=',
];
for (const needle of forbidden) {
  if (html.includes(needle) || css.includes(needle) || slidesIndex.includes(needle)) fail(`Forbidden framework/chat reference found: ${needle}`);
}

const contactCard = html.match(/<article class="channel-card contact-card-panel">[\s\S]*?<\/article>/)?.[0] || '';
for (const hiddenContactText of ['concierge@agent.dreamcatcher.ai', '+64 22 357 1853', '@dreamcatcher_concierge_bot']) {
  if (contactCard.includes(hiddenContactText)) fail(`Contact card should not visibly list ${hiddenContactText}`);
}
if (html.includes('<svg')) fail('Homepage icons must come from the esm.sh icon set, not inline SVG');
if (css.includes('data:image/svg+xml') || css.includes('external-link::after')) fail('External-link icon must come from the esm.sh icon set, not CSS SVG masks');
if (html.includes('@fortawesome') || html.includes('fontawesome')) fail('Homepage should use the Tabler icon set from esm.sh, not Font Awesome runtime SVG injection');

for (const needle of ['URL.createObjectURL', 'pdfs/${pdfFile}', 'download=', 'render:slide-pdfs']) {
  if (runner.includes(needle)) fail(`Reveal runner must use lightweight print-pdf export, not static PDF download plumbing: ${needle}`);
}
if (gitignore.includes('dist/') || gitignore.includes('.vercel/')) fail('.gitignore must not preserve legacy build/Vercel relics; this site is root-published GitHub Pages only');

const publicNamingFiles = [
  'index.html',
  'slides/index.html',
  'assets/agent-capsule.svg',
  'assets/social-card.svg',
  'slides/decks/dreamcatcher-ark-components.md',
  'slides/decks/defragmenting-the-user.md',
  'slides/decks/kristin-school-knowledge-that-endures.md',
  'slides/decks/kristin-school-pilot-validation-portfolio.md',
  'slides/decks/kristin-school-resource-avenues-child-safety-first.md',
  'slides/decks/kristin-school-run-the-school-before-release.md',
  'slides/decks/kristin-school-three-things-to-push-on.md',
  'slides/decks/kristin-school-give-parents-something-to-push-on.md',
  'slides/decks/class-coach-ai-learning-companion.md',
  'slides/components/ai-school-measurement-board.html',
  'slides/components/child-ark-influence-model.html',
  'slides/components/kristin-pilot-path.html',
  'slides/components/parent-energy-operating-board.html',
  'slides/components/pilot-learning-flywheel.html',
  'slides/components/resource-avenues-map.html',
  'slides/components/school-simulation-tiers.html',
  'slides/components/three-paths-operating-map.html',
  'slides/components/classcoach-logo-cycle.html',
  'slides/components/classcoach-learning-loop.html',
  'slides/components/classcoach-upgrade-ladder.html',
];
const retiredNamingPatterns = [
  /kristin-school-enduring-knowledge-cores/i,
  /enduring-knowledge-cores/i,
  /\b(?:core|cores)\b/i,
  /\ba Ark\b/i,
  /SArk/i,
  /\bStewards?\b/i,
  /Minders?/i,
  /semantic guard/i,
  /transforming proxy/i,
  /policy governor/i,
];
for (const file of publicNamingFiles) {
  const content = read(file);
  for (const pattern of retiredNamingPatterns) {
    if (pattern.test(content)) fail(`Retired public naming term ${pattern} still present in ${file}`);
  }
}

if (pkg.scripts?.build) fail('package.json must not define a build script; this site intentionally has no build step');

const validateLocalRefs = (file) => {
  const markup = read(file);
  const base = dirname(file);
  const localRefs = [...markup.matchAll(/(?:href|src)="(?!https?:|mailto:|tel:|sms:|#|\/)([^"]+)"/g)].map((m) => m[1]);
  for (const ref of localRefs) {
    const clean = ref.split('#')[0].split('?')[0];
    if (!clean) continue;
    if (!existsSync(join(root, base, clean))) fail(`Broken local reference in ${file}: ${ref}`);
  }
};
validateLocalRefs('index.html');
validateLocalRefs('slides/index.html');

const validateRevealLinksOpenInNewTabs = (file) => {
  const markup = read(file);
  const revealLinks = [...markup.matchAll(/<a\b(?=[^>]*href="[^"]*reveal-runner\.html\?deck=[^"]*")[^>]*>/g)].map((m) => m[0]);
  for (const link of revealLinks) {
    if (!link.includes('target="_blank"')) fail(`Reveal deck link must open in a new tab in ${file}: ${link}`);
    if (!/rel="[^"]*\bnoopener\b[^"]*"/.test(link)) fail(`Reveal deck link must use rel="noopener" in ${file}: ${link}`);
  }
};
validateRevealLinksOpenInNewTabs('index.html');
validateRevealLinksOpenInNewTabs('slides/index.html');

const validateUniqueDeckThumbnails = (file) => {
  const markup = read(file);
  const deckImages = [...markup.matchAll(/<a class="deck-thumb"[^>]*>\s*<img src="([^"]+)"/gs)].map((m) => m[1]);
  const seen = new Set();
  for (const image of deckImages) {
    if (seen.has(image)) fail(`Duplicate deck thumbnail in ${file}: ${image}`);
    seen.add(image);
  }
};
validateUniqueDeckThumbnails('index.html');
validateUniqueDeckThumbnails('slides/index.html');

const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map((m) => m[1]));
const hashes = [...html.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]);
for (const id of hashes) {
  if (!ids.has(id)) fail(`Broken anchor link: #${id}`);
}

const arkComponentsBundle = [
  read('slides/decks/dreamcatcher-ark-components.md'),
  read('slides/components/ark-components-architecture-cycle.html'),
  read('slides/components/ark-community-ecosystem-cycle.html'),
  slidesIndex,
  html,
].join('\n');
for (const retiredTerm of ['Codex', 'Covenant', 'The Ark Naming System', 'ark-naming-system']) {
  if (arkComponentsBundle.includes(retiredTerm)) fail(`Retired Ark Components term still present: ${retiredTerm}`);
}

for (const deck of ['dreamcatcher-ark-components', 'defragmenting-the-user', 'kristin-school-knowledge-that-endures', 'kristin-school-pilot-validation-portfolio', 'kristin-school-resource-avenues-child-safety-first', 'kristin-school-three-things-to-push-on', 'kristin-school-give-parents-something-to-push-on', 'kristin-school-run-the-school-before-release', 'class-coach-ai-learning-companion']) {
  const deckText = read(`slides/decks/${deck}.md`);
  if (!deckText.startsWith('---')) fail(`${deck}.md must start with frontmatter`);
  if (deckText.includes('../../Assets/')) fail(`${deck}.md must not reference private notes asset paths`);
}

if (!html.trimStart().startsWith('<!doctype html>')) fail('index.html must start with <!doctype html>');
if (!slidesIndex.trimStart().startsWith('<!doctype html>')) fail('slides/index.html must start with <!doctype html>');
if (!css.includes('@media (max-width: 760px)')) fail('styles.css must include mobile responsive styles');

if (!process.exitCode) {
  pass('Static site content, slide library, and references validated');
}
