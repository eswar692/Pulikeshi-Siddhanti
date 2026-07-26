"use client";

import { useState } from "react";
import { Play, Quote, X } from "lucide-react";
import { person_name } from "./secrete";

type VideoTestimonial = {
  src: string;
  poster?: string;
};

const videoTestimonials: VideoTestimonial[] = [
  {
    src: "https://res.cloudinary.com/di7evjrx6/video/upload/v1784878354/IMG_1708_gtz8uu.mov",
    poster: "",
  },
  {
    src: "https://res.cloudinary.com/di7evjrx6/video/upload/v1785037126/IMG_1710_zo2dqg.mov",
    poster: "",
  },
  {
    src: "https://res.cloudinary.com/di7evjrx6/video/upload/v1785037189/IMG_1886_ncuhf3.mov",
    poster: "",
  },
  {
    src: "https://res.cloudinary.com/di7evjrx6/video/upload/v1785037339/IMG_1692_ptyz59.mov",
    poster: "",
  },
  {
    src: "https://res.cloudinary.com/di7evjrx6/video/upload/v1785037384/IMG_1719_rrsvq8.mov",
    poster: "",
  },
  {
    src: "https://res.cloudinary.com/di7evjrx6/video/upload/v1785037440/IMG_1890_msjllw.mov",
    poster: "",
  },
  {
    src: "https://res.cloudinary.com/di7evjrx6/video/upload/v1785037487/IMG_1956_ltae7g.mov",
    poster: "",
  },
  {
    src: "https://res.cloudinary.com/di7evjrx6/video/upload/v1785037531/IMG_1709_mir416.mov",
    poster: "",
  },
  {
    src: "https://res.cloudinary.com/di7evjrx6/video/upload/v1785037883/img-1722_IQjvRh2X_ntrc3d.mp4",
    poster: "",
  },
  {
    src: "https://res.cloudinary.com/di7evjrx6/video/upload/v1785038266/img-1712_v2BvK7jt_tbcvva.mp4",
    poster: "",
  },
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
      className="
        group
        relative
        aspect-[9/16]
        w-full
        overflow-hidden
        rounded-[22px]
        bg-[#eee8dc]
        shadow-[0_8px_30px_rgba(55,42,25,0.10)]
        ring-1
        ring-black/[0.06]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_14px_40px_rgba(55,42,25,0.16)]
        disabled:cursor-default
        disabled:hover:translate-y-0
      "
    >
      {item.src ? (
        <video
          src={item.src}
          poster={item.poster || undefined}
          muted
          playsInline
          preload="metadata"
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.02]
          "
        />
      ) : (
        <div
          className="
            flex
            h-full
            w-full
            flex-col
            items-center
            justify-center
            gap-3
            bg-[#eee8dc]
            text-center
          "
        >
          <Quote size={28} className="text-[#9c7651]/40" />

          <span
            className="
              px-6
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#5d5145]/50
            "
          >
            Video coming soon
          </span>
        </div>
      )}

      {/* subtle bottom fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-28
          bg-gradient-to-t
          from-black/30
          via-black/5
          to-transparent
        "
      />

      {/* Play button */}
      {item.src && (
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
        >
          <span
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-white/60
              bg-white/85
              shadow-lg
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:bg-white
            "
          >
            <Play
              size={22}
              className="ml-1 text-[#8b5e3c]"
              fill="currentColor"
            />
          </span>
        </div>
      )}
    </button>
  );
}

export default function VideoTestimonials() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openItem =
    openIndex !== null ? videoTestimonials[openIndex] : null;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f8f5ef]
        px-5
        py-20
        sm:px-10
        lg:px-16
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      {/* warm top glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-180px]
          h-[400px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-[#ead8b7]/35
          blur-[100px]
        "
      />

      {/* soft left shape */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[30%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#e8dfd0]/40
          blur-[100px]
        "
      />

      {/* soft right shape */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[150px]
          bottom-[10%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#e3cfb2]/30
          blur-[100px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-10 bg-[#b78a5c]/40" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#9b6a43]
              "
            >
              In Their Own Words
            </span>

            <span className="h-px w-10 bg-[#b78a5c]/40" />
          </div>

          <h2
            className="
              font-serif
              text-4xl
              font-bold
              tracking-tight
              text-[#302a25]
              md:text-5xl
            "
          >
            Client Video Stories
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-[15px]
              leading-7
              text-[#70675e]
              sm:text-base
            "
          >
            Hear directly from people who found clarity and direction with{" "}
            <span className="font-semibold text-[#8b5e3c]">
              {person_name}
            </span>
            .
          </p>
        </div>

        {/* =====================================================
            VIDEO GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-2
            lg:gap-8
          "
        >
          {videoTestimonials.map((item, i) => (
            <VideoTile
              key={i}
              item={item}
              onOpen={() => setOpenIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          VIDEO LIGHTBOX
      ===================================================== */}

      {openItem && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-[#171411]/90
            p-4
            backdrop-blur-md
            sm:p-6
          "
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="
              relative
              w-full
              max-w-md
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close video"
              className="
                absolute
                -top-12
                right-0
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
              "
            >
              <X size={19} />
            </button>

            {/* VIDEO */}
            <div
              className="
                overflow-hidden
                rounded-[24px]
                bg-black
                shadow-2xl
                ring-1
                ring-white/10
              "
            >
              <video
                src={openItem.src}
                poster={openItem.poster || undefined}
                controls
                autoPlay
                playsInline
                className="
                  max-h-[82vh]
                  w-full
                  bg-black
                  object-contain
                "
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}