"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";
import { person_name } from "./secrete";

const testimonials = [
  {
    name: "Arjun Verma",
    location: "Mumbai",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: `${person_name} Ji gave me clear direction during a difficult stretch in my business. I came to him after a significant loss, unsure what to do next — the remedies he suggested were practical, easy to follow, and started showing results within weeks.`,
  },
  {
    name: "Mala Kapoor",
    location: "Goa",
    image: "https://astrologerdeepaksharma.in/images/client-1.png",
    text: `I've consulted Pandith ${person_name} several times over the past two years. What I appreciate most is that he explains the timing and reasoning clearly, so you leave the consultation with a better understanding of your situation.`,
  },
  {
    name: "Pratha Kumari",
    location: "Delhi",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: "I was worried about growing distance within my family and didn't know how to approach it. His guidance helped us look at the situation differently and take small steps toward better communication at home.",
  },
  {
    name: "Vikram Rao",
    location: "Hyderabad",
    image: "https://astrologerdeepaksharma.in/images/client-1.png",
    text: `Before an important career decision, I wanted another perspective. ${person_name} Ji listened carefully and gave me guidance that helped me think more clearly about the timing and direction of my next step.`,
  },
  {
    name: "Sunitha Reddy",
    location: "Vijayawada",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: "The consultation for our new home was detailed and easy to understand. Every suggestion was explained clearly, and I especially appreciated that the recommendations were practical rather than complicated.",
  },
  {
    name: "Karthik Nair",
    location: "Kochi",
    image: "https://astrologerdeepaksharma.in/images/client-1.png",
    text: `Since I live abroad, I chose a phone consultation. ${person_name} Ji took time to understand my questions before giving guidance, and the conversation gave me much-needed clarity about my situation.`,
  },
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f3eee6]
        px-5
        py-20
        sm:px-8
        md:py-28
        lg:px-12
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-250px]
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#e6ceb0]/40
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          bottom-[-120px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#eadccc]/60
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[35%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#dfc2a0]/30
          blur-[120px]
        "
      />

      {/* giant decorative quote */}

      <Quote
        strokeWidth={1}
        className="
          pointer-events-none
          absolute
          -right-8
          top-12
          h-[220px]
          w-[220px]
          rotate-6
          text-[#805738]/[0.035]
          md:h-[300px]
          md:w-[300px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            mb-12
            flex
            flex-col
            gap-7
            md:mb-14
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div className="max-w-2xl">

            {/* EYEBROW */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#9b6842]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#95623e]
                "
              >
                Client Experiences
              </span>
            </div>

            {/* HEADING */}

            <h2
              className="
                font-serif
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]
                text-[#302820]
                md:text-5xl
                lg:text-[54px]
              "
            >
              Stories shared by
              <span className="block text-[#9b6842]">
                our clients.
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              max-w-sm
              text-[14px]
              leading-7
              text-[#756b62]
              md:text-[15px]
            "
          >
            Experiences shared by people who consulted{" "}
            <span className="font-semibold text-[#805738]">
              {person_name}
            </span>{" "}
            for guidance through important moments in their lives.
          </p>
        </div>

        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div
          ref={emblaRef}
          className="overflow-hidden"
        >
          <div className="-ml-4 flex sm:-ml-5 lg:-ml-6">

            {testimonials.map((t, i) => (
              <div
                key={i}
                className="
                  min-w-0
                  flex-[0_0_90%]
                  pl-4

                  sm:flex-[0_0_52%]
                  sm:pl-5

                  lg:flex-[0_0_34%]
                  lg:pl-6
                "
              >
                {/* =========================================
                    TESTIMONIAL CARD
                ========================================= */}

                <article
                  className="
                    group
                    relative
                    flex
                    h-full
                    min-h-[380px]
                    flex-col
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-[#493629]/[0.07]
                    bg-[#fffdf9]
                    p-6
                    shadow-[0_10px_35px_rgba(62,44,28,0.07)]

                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:shadow-[0_18px_45px_rgba(62,44,28,0.12)]

                    sm:p-7
                  "
                >
                  {/* =====================================
                      TOP
                  ===================================== */}

                  <div className="flex items-start justify-between gap-4">

                    {/* STARS */}

                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          size={14}
                          strokeWidth={1.5}
                          fill="currentColor"
                          className="text-[#b9824f]"
                        />
                      ))}
                    </div>

                    {/* QUOTE ICON */}

                    <Quote
                      size={30}
                      strokeWidth={1.3}
                      className="
                        text-[#b9824f]/20
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* =====================================
                      REVIEW
                  ===================================== */}

                  <p
                    className="
                      mt-7
                      flex-1
                      font-serif
                      text-[16px]
                      leading-[1.8]
                      text-[#51473f]
                      sm:text-[17px]
                    "
                  >
                    “{t.text}”
                  </p>

                  {/* =====================================
                      DIVIDER
                  ===================================== */}

                  <div
                    className="
                      my-6
                      h-px
                      w-full
                      bg-gradient-to-r
                      from-[#9b6842]/20
                      via-[#9b6842]/10
                      to-transparent
                    "
                  />

                  {/* =====================================
                      PERSON
                  ===================================== */}

                  <div className="flex items-center gap-3.5">

                    {/* AVATAR */}

                    <div
                      className="
                        h-12
                        w-12
                        shrink-0
                        overflow-hidden
                        rounded-full
                        bg-[#eee3d5]
                        ring-2
                        ring-[#9b6842]/10
                        ring-offset-2
                        ring-offset-[#fffdf9]
                      "
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        loading="lazy"
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                      />
                    </div>

                    {/* NAME */}

                    <div className="min-w-0">

                      <h3
                        className="
                          truncate
                          text-[14px]
                          font-semibold
                          text-[#302820]
                        "
                      >
                        {t.name}
                      </h3>

                      <div className="mt-1 flex items-center gap-2">

                        <span
                          className="
                            h-1
                            w-1
                            rounded-full
                            bg-[#ad7950]
                          "
                        />

                        <span
                          className="
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.15em]
                            text-[#89786a]
                          "
                        >
                          {t.location}
                        </span>

                      </div>
                    </div>

                    {/* NUMBER */}

                    <span
                      className="
                        ml-auto
                        font-serif
                        text-[12px]
                        text-[#6d5949]/25
                      "
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                  </div>

                  {/* subtle hover accent */}

                  <div
                    className="
                      absolute
                      inset-x-8
                      bottom-0
                      h-[2px]
                      origin-left
                      scale-x-0
                      rounded-full
                      bg-[#a66f45]

                      transition-transform
                      duration-500

                      group-hover:scale-x-100
                    "
                  />

                </article>
              </div>
            ))}

          </div>
        </div>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div
          className="
            mt-9
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-8 bg-[#9b6842]/20" />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#806b59]/55
            "
          >
            Shared Experiences
          </span>

          <span className="h-px w-8 bg-[#9b6842]/20" />
        </div>

      </div>
    </section>
  );
}