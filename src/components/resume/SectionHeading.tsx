export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
      {children}
    </h2>
  );
}
