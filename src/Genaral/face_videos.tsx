"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Volume2, ArrowUpRight } from "lucide-react";
import { person_name } from "./secrete";

type GurujiVideo = {
  src: string;
  poster?: string;
  title?: string;
};

const videos: GurujiVideo[] = [
  {
    src: "https://res.cloudinary.com/di7evjrx6/video/upload/v1785255051/img-1959_OYQx6RuZ_gsbokx.mp4",
    title: "Guidance & Insights",
  },
  {
    src: "https://res.cloudinary.com/di7evjrx6/video/upload/v1785254269/IMG_1960_ga2ndv.mov",
    title: "Astrology Guidance",
  },
  {
    src: "https://res.cloudinary.com/di7evjrx6/video/upload/v1785256207/IMG_1961-compressed_1_xywo5g.mp4",
    title: "Life & Relationships",
  },
  
];

export default function PulikeshiVideos() {
  const [activeVideo, setActiveVideo] = useState<GurujiVideo | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#f7f3ed] px-5 py-20 sm:px-8 md:py-28 lg:px-12">

      {/* =========================================
          SUBTLE BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[220px] top-[10%] h-[480px] w-[480px] rounded-full bg-[#d9c9bb]/25 blur-[130px]" />

        <div className="absolute -right-[200px] bottom-[5%] h-[500px] w-[500px] rounded-full bg-[#cba994]/15 blur-[140px]" />
      </div>

      {/* subtle vertical line */}
      <div className="pointer-events-none absolute left-[7%] top-0 hidden h-full w-px bg-[#493126]/[0.04] lg:block" />

      <div className="relative z-10 mx-auto max-w-[1380px]">

        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="grid gap-7 lg:grid-cols-[1fr_0.65fr] lg:items-end">

            {/* LEFT */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#a65332]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8b624d]">
                  Watch Guruji
                </span>
              </div>

              <h2
                className="
                  max-w-3xl
                  font-serif
                  text-[40px]
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-[#35261f]

                  sm:text-[48px]
                  md:text-[58px]
                  lg:text-[64px]
                "
              >
                Wisdom & Guidance

                <span className="block italic text-[#a65332]">
                  From {person_name}
                </span>
              </h2>
            </div>

            {/* RIGHT */}
            <div className="max-w-md lg:justify-self-end">
              <p className="text-[14px] leading-7 text-[#6f5b50] sm:text-[15px]">
                Watch {person_name} share insights on life, relationships,
                challenges, and traditional astrological guidance.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#a65332]" />
                <span className="h-[2px] w-4 bg-[#a65332]/30" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            VIDEO GRID
        ========================================= */}

        <div className="grid grid-cols-1 gap-3 sm:gap-5 md:grid-cols-3 lg:gap-6 xl:grid-cols-4">

          {videos.map((video, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => setActiveVideo(video)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: (index % 4) * 0.06,
              }}
              className="
                group
                relative
                aspect-[9/16]
                overflow-hidden
                rounded-[20px]
                bg-[#30231d]
                text-left

                shadow-[0_10px_35px_rgba(61,42,31,0.10)]

                transition-all
                duration-500

                hover:-translate-y-2
                hover:shadow-[0_24px_55px_rgba(61,42,31,0.18)]

                sm:rounded-[24px]
              "
            >

              {/* VIDEO PREVIEW */}

              <video
                src={video.src}
                poster={video.poster || undefined}
                muted
                playsInline
                preload="metadata"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[900ms]
                  ease-out

                  group-hover:scale-[1.045]
                "
              />

              {/* subtle dark image tone */}

              <div className="pointer-events-none absolute inset-0 bg-[#251914]/[0.05] transition-colors duration-500 group-hover:bg-transparent" />

              {/* TOP FADE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-[22%]

                  bg-gradient-to-b
                  from-black/25
                  to-transparent
                "
              />

              {/* BOTTOM FADE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-[42%]

                  bg-gradient-to-t
                  from-[#201510]/90
                  via-[#201510]/35
                  to-transparent
                "
              />

              {/* =====================================
                  NUMBER
              ===================================== */}

              <span
                className="
                  absolute
                  left-4
                  top-4

                  text-[9px]
                  font-semibold
                  tracking-[0.16em]
                  text-white/65

                  sm:left-5
                  sm:top-5
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* =====================================
                  TOP RIGHT ICON
              ===================================== */}

              <span
                className="
                  absolute
                  right-3
                  top-3

                  flex
                  h-8
                  w-8
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-white/20
                  bg-black/15

                  text-white
                  backdrop-blur-md

                  sm:right-4
                  sm:top-4
                "
              >
                <ArrowUpRight size={13} />
              </span>

              {/* =====================================
                  PLAY
              ===================================== */}

              <div className="absolute inset-0 flex items-center justify-center">

                <span
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-full
                    border
                    border-white/35

                    bg-[#f8f3ec]/90
                    text-[#4b3125]

                    shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                    backdrop-blur-md

                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:bg-white

                    sm:h-14
                    sm:w-14
                  "
                >
                  <Play
                    size={18}
                    fill="currentColor"
                    className="ml-[2px]"
                  />
                </span>

              </div>

              {/* =====================================
                  BOTTOM TITLE
              ===================================== */}

              <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">

                <div
                  className="
                    mb-3
                    h-[2px]
                    w-7
                    bg-[#d79a78]

                    transition-all
                    duration-500

                    group-hover:w-12
                  "
                />

                <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-[#e2bda8]/70 sm:text-[9px]">
                  {person_name}
                </span>

                <h3
                  className="
                    mt-1.5
                    font-serif
                    text-[14px]
                    font-semibold
                    leading-snug
                    text-white

                    sm:text-[17px]
                  "
                >
                  {video.title}
                </h3>

              </div>

              {/* INNER BORDER */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[6px]
                  rounded-[15px]
                  border
                  border-white/[0.12]

                  sm:rounded-[19px]
                "
              />

            </motion.button>
          ))}

        </div>

        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="mt-12 flex items-center justify-center gap-4">

          <span className="h-px w-10 bg-[#6e4c3a]/20" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#765b4d]/55">
            Insights · Guidance · Wisdom
          </span>

          <span className="h-px w-10 bg-[#6e4c3a]/20" />

        </div>
      </div>

      {/* =========================================
          VIDEO MODAL
      ========================================= */}

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center

              bg-[#160f0c]/90
              p-4
              backdrop-blur-xl
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[390px]"
            >

              {/* CLOSE */}

              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
                className="
                  absolute
                  -top-12
                  right-0

                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-white/15

                  bg-white/10
                  text-white
                  backdrop-blur-md

                  transition-all
                  duration-200

                  hover:bg-white
                  hover:text-[#35261f]
                "
              >
                <X size={17} />
              </button>

              {/* VIDEO */}

              <div
                className="
                  aspect-[9/16]
                  overflow-hidden
                  rounded-[26px]
                  bg-black

                  shadow-[0_30px_100px_rgba(0,0,0,0.55)]
                "
              >
                <video
                  src={activeVideo.src}
                  poster={activeVideo.poster || undefined}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                />
              </div>

              {/* MODAL LABEL */}

              <div className="mt-4 flex items-center justify-center gap-2 text-white/55">

                <Volume2 size={12} />

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                  {person_name} · Video
                </span>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}