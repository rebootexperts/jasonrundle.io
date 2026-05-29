import { SectionHeading } from "./SectionHeading";
import type { SkillCategory } from "@/types/resume";

export function SkillsSection({ categories }: { categories: SkillCategory[] }) {
  if (categories.length === 0) return null;
  return (
    <section className="mb-16 sm:mb-20">
      <SectionHeading>Skills</SectionHeading>
      <div className="space-y-6">
        {categories.map((c) => (
          <div
            key={c.id}
            className="grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-[minmax(0,1fr)_160px]"
          >
            <div className="text-base leading-relaxed text-stone-700">
              {c.items.join(" · ")}
            </div>
            <aside className="font-mono text-xs uppercase tracking-wider text-stone-500 sm:text-right">
              {c.name}
            </aside>
          </div>
        ))}
      </div>
    </section>
  );
}
