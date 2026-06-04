import { mkdir, readdir } from 'node:fs/promises';
import { createServer } from 'node:http';
import { createReadStream, existsSync } from 'node:fs';
import { extname, join, basename, normalize, relative, dirname } from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = normalize(join(dirname(fileURLToPath(import.meta.url)), '..'));
const slidesDir = join(root, 'slides');
const decksDir = join(slidesDir, 'decks');
const pdfsDir = join(slidesDir, 'pdfs');
const port = Number(process.env.SLIDE_PDF_PORT || 8140);
const host = '127.0.0.1';

const contentTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.mjs', 'text/javascript; charset=utf-8'],
  ['.md', 'text/markdown; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.pdf', 'application/pdf'],
]);

const server = createServer((req, res) => {
  try {
    const requestUrl = new URL(req.url || '/', `http://${host}:${port}`);
    const requestedPath = decodeURIComponent(requestUrl.pathname.replace(/^\/+/, '')) || 'index.html';
    const filePath = normalize(join(root, requestedPath));
    if (!filePath.startsWith(root) || !existsSync(filePath)) {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'content-type': contentTypes.get(extname(filePath)) || 'application/octet-stream' });
    createReadStream(filePath).pipe(res);
  } catch (err) {
    res.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' });
    res.end(String(err));
  }
});

const run = (command, args) => new Promise((resolve, reject) => {
  const child = spawn(command, args, { cwd: root, stdio: 'inherit', shell: false });
  child.on('exit', (code) => {
    if (code === 0) resolve();
    else reject(new Error(`${command} ${args.join(' ')} exited with ${code}`));
  });
});

await mkdir(pdfsDir, { recursive: true });
const decks = (await readdir(decksDir))
  .filter((name) => name.endsWith('.md'))
  .sort();

await new Promise((resolve) => server.listen(port, host, resolve));
console.log(`Serving ${root} at http://${host}:${port}/`);

try {
  for (const deck of decks) {
    const slug = basename(deck, '.md');
    const deckParam = `decks/${deck}`;
    const url = `http://${host}:${port}/slides/reveal-runner.html?deck=${encodeURIComponent(deckParam)}`;
    const output = join(pdfsDir, `${slug}.pdf`);
    console.log(`\n==> Rendering ${relative(root, output)}`);
    await run('npx', [
      '--yes',
      'decktape',
      'reveal',
      '--size', '1280x720',
      '--load-pause', '2500',
      '--pause', '500',
      '--chrome-arg=--no-sandbox',
      url,
      output,
    ]);
  }
} finally {
  server.close();
}
