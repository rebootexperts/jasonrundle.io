import { Download } from "lucide-react";
import type { Profile } from "@/types/resume";

export function ResumeHeader({ profile }: { profile: Profile }) {
  return (
    <header className="mb-16 sm:mb-20">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
        {profile.headline}
      </p>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-stone-500">
        <span>{profile.location}</span>
        {profile.contact.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-stone-600 underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            {link.display ?? link.label}
          </a>
        ))}
      </div>
      <a
        href="/jason-rundle-resume.pdf"
        download
        className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-stone-500 transition-colors hover:text-accent"
      >
        <Download className="h-3 w-3" aria-hidden />
        Download PDF
      </a>
    </header>
  );
}
