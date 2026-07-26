"use client";

import {
  MapPin,
  Sparkles,
  Heart,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

export default function PulikeshiAboutHighlight() {
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
      {/* =====================================================
          BACKGROUND CLOUD EFFECT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[200px]
          top-[5%]
          h-[500px]
          w-[600px]
          rounded-full
          bg-[#ead5b8]/45
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[220px]
          top-[30%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#e3b984]/25
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          left-[30%]
          h-[450px]
          w-[650px]
          rounded-full
          bg-[#f0dfca]/70
          blur-[140px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* EYEBROW */}

        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-9 bg-[#a66b43]" />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.26em]
              text-[#95623e]
            "
          >
            Divine Guidance & Vedic Wisdom
          </span>
        </div>

        {/* =====================================================
            MAIN PREMIUM HEADING
        ===================================================== */}

        <div className="max-w-5xl">

          <h1
            className="
              font-serif
              text-[38px]
              font-semibold
              leading-[1.08]
              tracking-[-0.035em]
              text-[#34251d]

              sm:text-[48px]
              md:text-[58px]
              lg:text-[68px]
            "
          >
            Pulikeshi Siddhanti

            <span
              className="
                mt-2
                block
                text-[#a65332]
              "
            >
              Top Astrologer
            </span>

            <span
              className="
                mt-3
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-2

                font-sans
                text-[18px]
                font-medium
                tracking-normal
                text-[#6f503c]

                sm:text-[22px]
                md:text-[25px]
              "
            >
              <MapPin
                size={21}
                strokeWidth={1.7}
                className="text-[#a65332]"
              />

              in Bangalore

              <span className="font-serif italic text-[#b2774e]">
                &
              </span>

              Hyderabad
            </span>

          </h1>

        </div>

        {/* =====================================================
            INTRO LINE
        ===================================================== */}

        <p
          className="
            mt-8
            max-w-4xl
            text-[15px]
            leading-[1.9]
            text-[#665044]/85

            sm:text-[16px]
            md:text-[17px]
          "
        >
          Guruji specializes in love marriage problems, husband-wife
          disputes, relationship affairs, family conflicts, and enemy
          issues. Get accurate predictions and permanent, perfect
          solutions for all your life problems today.
        </p>

        {/* =====================================================
            SPECIALITY PILLS
        ===================================================== */}

        <div className="mt-7 flex flex-wrap gap-2.5">

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-[#9b6842]/10
              bg-white/60
              px-4
              py-2.5
            "
          >
            <Heart
              size={13}
              strokeWidth={1.8}
              className="text-[#a65332]"
            />

            <span className="text-[11px] font-medium text-[#6c4b37]">
              Love & Marriage
            </span>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-[#9b6842]/10
              bg-white/60
              px-4
              py-2.5
            "
          >
            <Users
              size={13}
              strokeWidth={1.8}
              className="text-[#a65332]"
            />

            <span className="text-[11px] font-medium text-[#6c4b37]">
              Family & Relationships
            </span>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-[#9b6842]/10
              bg-white/60
              px-4
              py-2.5
            "
          >
            <BriefcaseBusiness
              size={13}
              strokeWidth={1.8}
              className="text-[#a65332]"
            />

            <span className="text-[11px] font-medium text-[#6c4b37]">
              Career & Business
            </span>
          </div>

        </div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div
          className="
            my-12
            h-px
            w-full
            bg-gradient-to-r
            from-[#9b6842]/5
            via-[#9b6842]/25
            to-[#9b6842]/5
          "
        />

        {/* =====================================================
            ABOUT GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-14
          "
        >

          {/* =================================================
              LEFT — ABOUT
          ================================================= */}

          <div>

            <div className="mb-4 flex items-center gap-3">

              <Sparkles
                size={14}
                strokeWidth={1.7}
                className="text-[#a65332]"
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#9b6842]
                "
              >
                About Pulikeshi Siddhanti
              </span>

            </div>

            <h2
              className="
                max-w-xl
                font-serif
                text-3xl
                font-semibold
                leading-[1.15]
                tracking-[-0.025em]
                text-[#38281f]

                sm:text-4xl
              "
            >
              Clarity for life's
              <span className="italic text-[#a65332]">
                {" "}important decisions.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-[15px]
                leading-[1.9]
                text-[#665044]/85
              "
            >
              Pulikeshi Siddhanti Guruji is a deeply trusted and revered
              astrologer who helps individuals unlock clarity and find true
              direction in life.
            </p>

            <p
              className="
                mt-4
                max-w-2xl
                text-[15px]
                leading-[1.9]
                text-[#665044]/85
              "
            >
              His core philosophy is beautifully simple: when you understand
              your behavioral patterns, karmic influences, and planetary
              timing, you can navigate life's challenges with absolute
              awareness rather than confusion.
            </p>

          </div>

          {/* =================================================
              RIGHT — PHILOSOPHY CARD
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-[#81583d]/10
              bg-[#f2e4d2]/65
              p-6

              shadow-[0_12px_40px_rgba(64,42,25,0.06)]

              sm:p-8
            "
          >

            {/* CLOUD */}

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-44
                w-44
                rounded-full
                bg-[#d89d62]/20
                blur-[45px]
              "
            />

            <span
              className="
                relative
                text-[9px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#a65332]
              "
            >
              Traditional Practice
            </span>

            <div className="relative mt-5">

              <span
                className="
                  font-serif
                  text-[42px]
                  font-semibold
                  leading-none
                  text-[#a65332]
                  sm:text-[48px]
                "
              >
                10,000+
              </span>

              <p
                className="
                  mt-2
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#74533e]/60
                "
              >
                Individuals & Couples Guided
              </p>

            </div>

            <div className="relative my-6 h-px bg-[#76513a]/10" />

            <p
              className="
                relative
                text-[14px]
                leading-[1.9]
                text-[#594334]/80
                sm:text-[15px]
              "
            >
              With decades of traditional practice, Guruji has touched the
              lives of over 10,000+ individuals and couples worldwide.
            </p>

            <p
              className="
                relative
                mt-4
                text-[14px]
                leading-[1.9]
                text-[#594334]/80
                sm:text-[15px]
              "
            >
              He offers profound, practical guidance on crucial life aspects,
              including relationships, marriage delays, career growth,
              business obstacles, and deep emotional challenges.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}