import { ArrowRight, Phone } from "lucide-react";
import { phone_number } from "./secrete";

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
            Phone Number
        ================================================== */}

   

<div className="opensans flex items-center justify-center ">
  <a
    href={`tel:${phone_number}`}
    className="
      group
      inline-flex
      items-center
      gap-2.5
      rounded-full
      border
      border-[#a74d2e]/15
      bg-[#fff7ed]
      px-4
      py-2.5
      text-[#493126]
      shadow-[0_5px_18px_rgba(73,49,38,0.08)]
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:border-[#a74d2e]/30
      hover:bg-[#fff2e3]
      hover:shadow-[0_8px_24px_rgba(73,49,38,0.12)]
    "
  >
    {/* CALL ICON */}
    <span
      className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-full
        bg-[#a74d2e]
        text-white
        shadow-[0_4px_12px_rgba(167,77,46,0.25)]
        transition-transform
        duration-300
        group-hover:scale-105
      "
    >
      <Phone size={15} strokeWidth={2.3} />
    </span>

    {/* NUMBER */}
    <span
      className="
        text-[18px]
        font-semibold
        tracking-[0.03em]
        sm:text-[15px]
      "
    >
      {phone_number}
    </span>
  </a>
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

<div className="relative max-w-2xl hidden md:block">

  {/* ==========================================
      EYEBROW
  ========================================== */}
  <div className="mb-8 flex items-center gap-3">
    <span className="h-[2px] w-10 rounded-full bg-[#9b6842]" />

    <span
      className="
        text-[11px]
        font-bold
        uppercase
        tracking-[0.24em]
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
        mb-3
        block
        text-[11px]
        font-semibold
        uppercase
        tracking-[0.2em]
        text-[#9a6746]
      "
    >
      Guidance for every challenge
    </span>

    <h1
      className="
        max-w-2xl
        font-serif
        text-[44px]
        font-semibold
        leading-[1.08]
        tracking-[-0.035em]
        text-[#38281f]

        sm:text-[52px]
        lg:text-[60px]
      "
    >
    
      YOUR PROBLEM.

      <span className="ml-2 italic text-[#a74d2e]">
        
        OUR SOLUTION
      </span>
    </h1>

  </div>


  {/* ==========================================
      02 — TELUGU PRIMARY STATEMENT
  ========================================== */}
  <div
    className="
      relative
      my-8
      overflow-hidden
      rounded-[22px]
      border
      border-[#8b5d3b]/15
      bg-[#fff8e7]/45
      px-6
      py-5
      shadow-[0_8px_30px_rgba(90,55,30,0.05)]
      backdrop-blur-sm

      sm:px-7
      sm:py-6
    "
  >

    {/* LEFT ACCENT */}
    <span
      className="
        absolute
        bottom-4
        left-0
        top-4
        w-[4px]
        rounded-r-full
        bg-[#a74d2e]
      "
    />

    {/* SOFT GLOW */}
    <div
      className="
        pointer-events-none
        absolute
        -right-12
        -top-14
        h-36
        w-36
        rounded-full
        bg-[#e4a15b]/15
        blur-[40px]
      "
    />

    <h2
      className="
        font-ramabhadra
        relative
        text-[28px]
        font-semibold
        leading-[1.65]
        text-[#493126]

        sm:text-[32px]
        md:text-[34px]
        lg:text-[36px]
      "
    >
      సమస్య మీది...

      <span className="ml-2 text-[#a74d2e]">
        పరిష్కారం మాది
      </span>
    </h2>

  </div>


  {/* ==========================================
      03 — ENGLISH STATEMENT
  ========================================== */}
  <div className="my-9">

    <div className="mb-3 flex items-center gap-4">

      <span
        className="
          text-[34px]
          font-bold
          uppercase
          tracking-[0.22em]
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
          from-[#9b6842]/50
          to-transparent
        "
      />

    </div>

    <h2
      className="
        font-serif
        text-[34px]
        font-semibold
        italic
        leading-tight
        tracking-[-0.025em]
        text-[#a74d2e]

        sm:text-[40px]
        lg:text-[44px]
      "
    >
      
      HAS SOLUTION.
    </h2>

  </div>


  


  {/* ==========================================
      05 — TELUGU FINAL STATEMENT
  ========================================== */}
  <div className="relative my-9">

    {/* BACKGROUND GLOW */}
    <div
      className="
        pointer-events-none
        absolute
        -left-8
        top-1/2
        h-32
        w-32
        -translate-y-1/2
        rounded-full
        bg-[#e2a85f]/20
        blur-[35px]
      "
    />

    <div className="relative">

      <span
        className="
          mb-3
          block
          text-[34px]
          font-bold
          uppercase
          tracking-[0.10em]
          text-[#8b6041]
        "
      >
        
        EVERY CHALLENGE HAS A WAY FORWARD
      </span>

      <h2
        className="
          font-ramabhadra
          max-w-2xl
          text-[29px]
          font-semibold
          leading-[1.65]
          text-[#493126]

          sm:text-[33px]
          md:text-[35px]
          lg:text-[37px]
        "
      >
        ప్రతి సమస్యకూ...

        <span className="ml-2 text-[#a74d2e]">
          ఒక పరిష్కారం ఉంటుంది
        </span>
      </h2>

      <div
        className="
          mt-4
          h-[3px]
          w-24
          rounded-full
          bg-gradient-to-r
          from-[#a74d2e]
          via-[#c77748]
          to-transparent
        "
      />

    </div>

  </div>





  {/* ==========================================
      BUTTON
  ========================================== */}
  <a
    href="/book"
    className="
      group
      mt-9
      hidden
      w-fit
      items-center
      gap-6
      rounded-full
      bg-[#422d23]
      py-2.5
      pl-7
      pr-2.5
      text-[12px]
      font-bold
      uppercase
      tracking-[0.12em]
      text-white
      shadow-[0_12px_35px_rgba(60,40,25,0.2)]
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
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-[#fff8e8]
        text-[#422d23]
        transition-transform
        duration-300

        group-hover:translate-x-1
      "
    >
      <ArrowRight size={17} />
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