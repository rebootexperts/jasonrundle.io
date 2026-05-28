import { SectionHeading } from "./SectionHeading";
import { formatDateRange } from "@/lib/formatDate";
import type { Experience } from "@/types/resume";

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section className="mb-16 sm:mb-20">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-12 sm:space-y-14">
        {experiences.map((exp) => (
          <ExperienceEntry key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}

function ExperienceEntry({ experience }: { experience: Experience }) {
  const e = experience;
  return (
    <article className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-[minmax(0,1fr)_160px]">
      <div>
        <h3 className="text-xl font-semibold tracking-tight">{e.title}</h3>
        <p className="mt-1 text-base text-stone-600">
          {e.companyUrl ? (
            <a
              href={e.companyUrl}
              className="underline-offset-4 hover:text-accent hover:underline"
            >
              {e.company}
            </a>
          ) : (
            e.company
          )}
        </p>
        <p className="mt-4 text-base leading-relaxed text-stone-700">
          {e.summary}
        </p>
        {e.highlights.length > 0 && (
          <ul className="mt-4 space-y-2 text-base leading-relaxed text-stone-700">
            {e.highlights.map((h, i) => (
              <li key={i} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <aside className="space-y-1.5 font-mono text-xs uppercase tracking-wider text-stone-500 sm:text-right">
        <div className="text-stone-700">
          {formatDateRange(e.startDate, e.endDate)}
        </div>
        {e.location && <div>{e.location}</div>}
        {e.scope && <div>{e.scope}</div>}
        {e.tech && e.tech.length > 0 && (
          <div className="pt-2 text-stone-400">{e.tech.join(" · ")}</div>
        )}
      </aside>
    </article>
  );
}
