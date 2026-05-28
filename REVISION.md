# Revision History

## 2026-05-28, v1 scaffold

### What changed

Initial scaffold of jasonrundle.io. Next.js 16, React 19, TypeScript 5, Tailwind 4. Modern product-doc visual direction with burnt sienna accent (`#b45309`), Mona Sans body, Geist Mono accents, and a right-margin metadata column on experience entries.

Single resume page at `/`, content sourced from `src/data/resume.ts` (typed placeholders; curated content lands later). Build-time PDF generation via `@react-pdf/renderer` from the same data, written to `/public/jason-rundle-resume.pdf`.

### Why

v1 of the resume site. DoD: traditional resume view live at jasonrundle.io with the PDF download working. Projects browse and conversational AI deferred to v2 and v3.

### Verified

- `npm run build` runs the PDF generation script first and then `next build`. Both complete cleanly. PDF written to `/public/jason-rundle-resume.pdf` (1 page, ~4.7 KB). Next compiled 3 static pages, no errors.
- Next.js auto-flipped `tsconfig.json` `jsx: "preserve"` to `jsx: "react-jsx"` and auto-created `next-env.d.ts`. Both expected on first build.
- Dev server visual check is on Jason. `npm run dev` starts the page at http://localhost:3000.

### PDF design choices

- Built with `@react-pdf/renderer` using its built-in Helvetica + Courier rather than registering Mona Sans / Geist Mono. Reason: built-in fonts are more reliable in Node build environments and the PDF doesn't need pixel parity with the web. PDF identity comes from the same accent color (`#b45309`), the same two-column metadata-rail layout, and the same content. Type family is the one deliberate divergence from web.
- US Letter size, single page for v1 placeholder content. Multi-page break behaviour is on `wrap={false}` per entry, so entries never split mid-block.

### Not done

- Real content. Placeholder until curated export lands.
- Email, LinkedIn, GitHub link `href`. All placeholders pointing to `#`. Need decisions on custom-on-domain email vs. existing, and which handles to surface.
- GitHub remote, Vercel project, Supabase project, custom domain DNS. Waiting on infrastructure conversation.
- YouTube link, Latent Mind demo embed. Positioning decisions deferred.
- Dev mode does not auto-generate the PDF. Run `npm run pdf` after editing `src/data/resume.ts` if you want the dev `Download PDF` link to be current. Production `npm run build` always regenerates.
