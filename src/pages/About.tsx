"use client";

import {
  phone_number,
  whatsapp_number,
  person_name,
  company_name,
} from "../Genaral/secrete";

import { motion } from "framer-motion";

import {
  Phone,
  MessageCircle,
  Star,
  Award,
  Users,
  BookOpen,
  ArrowUpRight,
  Sparkles,
  Check,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const STATS = [
  {
    icon: Star,
    value: "20+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: "20k+",
    label: "Clients Guided",
  },
  {
    icon: Award,
    value: "Bangalore & Hyderabad",
    label: "Traditional Practice",
  },
  {
    icon: BookOpen,
    value: "10+",
    label: "Services Offered",
  },
];

const SERVICES = [
  "Horoscope Reading",
  "Vastu Consultation",
  "Palmistry",
  "Phone Consultation",
  "Personal Guidance",
];

/* =========================================================
   ABOUT
========================================================= */

export default function About() {
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
          CLOUD BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[5%]
          h-[500px]
          w-[600px]
          rounded-full
          bg-[#ead6b9]/45
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[250px]
          top-[28%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#dfb98c]/25
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-250px]
          left-[25%]
          h-[500px]
          w-[700px]
          rounded-full
          bg-[#efe0cd]/70
          blur-[150px]
        "
      />

      {/* subtle decorative circle */}

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[8%]
          h-52
          w-52
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
          top-[10%]
          h-40
          w-40
          rounded-full
          border
          border-[#9b6842]/[0.05]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-12
            grid
            gap-8
            md:mb-16
            lg:grid-cols-[1fr_0.65fr]
            lg:items-end
          "
        >
          {/* LEFT */}

          <div>
            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-9 bg-[#a65332]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.26em]
                  text-[#95623e]
                "
              >
                Our Story
              </span>

            </div>

            <h1
              className="
                max-w-3xl
                font-serif
                text-[38px]
                font-semibold
                leading-[1.06]
                tracking-[-0.035em]
                text-[#34251d]

                sm:text-[48px]
                md:text-[58px]
              "
            >
              About

              <span
                className="
                  ml-3
                  italic
                  text-[#a65332]
                "
              >
                {company_name}
              </span>
            </h1>
          </div>


          {/* RIGHT INTRO */}

          <div
            className="
              border-l
              border-[#9b6842]/20
              pl-5
              lg:mb-1
            "
          >
            <span
              className="
                mb-2
                block
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#a65332]
              "
            >
              Traditional Wisdom
            </span>

            <p
              className="
                max-w-md
                text-[14px]
                leading-7
                text-[#756052]
                sm:text-[15px]
              "
            >
             Pulikeshi Siddhanti – Top Astrologer in Bangalore & Hyderabad. Guruji specializes in love marriage problems, husband-wife disputes, relationship affairs, family conflicts, and enemy issues. Get accurate predictions and permanent, perfect solutions for all your life problems today
            </p>
          </div>

        </motion.div>


        {/* ===================================================
            STATS
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            mb-14
            grid
            grid-cols-2
            overflow-hidden
            rounded-[24px]

            border
            border-[#75503a]/10

            bg-white/50

            shadow-[0_12px_40px_rgba(62,42,28,0.05)]

            backdrop-blur-sm

            md:grid-cols-4
          "
        >
          {STATS.map((stat, index) => (
            <StatItem
              key={stat.label}
              {...stat}
              index={index}
            />
          ))}
        </motion.div>


        {/* ===================================================
            MAIN ABOUT LAYOUT
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10

            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-16
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            {/* LABEL */}

            <div className="mb-5 flex items-center gap-2">

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
                  text-[#9b6842]
                "
              >
                About {person_name}
              </span>

            </div>


           


            {/* FIRST PARAGRAPH */}

            <p
              className="
                mt-7
                max-w-2xl
                text-[15px]
                leading-[1.95]
                text-[#665044]/85
              "
            >
              <span
                className="
                  font-semibold
                  text-[#493126]
                "
              >
                {person_name}
              </span>{" "}
                Pulikeshi Siddhanti Guruji is a deeply trusted and revered astrologer who helps individuals unlock clarity and find true direction in life. His core philosophy is beautifully simple: when you understand your behavioral patterns, karmic influences, and planetary timing, you can navigate life's challenges with absolute awareness rather than confusion.
                ​With decades of traditional practice, Guruji has touched the lives of over 10,000+ individuals and couples worldwide. He offers profound, practical guidance on crucial life aspects, including relationships, marriage delays, career growth, business obstacles, and deep emotional challenges.
               </p>


            {/* QUOTE / HIGHLIGHT */}

            <div
              className="
                relative
                my-8
                border-l-2
                border-[#a65332]/50
                pl-5
              "
            >
              <p
                className="
                  max-w-xl
                  font-serif
                  text-[19px]
                  italic
                  leading-[1.7]
                  text-[#49372b]

                  sm:text-[21px]
                "
              >
                Thoughtful guidance designed to bring
                clarity, confidence and a better understanding
                of life's important moments.
              </p>
            </div>


            

          </motion.div>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              flex
              flex-col
              gap-5
            "
          >

            {/* ===============================================
                SERVICES CARD
            =============================================== */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]

                border
                border-[#80583d]/10

                bg-[#f1e2cf]/65

                p-6
                sm:p-8
              "
            >

              {/* CARD CLOUD */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16

                  h-44
                  w-44

                  rounded-full

                  bg-[#d5975d]/20
                  blur-[45px]
                "
              />


              <div className="relative">

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#a65332]
                  "
                >
                  Areas of Guidance
                </span>


                <h3
                  className="
                    mt-3
                    font-serif
                    text-[26px]
                    font-semibold
                    leading-tight
                    text-[#3e2d23]
                  "
                >
                  Personalized guidance for
                  life's important areas.
                </h3>


                {/* SERVICES */}

                <div className="mt-7 space-y-3">

                  {SERVICES.map((service) => (

                    <div
                      key={service}
                      className="
                        flex
                        items-center
                        gap-3

                        rounded-[14px]

                        border
                        border-[#74503a]/[0.07]

                        bg-white/45

                        px-4
                        py-3
                      "
                    >

                      <span
                        className="
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center

                          rounded-full

                          bg-[#a65332]/10

                          text-[#a65332]
                        "
                      >
                        <Check
                          size={12}
                          strokeWidth={2}
                        />
                      </span>

                      <span
                        className="
                          text-[13px]
                          font-medium
                          text-[#5b4333]
                        "
                      >
                        {service}
                      </span>

                    </div>

                  ))}

                </div>

              </div>
            </div>


            {/* ===============================================
                CONTACT CARD
            =============================================== */}

            <div
              className="
                relative
                overflow-hidden

                rounded-[28px]

                bg-[#493126]

                p-6
                sm:p-8

                shadow-[0_18px_50px_rgba(73,49,38,0.16)]
              "
            >

              {/* glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20

                  h-52
                  w-52

                  rounded-full

                  bg-[#c77a4a]/20
                  blur-[55px]
                "
              />


              <div className="relative">

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#e3b48c]
                  "
                >
                  Personal Consultation
                </span>


                <h3
                  className="
                    mt-3
                    max-w-sm
                    font-serif
                    text-[27px]
                    font-semibold
                    leading-[1.2]
                    text-[#fffaf3]
                  "
                >
                  Looking for guidance?
                  Start a conversation.
                </h3>


                <p
                  className="
                    mt-4
                    max-w-sm
                    text-[13px]
                    leading-6
                    text-[#fffaf3]/60
                  "
                >
                  Get in touch for a personalized consultation
                  based on your situation and questions.
                </p>


                {/* BUTTONS */}

                <div
                  className="
                    mt-7
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                  "
                >

                  {/* CALL */}

                  <motion.a
                    href={`tel:${phone_number}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      group

                      flex
                      items-center
                      justify-center
                      gap-2.5

                      rounded-full

                      bg-[#fffaf3]

                      px-5
                      py-3

                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      text-[#493126]
                    "
                  >
                    <Phone
                      size={14}
                      strokeWidth={2}
                    />

                    Call Now

                    <ArrowUpRight
                      size={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </motion.a>


                  {/* WHATSAPP */}

                  <motion.a
                    href={`https://wa.me/${whatsapp_number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      group

                      flex
                      items-center
                      justify-center
                      gap-2.5

                      rounded-full

                      border
                      border-white/15

                      bg-white/[0.06]

                      px-5
                      py-3

                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      text-[#fffaf3]

                      transition-colors
                      duration-300

                      hover:bg-white/[0.11]
                    "
                  >
                    <MessageCircle
                      size={14}
                      strokeWidth={2}
                    />

                    Message Now

                    <ArrowUpRight
                      size={14}
                      className="
                        opacity-60
                        transition-transform
                        duration-300

                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </motion.a>

                </div>

              </div>
            </div>

          </motion.div>
        </div>


        {/* ===================================================
            BOTTOM TRUST LINE
        =================================================== */}

        <div
          className="
            mt-14
            flex
            items-center
            gap-4

            md:mt-20
          "
        >

          <span
            className="
              h-px
              flex-1

              bg-gradient-to-r
              from-transparent
              to-[#9b6842]/20
            "
          />

          <span
            className="
              text-center
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#856b58]/50

              sm:text-[9px]
            "
          >
            Traditional Wisdom · Personal Guidance · Trusted Practice
          </span>

          <span
            className="
              h-px
              flex-1

              bg-gradient-to-l
              from-transparent
              to-[#9b6842]/20
            "
          />

        </div>

      </div>
    </section>
  );
}


/* =========================================================
   STAT ITEM
========================================================= */

function StatItem({
  icon: Icon,
  value,
  label,
  index,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  index: number;
}) {
  return (
    <div
      className={`
        group
        relative

        flex
        min-h-[150px]
        flex-col
        justify-between

        p-5

        transition-colors
        duration-300

        hover:bg-[#f3e4d1]/60

        md:p-6

        ${index % 2 === 0 ? "border-r border-[#76513a]/10" : ""}

        ${
          index < 2
            ? "border-b border-[#76513a]/10 md:border-b-0"
            : ""
        }

        ${
          index !== 3
            ? "md:border-r md:border-[#76513a]/10"
            : "md:border-r-0"
        }
      `}
    >

      {/* ICON */}

      <div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center

          rounded-full

          bg-[#a65332]/[0.08]

          text-[#a65332]

          transition-transform
          duration-300

          group-hover:scale-110
        "
      >
        <Icon
          size={15}
          strokeWidth={1.7}
        />
      </div>


      {/* VALUE */}

      <div className="mt-5">

        <strong
          className="
            block
            font-serif
            text-[25px]
            font-semibold
            leading-none
            text-[#493126]

            sm:text-[28px]
          "
        >
          {value}
        </strong>

        <span
          className="
            mt-2
            block

            text-[9px]
            font-semibold
            uppercase
            tracking-[0.13em]
            text-[#806650]/55
          "
        >
          {label}
        </span>

      </div>


      {/* NUMBER */}

      <span
        className="
          absolute
          right-4
          top-4

          font-serif
          text-[10px]
          text-[#9b6842]/20
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

    </div>
  );
}