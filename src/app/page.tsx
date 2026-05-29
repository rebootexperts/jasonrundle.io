import type { Metadata } from "next";
import { resume } from "@/data/resume";
import { ResumeHeader } from "@/components/resume/ResumeHeader";
import { Summary } from "@/components/resume/Summary";
import { ExperienceSection } from "@/components/resume/ExperienceSection";
import { ProjectsSection } from "@/components/resume/ProjectsSection";
import { CertificationsSection } from "@/components/resume/CertificationsSection";
import { EducationSection } from "@/components/resume/EducationSection";
import { SkillsSection } from "@/components/resume/SkillsSection";

export const metadata: Metadata = {
  title: `${resume.profile.name}`,
  description: resume.profile.headline,
};

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
      <ResumeHeader profile={resume.profile} />
      <Summary text={resume.profile.summary} />
      <ExperienceSection experiences={resume.experiences} />
      <ProjectsSection projects={resume.projects} />
      <CertificationsSection certifications={resume.certifications} />
      <EducationSection entries={resume.education} />
      <SkillsSection categories={resume.skills} />
    </main>
  );
}
