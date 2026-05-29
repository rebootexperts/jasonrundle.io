import { SectionHeading } from "./SectionHeading";
import type { Certification } from "@/types/resume";

export function CertificationsSection({
  certifications,
}: {
  certifications: Certification[];
}) {
  if (certifications.length === 0) return null;
  return (
    <section className="mb-16 sm:mb-20">
      <SectionHeading>Certifications</SectionHeading>
      <div className="space-y-3">
        {certifications.map((c) => (
          <div
            key={c.id}
            className="grid grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-[minmax(0,1fr)_160px]"
          >
            <div className="text-base text-stone-800">
              <span className="font-medium">{c.name}</span>
              {c.issuer && (
                <span className="text-stone-600">, {c.issuer}</span>
              )}
            </div>
            <aside className="font-mono text-xs uppercase tracking-wider text-stone-500 sm:text-right">
              {c.year ?? ""}
            </aside>
          </div>
        ))}
      </div>
    </section>
  );
}
