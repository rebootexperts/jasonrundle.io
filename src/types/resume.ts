export type ResumeData = {
  profile: Profile;
  experiences: Experience[];
  projects: Project[];
  qualifications: Qualification[];
};

/**
 * Resume profile. Excludes phone, street address, DOB, age, marital status,
 * and photo by design. See src/data/resume.ts header for full content guidelines.
 */
export type Profile = {
  name: string;
  headline: string;
  /** City + state/region only. Never a street address. */
  location: string;
  summary: string;
  contact: ContactLink[];
};

export type ContactLink = {
  label: string;
  href: string;
  display?: string;
};

export type Experience = {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  startDate: string;
  endDate: string | null;
  summary: string;
  highlights: string[];
  scope?: string;
  tech?: string[];
};

export type Project = {
  id: string;
  title: string;
  href?: string;
  year: string;
  summary: string;
  tech?: string[];
};

export type Qualification = {
  id: string;
  kind: "education" | "certification" | "skill" | "other";
  title: string;
  institution?: string;
  year?: string;
  detail?: string;
};
