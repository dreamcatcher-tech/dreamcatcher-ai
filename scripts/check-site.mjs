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
  'assets/social-card.svg',
  'robots.txt',
  'sitemap.xml',
  'vercel.json',
];
for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) fail(`Missing ${file}`);
}

const html = read('index.html');
const css = read('styles.css');
const vercel = JSON.parse(read('vercel.json'));

const mustContain = [
  ['dedicated AI agents', html],
  ['Your own AI agent, looked after by real people', html],
  ['Telegram', html],
  ['WhatsApp', html],
  ['Email', html],
  ['Call the agent', html],
  ['Coming soon', html],
  ['Human steward', read('assets/agent-capsule.svg')],
  ['mailto:tom@dreamcatcher.ai', html],
  ['framework', read('vercel.json')],
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
  if (html.includes(needle) || css.includes(needle)) fail(`Forbidden framework/chat reference found: ${needle}`);
}

if (vercel.framework !== null) fail('vercel.json must set framework to null for a static site');
if (vercel.outputDirectory !== 'dist') fail('vercel.json outputDirectory must be dist');
if (vercel.buildCommand !== 'node scripts/build.mjs') fail('vercel.json buildCommand must run scripts/build.mjs');

const localRefs = [...html.matchAll(/(?:href|src)="(?!https?:|mailto:|#|\/)([^"]+)"/g)].map((m) => m[1]);
for (const ref of localRefs) {
  const clean = ref.split('#')[0].split('?')[0];
  if (!existsSync(join(root, clean))) fail(`Broken local reference: ${ref}`);
}

const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map((m) => m[1]));
const hashes = [...html.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]);
for (const id of hashes) {
  if (!ids.has(id)) fail(`Broken anchor link: #${id}`);
}

if (!html.trimStart().startsWith('<!doctype html>')) fail('index.html must start with <!doctype html>');
if (!css.includes('@media (max-width: 760px)')) fail('styles.css must include mobile responsive styles');

if (!process.exitCode) {
  pass('Static site content and references validated');
}
