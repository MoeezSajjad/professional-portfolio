import { build } from "esbuild";
import postcss from "postcss";
import tailwind from "tailwindcss";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { mkdir, cp, copyFile, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

await mkdir(".build", { recursive: true });
await mkdir("dist", { recursive: true });
await cp("public", "dist", { recursive: true });
for (const [family, weight, output] of [
  ["barlow", 400, "regular"],
  ["barlow", 600, "semibold"],
  ["barlow-condensed", 600, "display"],
]) {
  await copyFile(
    `node_modules/@fontsource/${family}/files/${family}-latin-${weight}-normal.woff2`,
    `dist/barlow-${output}.woff2`,
  );
  await copyFile(
    `node_modules/@fontsource/${family}/LICENSE`,
    `dist/${family}-LICENSE.txt`,
  );
}
await build({
  entryPoints: ["src/App.jsx"],
  outfile: ".build/render.mjs",
  bundle: true,
  platform: "node",
  format: "esm",
  packages: "external",
});
const { default: App } = await import(
  pathToFileURL(path.resolve(".build/render.mjs"))
);
const content = renderToString(createElement(App));
await build({
  entryPoints: ["src/client.jsx"],
  outfile: "dist/app.js",
  bundle: true,
  minify: true,
  format: "iife",
  define: { "process.env.NODE_ENV": '"production"' },
});
const input = await readFile("src/styles.css", "utf8");
const css = await postcss([tailwind({ content: ["./src/**/*.jsx"] })]).process(
  input,
  { from: "src/styles.css" },
);
await writeFile("dist/style.css", css.css);
const template = await readFile("src/document.html", "utf8");
await writeFile(
  "dist/index.html",
  template.replace("<!--app-->", () => content),
);
