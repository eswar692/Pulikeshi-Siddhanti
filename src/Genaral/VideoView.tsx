import { ArrowRight } from "lucide-react";

/**
 * Hero section: deep indigo-gold backdrop, sparkle field, serif
 * headline + supporting copy on the left, portrait image on the right
 * inside a soft gold-ringed frame.
 *
 * Swap `PORTRAIT_SRC` for the real photo — bring your own asset, this
 * component only lays it out (object-cover, bottom-anchored, no crop
 * jumps on resize).
 */

const pulikeshi_img = "public/pulikeshi.png";
const pulikeshi_short_img = "public/pulikeshi-short.png";

// Deterministic sparkle positions (percent-based) so they don't
// re-randomize on every render / re-hydration mismatch on SSR.
const SPARKLES: { top: string; left: string; size: number; delay: number }[] = [
  { top: "14%", left: "24%", size: 4, delay: 0 },
  { top: "8%", left: "58%", size: 3, delay: 0.6 },
  { top: "34%", left: "8%", size: 5, delay: 1.2 },
  { top: "46%", left: "40%", size: 3, delay: 1.8 },
  { top: "62%", left: "18%", size: 4, delay: 0.3 },
  { top: "72%", left: "52%", size: 3, delay: 2.1 },
  { top: "22%", left: "68%", size: 4, delay: 0.9 },
  { top: "80%", left: "36%", size: 3, delay: 1.5 },
];

function Sparkle({
  top,
  left,
  size,
  delay,
}: {
  top: string;
  left: string;
  size: number;
  delay: number;
}) {
  return (
    <span
      aria-hidden="true"
      className="absolute animate-pulse rounded-full bg-[#e8bc6e]/90"
      style={{
        top,
        left,
        width: size,
        height: size,
        boxShadow: "0 0 6px 1px rgba(232,188,110,0.7)",
        animationDelay: `${delay}s`,
        animationDuration: "2.4s",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1330] via-[#241c3d] to-[#161029]">
      {/* sparkle field, decorative only */}
      <div className="pointer-events-none absolute inset-0">
        {SPARKLES.map((s, i) => (
          <Sparkle key={i} {...s} />
        ))}
      </div>

      {/* Ambient gold glow behind the heading */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-[240px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,162,78,0.12),transparent_70%)]" />

      <div className="relative flex items-center justify-center py-12">
        <h2 className="text-center font-serif text-4xl font-bold tracking-wide text-[#e8bc6e] drop-shadow-[0_2px_12px_rgba(212,162,78,0.25)] md:text-5xl">
          Pulikeshi Siddhanti Guruji
        </h2>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 md:grid-cols-2">
        {/* Copy */}
        <div className="relative">
          <span className="mb-4 block text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#d4a24e]/70">
            Vedic Astrology &middot; Palmistry &middot; Life Guidance
          </span>

          <h1 className="max-w-xl font-serif text-4xl italic leading-tight text-[#fdf6ec] sm:text-5xl">
            Your problem.{" "}
            <span className="text-[#d4a24e]">Our solution.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-[#fdf6ec]/60">
            Through deep astrological analysis, we help you with personalised
            life guidance &amp; to understand the &lsquo;why&rsquo; behind
            your patterns, decisions, and experiences.
          </p>

          <a
            href="/book"
            className="group mt-8 hidden w-fit min-w-[200px] items-center gap-3 rounded-full bg-gradient-to-r from-[#c1622f] to-[#d4a24e] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#1a1330] shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#d4a24e]/20 md:flex"
          >
            BOOK NOW
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Portrait — desktop */}
        <div className="relative z-10 hidden justify-center md:flex">
          <div className="relative">
            {/* Gold ring frame */}
            <div className="absolute -inset-3 rounded-[2rem] border border-[#d4a24e]/25" />
            <div className="absolute -inset-6 rounded-[2.4rem] bg-[radial-gradient(ellipse_at_center,rgba(212,162,78,0.15),transparent_70%)] blur-xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#d4a24e]/30 bg-[#241c3d] shadow-2xl shadow-black/50">
              <img
                src={pulikeshi_short_img}
                alt="Pandith Pulikeshi Siddanti"
                className="h-[500px] w-full object-cover object-top"
              />
              {/* Fade into the hero background at the base */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#161029] to-transparent" />
            </div>
          </div>
        </div>

        {/* Portrait — mobile */}
        <div className="relative z-10 flex justify-center md:hidden">
          <div className="relative">
            <div className="absolute -inset-2 rounded-[1.5rem] border border-[#d4a24e]/25" />
            <div className="relative overflow-hidden rounded-[1.25rem] border border-[#d4a24e]/30 bg-[#241c3d] shadow-xl shadow-black/50">
              <img
                src={pulikeshi_img}
                alt="Pandith Pulikeshi Siddanti"
                className="h-[420px] w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#161029] to-transparent" />
            </div>

            {/* Mobile CTA below the portrait since the desktop one is hidden here */}
            <a
              href="/book"
              className="group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#c1622f] to-[#d4a24e] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#1a1330] shadow-lg shadow-black/30 transition-all duration-200"
            >
              BOOK NOW
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}