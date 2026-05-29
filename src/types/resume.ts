export type ResumeData = {
  profile: Profile;
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
  education: Education[];
  skills: SkillCategory[];
};

/**
 * Resume profile. Excludes phone, street address, DOB, age, marital status,
 * and photo by design. See src/data/resume.ts header for full content guidelines.
 */
export type Profile = {
  name: string;
  /** Scannable role/scope line, not a marketing tagline. */
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
  /** "YYYY-MM" or "YYYY". */
  startDate: string;
  /** "YYYY-MM" or "YYYY", or null for present. */
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

export type SkillCategory = {
  id: string;
  /** Category label (e.g., "Endpoint and Device Management"). */
  name: string;
  /** Ordered list of items within the category. Order signals relevance. */
  items: string[];
};

export type Certification = {
  id: string;
  name: string;
  issuer?: string;
  year?: string;
};

export type Education = {
  id: string;
  /** Free-text statement. Used for non-traditional framings (e.g., "Experience-based. No formal degree."). */
  statement: string;
};
