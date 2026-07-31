"use client";

import { Sparkles } from "lucide-react";
import { person_name } from "./secrete";

export default function AboutPulikeshi() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#fffaf3]
        px-5
        py-20
        sm:px-8
        md:py-28
        lg:px-12
      "
    >

          {/* =================================================
              ABOUT
          ================================================= */}

          <div className="border-t border-[#6e4a32]/10 pt-9">

            {/* ABOUT LABEL */}

            <div className="mb-5 flex items-center gap-3">
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#a74d2e]
                "
              >
                About {person_name}
              </span>

              <span
                className="
                  h-px
                  flex-1

                  bg-gradient-to-r
                  from-[#9b6842]/30
                  to-transparent
                "
              />
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h2
              className="
                max-w-2xl
                font-serif

                text-[36px]
                font-semibold
                leading-[1.1]
                tracking-[-0.03em]
                text-[#36271f]

                sm:text-[44px]
                lg:text-[50px]
              "
            >
              ILLUMINATING LIVES THROUGH

              <span
                className="
                  mt-1
                  block
                  italic
                  text-[#a74d2e]
                  
                "
              >
                COSMIC WISDOM
                
              </span>
            </h2>

            {/* =================================================
                CATEGORY
            ================================================= */}

            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-2.5

                rounded-full

                border
                border-[#9b6842]/10

                bg-[#f2e4d1]

                px-4
                py-2.5
              "
            >
              <Sparkles
                size={13}
                strokeWidth={1.8}
                className="text-[#a74d2e]"
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#79553c]
                "
              >
                Divine Guidance & Astrology
              </span>
            </div>

            {/* =================================================
                BRAND QUOTE
            ================================================= */}

            <div
              className="
                relative
                my-8

                border-l-2
                border-[#a74d2e]/40

                pl-5
              "
            >
              <p
                className="
                  font-serif

                  text-[20px]
                  font-medium
                  italic
                  leading-[1.7]
                  text-[#4b372b]

                  sm:text-[23px]
                "
              >
                {person_name} —{" "}

                <span className="text-[#a74d2e]">
                
                  COSMIC INSIGHT . HONEST SOLUTIONS
                </span>
              </p>
            </div>

            {/* =================================================
                TAGLINES
            ================================================= */}

            <div className="mb-8 flex flex-wrap gap-2.5">
              <span
                className="
                  rounded-full
                  bg-[#493126]

                  px-4
                  py-2.5

                  text-[10px]
                  font-medium
                  tracking-[0.04em]
                  text-[#f6ddbf]
                "
              >
                Transforming Confusion into Clarity
              </span>

              <span
                className="
                  rounded-full

                  border
                  border-[#8c6043]/15

                  bg-white/60

                  px-4
                  py-2.5

                  text-[10px]
                  font-medium
                  tracking-[0.04em]
                  text-[#79553c]
                "
              >
                Guided by Vedic Wisdom
              </span>
            </div>

            {/* =================================================
                ABOUT DESCRIPTION
            ================================================= */}

            <p
              className="
                max-w-2xl

                text-[15px]
                leading-[1.9]
                text-[#665044]/85

                sm:text-[16px]
              "
            >
              {person_name} is a deeply trusted and revered astrologer who
              helps individuals unlock clarity and find true direction in
              life.
            </p>

            {/* =================================================
                PHILOSOPHY CARD
            ================================================= */}

            <div
              className="
                relative
                my-7
                overflow-hidden

                rounded-[20px]

                bg-[#f0e1cc]/65

                px-5
                py-5

                sm:px-6
                sm:py-6
              "
            >
              {/* GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12

                  h-32
                  w-32

                  rounded-full

                  bg-[#d59b64]/20

                  blur-3xl
                "
              />

              <span
                className="
                  relative
                  mb-2
                  block

                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#9b6842]
                "
              >
                His Philosophy
              </span>

              <p
                className="
                  relative

                  text-[14px]
                  leading-[1.85]
                  text-[#543d2f]

                  sm:text-[16px]
                "
              >
                When you understand your behavioral patterns, karmic
                influences, and planetary timing, you can navigate life's
                challenges with greater awareness rather than confusion.
              </p>
            </div>

            {/* =================================================
                EXPERIENCE DESCRIPTION
            ================================================= */}

            <p
              className="
                max-w-2xl

                text-[15px]
                leading-[1.9]
                text-[#665044]/85

                sm:text-[16px]
              "
            >
              With decades of traditional practice, Guruji has touched the
              lives of over 10,000+ individuals and couples worldwide. He
              offers practical guidance across important areas of life,
              including relationships, marriage, career, business, and
              personal challenges.
            </p>

            {/* =================================================
                STATS
            ================================================= */}

            <div
              className="
                mt-9
                grid
                grid-cols-2
                overflow-hidden

                rounded-[22px]

                border
                border-[#76513a]/10

                bg-white/45

                shadow-[0_8px_30px_rgba(60,40,25,0.04)]

                sm:grid-cols-3
              "
            >
              {/* 10K */}

              <div
                className="
                  border-r
                  border-[#76513a]/10

                  px-5
                  py-6
                "
              >
                <strong
                  className="
                    block
                    font-serif

                    text-[29px]
                    font-semibold
                    text-[#a74d2e]
                  "
                >
                  10K+
                </strong>

                <span
                  className="
                    mt-1.5
                    block

                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#745c4b]/60
                  "
                >
                  People Guided
                </span>
              </div>

              {/* VEDIC */}

              <div
                className="
                  px-5
                  py-6

                  sm:border-r
                  sm:border-[#76513a]/10
                "
              >
                <strong
                  className="
                    block
                    font-serif

                    text-[29px]
                    font-semibold
                    text-[#a74d2e]
                  "
                >
                  Vedic
                </strong>

                <span
                  className="
                    mt-1.5
                    block

                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#745c4b]/60
                  "
                >
                  Traditional Wisdom
                </span>
              </div>

              {/* GLOBAL */}

              <div
                className="
                  col-span-2

                  border-t
                  border-[#76513a]/10

                  px-5
                  py-6

                  sm:col-span-1
                  sm:border-t-0
                "
              >
                <strong
                  className="
                    block
                    font-serif

                    text-[29px]
                    font-semibold
                    text-[#a74d2e]
                  "
                >
                  Global
                </strong>

                <span
                  className="
                    mt-1.5
                    block

                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#745c4b]/60
                  "
                >
                  Consultations
                </span>
              </div>
            </div>
          </div>
        
      
    </section>
  );
}