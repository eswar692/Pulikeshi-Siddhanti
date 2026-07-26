"use client";

import { motion } from "framer-motion";

import {
  Phone,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Clock3,
  HeartHandshake,
  Check,
} from "lucide-react";

import Form from "../Genaral/Form";

import {
  company_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function Contact() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#fffaf3]
      "
    >

      {/* =====================================================
          GLOBAL BACKGROUND CLOUDS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[260px]
          -top-[180px]
          h-[650px]
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
          top-[18%]
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
          bottom-[5%]
          left-[20%]
          h-[500px]
          w-[700px]
          rounded-full
          bg-[#efe0cd]/70
          blur-[150px]
        "
      />

      {/* decorative circles */}

      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[6%]
          h-[280px]
          w-[280px]
          rounded-full
          border
          border-[#9b6842]/[0.05]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[9%]
          h-[210px]
          w-[210px]
          rounded-full
          border
          border-[#9b6842]/[0.05]
        "
      />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          z-10
          px-5
          pb-14
          pt-20
          sm:px-8
          md:pb-20
          md:pt-28
          lg:px-12
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* EYEBROW */}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
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
              Begin the Conversation
            </span>
          </motion.div>


          {/* HERO GRID */}

          <div
            className="
              grid
              gap-8
              lg:grid-cols-[1.15fr_0.65fr]
              lg:items-end
            "
          >

            {/* HEADING */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
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
                Get in touch with

                <span
                  className="
                    block
                    italic
                    text-[#a65332]
                  "
                >
                  {company_name}
                </span>
              </h1>
            </motion.div>


            {/* DESCRIPTION */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.12,
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
                Have a question or looking for personal guidance?
                Call, message us on WhatsApp, or send your details
                through the consultation form.
              </p>
            </motion.div>

          </div>


          {/* TRUST ROW */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mt-12
              flex
              flex-wrap
              gap-x-7
              gap-y-3
              border-t
              border-[#76513a]/10
              pt-6
            "
          >
            <TrustItem
              icon={ShieldCheck}
              text="Private & Respectful"
            />

            <TrustItem
              icon={HeartHandshake}
              text="Personal Guidance"
            />

            <TrustItem
              icon={Clock3}
              text="Direct Consultation"
            />
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          CONTACT + FORM
      ===================================================== */}

      <section
        className="
          relative
          z-10
          px-5
          pb-20
          sm:px-8
          md:pb-28
          lg:px-12
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-6

            lg:grid-cols-[0.82fr_1.18fr]
          "
        >

          {/* =================================================
              CONTACT SIDE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[30px]

              bg-[#493126]

              p-6

              shadow-[0_20px_60px_rgba(73,49,38,0.15)]

              sm:p-8
              lg:p-10
            "
          >

            {/* CARD CLOUD */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[100px]
                -top-[100px]
                h-[300px]
                w-[300px]
                rounded-full
                bg-[#c77a4a]/25
                blur-[70px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-[140px]
                -left-[100px]
                h-[300px]
                w-[300px]
                rounded-full
                bg-[#d9a274]/10
                blur-[70px]
              "
            />


            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
              "
            >

              {/* HEADER */}

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
                  Contact
                </span>

                <h2
                  className="
                    mt-4
                    max-w-sm
                    font-serif
                    text-[31px]
                    font-semibold
                    leading-[1.15]
                    tracking-[-0.025em]
                    text-[#fffaf3]

                    sm:text-[37px]
                  "
                >
                  Start your
                  <span className="italic text-[#e3b48c]">
                    {" "}conversation.
                  </span>
                </h2>

                <p
                  className="
                    mt-5
                    max-w-md
                    text-[14px]
                    leading-7
                    text-[#fffaf3]/60
                  "
                >
                  Whether your questions are about relationships,
                  family, career, business or personal decisions,
                  reach out directly to discuss your situation.
                </p>
              </div>


              {/* CONTACT METHODS */}

              <div className="mt-9 space-y-3">

                <ContactMethod
                  icon={Phone}
                  label="Phone"
                  value={phone_number}
                  href={`tel:${phone_number}`}
                />

                <ContactMethod
                  icon={MessageCircle}
                  label="WhatsApp"
                  value={whatsapp_number}
                  href={`https://wa.me/${whatsapp_number}`}
                  external
                />

              </div>


              {/* DIVIDER */}

              <div
                className="
                  my-8
                  h-px
                  bg-white/10
                "
              />


              {/* DIRECT CTA */}

              <div>
                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#e3b48c]/80
                  "
                >
                  Prefer to talk directly?
                </span>

                <div
                  className="
                    mt-4
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                    lg:flex-col
                    xl:flex-row
                  "
                >

                  {/* CALL */}

                  <a
                    href={`tel:${phone_number}`}
                    className="
                      group

                      flex
                      flex-1
                      items-center
                      justify-between

                      rounded-full

                      bg-[#fffaf3]

                      py-2
                      pl-5
                      pr-2

                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      text-[#493126]

                      transition-transform
                      duration-300

                      hover:-translate-y-0.5
                    "
                  >
                    <span className="flex items-center gap-2">
                      <Phone
                        size={13}
                        strokeWidth={2}
                      />

                      Call Now
                    </span>

                    <span
                      className="
                        flex
                        h-8
                        w-8
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
                        size={14}
                        strokeWidth={1.8}
                      />
                    </span>
                  </a>


                  {/* WHATSAPP */}

                  <a
                    href={`https://wa.me/${whatsapp_number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group

                      flex
                      flex-1
                      items-center
                      justify-between

                      rounded-full

                      border
                      border-white/15

                      bg-white/[0.06]

                      py-2
                      pl-5
                      pr-2

                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      text-[#fffaf3]

                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:bg-white/[0.1]
                    "
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle
                        size={13}
                        strokeWidth={2}
                      />

                      Chat Now
                    </span>

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center

                        rounded-full

                        bg-white/10

                        transition-transform
                        duration-300

                        group-hover:rotate-45
                      "
                    >
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.8}
                      />
                    </span>
                  </a>

                </div>
              </div>


              {/* BOTTOM TRUST */}

              <div
                className="
                  mt-auto
                  pt-10
                "
              >
                <div
                  className="
                    flex
                    flex-wrap
                    gap-x-4
                    gap-y-2

                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#fffaf3]/35
                  "
                >
                  <span>Private</span>
                  <span>•</span>
                  <span>Respectful</span>
                  <span>•</span>
                  <span>Personal</span>
                </div>
              </div>

            </div>
          </motion.div>


          {/* =================================================
              FORM
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              overflow-hidden

              rounded-[30px]

              border
              border-[#76513a]/[0.08]

              bg-white/60

              p-6

              shadow-[0_12px_45px_rgba(65,45,25,0.055)]

              backdrop-blur-sm

              sm:p-8
              lg:p-10
            "
          >

            {/* FORM CLOUD */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[120px]
                -top-[130px]

                h-[330px]
                w-[330px]

                rounded-full

                bg-[#e8c9a7]/30

                blur-[80px]
              "
            />


            {/* FORM HEADER */}

            <div
              className="
                relative
                z-10
                mb-9
              "
            >
              <div className="mb-4 flex items-center gap-3">

                <Sparkles
                  size={13}
                  strokeWidth={1.7}
                  className="text-[#a65332]"
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.23em]
                    text-[#95623e]
                  "
                >
                  Consultation Request
                </span>

              </div>

              <h2
                className="
                  max-w-xl
                  font-serif
                  text-[30px]
                  font-semibold
                  leading-[1.15]
                  tracking-[-0.025em]
                  text-[#34251d]

                  sm:text-[36px]
                "
              >
                Tell us how we can
                <span className="italic text-[#a65332]">
                  {" "}help you.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-[13px]
                  leading-6
                  text-[#766052]
                "
              >
                Share your contact details and a short description
                of what you'd like guidance with.
              </p>

            </div>


            {/* FORM COMPONENT */}

            <div className="relative z-10">
              <Form />
            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          CONSULTATION AREAS
      ===================================================== */}

      <section
        className="
          relative
          z-10
          px-5
          pb-24
          sm:px-8
          md:pb-32
          lg:px-12
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            max-w-7xl

            rounded-[30px]

            border
            border-[#76513a]/[0.08]

            bg-[#f1e2cf]/55

            px-6
            py-10

            sm:px-8
            md:px-12
            md:py-14
          "
        >

          <div
            className="
              grid
              gap-9

              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-center
            "
          >

            {/* LEFT */}

            <div>

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.23em]
                  text-[#a65332]
                "
              >
                Consultation Areas
              </span>

              <h2
                className="
                  mt-4
                  max-w-md
                  font-serif
                  text-[30px]
                  font-semibold
                  leading-[1.15]
                  tracking-[-0.025em]
                  text-[#34251d]

                  sm:text-[36px]
                "
              >
                Guidance focused on
                <span className="italic text-[#a65332]">
                  {" "}your situation.
                </span>
              </h2>

            </div>


            {/* RIGHT */}

            <div
              className="
                grid
                grid-cols-1
                gap-3

                sm:grid-cols-2
              "
            >
              <ConsultationItem>
                Love & Relationships
              </ConsultationItem>

              <ConsultationItem>
                Marriage & Family
              </ConsultationItem>

              <ConsultationItem>
                Career & Business
              </ConsultationItem>

              <ConsultationItem>
                Horoscope Analysis
              </ConsultationItem>

              <ConsultationItem>
                Palmistry
              </ConsultationItem>

              <ConsultationItem>
                Vastu Consultation
              </ConsultationItem>

            </div>

          </div>
        </motion.div>
      </section>

    </main>
  );
}


/* =========================================================
   CONTACT METHOD
========================================================= */

function ContactMethod({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="
        group

        flex
        items-center
        gap-4

        rounded-[18px]

        border
        border-white/10

        bg-white/[0.05]

        p-3

        transition-all
        duration-300

        hover:border-white/20
        hover:bg-white/[0.09]
      "
    >

      <span
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center

          rounded-full

          bg-[#fffaf3]

          text-[#a65332]
        "
      >
        <Icon
          size={17}
          strokeWidth={1.8}
        />
      </span>


      <div className="min-w-0 flex-1">

        <span
          className="
            block
            text-[8px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#e3b48c]
          "
        >
          {label}
        </span>

        <span
          className="
            mt-1
            block
            truncate

            text-[14px]
            font-medium
            text-[#fffaf3]
          "
        >
          {value}
        </span>

      </div>


      <ArrowUpRight
        size={16}
        strokeWidth={1.7}
        className="
          mr-2
          text-[#fffaf3]/35

          transition-all
          duration-300

          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
          group-hover:text-[#e3b48c]
        "
      />

    </a>
  );
}


/* =========================================================
   TRUST ITEM
========================================================= */

function TrustItem({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-2

        text-[9px]
        font-bold
        uppercase
        tracking-[0.12em]
        text-[#745b4a]/60
      "
    >
      <Icon
        size={13}
        strokeWidth={1.7}
        className="text-[#a65332]"
      />

      {text}
    </div>
  );
}


/* =========================================================
   CONSULTATION ITEM
========================================================= */

function ConsultationItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3

        rounded-[16px]

        border
        border-[#76513a]/[0.07]

        bg-[#fffaf3]/65

        px-4
        py-3.5
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
          text-[12px]
          font-semibold
          text-[#594234]
        "
      >
        {children}
      </span>
    </div>
  );
}