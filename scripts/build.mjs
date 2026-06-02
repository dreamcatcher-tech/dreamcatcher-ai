import { cp, mkdir, rm, copyFile } from 'node:fs/promises';
import { join } from 'node:path';

await import('./check-site.mjs');
if (process.exitCode) process.exit(process.exitCode);

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await copyFile(join(root, 'index.html'), join(dist, 'index.html'));
await copyFile(join(root, 'styles.css'), join(dist, 'styles.css'));
await copyFile(join(root, 'robots.txt'), join(dist, 'robots.txt'));
await copyFile(join(root, 'sitemap.xml'), join(dist, 'sitemap.xml'));
await cp(join(root, 'assets'), join(dist, 'assets'), { recursive: true });

console.log('✓ Built static site into dist/');
