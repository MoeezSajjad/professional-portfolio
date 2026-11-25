import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("dist");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
};
const port = Number(process.env.PORT || 8000);
createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    const file = path.resolve(
      root,
      "." + (pathname === "/" ? "/index.html" : pathname),
    );
    if (!file.startsWith(root + path.sep)) throw new Error("Invalid path");
    const body = await readFile(file);
    response
      .writeHead(200, {
        "Content-Type": mime[path.extname(file)] || "application/octet-stream",
      })
      .end(body);
  } catch {
    response.writeHead(404).end("Page unavailable");
  }
}).listen(port, "127.0.0.1", () =>
  console.log("Portfolio preview at http://127.0.0.1:" + port),
);
