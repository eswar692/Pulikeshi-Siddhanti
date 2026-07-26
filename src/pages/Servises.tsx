"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  Heart,
  Users,
  BriefcaseBusiness,
  Home,
  Hand,
  Stars,
} from "lucide-react";
import { person_name, whatsapp_number } from "../Genaral/secrete";



/* =========================================================
   SERVICES DATA
========================================================= */

const SERVICES = [
  {
    title: "Love & Relationship Guidance",
    shortTitle: "Love Guidance",
    desc: "Personalized guidance for relationship challenges, emotional misunderstandings, compatibility concerns, and important decisions in your love life.",
    img: "https://res.cloudinary.com/di7evjrx6/image/upload/v1785042413/WhatsApp_Image_2026-07-22_at_8.13.35_PM_zn7kan.jpg",
    category: "Relationships",
    icon: Heart,
  },
  {
    title: "Marriage Consultation",
    shortTitle: "Marriage",
    desc: "Traditional guidance for marriage compatibility, delays, husband-wife misunderstandings, family concerns, and relationship harmony.",
    img: "https://res.cloudinary.com/di7evjrx6/image/upload/v1785042405/WhatsApp_Image_2026-07-22_at_8.19.02_PM_vuzu7u.jpg",
    category: "Marriage",
    icon: Users,
  },
  {
    title: "Family & Personal Guidance",
    shortTitle: "Family",
    desc: "Thoughtful consultation for family conflicts, personal challenges, difficult decisions, and situations affecting peace at home.",
    img: "https://res.cloudinary.com/di7evjrx6/image/upload/v1785042394/WhatsApp_Image_2026-07-22_at_8.24.52_PM_uaiejp.jpg",
    category: "Family",
    icon: Home,
  },
  {
    title: "Career & Business Guidance",
    shortTitle: "Career",
    desc: "Astrological insights for career decisions, professional growth, business obstacles, timing, opportunities, and important financial choices.",
    img: "https://res.cloudinary.com/di7evjrx6/image/upload/v1785042386/WhatsApp_Image_2026-07-22_at_8.36.41_PM_wzq6uk.jpg",
    category: "Career",
    icon: BriefcaseBusiness,
  },
  {
    title: "Horoscope Reading",
    shortTitle: "Horoscope",
    desc: "A detailed reading focused on planetary influences, important life periods, personal patterns, opportunities, and upcoming challenges.",
    img: "https://res.cloudinary.com/di7evjrx6/image/upload/v1785042380/WhatsApp_Image_2026-07-22_at_8.48.13_PM_wrl7bw.jpg",
    category: "Astrology",
    icon: Stars,
  },
  {
    title: "Palmistry Consultation",
    shortTitle: "Palmistry",
    desc: "Traditional palm analysis designed to provide insight into personality, tendencies, important choices, and different phases of life.",
    img: "https://res.cloudinary.com/di7evjrx6/image/upload/v1785042413/WhatsApp_Image_2026-07-22_at_8.13.35_PM_zn7kan.jpg",
    category: "Palmistry",
    icon: Hand,
  },
];

/* =========================================================
   SERVICES PAGE
========================================================= */

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#fffaf3]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          px-5
          pb-16
          pt-20
          sm:px-8
          md:pb-20
          md:pt-28
          lg:px-12
        "
      >
        {/* CLOUDS */}

        <div
          className="
            pointer-events-none
            absolute
            -left-[250px]
            -top-[180px]
            h-[600px]
            w-[700px]
            rounded-full
            bg-[#ead5b8]/55
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-[260px]
            top-[5%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#e4bc91]/30
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-250px]
            left-[30%]
            h-[450px]
            w-[700px]
            rounded-full
            bg-[#f0dfca]/70
            blur-[140px]
          "
        />

        {/* DECORATIVE CIRCLES */}

        <div
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-[18%]
            h-[260px]
            w-[260px]
            rounded-full
            border
            border-[#9b6842]/[0.06]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[10%]
            top-[23%]
            h-[190px]
            w-[190px]
            rounded-full
            border
            border-[#9b6842]/[0.05]
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* EYEBROW */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-9 bg-[#a65332]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.27em]
                text-[#95623e]
              "
            >
              Our Services
            </span>
          </motion.div>

          {/* TITLE AREA */}

          <div
            className="
              grid
              gap-8
              lg:grid-cols-[1.2fr_0.65fr]
              lg:items-end
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h1
                className="
                  max-w-4xl
                  font-serif
                  text-[42px]
                  font-semibold
                  leading-[1.04]
                  tracking-[-0.04em]
                  text-[#34251d]

                  sm:text-[52px]
                  md:text-[64px]
                  lg:text-[72px]
                "
              >
                Guidance for life's
                <span className="block italic text-[#a65332]">
                  important moments.
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                border-l
                border-[#9b6842]/20
                pl-5
                lg:mb-2
              "
            >
              <span
                className="
                  mb-3
                  block
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#a65332]
                "
              >
                Personal Consultation
              </span>

              <p
                className="
                  max-w-md
                  text-[14px]
                  leading-7
                  text-[#705a4b]
                  sm:text-[15px]
                "
              >
                Explore personalized consultations with{" "}
                <span className="font-semibold text-[#493126]">
                  {person_name}
                </span>
                , combining traditional wisdom with thoughtful guidance
                for relationships, family, career and personal decisions.
              </p>
            </motion.div>
          </div>

          {/* MINI NAV */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              mt-12
              flex
              flex-wrap
              gap-2
              border-t
              border-[#76513a]/10
              pt-6
            "
          >
            {SERVICES.map((service, index) => (
              <a
                key={service.title}
                href={`#service-${index + 1}`}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#76513a]/10
                  bg-white/45
                  px-4
                  py-2.5

                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-[#745440]

                  transition-all
                  duration-300

                  hover:border-[#a65332]/20
                  hover:bg-[#f0dfcc]
                  hover:text-[#a65332]
                "
              >
                <span className="text-[#a65332]/45">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {service.shortTitle}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        className="
          relative
          px-5
          pb-24
          sm:px-8
          md:pb-32
          lg:px-12
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* TOP LINE */}

          <div
            className="
              mb-10
              flex
              items-center
              justify-between
              border-b
              border-[#76513a]/10
              pb-5
            "
          >
            <div className="flex items-center gap-3">
              <Sparkles
                size={14}
                strokeWidth={1.7}
                className="text-[#a65332]"
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#95623e]
                "
              >
                Areas of Guidance
              </span>
            </div>

            <span
              className="
                font-serif
                text-[24px]
                text-[#493126]/20
              "
            >
              {String(SERVICES.length).padStart(2, "0")}
            </span>
          </div>

          {/* SERVICE LIST */}

          <div className="space-y-6">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="px-5 pb-24 sm:px-8 md:pb-32 lg:px-12">
        <div
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[32px]
            bg-[#493126]
            px-6
            py-10
            shadow-[0_20px_60px_rgba(73,49,38,0.16)]

            sm:px-9
            md:px-12
            md:py-14
          "
        >
          {/* CTA CLOUD */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[80px]
              -top-[120px]
              h-[350px]
              w-[350px]
              rounded-full
              bg-[#c87b4b]/25
              blur-[80px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-[180px]
              left-[20%]
              h-[300px]
              w-[500px]
              rounded-full
              bg-[#d7a171]/10
              blur-[90px]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-8
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#e3b48c]
                "
              >
                Need Personal Guidance?
              </span>

              <h2
                className="
                  mt-4
                  max-w-2xl
                  font-serif
                  text-[31px]
                  font-semibold
                  leading-[1.15]
                  tracking-[-0.025em]
                  text-[#fffaf3]

                  sm:text-[38px]
                  md:text-[43px]
                "
              >
                Not sure which consultation
                <span className="italic text-[#e3b48c]">
                  {" "}is right for you?
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-[14px]
                  leading-7
                  text-[#fffaf3]/60
                "
              >
                Share your concern and get guidance on the consultation
                best suited to your situation.
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                shrink-0
                items-center
                justify-between
                gap-6
                rounded-full
                bg-[#fffaf3]
                py-2
                pl-6
                pr-2

                text-[11px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-[#493126]

                transition-transform
                duration-300

                hover:-translate-y-1
              "
            >
              <span className="flex items-center gap-2">
                <MessageCircle
                  size={14}
                  strokeWidth={2}
                />

                Message Now
              </span>

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#a65332]
                  text-white

                  transition-transform
                  duration-300

                  group-hover:rotate-45
                "
              >
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const Icon = service.icon;
  const reverse = index % 2 !== 0;

  return (
    <motion.article
      id={`service-${index + 1}`}
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-[#76513a]/[0.08]
        bg-white/55
        p-2

        shadow-[0_10px_35px_rgba(65,45,25,0.045)]

        transition-all
        duration-500

        hover:border-[#a65332]/15
        hover:shadow-[0_20px_55px_rgba(65,45,25,0.09)]
      "
    >
      <div
        className={`
          grid
          min-h-[400px]
          grid-cols-1

          lg:grid-cols-2

          ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
        `}
      >
        {/* =================================================
            IMAGE
        ================================================= */}

        <div
          className="
            relative
            min-h-[300px]
            overflow-hidden
            rounded-[23px]

            sm:min-h-[380px]
            lg:min-h-[440px]
          "
        >
          <img
            src={service.img}
            alt={service.title}
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

          {/* IMAGE OVERLAY */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#25180f]/50
              via-transparent
              to-black/[0.03]
            "
          />

          {/* CATEGORY */}

          <div
            className="
              absolute
              left-5
              top-5
              flex
              items-center
              gap-2

              rounded-full
              border
              border-white/40
              bg-[#fffaf3]/85
              px-3.5
              py-2

              shadow-sm
              backdrop-blur-xl
            "
          >
            <Icon
              size={13}
              strokeWidth={1.8}
              className="text-[#a65332]"
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#684934]
              "
            >
              {service.category}
            </span>
          </div>

          {/* BIG NUMBER */}

          <span
            className="
              absolute
              bottom-4
              right-5

              font-serif
              text-[52px]
              font-medium
              leading-none
              tracking-[-0.05em]
              text-white/90

              drop-shadow-md
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          className="
            relative
            flex
            flex-col
            justify-center
            px-5
            py-10

            sm:px-8
            lg:px-12
            lg:py-12
          "
        >
          {/* SMALL DECORATION */}

          <div className="mb-7 flex items-center gap-3">
            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-[#a65332]/[0.08]
                text-[#a65332]
              "
            >
              <Icon
                size={15}
                strokeWidth={1.7}
              />
            </span>

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#95623e]
              "
            >
              {service.category} Consultation
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              max-w-lg
              font-serif
              text-[29px]
              font-semibold
              leading-[1.15]
              tracking-[-0.025em]
              text-[#34251d]

              sm:text-[35px]
              md:text-[39px]
            "
          >
            {service.title}
          </h2>

          {/* LINE */}

          <div
            className="
              my-6
              h-px
              w-16
              bg-gradient-to-r
              from-[#a65332]
              to-transparent
            "
          />

          {/* DESC */}

          <p
            className="
              max-w-lg
              text-[14px]
              leading-[1.9]
              text-[#6f5a4b]

              sm:text-[15px]
            "
          >
            {service.desc}
          </p>

          {/* CTA */}

          <div
            className="
              mt-8
              border-t
              border-[#76513a]/10
              pt-6
            "
          >
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group/btn
                inline-flex
                items-center
                gap-4

                text-[11px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-[#493126]
              "
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#493126]
                  text-[#fffaf3]

                  transition-all
                  duration-300

                  group-hover/btn:bg-[#a65332]
                  group-hover/btn:rotate-45
                "
              >
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                />
              </span>

              <span>
                Consult with {person_name}
              </span>
            </a>
          </div>

          {/* BACKGROUND NUMBER */}

          <span
            className="
              pointer-events-none
              absolute
              bottom-[-20px]
              right-4
              -z-0

              font-serif
              text-[120px]
              leading-none
              text-[#493126]/[0.025]

              sm:text-[150px]
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </motion.article>
  );
}