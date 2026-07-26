"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";

import { person_name } from "./secrete";

type FamilyPhoto = {
  src: string;
};

const familyPhotos: FamilyPhoto[] = [
  { src: "/IMG_6799.png" },
  { src: "/IMG_6801.png" },
  { src: "/IMG_6805.png" },
  { src: "/IMG_6810.png" },
  { src: "/IMG_6812.png" },
];

export default function PulikeshiFamilyGallery() {
 const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    loop: true,
    align: "start",
    slidesToScroll: 1,
    duration: 35,
  },
  [
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  ]
);

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
          BACKGROUND CLOUDS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-[-220px]
          h-[480px]
          w-[750px]
          rounded-full
          bg-[#ead6b9]/40
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[200px]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#e4c49d]/30
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[220px]
          left-[20%]
          h-[450px]
          w-[700px]
          rounded-full
          bg-[#efe2d1]/60
          blur-[140px]
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
            gap-8
            md:mb-16
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          {/* LEFT HEADER */}

          <div className="max-w-3xl">

            {/* EYEBROW */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#a87349]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#96613d]
                "
              >
                Family & Life
              </span>
            </div>

            {/* TITLE */}

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
              About Pulikeshi Siddhanti

              <span
                className="
                  mt-1
                  block
                  italic
                  text-[#9b6842]
                "
              >
                & Family
              </span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}

          <div className="max-w-sm">

            <p
              className="
                text-[14px]
                leading-7
                text-[#756b62]
                sm:text-[15px]
              "
            >
              A glimpse into the personal and family moments of{" "}

              <span className="font-semibold text-[#805738]">
                {person_name}
              </span>

              , reflecting family, tradition, togetherness, and the
              values that remain close to his life.
            </p>

          </div>
        </div>

        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div className="relative">

          <div
            ref={emblaRef}
            className="overflow-hidden"
          >
            <div
              className="
                -ml-4
                flex
                sm:-ml-5
                lg:-ml-6
              "
            >

              {familyPhotos.map((photo, i) => (

                <div
                  key={i}
                  className="
                    min-w-0

                    flex-[0_0_88%]
                    pl-4

                    sm:flex-[0_0_52%]
                    sm:pl-5

                    lg:flex-[0_0_34%]
                    lg:pl-6

                    xl:flex-[0_0_31%]
                  "
                >

                  {/* =====================================
                      PHOTO CARD
                  ===================================== */}

                  <div
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[26px]
                      bg-[#eee5d8]

                      shadow-[0_10px_35px_rgba(60,43,27,0.10)]

                      ring-1
                      ring-[#513a26]/[0.06]

                      transition-all
                      duration-500

                      hover:-translate-y-1
                      hover:shadow-[0_18px_45px_rgba(60,43,27,0.14)]
                    "
                  >

                    <div
                      className="
                        relative
                        aspect-[4/5]
                        overflow-hidden
                      "
                    >

                      {/* IMAGE */}

                      {photo.src ? (

                        <img
                          src={photo.src}
                          alt={`${person_name} and family - ${i + 1}`}
                          loading="lazy"
                          className="
                            h-full
                            w-full
                            object-cover

                            transition-transform
                            duration-700
                            ease-out

                            group-hover:scale-[1.04]
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
                            bg-[#eee5d8]
                          "
                        >
                          <Images
                            size={26}
                            strokeWidth={1.5}
                            className="text-[#9b6842]/35"
                          />

                          <span
                            className="
                              text-[10px]
                              font-semibold
                              uppercase
                              tracking-[0.18em]
                              text-[#806650]/50
                            "
                          >
                            Photo coming soon
                          </span>
                        </div>

                      )}

                      {/* =====================================
                          IMAGE SHADING
                      ===================================== */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0

                          bg-gradient-to-t
                          from-[#26180e]/35
                          via-transparent
                          to-transparent
                        "
                      />

                      {/* subtle top shade */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-x-0
                          top-0
                          h-24

                          bg-gradient-to-b
                          from-black/10
                          to-transparent
                        "
                      />

                      {/* =====================================
                          PHOTO NUMBER
                      ===================================== */}

                      <div
                        className="
                          absolute
                          bottom-4
                          left-4

                          flex
                          h-9
                          min-w-9
                          items-center
                          justify-center

                          rounded-full
                          border
                          border-white/30

                          bg-black/20
                          px-3

                          text-[11px]
                          font-medium
                          tracking-[0.08em]
                          text-white

                          backdrop-blur-md
                        "
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      {/* FAMILY LABEL */}

                      <div
                        className="
                          absolute
                          bottom-4
                          right-4

                          rounded-full
                          border
                          border-white/20

                          bg-black/15
                          px-3
                          py-2

                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.14em]
                          text-white/90

                          backdrop-blur-md
                        "
                      >
                        Family
                      </div>

                    </div>
                  </div>

                </div>

              ))}

            </div>
          </div>

        </div>

        {/* =================================================
            BOTTOM NAVIGATION
        ================================================= */}

        <div
          className="
            mt-9
            flex
            items-center
            justify-between
            gap-5
          "
        >

          {/* LEFT LABEL */}

          <div
            className="
              hidden
              items-center
              gap-3
              sm:flex
            "
          >
            <span className="h-px w-8 bg-[#9b6842]/30" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#8b705c]/60
              "
            >
              Family Gallery
            </span>
          </div>

          {/* ARROWS */}

          <div
            className="
              ml-auto
              flex
              items-center
              gap-3
            "
          >

            {/* PREVIOUS */}

            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous family photo"
              className="
                group

                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-full

                border
                border-[#4b3829]/10

                bg-white
                text-[#70533d]

                shadow-[0_4px_15px_rgba(60,43,27,0.06)]

                transition-all
                duration-300

                hover:border-[#9b6842]/30
                hover:bg-[#9b6842]
                hover:text-white
              "
            >
              <ChevronLeft
                size={18}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-0.5
                "
              />
            </button>

            {/* NEXT */}

            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next family photo"
              className="
                group

                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-full

                border
                border-[#4b3829]/10

                bg-white
                text-[#70533d]

                shadow-[0_4px_15px_rgba(60,43,27,0.06)]

                transition-all
                duration-300

                hover:border-[#9b6842]/30
                hover:bg-[#9b6842]
                hover:text-white
              "
            >
              <ChevronRight
                size={18}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                "
              />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}