export function Summary({ text }: { text: string }) {
  return (
    <section className="mb-16 sm:mb-20">
      <p className="max-w-2xl text-base leading-relaxed text-stone-700 sm:text-lg">
        {text}
      </p>
    </section>
  );
}
