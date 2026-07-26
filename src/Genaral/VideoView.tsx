import { ArrowRight } from "lucide-react";

const pulikeshi_img = "pulikeshi.png";
const pulikeshi_short_img = "pulikeshi-short.png";

const SPARKLES: {
  top: string;
  left: string;
  size: number;
  delay: number;
}[] = [
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
      className="absolute animate-pulse rounded-full bg-white/90"
      style={{
        top,
        left,
        width: size,
        height: size,
        boxShadow: "0 0 8px 2px rgba(255,255,220,0.8)",
        animationDelay: `${delay}s`,
        animationDuration: "2.4s",
      }}
    />
  );
}

export default function Hero() {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#F5C65B]
      "
    >

      {/* ======================================================
          LAYER 1 — CLOUD / FLUFFY BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

        {/* Top-left light cloud */}
        <div
          className="
            absolute
            -left-[12%]
            top-[2%]
            h-[260px]
            w-[500px]
            rounded-[45%_55%_60%_40%]
            bg-[#fff4b8]/80
            blur-[50px]
          "
        />

        {/* Top-center golden light */}
        <div
          className="
            absolute
            left-[25%]
            top-[5%]
            h-[220px]
            w-[550px]
            rounded-[60%_40%_45%_55%]
            bg-[#ffe98c]/75
            blur-[55px]
          "
        />

        {/* Middle-left cream cloud */}
        <div
          className="
            absolute
            -left-[5%]
            top-[30%]
            h-[300px]
            w-[600px]
            rounded-[40%_60%_65%_35%]
            bg-[#fff0a0]/65
            blur-[55px]
          "
        />

        {/* Middle-center bright fluffy cloud */}
        <div
          className="
            absolute
            left-[30%]
            top-[30%]
            h-[250px]
            w-[600px]
            rounded-[55%_45%_35%_65%]
            bg-[#ffe792]/75
            blur-[50px]
          "
        />

        {/* Right orange cloud */}
        <div
          className="
            absolute
            right-[-10%]
            top-[25%]
            h-[380px]
            w-[650px]
            rounded-[60%_40%_55%_45%]
            bg-[#e7a33d]/55
            blur-[65px]
          "
        />

        {/* Bottom-left light cloud */}
        <div
          className="
            absolute
            -left-[10%]
            bottom-[0%]
            h-[350px]
            w-[650px]
            rounded-[45%_55%_65%_35%]
            bg-[#fff3ae]/70
            blur-[60px]
          "
        />

        {/* Bottom-center yellow cloud */}
        <div
          className="
            absolute
            bottom-[-20%]
            left-[30%]
            h-[320px]
            w-[650px]
            rounded-[60%_40%_40%_60%]
            bg-[#ffd96d]/70
            blur-[60px]
          "
        />

        {/* Bottom-right darker gold */}
        <div
          className="
            absolute
            bottom-[-12%]
            right-[-10%]
            h-[420px]
            w-[700px]
            rounded-[55%_45%_65%_35%]
            bg-[#d99135]/50
            blur-[70px]
          "
        />
      </div>


      {/* ======================================================
          LAYER 2 — AMBIENT LIGHT / GLOW
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-[1]
          h-[400px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(ellipse,rgba(255,249,190,0.55),transparent_70%)]
          blur-[30px]
        "
      />


      {/* ======================================================
          LAYER 3 — SPARKLES
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        {SPARKLES.map((sparkle, index) => (
          <Sparkle key={index} {...sparkle} />
        ))}
      </div>


      {/* ======================================================
          LAYER 4 — MAIN CONTENT
      ====================================================== */}
      <section className="relative z-10">


        {/* ==================================================
            MOBILE PORTRAIT
        ================================================== */}
        <div className="relative flex w-full justify-center md:hidden">

          <div className="relative w-full">

<div className="relative w-full">
  <img
    src={pulikeshi_img}
    alt="Pandith Pulikeshi Siddanti"
    className="h-[420px] w-full object-cover object-top"
  />

  {/* BOTTOM EDGE DISSOLVE + GLOW */}
  <div
    className="
      pointer-events-none
      absolute
      inset-x-0
      bottom-0
      h-[170px]
      bg-[linear-gradient(to_bottom,transparent_0%,rgba(245,198,91,0.08)_25%,rgba(245,198,91,0.45)_60%,#F5C65B_100%)]
    "
  />

  {/* SOFT GLOW AROUND TRANSITION */}
  <div
    className="
      pointer-events-none
      absolute
      inset-x-[5%]
      bottom-[35px]
      h-[70px]
      bg-[#FFE9A6]/35
      blur-[35px]
    "
  />
</div>
          </div>

        </div>


        {/* ==================================================
            NAME
        ================================================== */}
        <div
          className="
            relative
            z-20
            flex
            items-center
            justify-center
            px-4
            py-10
            md:py-12
          "
        >

          <h2
            className="
              text-center
              font-serif
              text-4xl
              font-bold
              tracking-wide
              text-[#9f382f]
              drop-shadow-[0_2px_10px_rgba(255,255,255,0.35)]
              md:text-5xl
            "
          >
            Pulikeshi Siddhanti Guruji
          </h2>

        </div>


        {/* ==================================================
            MAIN GRID
        ================================================== */}
        <div
          className="
            relative
            z-20
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            items-center
            gap-10
            px-5
            pb-16
            md:grid-cols-2
            md:px-8
          "
        >

          {/* ==============================
              LEFT CONTENT
          ============================== */}
         <div className="relative max-w-2xl">

  {/* ==========================================
      EYEBROW
  ========================================== */}
  <div className="mb-7 flex items-center gap-3">
    <span className="h-px w-9 bg-[#9b6842]" />

    <span
      className="
        text-[10px]
        font-bold
        uppercase
        tracking-[0.28em]
        text-[#805738]
      "
    >
      Vedic Astrology · Palmistry · Life Guidance
    </span>
  </div>


  {/* ==========================================
      01 — MAIN ENGLISH HEADING
  ========================================== */}
  <div className="relative">

    <span
      className="
        mb-2
        block
        text-[10px]
        font-semibold
        uppercase
        tracking-[0.2em]
        text-[#a97852]
      "
    >
      Guidance for every challenge
    </span>

    <h1
      className="
        font-serif
        text-[42px]
        font-medium
        leading-[1.05]
        tracking-[-0.035em]
        text-[#38281f]
        sm:text-5xl
        lg:text-[58px]
      "
    >
      Your problem.

      <span
        className="
          ml-2
          italic
          text-[#a74d2e]
        "
      >
        Our solution.
      </span>
    </h1>
  </div>


  {/* ==========================================
      02 — TELUGU STATEMENT
  ========================================== */}
  <div
    className="
      relative
      my-7
      overflow-hidden
      rounded-[20px]
      border
      border-[#9b6842]/10
      bg-white/35
      px-5
      py-4
      backdrop-blur-sm
      sm:px-6
    "
  >
    {/* little accent */}
    <span
      className="
        absolute
        bottom-0
        left-0
        top-0
        w-[3px]
        bg-[#a74d2e]
      "
    />

    <h2
      className="
        text-[22px]
        font-semibold
        leading-relaxed
        text-[#4b3427]
        sm:text-[27px]
      "
    >
      సమస్య మీది...

      <span className="ml-2 text-[#a74d2e]">
        పరిష్కారం మాది
      </span>
    </h2>
  </div>


  {/* ==========================================
      03 — EVERY PROBLEM / HAS A SOLUTION
      SPLIT TYPOGRAPHY
  ========================================== */}
  <div className="my-7">

    <div className="flex items-center gap-3">
      <span
        className="
          text-[11px]
          font-bold
          uppercase
          tracking-[0.25em]
          text-[#6c4a34]
        "
      >
        Every Problem
      </span>

      <span
        className="
          h-px
          flex-1
          bg-gradient-to-r
          from-[#9b6842]/40
          to-transparent
        "
      />
    </div>

    <div
      className="
        mt-2
        font-serif
        text-3xl
        font-semibold
        italic
        tracking-[-0.02em]
        text-[#a74d2e]
        sm:text-4xl
      "
    >
      Has a Solution.
    </div>

  </div>


  {/* ==========================================
      04 — SAME HEADING, DIFFERENT APPEARANCE
  ========================================== */}
  <div
    className="
      my-7
      inline-flex
      flex-wrap
      items-center
      gap-x-3
      gap-y-2
      rounded-full
      border
      border-[#765037]/15
      bg-[#493126]
      px-5
      py-3
      shadow-[0_8px_25px_rgba(60,40,25,0.12)]
      sm:px-6
    "
  >
    <span
      className="
        text-[11px]
        font-semibold
        uppercase
        tracking-[0.18em]
        text-white/60
      "
    >
      Every Problem
    </span>

    <span
      className="
        hidden
        h-1
        w-1
        rounded-full
        bg-[#e2b27e]
        sm:block
      "
    />

    <span
      className="
        font-serif
        text-[16px]
        font-semibold
        italic
        text-[#f5d4ad]
        sm:text-lg
      "
    >
      Has a Solution
    </span>
  </div>


  {/* ==========================================
      05 — FINAL TELUGU HEADING
  ========================================== */}
  <div className="relative my-8">

    <div
      className="
        absolute
        -left-4
        top-1/2
        h-20
        w-20
        -translate-y-1/2
        rounded-full
        bg-[#e2a85f]/20
        blur-2xl
      "
    />

    <div className="relative">

      <span
        className="
          mb-2
          block
          text-[9px]
          font-bold
          uppercase
          tracking-[0.3em]
          text-[#9b6842]/70
        "
      >
        Every challenge has a way forward
      </span>

      <h2
        className="
          max-w-xl
          text-[25px]
          font-bold
          leading-[1.5]
          text-[#3e2b21]
          sm:text-[30px]
        "
      >
        ప్రతి సమస్యకూ...

        <span
          className="
            ml-2
            text-[#a74d2e]
          "
        >
          ఒక పరిష్కారం ఉంటుంది
        </span>
      </h2>

      <div
        className="
          mt-3
          h-[2px]
          w-20
          rounded-full
          bg-gradient-to-r
          from-[#a74d2e]
          to-transparent
        "
      />

    </div>
  </div>


  {/* ==========================================
      DESCRIPTION
  ========================================== */}
  <p
    className="
      mt-7
      max-w-lg
      text-[15px]
      leading-7
      text-[#583c28]/70
    "
  >
    Through deep astrological analysis, we help you with personalised
    life guidance &amp; to understand the &lsquo;why&rsquo; behind your
    patterns, decisions, and experiences.
  </p>


  {/* ==========================================
      BUTTON
  ========================================== */}
  <a
    href="/book"
    className="
      group
      mt-8
      hidden
      w-fit
      items-center
      gap-5
      rounded-full
      bg-[#422d23]
      py-2
      pl-6
      pr-2
      text-[12px]
      font-semibold
      uppercase
      tracking-[0.12em]
      text-white
      shadow-[0_10px_30px_rgba(60,40,25,0.18)]
      transition-all
      duration-300

      hover:-translate-y-1
      hover:bg-[#8d5b3d]

      md:flex
    "
  >
    Book Consultation

    <span
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        bg-white
        text-[#422d23]
        transition-transform
        duration-300
        group-hover:translate-x-0.5
      "
    >
      <ArrowRight size={16} />
    </span>
  </a>

</div>


          {/* ==============================
              DESKTOP PORTRAIT
          ============================== */}
          <div
            className="
              relative
              hidden
              justify-center
              md:flex
            "
          >

            <div className="relative">

              {/* Outer ring */}
              <div
                className="
                  absolute
                  -inset-3
                  rounded-[2rem]
                  border
                  border-[#b66d32]/30
                "
              />


              {/* Portrait glow */}
              <div
                className="
                  absolute
                  -inset-8
                  rounded-[2.5rem]
                  bg-[radial-gradient(ellipse_at_center,rgba(255,231,150,0.6),transparent_70%)]
                  blur-2xl
                "
              />


              {/* IMAGE CONTAINER */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-[#c88742]/40
                  shadow-2xl
                  shadow-[#75451e]/30
                "
              >

                <img
                  src={pulikeshi_short_img}
                  alt="Pandith Pulikeshi Siddanti"
                  className="
                    h-[500px]
                    w-full
                    object-cover
                    object-top
                  "
                />


                {/* Image bottom fade */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-28
                    bg-gradient-to-t
                    from-[#F5C65B]/80
                    to-transparent
                  "
                />

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}