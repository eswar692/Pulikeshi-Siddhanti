export default function GuidanceSection() {
  return (
    <section className="relative overflow-hidden bg-[#161029] px-6 py-20 sm:px-10 lg:px-16">
      {/* Chart-line watermark — same signature motif used in Contact/Problems */}
      <svg
        className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 text-[#d4a24e]/[0.05]"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="196" height="196" stroke="currentColor" strokeWidth="0.6" />
        <path d="M2 2L198 198M198 2L2 198" stroke="currentColor" strokeWidth="0.6" />
        <path d="M100 2V198M2 100H198" stroke="currentColor" strokeWidth="0.6" />
      </svg>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#d4a24e]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#5a4696]/15 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Eyebrow */}
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-[#d4a24e]" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4a24e]">
            About Guruji
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl font-semibold leading-tight text-[#fdf6ec] sm:text-5xl lg:text-[3.4rem]">
          About{" "}
          <span className="relative inline-block text-[#d4a24e]">
            Pulikeshi Siddhanti
            <svg
              className="absolute -bottom-2 left-0 w-full text-[#d4a24e]"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 9C60 3 240 3 298 9"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        {/* Body copy */}
        <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-[#fdf6ec]/60 sm:text-lg">
          <p>
            Pulikeshi Siddhanti Guruji is a deeply trusted and revered
            astrologer who helps individuals unlock clarity and find true
            direction in life. His core philosophy is beautifully simple: when
            you understand your behavioral patterns, karmic influences, and
            planetary timing, you can navigate life's challenges with
            absolute awareness rather than confusion.
          </p>
          <p>
            With decades of traditional practice, Guruji has touched the
            lives of over{" "}
            <span className="font-medium text-[#d4a24e]">
              10,000+ individuals and couples
            </span>{" "}
            worldwide. He offers profound, practical guidance on crucial life
            aspects, including relationships, marriage delays, career growth,
            business obstacles, and deep emotional challenges.
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-[#d4a24e]/10 pt-8">
          {[
            { value: "10K+", label: "Clients guided" },
            { value: "15+", label: "Years experience" },
            { value: "4", label: "Featured publications" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-2xl font-bold text-[#d4a24e]">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wide text-[#fdf6ec]/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/about"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c1622f] to-[#d4a24e] px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#1a1330] shadow-[0_8px_24px_rgba(212,162,78,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(212,162,78,0.35)]"
        >
          Know More
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}