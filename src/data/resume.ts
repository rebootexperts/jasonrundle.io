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
      id: "carrix",
      title: "Lead Technical Support Specialist, Deskside",
      company: "Carrix",
      location: "TBD",
      startDate: "2021-06",
      endDate: null,
      summary:
        "Lead deskside support operations within Carrix IT, covering HQ and the multi-site Canadian Tideworks Technology teams. Scope spans asset management, vendor relationships, ServiceNow workflow design, and AI tooling for team operations.",
      highlights: [
        "Lead North America for the Hardware Asset Management Phase 0/1 initiative. Authored discovery documents and led the vendor reverse-demo with the ServiceNow implementation partner. Defined the program's central objective: reliably answer who has what device organization-wide.",
        "Built a custom Microsoft Copilot agent for operational decisions, technician coaching, and communications drafting; now part of daily team workflow.",
        "Authored the team's operating framework (Backbone Guide and Lead Landmines), covering ServiceNow, Email, Teams, and SharePoint, with signal hierarchy and project tracking standards.",
        "Drive knowledge base and documentation strategy across 12 functional areas spanning walk-up support, executive support, inventory operations, and the monthly guest Wi-Fi rotation across 20 digital displays.",
        "Established cross-region Lead coverage for Canadian Deskside operations in a hybrid Deskside/Field Services environment; defined scope, escalation paths, and hardware procurement model. Direct two specialists and mentor the broader team.",
        "Own executive support: hardware standards, executive spare pool, board-meeting readiness, and C-suite priority handling.",
        "Built ServiceNow team-level reporting for Service Operations Workspace and 15+ flow automations for recurring tasks (executive spare health checks, loaner pool inspections, conference room equipment checks, asset ordering).",
        "Coordinate vendor renewals across conference room AV, the room scheduling platform, a 40-license workspace booking migration, and the Hardware Asset Management implementation partner.",
        "Drove IT operations physical buildout (dedicated stockroom, staging and imaging separated from team workspace), positioning the team as the primary IT hardware provider to Field Services.",
        "Served as sole Mac support specialist for the organization through platform sunset, using Jamf for enrollment and package deployment.",
        "Trained 50+ staff on Surface Hub usage across multiple sessions using team-developed materials.",
        "Led return-to-work coordination for two organizations (SSA and Tideworks); shifted team coaching model from manual ticket review to stats-driven as scope expanded.",
      ],
      scope: "HQ + multi-site Canadian Deskside. Two direct reports.",
      tech: ["ServiceNow", "Microsoft 365", "Microsoft Copilot", "Jamf", "Teams Rooms"],
    },
    {
      id: "sound-remodeling",
      title: "Owner/Operator",
      company: "Sound Remodeling",
      location: "Tacoma, WA",
      startDate: "2019-11",
      endDate: "2021-06",
      summary:
        "Ran a home remodeling business in Tacoma, frequently collaborating with Puget Sound Contractor on larger projects. Continued IT consulting at reduced volume through the business.",
      highlights: [],
    },
    {
      id: "rei",
      title: "Service Desk Analyst",
      company: "REI",
      location: "Kent, WA",
      startDate: "2013-07",
      endDate: "2017-06",
      summary:
        "Tier 1 IT support for 3000+ North American REI store partners plus thousands of non-retail end-users.",
      highlights: [
        "Trained the entire department on Mac support after earning Apple Certified Macintosh Technician certification, developing the training materials used for ongoing team onboarding.",
      ],
    },
    {
      id: "starbucks",
      title: "Enterprise Help Desk Analyst",
      company: "Starbucks",
      location: "Seattle, WA",
      startDate: "2010-03",
      endDate: "2013-05",
      summary:
        "Tier 1 IT support for 3000+ North American and UK Starbucks store partners.",
      highlights: [
        "Created and maintained knowledge base articles that became reference material for the broader Enterprise Help Desk team.",
      ],
    },
    {
      id: "best-buy-geek-squad",
      title: "Counter Intelligence Agent",
      company: "Best Buy Geek Squad",
      startDate: "2009-09",
      endDate: "2010-03",
      summary: "Customer-facing PC and Mac support at retail.",
      highlights: [],
    },
    {
      id: "wsac",
      title: "IT Specialist 2",
      company: "Washington State Arts Commission",
      location: "Olympia, WA",
      startDate: "2002",
      endDate: "2003",
      summary:
        "Sole IT for the agency; authored its first IT Portfolio and Disaster Recovery Plan in collaboration with the Washington Department of Information Services.",
      highlights: [],
    },
    {
      id: "net36",
      title: "Network Technician, Advanced Product Development",
      company: "Net36",
      location: "Ellenwood, GA",
      startDate: "2000",
      endDate: "2001",
      summary:
        "Advanced product development unit of PanAmSat (Hughes Corporation subsidiary). Integration and testing of Ethernet and fiber-optic server nodes for satellite-based streaming media content distribution; created training materials and trained NOC staff on remote server administration.",
      highlights: [],
    },
    {
      id: "run-films",
      title: "Owner/Operator",
      company: "Run Films",
      startDate: "1998-01",
      endDate: "2019-11",
      summary:
        "21-year independent IT and AV consulting business run in parallel with full-time day jobs. Scope spanned network and server hardware/software install and admin, LAN/WAN/VPN configuration, A/V production support, and remote and on-site technical support for small business clients.",
      highlights: [],
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
