# Revision History

## 2026-05-28, v1 scaffold

### What changed

Initial scaffold of jasonrundle.io. Next.js 16, React 19, TypeScript 5, Tailwind 4. Modern product-doc visual direction with burnt sienna accent (`#b45309`), Mona Sans body, Geist Mono accents, and a right-margin metadata column on experience entries.

Single resume page at `/`, content sourced from `src/data/resume.ts` (typed placeholders; curated content lands later). Build-time PDF generation via `@react-pdf/renderer` from the same data, written to `/public/jason-rundle-resume.pdf`.

### Why

v1 of the resume site. DoD: traditional resume view live at jasonrundle.io with the PDF download working. Projects browse and conversational AI deferred to v2 and v3.

### Verified

(Pending: `next build` clean run, generated PDF inspected, dev server visual check.)

### Not done

- Real content. Placeholder until curated export lands.
- Email link `href`. Placeholder until custom-on-domain vs. existing decision lands.
- GitHub remote, Vercel project, custom domain. Waiting on infrastructure conversation.
- YouTube link, Latent Mind demo embed. Positioning decisions deferred.
