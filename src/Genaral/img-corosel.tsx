"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { person_name } from "./secrete";

/**
 * Pooja / ritual gallery carousel — photos of ceremonies performed
 * for clients. Fill in `src` for each entry with your image path/URL,
 * left empty on purpose so the placeholder shows until you add them.
 */

type PoojaPhoto = {
 
  src: string; // <-- add your image URL/path here
};

const poojaPhotos: PoojaPhoto[] = [
{src:"public/IMG_6799.png"},
{src:"IMG_6801.png"},
{src:"IMG_6805.png"},
{src:"IMG_6810.png"},
{src:"IMG_6812.png"},
];

export default function PoojaGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4500, stopOnInteraction: true })],
  );

  return (
    <section className="relative overflow-hidden bg-[#161029] px-6 py-20 sm:px-10 lg:px-16">
      {/* Chart-line watermark — consistent site signature */}
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
      <div className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,162,78,0.08),transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(90,70,150,0.12),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#d4a24e]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d4a24e]">
              Moments of Devotion
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4a24e]" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-[#fdf6ec] md:text-5xl">
            Sacred Ceremonies We've Performed
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#fdf6ec]/50">
            A glimpse into the poojas and rituals{" "}
            <span className="font-medium text-[#d4a24e]">{person_name}</span>{" "}
            has personally conducted for clients seeking blessings, balance,
            and new beginnings.
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {poojaPhotos.map((photo, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <div className="group relative flex aspect-[4/5] w-full flex-col overflow-hidden rounded-2xl border border-[#d4a24e]/12 bg-[#241c3d] shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a24e]/28">
                  {photo.src ? (
                    <img
                      src={photo.src}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#241c3d] to-[#1a1330] text-center">
                      <Sparkles size={26} className="text-[#d4a24e]/25" />
                      <span className="px-6 text-xs uppercase tracking-widest text-[#d4a24e]/35">
                        Photo coming soon
                      </span>
                    </div>
                  )}

                  {/* Bottom gradient for legibility */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1a1330] to-transparent" />

                 
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous photo"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4a24e]/20 bg-white/[0.03] text-[#d4a24e] transition-all hover:border-[#d4a24e]/45 hover:bg-[#d4a24e]/10"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next photo"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4a24e]/20 bg-white/[0.03] text-[#d4a24e] transition-all hover:border-[#d4a24e]/45 hover:bg-[#d4a24e]/10"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}