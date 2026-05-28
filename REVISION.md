# Revision History

## 2026-05-28, content and privacy guidelines for resume content

### What changed

Captured the rules that govern what goes on the resume site (web and PDF). Rules now live in two places:

1. **Header comment** at the top of `src/data/resume.ts`. Visible to anyone editing the file (human or Claude) before they touch a line of content.
2. **This entry**, as the long-form reference.

Placeholder content in `src/data/resume.ts` reworked to model the right shape:

- Highlights now show the concrete-public-outcome pattern (`"Built [specific shipped thing] that [concrete public-facing outcome]"`, `"Reduced [public-facing metric] from [X] to [Y]"`) instead of the previous abstract "placeholder thing X drove placeholder outcome Y."
- The previous-role highlight "Placeholder previous-role achievement" became "Shipped [public-facing thing]" and "Owned [publicly-stated area of responsibility]."
- The `scope` field on the current-role placeholder dropped the "team size, ARR, users" hint (ARR is a revenue figure, exactly the kind of internal metric the guidelines flag for review) and now reads as a public-facing scope statement.
- The "operating under placeholder constraint" phrasing was removed; it modeled the implicit-criticism-of-employer pattern the tone guideline calls out.
- Location placeholder is now "TBD City, TBD State" with an inline comment reinforcing the no-street-address rule.
- Contact link placeholders for LinkedIn and GitHub now say "TBD URL" instead of "TBD handle" (the rule is full URLs).
- Email contact still `href="#"` and `display: "TBD email"` until end-to-end verification of the Namecheap → Protonmail forwarding confirms mail lands in inbox.

`src/types/resume.ts`: `Profile` gained a JSDoc noting the deliberate field exclusions (phone, street address, DOB, age, marital status, photo). The `location` property got a JSDoc making the city+state-only rule visible from the type.

### The rules (long form)

**Personal contact information**

Goes on the site (web and PDF):
- Name
- Location: city and state/region only (e.g., "Based in [City], [State]"). No street address.
- Email: jason@jasonrundle.io (once forwarding is verified end-to-end)
- LinkedIn: full URL
- GitHub: full URL

Does not go on the site:
- Phone number. Recruiters who need it will ask.
- Home address.
- Date of birth, age, marital status, photo (ask before adding a photo).

**Information about companies and roles**

Fine to include:
- Company names, job titles, date ranges, general scope of role.
- Team sizes, reporting structure at a high level.
- Publicly known projects, products, or initiatives.
- Metrics and achievements that have been publicly shared by the company or by Jason elsewhere (LinkedIn posts, conference talks, etc.).
- Skills, technologies, methodologies used.

Flag for review:
- Specific internal metrics (revenue figures, headcount changes, internal KPIs).
- Customer names not publicly disclosed.
- Internal product codenames or unreleased products.
- References to specific internal events, incidents, or restructurings.
- Anything that might be covered by an NDA or confidentiality agreement.

The test: would the head of communications at the former (or current) employer say "fine, that's public knowledge"? If not, flag it.

**Tone**

Neutral and forward-looking. No implicit criticism of past or current employers ("despite organizational constraints" is out, even if true). Achievement-oriented framing: what was built, shipped, improved, or learned. Concrete over vague: "Reduced deployment time from 2 hours to 15 minutes" over "Improved deployment processes."

**PDF and web equivalence**

The downloadable PDF contains the same information as the web version. The PDF is not "more private" or "for serious recruiters only." Anyone can download it. If something isn't safe for the public web, it isn't safe for the PDF.

**Current employer (Reboot Experts)**

Extra care. The consequences of a misstep are most immediate. Generic role description and publicly known projects only. When in doubt, less is more.

### Why

Content drop is next. Before real content lands, the rules need to be visible to whoever (or whatever) is writing it. Putting them in a file header rather than only in REVISION.md means the next time anyone opens `src/data/resume.ts` to edit content, the rules are right there.

### Not done

- Real content. Placeholder content still in place, awaiting curated export.
- Email href update. Email forwarding is set up but waiting on end-to-end inbox verification before flipping `href="#"` to `href="mailto:jason@jasonrundle.io"`.

---

## 2026-05-28, v1 live

### What changed

jasonrundle.io is live in production. Vercel project linked to the GitHub repo, Namecheap A record on `@` → `216.198.79.1`, Namecheap CNAME on `www` → project-specific Vercel endpoint (`c5d41582a36e806f.vercel-dns-017.com`), Namecheap default URL-redirect parking record on `@` deleted. Canonical is apex (`jasonrundle.io`). `www.jasonrundle.io` and `jasonrundle-io.vercel.app` both 308-redirect to the apex. Vercel Deployment Protection disabled so the public surface is actually public.

### Why apex as canonical

Apex is shorter, modern convention (Linear / Vercel / Stripe), matches Latent Mind's pattern. 308 instead of 307 because the redirect is permanent: crawlers transfer link equity and clients can cache it.

### Verified

- `https://jasonrundle.io` loads. All sections present (header, summary, Experience, Selected Projects, Qualifications). Placeholder content as expected.
- `https://www.jasonrundle.io` resolves to the same page content (308 to apex).
- `https://jasonrundle.io/jason-rundle-resume.pdf` serves a valid PDF (PDF 1.3, title "Jason Rundle", author "Jason Rundle", 4.6 KB, 3 link annotations).

### Not done

- Real content. Placeholder until curated export lands.
- Contact link hrefs. Email, LinkedIn, GitHub all still `#`. Email forwarding (jason@jasonrundle.io → jkrundle@protonmail.com) is set up at Namecheap, so the contact href is decidable when we do the content drop.
- v2 (Supabase + projects browse). v3 (chat).
- DKIM TXT record. SPF is in (`v=spf1 include:spf.efwd.registrar-servers.com ~all`). DKIM was mentioned as configured but wasn't visible in the Namecheap Advanced DNS panel screenshot. Worth a separate confirmation that forwarded mail is landing in Protonmail's inbox and not spam.

---

## 2026-05-28, infrastructure setup

### What changed

Public GitHub repo created at `github.com/rebootexperts/jasonrundle.io`, pushed all v1 scaffold commits. Vercel project, DNS records, and email forwarding handed off to Jason for manual completion (instructions captured below for the next time we have to redo this).

### Why

**Public repo.** Nothing sensitive in the codebase. The codebase itself is part of the candidate-selling signal: "here is the site, and the code behind it, both of which are unembarrassed by being looked at." Same reasoning that makes Vercel preview URLs shareable later.

**`rebootexperts` account.** Matches the established pattern. Latent Mind also lives at `github.com/rebootexperts/latentmind`. Keeps Jason's projects under one identity.

**Repo named `jasonrundle.io` rather than `jasonrundle`.** The site is the artifact, not the person. Including the TLD reads as "the site" and avoids the repo looking like a personal-name slug. Slight divergence from the `latentmind` (no `.io`) pattern. The Latent Mind name was a project name that happens to also be a domain; this project's name *is* the domain.

### Hand-off plan (Vercel, DNS, email)

**Vercel project**
1. vercel.com/new
2. Import `rebootexperts/jasonrundle.io`
3. Framework: Next.js (auto-detected). Root, build, install, output: all defaults.
4. No environment variables in v1.
5. Deploy.

After the first deploy, Project Settings → Domains: add `jasonrundle.io` (production) and `www.jasonrundle.io` (optional, www → apex redirect). Vercel will surface the exact A and CNAME records to set at Namecheap.

**Namecheap DNS** (typical Vercel pattern, defer to whatever the Vercel dashboard surfaces)
- A record on `@` → 76.76.21.21
- CNAME on `www` → cname.vercel-dns.com

**Email** (Namecheap forwarding → Protonmail)
- jason@jasonrundle.io → jkrundle@protonmail.com via Namecheap email forwarding
- MX records (Namecheap's mail servers) + SPF + DKIM TXT records
- Same pattern Jason has on latentmind.io and punkflow.io

The Vercel records (A + CNAME) and the email forwarding records (MX + TXT) coexist at Namecheap, since Namecheap stays authoritative for the zone. Nameservers do not change.

### Not done

- The Vercel + DNS + email setup itself. Jason is doing those manually.
- Once Vercel deploy is live and the domain is wired, REVISION.md should get a "verified" follow-up noting the production URL.

---

## 2026-05-28, v1 scaffold

### What changed

Initial scaffold of jasonrundle.io. Next.js 16, React 19, TypeScript 5, Tailwind 4. Modern product-doc visual direction with burnt sienna accent (`#b45309`), Mona Sans body, Geist Mono accents, and a right-margin metadata column on experience entries.

Single resume page at `/`, content sourced from `src/data/resume.ts` (typed placeholders; curated content lands later). Build-time PDF generation via `@react-pdf/renderer` from the same data, written to `/public/jason-rundle-resume.pdf`.

### Why

v1 of the resume site. DoD: traditional resume view live at jasonrundle.io with the PDF download working. Projects browse and conversational AI deferred to v2 and v3.

### Design rationale

**Lane: modern product-doc.** Picked over editorial/typographic (too dated unless the type pairing is perfect) and terminal/engineering (pigeonholes as IC engineer, narrower than the role Jason is positioning for). Modern product-doc reads like Linear / Vercel / Stripe, but carries the "looks like every well-designed SaaS site" risk. The three deliberate non-default choices below counter that.

**Type: Mona Sans + Geist Mono.** Inter and Geist Sans are the SaaS defaults and produce instantly-generic pages. Mona Sans (GitHub's open type, free) is well-drawn, has real personality at display weights, and isn't on every tech site. Geist Mono is reserved for structural type only: section labels, dates, scope, tech in the metadata rail. The mono accents add texture without going full terminal.

**Accent: burnt sienna (#b45309).** Warm, not blue, not Linear-purple. Reads "considered" rather than "tech." Editorial register without being literally serif. Used sparingly on section labels, bullet dots, hover states. Not on backgrounds or large surfaces, since that would tip the page from "tasteful" into "branded."

**Layout signature: right-margin metadata rail on each entry.** Prose on the left (title, company, summary, highlights), thin rail on the right (dates, location, scope, tech in small-caps mono). On mobile the rail collapses inline below the entry. Skim reads the rail as an at-a-glance summary; close-read follows the prose as narrative. Tufte-adjacent, rare on resume sites. This is the load-bearing personalization move; the type and color choices reinforce it.

**Scope discipline.** No section taxonomy, no status workflow, no `entry_versions`, no wikilinks, no animation library. Flat typed data and a single page. The resume corpus is small enough that more architecture is debt, not flexibility. Patterns from Latent Mind get borrowed where they fit (OpenRouter, embed-via-trigger, hybrid search) and dropped where they don't (the whole knowledge-base taxonomy).

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
