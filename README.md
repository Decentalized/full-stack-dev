# Full Portfolio

A faithful, high-fidelity recreation of the [anandhusajan.com](https://www.anandhusajan.com/) portfolio — a dark, Netflix-red themed developer site built on the JavaScript-Mastery style stack, including a real **3D WebGL globe**.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — entrance & hover animations
- [three](https://threejs.org/) + [three-globe](https://github.com/vasturiano/three-globe) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) — the 3D globe & canvas reveal shaders

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Sections

| Section | Component | Notes |
|---------|-----------|-------|
| Floating nav | `FloatingNav` | Pill nav + online indicator + mobile bottom bar |
| Hero | `Hero` | Dual spotlights, animated blobs, profile card, stats |
| Intro cards | `IntroCards` | Name, interactive Philosophy tabs + **3D globe**, contact |
| Featured projects | `RecentProjects` | 3D perspective pin cards |
| About | `About` + `ui/BentoGrid` | Bento grid, expertise, gradient-animation card |
| Experience | `Experience` + `ui/MovingBorder` | Moving-border cards |
| Clients | `Clients` | Company logos |
| Approach | `Approach` + `ui/CanvasRevealEffect` | Dot-matrix reveal shader cards |
| Blog | `Blog` | Recent insights |
| Footer | `Footer` | CTA, socials, links |

## Customize

All content lives in **`src/data/index.ts`** — edit `siteConfig`, `projects`, `workExperience`, `gridItems`, `companies`, `approach`, `blogPosts`, etc.

Images/SVGs are in `public/` (downloaded from the reference as placeholders — swap in your own). The globe country data is `src/data/globe.json`.

## Build

```bash
npm run build
npm start
```

## Reference

The `_ref/` folder contains the downloaded reference HTML/CSS used to match the design. It is not part of the app and can be deleted.
