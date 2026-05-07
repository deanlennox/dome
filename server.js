// Protea Dome — local dev server
// Usage: node server.js [port]
// Default port: 3000

const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = parseInt(process.argv[2]) || 3000;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png':  'image/png',
  '.gif':  'image/gif',
  '.webp': 'image/webp',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
};

const server = http.createServer((req, res) => {
  // Normalise URL — strip query string, decode
  let urlPath = decodeURIComponent(req.url.split('?')[0]);

  // Default to index.html
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';

  const filePath = path.join(ROOT, urlPath);

  // Security: stay inside ROOT
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(`404 — not found: ${urlPath}`);
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 — server error');
      }
      return;
    }

    const ext  = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type':  mime,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'max-age=3600',
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n  Protea Dome server running`);
  console.log(`  http://localhost:${PORT}\n`);
  console.log(`  Serving files from: ${ROOT}`);
  console.log(`  Press Ctrl+C to stop\n`);
});
