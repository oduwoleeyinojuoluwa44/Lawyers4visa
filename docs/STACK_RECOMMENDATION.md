# Stack Recommendation

## Recommendation

For this project, the best stack is:

- `pnpm` workspaces
- `Turborepo`
- `Astro 6`
- `TypeScript`
- `Tailwind CSS v4`
- `Sanity`
- `Vercel`
- `Resend` for consultation emails
- `Cloudflare Turnstile` for form spam protection

## Why This Stack Fits This Project

Based on the Figma, this project looks like a content-heavy, conversion-focused legal website rather than a web app.

The design centers on:

- marketing pages
- service explanations
- FAQ content
- immigration insight articles
- consultation booking as the primary conversion
- strong SEO and performance requirements

That makes a content-first stack a better fit than an app-first stack.

It also makes a monorepo a better fit than a multirepo because this project will likely contain at least:

- a public website
- a CMS/editorial studio
- shared content modeling
- shared design tokens
- shared tooling and CI rules

For this reason, the recommendation is not just the framework stack. It is specifically a small monorepo.

## Monorepo Recommendation

Use a small monorepo, not a heavy enterprise monorepo.

Recommended workspace tools:

- `pnpm` workspaces for dependency management
- `Turborepo` for task orchestration and caching

This is the right level of structure for this project because it gives you:

- one repository
- one dependency graph
- shared packages where they are genuinely useful
- one CI pipeline
- easier cross-app changes

I would not start this project as a multirepo unless the website and CMS were owned by different teams with fully separate release cycles.

## Recommended Monorepo Shape

### Apps

- `apps/web`
  - Astro marketing website
- `apps/studio`
  - Sanity Studio

### Packages

- `packages/content`
  - shared schemas, types, queries, content constants
- `packages/theme`
  - design tokens, CSS variables, shared typography and spacing definitions
- `packages/config-eslint`
  - shared ESLint config
- `packages/config-typescript`
  - shared TypeScript config

### What Not To Add Immediately

Do not start with a large number of packages.

In particular, I would avoid creating `packages/ui` on day one unless the shared UI between the website and the studio becomes real and repeated. For this project, premature component extraction would add complexity faster than it creates value.

## Why Astro Is The Best Core Framework

`Astro` is the strongest fit because it is built for content-driven websites and keeps JavaScript minimal by default.

That matters here because this site should prioritize:

- fast page loads
- strong SEO
- stable rendering
- low client-side complexity
- easy composition of mostly static pages with a few interactive elements

This project does not appear to need a heavy client-side React application for v1.

## Why Tailwind CSS v4

`Tailwind CSS v4` is a good match for translating the Figma into a maintainable design system because:

- it supports CSS-first configuration
- it exposes design tokens as theme variables
- it is fast to build with
- it works well for custom marketing layouts without forcing component-library styling

That is useful for this project because the site needs bespoke visual implementation, not generic dashboard UI.

## Why Sanity

`Sanity` is the best CMS choice if the team needs to manage:

- immigration insight articles
- FAQs
- service pages
- office/contact details
- reusable call-to-action content

It is especially strong because it stores structured content cleanly, which makes it easier to:

- reuse content across pages
- model legal services and article taxonomies
- support editorial workflows
- grow the site without rebuilding the content layer later

## Why Vercel

`Vercel` is the fastest deployment path for this kind of project because:

- static Astro sites deploy with minimal configuration
- preview deployments are straightforward
- it supports Astro well
- it leaves room for server-rendered routes later if needed

## Why Resend And Turnstile

For consultation forms, the simplest solid setup is:

- `Resend` for transactional email delivery
- `Cloudflare Turnstile` for bot protection

That gives the site a clean v1 path for:

- consultation request notifications
- acknowledgement emails
- spam resistance on public forms

## Recommended Architecture

### Frontend

- `apps/web` using `Astro`
- `TypeScript`
- `Tailwind CSS v4`

### Content

- `apps/studio` using `Sanity Studio`
- GROQ-based structured content queries
- shared content logic in `packages/content`

### Hosting And Delivery

- `Vercel`
- static by default
- selective server rendering only where needed

### Form Handling

- Astro server endpoints or server actions where appropriate
- `Resend`
- `Cloudflare Turnstile`

### Analytics

Use one of:

- `Plausible`
- `Google Analytics 4`

For this project, I would prefer `Plausible` if the priority is simplicity and cleaner privacy posture.

## What I Would Not Use For V1

### Not Multirepo As The Primary Recommendation

I would not split this into separate repositories at the start because that would create unnecessary duplication across:

- dependency management
- linting and TypeScript setup
- shared schema definitions
- shared content types
- release coordination

For this specific project, multirepo would introduce more coordination cost than architectural benefit.

### Not Next.js As The Primary Recommendation

`Next.js` is a strong framework, but I would not choose it first for this project unless the roadmap already includes:

- authenticated client accounts
- case tracking
- document upload
- secure client portal features
- complex app-like user flows

For the current Figma and business shape, `Next.js` adds more application surface area than the site appears to need.

### Not WordPress As The Primary Recommendation

I would not choose `WordPress` unless:

- the client explicitly wants WordPress editing workflows
- the team already maintains WordPress comfortably
- plugin-driven content management is a hard requirement

The design looks custom enough that a modern frontend stack will likely produce a cleaner and more maintainable result.

## If The Project Expands Later

If this site later becomes a proper client product with authenticated features, the better stack would shift to:

- `Next.js 16.1`
- `TypeScript`
- `Tailwind CSS v4`
- `Sanity` or `Supabase`
- `Vercel`

Use that stack if phase 2 includes:

- login
- role-based access
- case dashboards
- document exchange
- payments
- client messaging

## Final Decision

If I were starting this project today as a greenfield build, I would use:

`pnpm workspaces + Turborepo + Astro 6 + TypeScript + Tailwind CSS v4 + Sanity + Vercel`

with:

- `Resend` for consultation emails
- `Cloudflare Turnstile` for public form protection

and this workspace shape:

- `apps/web`
- `apps/studio`
- `packages/content`
- `packages/theme`
- `packages/config-eslint`
- `packages/config-typescript`

## Verification Date

This recommendation was verified against official documentation on `2026-03-14`.

## Sources

- Astro 6 release:
  - https://astro.build/blog/astro-6/
- Astro deploy on Vercel:
  - https://docs.astro.build/en/guides/deploy/vercel/
  - https://vercel.com/docs/frameworks/frontend/astro
- Tailwind CSS v4:
  - https://tailwindcss.com/blog/tailwindcss-v4
- Tailwind theme variables:
  - https://tailwindcss.com/docs/customizing-spacing/
- Sanity Content Lake:
  - https://www.sanity.io/docs/content-lake
- Next.js 16.1:
  - https://nextjs.org/blog/next-16-1
- Cloudflare Turnstile:
  - https://developers.cloudflare.com/turnstile/get-started/
  - https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- Resend Email API:
  - https://resend.com/docs/api-reference/emails
