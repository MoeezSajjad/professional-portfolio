# Moeez Sajjad Hashmi — support portfolio

React and JavaScript portfolio styled with Tailwind CSS and a dark cyan headset schematic. Node.js builds the production site and serves local previews. The single-page site pre-renders the CV content as HTML and hydrates the meeting example in the browser. Fonts, artwork and the public CV are served locally.

## Live websites

- [Professional portfolio](https://professional-portfolio-bpq.pages.dev/)
- [SMNG public recruiter demo](https://moeezsajjad.github.io/Smart-Meetings-Notes-Generator/#/sample) — fictional meeting; no sign-in required.
- [SMNG application](https://moeezsajjad.github.io/Smart-Meetings-Notes-Generator/) — live audio processing is restricted to authorized accounts.

## Run locally

Use Node.js 22 or later. From the repository root:

```sh
npm ci
npm run build
npm start
```

Open http://127.0.0.1:8000. The built site also opens directly from `dist/index.html`.

## Free Cloudflare Pages deployment

Create a Pages application and connect this repository. Select production branch `main`, framework preset **None**, build command `npm run build`, and output directory `dist`. Set `NODE_VERSION` to `22`. Keep the root directory empty. Deploy to the included pages.dev address.

[Cloudflare static HTML guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/)

## Maintain

- Edit profile content, links and the illustrative meeting interaction in `src/App.jsx`. The interaction switches between a sample transcript and its notes.
- Edit Tailwind utilities in the components and typography, color tokens and responsive styling in `src/styles.css`. Page metadata and Person structured data are in `src/document.html`.
- The source CV supplies roles, dates, skills and education. CRM and entry-level AI automation are career interests. [Smart Meetings Notes Generator](https://github.com/MoeezSajjad/Smart-Meetings-Notes-Generator) has a deployed public sample and a restricted live processing mode.
- Keep only the sanitized CV in `public/moeez-sajjad-cv.pdf`. The original headset artwork ships as WebP. Its optional Python/Pillow generator is `scripts/artwork.py`.
- Run the build before merging changes. Cloudflare builds from source on the production branch; regenerate tracked `dist` files if distributing a local static copy. Check layout at 320, 390, 768 and 1440 CSS pixels. Verify keyboard focus, anchors, contact and source links, both transcript/notes states and the PDF download.
