# jasonrundle.io, Claude Code Project Context

Jason's personal resume site. Modern product-doc visual direction. Next.js 16 on Vercel.

## What this is

A polished, professionally-scoped resume site at jasonrundle.io with three planned views:

1. **Resume homepage** (v1): traditional structure (header, summary, experience, projects, qualifications, contact) with a downloadable PDF.
2. **Dynamic projects / experiences** (v2): things that don't fit cleanly on the resume homepage. Backed by Supabase.
3. **Conversational AI** (v3): visitors can ask about Jason's background. Scope-bounded; deflection is intentional, not evasive. Streaming SSE via OpenRouter, Sonnet 4.5.

Scoped narrowly to "things that help sell Jason as a candidate." Not a blog. Not a portfolio of everything. If a section isn't doing candidate-selling work, flag it.

## Stack

- Next.js 16 (App Router), React 19, TypeScript 5, Tailwind 4
- Supabase (v2+), separate project from Latent Mind
- All LLM calls go through OpenRouter, not the Anthropic SDK directly. Standard headers: HTTP-Referer, X-Title
- Models: `anthropic/claude-sonnet-4-5` (chat), `openai/text-embedding-3-small` (1536 dims)
- PDF: `@react-pdf/renderer` at build time, output to `/public/jason-rundle-resume.pdf`

## Design language

- **Lane**: modern product-doc (Linear / Vercel / Stripe register)
- **Accent**: burnt sienna `#b45309`. Warm, considered, not tech-blue
- **Type**: Mona Sans body + Geist Mono accents (section labels, dates, metadata)
- **Layout signature**: right-margin metadata column on experience entries. Prose on the left, dates / scope / tech in small-cap mono on the right

## Data shape

Single source of truth: `src/data/resume.ts`. Types in `src/types/resume.ts`. The shape will move to Supabase in v2 (one table per kind), so design it for that move.

## Workflow rules from Jason

- **No em dashes** in prose. Commas, periods, colons, semicolons. This rule covers code comments and UI strings, not just chat.
- **Casual tone.** Don't pad responses.
- **REVISION.md** documents what landed and why, written when something lands. Don't confuse with chat-style summaries.
- **Direct-commit to `main`** is the default for v1. Solo project, Vercel auto-deploy.
- For non-trivial changes, wait for the Vercel preview URL and ping Jason before pushing to `main`.
- **Don't push to GitHub or deploy to Vercel without explicit go-ahead.** Same for any third-party uploads.
- **Ask one question at a time.** Don't batch.
- **Don't add features beyond what the task requires.** Default to simpler.

## Things deliberately not built

- No section taxonomy (wiki/playbook/etc. like Latent Mind has). Flat data.
- No status workflow, no `entry_versions`, no wikilinks.
- No auth in v1. Public site, public surface.
- No `log_question` AI tool in v3. `share_contact` only. Capturing visitor emails is a separate decision deferred to v3 design.
- No animation library in v1.
