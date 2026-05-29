/**
 * Resume content, single source of truth for both src/app/page.tsx (web) and
 * src/components/pdf/ResumePdf.tsx (PDF). The two views render from the same
 * data. The PDF is not more private than the web; anything not safe for the
 * public web is not safe for the PDF.
 *
 * Privacy and content guidelines (captured 2026-05-28):
 *
 * Location: city + state/region only. No street address, ever.
 * Excluded by policy: phone number, street address, DOB, age, marital status,
 *   photo (ask before adding a photo).
 * Flag for review: specific internal metrics (revenue, headcount changes,
 *   internal KPIs), customer names not publicly disclosed, internal codenames,
 *   NDA-covered material. Default to leaving these out.
 * Tone: neutral, forward-looking, achievement-oriented. No implicit criticism
 *   of past or current employers ("despite organizational constraints" is out).
 * Concrete over vague: "reduced deployment time from 2 hours to 15 minutes"
 *   over "improved deployment processes."
 *
 * The test for any line: would the head of comms at the (former or current)
 * employer say "fine, that's public knowledge"? If not, flag it.
 *
 * Current employer: extra care. When in doubt, less is more.
 *
 * Full guidelines documented in REVISION.md.
 */
import type { ResumeData } from "@/types/resume";

export const resume: ResumeData = {
  profile: {
    name: "Jason Rundle",
    // Scannable role/scope line. Format: role | scope | distinctive thread.
    headline: "Placeholder headline. Role | scope | distinctive thread.",
    location: "TBD City, TBD State", // city + state only, never a street address
    summary:
      "Placeholder summary. Two or three neutral, forward-looking sentences introducing Jason and the work he does. No commentary on past or current employer dynamics.",
    contact: [
      // Email decision is made (jason@jasonrundle.io via Namecheap forwarding to
      // Protonmail). Holding TBD until end-to-end verification confirms forwarded
      // mail lands in inbox, not spam.
      { label: "Email", href: "#", display: "TBD email" },
      // LinkedIn and GitHub: full URLs, not bare handles.
      { label: "LinkedIn", href: "#", display: "TBD URL" },
      { label: "GitHub", href: "#", display: "TBD URL" },
    ],
  },

  experiences: [
    {
      id: "placeholder-current",
      title: "Placeholder Role",
      company: "Placeholder Company",
      location: "City, State",
      startDate: "2024-01",
      endDate: null,
      summary:
        "One or two neutral sentences framing the role: what the company does (publicly known framing only) and what Jason's scope is.",
      highlights: [
        "Built [specific shipped thing] that [concrete public-facing outcome].",
        "Led a team of [N] working on [publicly-known initiative].",
        "Reduced [public-facing metric] from [X] to [Y].",
      ],
      scope: "Team / responsibility statement (no internal headcount changes, no revenue unless public)",
      tech: ["TypeScript", "Next.js", "Postgres"],
    },
    {
      id: "placeholder-previous",
      title: "Previous Placeholder Role",
      company: "Previous Placeholder Company",
      location: "City, State",
      startDate: "2021-03",
      endDate: "2023-12",
      summary:
        "One neutral sentence framing the previous role.",
      highlights: [
        "Shipped [specific public-facing thing].",
        "Owned [publicly-stated area of responsibility].",
      ],
      scope: "Brief scope statement",
      tech: ["Python", "React", "AWS"],
    },
  ],

  projects: [
    {
      id: "placeholder-project",
      title: "Placeholder Project",
      year: "2025",
      summary:
        "One or two sentences describing a self-directed or publicly-shared project: what it is, what it solves, what is interesting about how it was built.",
      tech: ["TypeScript", "Next.js", "Supabase"],
    },
  ],

  certifications: [
    {
      id: "placeholder-cert",
      name: "Placeholder Certification",
      year: "20XX",
    },
  ],

  education: [
    {
      id: "placeholder-edu",
      statement: "Placeholder education statement. Honest framing, no padding.",
    },
  ],

  skills: [
    {
      id: "placeholder-skill-category",
      name: "Placeholder Skill Category",
      items: ["Placeholder item 1", "Placeholder item 2", "Placeholder item 3"],
    },
  ],
};
