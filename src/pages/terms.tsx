"use client";

import { motion } from "framer-motion";
import {
  Check,
  MessageCircle,
  ScrollText,
  ShieldCheck,
} from "lucide-react";

import { company_name } from "../Genaral/secrete";

/* =========================================================
   TERMS DATA
========================================================= */

const sections = (company: string) => [
  {
    num: "01",
    title: `About ${company}`,
    content: `${company} provides services and guidance as described on this website. We aim to keep the information presented on our website clear, accurate, and up to date.`,
    highlight: false,
  },

  {
    num: "02",
    title: "Use of Our Services",
    list: [
      "You will use our services only for lawful purposes.",
      "You will not misuse, interfere with, or attempt to disrupt our website.",
      "You will not copy, reproduce, distribute, or resell our content without permission.",
    ],
    highlight: false,
  },

  {
    num: "03",
    title: "WhatsApp Communication & User Consent",
    content: `By submitting your contact details and choosing to communicate with ${company}, you consent to receive WhatsApp messages related to your inquiry, consultation, service updates, and other relevant communications.`,
    note: `You may request to stop WhatsApp communications at any time by replying "STOP".`,
    highlight: true,
  },

  {
    num: "04",
    title: "Data Usage",
    content: `Personal information you provide is handled in accordance with our Privacy Policy. We do not sell your personal information.`,
    highlight: false,
  },

  {
    num: "05",
    title: "Intellectual Property",
    content: `Unless otherwise stated, the text, graphics, branding, design, and other original content published on this website belong to ${company}. Unauthorized copying, reproduction, or commercial use is prohibited.`,
    highlight: false,
  },

  {
    num: "06",
    title: "Limitation of Liability",
    content: `${company} is not responsible for losses or damages arising from reliance on website information or use of our services, to the extent permitted by applicable law.`,
    highlight: false,
  },

  {
    num: "07",
    title: "Changes to These Terms",
    content: `We may update these Terms & Conditions when necessary. Any updated version will be published on this page. Continued use of our website or services after an update constitutes acceptance of the revised terms.`,
    highlight: false,
  },

  {
    num: "08",
    title: "Contact Us",
    content: `If you have questions about these Terms & Conditions, please contact us using the information available on our Contact page.`,
    highlight: false,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const TermsAndConditions = () => {
  const items = sections(company_name);

  return (
    <main
      className="
        relative
        min-h-screen
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
          -left-[300px]
          -top-[220px]
          h-[700px]
          w-[750px]
          rounded-full
          bg-[#ead5b8]/55
          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[280px]
          top-[25%]
          h-[620px]
          w-[620px]
          rounded-full
          bg-[#e3bd95]/30
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-300px]
          left-[20%]
          h-[600px]
          w-[800px]
          rounded-full
          bg-[#efe0cd]/70
          blur-[170px]
        "
      />

      {/* Decorative rings */}

      <div
        className="
          pointer-events-none
          absolute
          right-[4%]
          top-[6%]
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-[#9b6842]/[0.05]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-[9%]
          h-[220px]
          w-[220px]
          rounded-full
          border
          border-[#9b6842]/[0.05]
        "
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.header
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-12 md:mb-16"
        >
          {/* EYEBROW */}

          <div className="mb-6 flex items-center gap-3">
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
              Legal Information
            </span>
          </div>

          {/* TITLE AREA */}

          <div
            className="
              grid
              gap-8
              lg:grid-cols-[1fr_0.55fr]
              lg:items-end
            "
          >
            <div>

              <div
                className="
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#493126]
                  text-[#fffaf3]
                  shadow-[0_8px_22px_rgba(73,49,38,0.12)]
                "
              >
                <ScrollText
                  size={20}
                  strokeWidth={1.8}
                />
              </div>

              <h1
                className="
                  max-w-3xl
                  font-serif
                  text-[42px]
                  font-semibold
                  leading-[1.04]
                  tracking-[-0.04em]
                  text-[#34251d]

                  sm:text-[52px]
                  md:text-[64px]
                "
              >
                Terms &

                <span className="italic text-[#a65332]">
                  {" "}Conditions
                </span>
              </h1>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-[14px]
                  leading-7
                  text-[#705a4b]
                  sm:text-[15px]
                "
              >
                Please read these terms carefully before using the
                website, contacting us, or using the services provided by{" "}
                <span className="font-semibold text-[#493126]">
                  {company_name}
                </span>.
              </p>
            </div>

            {/* UPDATED DATE */}

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
                  block
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#a65332]
                "
              >
                Last Updated
              </span>

              <span
                className="
                  mt-2
                  block
                  font-serif
                  text-[18px]
                  font-semibold
                  text-[#493126]
                "
              >
                {new Date().toLocaleDateString()}
              </span>
            </div>
          </div>
        </motion.header>

        {/* ===================================================
            INTRODUCTION
        =================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.1,
          }}
          className="
            relative
            mb-7
            overflow-hidden
            rounded-[24px]
            border
            border-[#76513a]/10
            bg-[#f1e2cf]/65
            p-6
            sm:p-8
          "
        >
          {/* glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24
              h-60
              w-60
              rounded-full
              bg-[#d99a6c]/15
              blur-[65px]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-start
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#a65332]
                text-white
              "
            >
              <ShieldCheck
                size={18}
                strokeWidth={1.8}
              />
            </div>

            <div>
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#a65332]
                "
              >
                Agreement
              </span>

              <p
                className="
                  mt-2
                  max-w-3xl
                  text-[13px]
                  leading-7
                  text-[#624b3d]
                  sm:text-[14px]
                "
              >
                Welcome to{" "}
                <strong className="font-semibold text-[#3d2b22]">
                  {company_name}
                </strong>
                . By accessing or using our website, services, or
                communicating with us, you agree to these Terms &
                Conditions.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ===================================================
            TERMS
        =================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="space-y-4"
        >
          {items.map((section, index) =>
            section.highlight ? (
              <ImportantSection
                key={section.num}
                section={section}
                index={index}
              />
            ) : (
              <TermSection
                key={section.num}
                section={section}
                index={index}
              />
            ),
          )}
        </motion.section>

        {/* ===================================================
            ACCEPTANCE FOOTER
        =================================================== */}

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.35,
          }}
          className="
            relative
            mt-8
            overflow-hidden
            rounded-[24px]
            bg-[#493126]
            px-6
            py-6
            shadow-[0_16px_45px_rgba(73,49,38,0.14)]
            sm:px-7
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-28
              h-64
              w-64
              rounded-full
              bg-[#c77a4a]/25
              blur-[70px]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-start gap-4">

              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-[10px]
                  bg-white/10
                  text-[#e3b48c]
                "
              >
                <Check
                  size={17}
                  strokeWidth={2}
                />
              </span>

              <div>
                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#e3b48c]
                  "
                >
                  Acceptance of Terms
                </span>

                <p
                  className="
                    mt-1.5
                    max-w-2xl
                    text-[12px]
                    leading-6
                    text-[#fffaf3]/60
                  "
                >
                  By continuing to use our website or services,
                  you acknowledge that you have read and agree
                  to these Terms & Conditions.
                </p>
              </div>
            </div>

            <span
              className="
                shrink-0
                text-[10px]
                font-semibold
                text-[#fffaf3]/40
              "
            >
              © {new Date().getFullYear()} {company_name}
            </span>
          </div>
        </motion.footer>

        {/* BOTTOM SIGNATURE */}

        <div className="mt-8 flex items-center gap-4">

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
              tracking-[0.18em]
              text-[#806957]/50
              sm:text-[9px]
            "
          >
            Trusted · Confidential · Respectful
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
    </main>
  );
};

export default TermsAndConditions;

/* =========================================================
   NORMAL TERM CARD
========================================================= */

function TermSection({
  section,
  index,
}: {
  section: ReturnType<typeof sections>[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        delay: 0.22 + index * 0.035,
      }}
      className="
        group
        rounded-[18px]
        border-2
        border-[#dfc9b8]
        bg-[#fffdf9]
        p-5
        shadow-[0_4px_18px_rgba(73,49,38,0.035)]
        transition-all
        duration-300
        hover:border-[#cba98e]
        hover:shadow-[0_8px_28px_rgba(73,49,38,0.06)]
        sm:p-6
      "
    >
      {/* HEADER */}

      <div className="flex items-center gap-4">

        <span
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-[10px]
            bg-[#f1e2cf]
            text-[10px]
            font-bold
            tracking-[0.08em]
            text-[#a65332]
            transition-colors
            duration-300
            group-hover:bg-[#493126]
            group-hover:text-[#fffaf3]
          "
        >
          {section.num}
        </span>

        <h2
          className="
            font-serif
            text-[17px]
            font-semibold
            leading-snug
            text-[#3e2c22]
            sm:text-[18px]
          "
        >
          {section.title}
        </h2>
      </div>

      {/* CONTENT */}

      <div
        className="
          ml-0
          mt-5
          border-t
          border-[#76513a]/10
          pt-4
          sm:ml-14
        "
      >
        {"content" in section && section.content && (
          <p
            className="
              text-[13px]
              leading-7
              text-[#705b4d]
              sm:text-[14px]
            "
          >
            {section.content}
          </p>
        )}

        {"list" in section && section.list && (
          <ul className="space-y-3">
            {section.list.map((item, i) => (
              <li
                key={i}
                className="
                  flex
                  items-start
                  gap-3
                  text-[13px]
                  leading-6
                  text-[#705b4d]
                  sm:text-[14px]
                "
              >
                <span
                  className="
                    mt-[3px]
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#a65332]/10
                    text-[#a65332]
                  "
                >
                  <Check
                    size={10}
                    strokeWidth={2.5}
                  />
                </span>

                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}

/* =========================================================
   IMPORTANT WHATSAPP SECTION
========================================================= */

function ImportantSection({
  section,
  index,
}: {
  section: ReturnType<typeof sections>[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        delay: 0.22 + index * 0.035,
      }}
      className="
        relative
        overflow-hidden
        rounded-[22px]
        border-2
        border-[#a65332]/25
        bg-[#f4e3d4]
        p-5
        shadow-[0_10px_35px_rgba(166,83,50,0.07)]
        sm:p-6
      "
    >
      {/* soft cloud */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-24
          h-64
          w-64
          rounded-full
          bg-[#c9794f]/15
          blur-[65px]
        "
      />

      <div className="relative z-10">

        {/* HEADER */}

        <div
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-4">

            <span
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-[11px]
                bg-[#a65332]
                text-white
              "
            >
              <MessageCircle
                size={18}
                strokeWidth={1.9}
              />
            </span>

            <div>

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#a65332]
                "
              >
                Section {section.num}
              </span>

              <h2
                className="
                  mt-1
                  font-serif
                  text-[17px]
                  font-semibold
                  leading-snug
                  text-[#3e2c22]
                  sm:text-[18px]
                "
              >
                {section.title}
              </h2>

            </div>
          </div>

          <span
            className="
              w-fit
              rounded-full
              border
              border-[#a65332]/20
              bg-[#a65332]/10
              px-3
              py-1.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#a65332]
            "
          >
            Important
          </span>
        </div>

        {/* CONTENT */}

        <div
          className="
            mt-5
            border-t
            border-[#a65332]/15
            pt-5
            sm:ml-[60px]
          "
        >
          {"content" in section && section.content && (
            <p
              className="
                text-[13px]
                leading-7
                text-[#654b3c]
                sm:text-[14px]
              "
            >
              {section.content}
            </p>
          )}

          {"note" in section && section.note && (
            <div
              className="
                mt-4
                rounded-xl
                border
                border-[#a65332]/15
                bg-[#fffaf3]/70
                px-4
                py-3
              "
            >
              <p
                className="
                  text-[12px]
                  font-semibold
                  leading-6
                  text-[#8f462e]
                "
              >
                {section.note}
              </p>
            </div>
          )}
        </div>

      </div>
    </motion.article>
  );
} 