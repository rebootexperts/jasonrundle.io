# jasonrundle.io

Personal resume site. Modern product-doc visual direction. Next.js 16, React 19, TypeScript 5, Tailwind 4, deployed to Vercel (eventually).

## Phases

- **v1 (current)**: Single resume page at `/` with a build-time-generated PDF download. Content lives in typed TS data.
- **v2 (planned)**: Dynamic projects / experiences browse backed by Supabase + pgvector.
- **v3 (planned)**: Conversational AI for visitors to ask about Jason's background. Streaming SSE via OpenRouter, Sonnet 4.5.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Building

```bash
npm run build
```

`npm run build` first runs `scripts/generate-pdf.ts` to write `/public/jason-rundle-resume.pdf` from the same TS data the page consumes, then runs `next build`. The PDF and HTML can't drift in content.
