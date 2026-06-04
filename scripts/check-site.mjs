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
  'assets/agent-capsule.svg',
  'assets/durable-core-architecture.png',
  'assets/social-card.svg',
  'robots.txt',
  'sitemap.xml',
  'CNAME',
  'vercel.json',
  'slides/index.html',
  'slides/reveal-runner.html',
  'slides/decks/defragmenting-the-user.md',
  'slides/decks/kristin-school-enduring-knowledge-cores.md',
  'slides/decks/kristin-school-pilot-validation-portfolio.md',
  'slides/decks/kristin-school-resource-avenues-child-safety-first.md',
  'slides/components/knowledge-cascade.html',
  'slides/components/pilot-validation-map.html',
  'slides/components/ai-school-measurement-board.html',
  'slides/components/resource-avenues-map.html',
  'slides/assets/dreamcatcher-logo.svg',
  'slides/assets/defragmenting-the-user-hero.png',
  'slides/assets/kristin-enduring-cores-cover.png',
];
for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) fail(`Missing ${file}`);
}

const html = read('index.html');
const css = read('styles.css');
const social = read('assets/social-card.svg');
const capsule = read('assets/agent-capsule.svg');
const slidesIndex = read('slides/index.html');
const runner = read('slides/reveal-runner.html');
const vercel = JSON.parse(read('vercel.json'));

const mustContain = [
  ['durable knowledge cores', html],
  ['Your knowledge should accumulate, not evaporate', html],
  ['Not a bigger context window', html],
  ['Durable Knowledge Core', html],
  ['Semantic Checkpoint', html],
  ['Confidential Enclave', html],
  ['Personal software', html],
  ['Enduring knowledge becomes wisdom', html],
  ['Collective wisdom of the cores', html],
  ['Published decks', html],
  ['slides/reveal-runner.html?deck=decks/kristin-school-pilot-validation-portfolio.md', html],
  ['slides/reveal-runner.html?deck=decks/kristin-school-resource-avenues-child-safety-first.md', html],
  ['Telegram', html],
  ['WhatsApp', html],
  ['Email', html],
  ['Call the agent', html],
  ['Coming soon', html],
  ['mailto:tom@dreamcatcher.ai', html],
  ['Durable Knowledge Core', capsule],
  ['Your knowledge should', social],
  ['Dreamcatcher.ai Slides', slidesIndex],
  ['Enduring Core Pilot Validation Portfolio', slidesIndex],
  ['The Knowledge That Endures', slidesIndex],
  ['Defragmenting the User', slidesIndex],
  ['Child-Safety-First Resource Avenues', slidesIndex],
  ['reveal.js@6.0.1', runner],
  ['js-yaml@4.2.0', runner],
  ['framework', read('vercel.json')],
  ['dreamcatcher.ai', read('CNAME')],
];
for (const [needle, haystack] of mustContain) {
  if (!haystack.includes(needle)) fail(`Expected content not found: ${needle}`);
}

const forbidden = [
  'next-auth',
  '_next/',
  'React',
  'app/(chat)',
  'href="/chat"',
  'href="/login"',
];
for (const needle of forbidden) {
  if (html.includes(needle) || css.includes(needle) || slidesIndex.includes(needle)) fail(`Forbidden framework/chat reference found: ${needle}`);
}

if (vercel.framework !== null) fail('vercel.json must set framework to null for a static site');
if (vercel.outputDirectory !== 'dist') fail('vercel.json outputDirectory must be dist');
if (vercel.buildCommand !== 'node scripts/build.mjs') fail('vercel.json buildCommand must run scripts/build.mjs');

const validateLocalRefs = (file) => {
  const markup = read(file);
  const base = dirname(file);
  const localRefs = [...markup.matchAll(/(?:href|src)="(?!https?:|mailto:|#|\/)([^"]+)"/g)].map((m) => m[1]);
  for (const ref of localRefs) {
    const clean = ref.split('#')[0].split('?')[0];
    if (!clean) continue;
    if (!existsSync(join(root, base, clean))) fail(`Broken local reference in ${file}: ${ref}`);
  }
};
validateLocalRefs('index.html');
validateLocalRefs('slides/index.html');

const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map((m) => m[1]));
const hashes = [...html.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]);
for (const id of hashes) {
  if (!ids.has(id)) fail(`Broken anchor link: #${id}`);
}

for (const deck of ['defragmenting-the-user', 'kristin-school-enduring-knowledge-cores', 'kristin-school-pilot-validation-portfolio', 'kristin-school-resource-avenues-child-safety-first']) {
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
