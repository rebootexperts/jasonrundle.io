import { SectionHeading } from "./SectionHeading";
import type { Qualification } from "@/types/resume";

const KIND_LABEL: Record<Qualification["kind"], string> = {
  education: "Education",
  certification: "Certifications",
  skill: "Skills",
  other: "Other",
};

const KIND_ORDER: Qualification["kind"][] = [
  "education",
  "certification",
  "skill",
  "other",
];

export function QualificationsSection({
  qualifications,
}: {
  qualifications: Qualification[];
}) {
  if (qualifications.length === 0) return null;

  const grouped = KIND_ORDER.map((kind) => ({
    kind,
    items: qualifications.filter((q) => q.kind === kind),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="mb-16 sm:mb-20">
      <SectionHeading>Qualifications</SectionHeading>
      <div className="space-y-10">
        {grouped.map((g) => (
          <div
            key={g.kind}
            className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-[minmax(0,1fr)_160px]"
          >
            <div className="space-y-4">
              {g.items.map((q) => (
                <div key={q.id}>
                  <div className="text-base text-stone-800">
                    <span className="font-medium">{q.title}</span>
                    {q.institution && (
                      <span className="text-stone-600">, {q.institution}</span>
                    )}
                    {q.year && (
                      <span className="font-mono text-xs uppercase tracking-wider text-stone-500">
                        {" "}
                        · {q.year}
                      </span>
                    )}
                  </div>
                  {q.detail && (
                    <p className="mt-1 text-sm leading-relaxed text-stone-600">
                      {q.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <aside className="font-mono text-xs uppercase tracking-wider text-stone-500 sm:text-right">
              {KIND_LABEL[g.kind]}
            </aside>
          </div>
        ))}
      </div>
    </section>
  );
}
