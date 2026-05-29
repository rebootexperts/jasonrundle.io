import { SectionHeading } from "./SectionHeading";
import type { Education } from "@/types/resume";

export function EducationSection({ entries }: { entries: Education[] }) {
  if (entries.length === 0) return null;
  return (
    <section className="mb-16 sm:mb-20">
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-3">
        {entries.map((e) => (
          <p
            key={e.id}
            className="text-base leading-relaxed text-stone-700"
          >
            {e.statement}
          </p>
        ))}
      </div>
    </section>
  );
}
