type InfoSectionProps = {
  offerings: string[];
  topics: string[];
};

export function InfoSection({ offerings, topics }: InfoSectionProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <article className="rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-lg sm:p-6">
        <h2 className="text-2xl font-semibold text-white">What We Offer</h2>
        <ul className="mt-4 space-y-3">
          {offerings.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-zinc-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </article>

      <article className="rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-lg sm:p-6">
        <h2 className="text-2xl font-semibold text-white">Topics We Cover</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {topics.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-100"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
