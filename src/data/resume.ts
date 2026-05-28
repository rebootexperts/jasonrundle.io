import type { ResumeData } from "@/types/resume";

export const resume: ResumeData = {
  profile: {
    name: "Jason Rundle",
    headline: "Placeholder headline. Real positioning lands when curated content arrives.",
    location: "TBD location",
    summary:
      "Placeholder summary paragraph. Two or three sentences that introduce Jason, what kind of work he does, and what audience he is writing for. Replace when curated content lands.",
    contact: [
      { label: "Email", href: "#", display: "TBD email" },
      { label: "LinkedIn", href: "#", display: "TBD handle" },
      { label: "GitHub", href: "#", display: "TBD handle" },
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
        "Short paragraph framing the role: what the company does, what Jason's scope is, why the work matters.",
      highlights: [
        "Shipped placeholder thing X that drove placeholder outcome Y.",
        "Led placeholder team or workstream operating under placeholder constraint.",
        "Built placeholder system that solved placeholder problem.",
      ],
      scope: "Placeholder scope (team size, ARR, users)",
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
        "Short paragraph framing the previous role.",
      highlights: [
        "Placeholder previous-role achievement.",
        "Placeholder previous-role achievement.",
      ],
      scope: "Placeholder scope",
      tech: ["Python", "React", "AWS"],
    },
  ],

  projects: [
    {
      id: "placeholder-project",
      title: "Placeholder Project",
      year: "2025",
      summary:
        "One or two sentences describing the project: what it is, what it solves, what is interesting about how it was built.",
      tech: ["TypeScript", "Next.js", "Supabase"],
    },
  ],

  qualifications: [
    {
      id: "education-placeholder",
      kind: "education",
      title: "Placeholder Degree",
      institution: "Placeholder University",
      year: "20XX",
    },
    {
      id: "skill-placeholder",
      kind: "skill",
      title: "Placeholder skill cluster",
      detail: "Comma-separated placeholder skills.",
    },
  ],
};
