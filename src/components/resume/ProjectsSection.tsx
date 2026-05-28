import { SectionHeading } from "./SectionHeading";
import type { Project } from "@/types/resume";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;
  return (
    <section className="mb-16 sm:mb-20">
      <SectionHeading>Selected Projects</SectionHeading>
      <div className="space-y-10">
        {projects.map((p) => (
          <ProjectEntry key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-[minmax(0,1fr)_160px]">
      <div>
        <h3 className="text-lg font-semibold tracking-tight">
          {project.href ? (
            <a
              href={project.href}
              className="underline-offset-4 hover:text-accent hover:underline"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-stone-700">
          {project.summary}
        </p>
      </div>
      <aside className="space-y-1.5 font-mono text-xs uppercase tracking-wider text-stone-500 sm:text-right">
        <div className="text-stone-700">{project.year}</div>
        {project.tech && project.tech.length > 0 && (
          <div className="pt-2 text-stone-400">{project.tech.join(" · ")}</div>
        )}
      </aside>
    </article>
  );
}
