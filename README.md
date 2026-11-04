# Ninety 4 Film — Official Website

The official website of **Ninety 4 Film**, an independent film and television production company based in Cairo, Egypt.

The website presents the company's identity, production services, selected projects, team members, professional credits, and contact information.

**Production domain:** https://www.ninety4film.com  
**Repository:** https://github.com/assarjunior/n4f-v0  
**Deployment target:** Hostinger Business Web Hosting — Node.js Web App

## Technology Stack

| Technology           | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| Next.js 16           | App Router, server rendering, routing, metadata |
| React 19             | User interface                                  |
| TypeScript           | Type-safe application development               |
| Tailwind CSS 4       | Styling and design tokens                       |
| shadcn/ui & Base UI  | UI primitives                                   |
| Lucide & React Icons | Icons                                           |
| Sharp                | Image optimization                              |
| pnpm                 | Dependency management                           |

### Typography

- **Aquifer** — locally hosted display font
- **Manrope** — body and interface typography, loaded through `next/font/google`

### Brand Colors

| Color  | Hex       |
| ------ | --------- |
| Maroon | `#611512` |
| Beige  | `#FCD6B4` |
| Orange | `#D68340` |

Brand and semantic color tokens are defined in `src/app/globals.css`.

## Getting Started

### Prerequisites

- A Node.js version compatible with Next.js 16
- pnpm (the repository declares version `12.11.2`)
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/assarjunior/n4f-v0.git
cd n4f-v0
```

Install dependencies:

```bash
pnpm install --frozen-lockfile
```

Create a local `.env.local` file:

```dotenv
SITE_INDEXABLE=false
```

Start the development server:

```bash
pnpm dev
```

Open http://localhost:3000.

## Available Commands

| Command      | Description                  |
| ------------ | ---------------------------- |
| `pnpm dev`   | Start the development server |
| `pnpm lint`  | Run ESLint                   |
| `pnpm build` | Create a production build    |
| `pnpm start` | Serve the production build   |

To test the production version locally:

```bash
pnpm lint
pnpm build
pnpm start
```

## Project Structure

```text
n4f-v0/
├── public/
│   ├── brand/           # Brand symbols and graphics
│   ├── capabilities/    # Homepage service imagery
│   ├── media/           # Project and credit artwork
│   ├── og-source/       # Social preview image sources
│   ├── posters/         # Film posters
│   ├── services/        # Services imagery
│   ├── team/            # Team portraits
│   └── UI/              # Decorative UI assets
│
├── scripts/
│   ├── optimize-images.mjs
│   └── optimize-posters.mjs
│
├── src/
│   ├── app/             # Routes, layouts, pages and metadata
│   ├── components/
│   │   ├── home/        # Homepage sections
│   │   ├── layout/      # Header, footer and shared elements
│   │   ├── seo/         # Structured data components
│   │   └── ui/          # Reusable UI primitives
│   ├── config/          # Website content and configuration
│   ├── fonts/           # Local font assets
│   ├── lib/             # Utilities, SEO and social cards
│   └── types/           # TypeScript data models
│
├── next.config.ts
├── package.json
└── pnpm-lock.yaml
```

## Website Routes

### Main Pages

- `/` — Homepage
- `/work` — Selected productions
- `/services` — Production services
- `/company` — Company and team
- `/contact` — Contact information

### Dynamic Pages

- `/work/[slug]` — Individual project details
- `/company/team/[slug]` — Individual team profiles

### Generated Routes

- `/og/company` — Company social preview
- `/og/work/[slug]` — Project social previews
- `/og/team/[slug]` — Team social previews
- `/sitemap.xml` — XML sitemap
- `/robots.txt` — Robots directives

## Content Management

Website content is currently maintained through typed configuration files. It does not require a separate CMS or database.

| File                        | Responsibility                           |
| --------------------------- | ---------------------------------------- |
| `src/config/company.ts`     | Company information and social links     |
| `src/config/config-work.ts` | Productions, project details and credits |
| `src/config/team.ts`        | Team profiles and professional credits   |
| `src/config/seo.ts`         | Page titles and descriptions             |

### Adding a Production

Edit `src/config/config-work.ts` and add an entry conforming to `WorkEntry` in `src/types/types-work.ts`.

Provide the project slug, editorial information, poster metadata, production credits, and publication settings.

Published projects are exposed through the work archive and corresponding detail routes.

### Updating Team Members

Edit `src/config/team.ts`.

Team data follows the types defined in `src/types/types-team.ts`. Published members appear in the team directory and have individual profile pages.

When adding a profile, also review the associated SEO configuration and social preview requirements.

## Image Optimization

The website uses `next/image` for responsive image loading and optimization.

Source artwork is retained for regeneration and quality control.

### Optimize Homepage Assets

```bash
node scripts/optimize-images.mjs
```

Processes the homepage hero and torn-paper texture.

### Optimize Film Posters

```bash
node scripts/optimize-posters.mjs
```

Generates optimized JPEG versions of the 1+1 and Meen Yesdak posters.

**Important:** Do not remove original assets while optimization scripts still depend on them.

Use optimized images in the website only after checking visual quality, text legibility, aspect ratio, and transparency where applicable.

## Video Playback

Project video playback is implemented in:

`src/app/work/_components/ProjectVideoPlayer.tsx`

The player uses a click-to-load approach:

1. Display project artwork as a preview.
2. Wait for the visitor to activate playback.
3. Mount the YouTube iframe only after interaction.

This avoids loading the YouTube player during initial page rendering.

## SEO and Social Metadata

SEO functionality includes:

- Page-specific titles and descriptions
- Canonical URLs
- Open Graph and Twitter/X metadata
- Dynamically generated social preview images
- Structured data
- XML sitemap
- Search indexing controls

Relevant files:

- `src/lib/social-metadata.ts`
- `src/lib/social-card.tsx`
- `src/lib/structured-data.ts`
- `src/app/robots.ts`
- `src/app/sitemap.ts`

### Search Indexing

The application uses:

```dotenv
SITE_INDEXABLE=false
```

When the value is not `"true"`, the root metadata specifies `noindex` and `nofollow`, and the robots route omits the production sitemap declaration.

Set this variable to `true` only when the production website is ready to be indexed.

Note that the sitemap route can still be accessed while indexing is disabled.

### Canonical Domain

The site origin is currently defined in:

`src/lib/social-metadata.ts`

```ts
export const SITE_ORIGIN = "https://www.ninety4film.com";
```

Temporary deployment domains do not automatically replace this value.

## Accessibility

Accessibility features include:

- Keyboard-accessible navigation
- Skip-to-main-content link
- Semantic headings and landmarks
- Focus-visible indicators
- Native modal navigation on mobile
- Escape-key dismissal
- Reduced-motion support
- Alternative text for informative images

Accessibility should be checked whenever navigation, visual components, or interactive behavior changes.

## Deployment

**Target platform:** Hostinger Business Web Hosting  
**Application type:** Next.js / Node.js Web App  
**Source:** GitHub repository, `main` branch

The production deployment configuration is being finalized.

Deployment must support:

- Next.js server rendering
- Dynamic route handlers
- Image optimization
- Local file access for generated social cards
- Environment variables

Do not configure this application as a static HTML export.

### Deployment Sequence

1. Validate the application locally.
2. Confirm Hostinger-compatible build settings.
3. Connect the GitHub repository to a Hostinger Web App.
4. Deploy to a temporary Hostinger domain.
5. Verify routes, media, social images, SEO and performance.
6. Back up the existing website and confirm email/DNS settings.
7. Connect `ninety4film.com`.
8. Verify HTTPS, redirects and canonical URLs.
9. Enable production indexing after launch validation.

The existing Hostinger website and email service must remain intact until the replacement deployment is verified.

## Maintenance Checklist

Before merging or deploying changes:

- Run `pnpm lint`.
- Run `pnpm build`.
- Check desktop and mobile layouts.
- Verify newly added image paths.
- Test affected navigation and interactions.
- Verify SEO metadata for new routes.
- Check Open Graph output when modifying project or team images.
- Ensure environment files and secrets are not committed.

## Project Ownership

Developed for **Ninety 4 Film**.

Cairo, Egypt  
https://www.ninety4film.com

All company branding, original artwork, and proprietary content remain the property of their respective owners.
