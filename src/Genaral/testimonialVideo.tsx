"use client";
import { useState } from "react";
import { Play, Quote, X } from "lucide-react";
import { person_name } from "./secrete";

/**
 * Video testimonials — album/grid layout (no carousel).
 *
 * Fill in `src` for each entry with your uploaded video URL/path.
 * `poster` is optional (shown as the thumbnail before it's opened).
 *
 * Grid columns:
 *  - Mobile:  1 column
 *  - Tablet:  2 columns
 *  - Desktop: 3 columns
 */

type VideoTestimonial = {

  src: string; // <-- your video URL/path
  poster?: string; // <-- optional thumbnail image
};

const videoTestimonials: VideoTestimonial[] = [
  {  src: "https://player.cloudinary.com/embed/?cloud_name=di7evjrx6&public_id=IMG_1708_gtz8uu", poster: "" },
  {  src: "IMG_1722.MOV", poster: "" },
  {  src: "IMG_1957.MOV", poster: "" },
  {  src: "IMG_1956.MOV", poster: "" },
  {  src: "IMG_1712.MOV", poster: "" },
  {  src: "IMG_1708.MOV", poster: "" },
  {  src: "", poster: "" },
];
function VideoTile({
  item,
  onOpen,
}: {
  item: VideoTestimonial;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      disabled={!item.src}
      className="group relative flex aspect-[9/16] w-full flex-col overflow-hidden rounded-2xl border border-[#d4a24e]/12 bg-[#241c3d] text-left shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a24e]/28 disabled:cursor-default disabled:hover:translate-y-0"
    >
      {item.src ? (
        <video
          src={item.src}
          poster={item.poster || undefined}
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#241c3d] to-[#1a1330] text-center">
          <Quote size={26} className="text-[#d4a24e]/25" />
          <span className="px-6 text-xs uppercase tracking-widest text-[#d4a24e]/35">
            Video coming soon
          </span>
        </div>
      )}

      {/* Bottom gradient for legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1a1330] to-transparent" />

      {/* Play badge */}
      {item.src && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d4a24e]/40 bg-[#1a1330]/70 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <Play size={20} className="ml-0.5 text-[#d4a24e]" fill="#d4a24e" />
          </span>
        </span>
      )}

     
    </button>
  );
}

export default function VideoTestimonials() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openItem = openIndex !== null ? videoTestimonials[openIndex] : null;

  return (
    <section className="relative overflow-hidden bg-[#161029] px-6 py-20 sm:px-10 lg:px-16">
      {/* Chart-line watermark — consistent site signature */}
      <svg
        className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 text-[#d4a24e]/[0.05]"
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
              In Their Own Words
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4a24e]" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-[#fdf6ec] md:text-5xl">
            Client Video Stories
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#fdf6ec]/50">
            Hear directly from people who found clarity and direction with{" "}
            <span className="font-medium text-[#d4a24e]">{person_name}</span>.
          </p>
        </div>

        {/* Album grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videoTestimonials.map((item, i) => (
            <VideoTile key={i} item={item} onOpen={() => setOpenIndex(i)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {openItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close video"
              className="absolute -top-12 right-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#d4a24e]/30 bg-[#241c3d] text-[#d4a24e] transition-colors hover:bg-[#d4a24e]/10"
            >
              <X size={18} />
            </button>

            <div className="overflow-hidden rounded-2xl border border-[#d4a24e]/20 bg-[#0d0a1a] shadow-2xl">
              <video
                src={openItem.src}
                poster={openItem.poster || undefined}
                controls
                autoPlay
                playsInline
                className="max-h-[80vh] w-full"
              />
            
            </div>
          </div>
        </div>
      )}
    </section>
  );
}