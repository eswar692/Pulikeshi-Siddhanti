"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Printer,
  ShieldCheck,
  LockKeyhole,
} from "lucide-react";

import { company_name } from "../Genaral/secrete";

type Section = {
  id: string;
  title: string;
  content: string;
};

const PrivacyPolicy = () => {
  const sections: Section[] = [
    {
      id: "intro",
      title: "Introduction",
      content: `Welcome to ${company_name}. This Privacy Policy explains how we handle the information you provide through our website and consultation form.`,
    },
    {
      id: "data-we-collect",
      title: "Data We Collect",
      content:
        "We collect information that you voluntarily provide through our form, such as your name, phone number, email address, and message or inquiry.",
    },
    {
      id: "how-we-use",
      title: "How We Use Your Data",
      content:
        "The information you submit is used to understand your inquiry, respond to your request, and communicate with you regarding your consultation.",
    },
    {
      id: "sharing",
      title: "Sharing & Third Parties",
      content:
        "We do not sell or rent the personal information you provide to us. Information may only be handled as necessary to operate the website and process your request.",
    },
    {
      id: "security",
      title: "Security",
      content:
        "We take reasonable measures to protect the information submitted through our website. However, no method of electronic transmission or storage can be guaranteed to be completely secure.",
    },
    {
      id: "contact",
      title: "Contact",
      content: `If you have questions regarding this Privacy Policy, please contact ${company_name}.`,
    },
  ];

  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    sections.reduce(
      (acc, section) => ({
        ...acc,
        [section.id]: true,
      }),
      {} as Record<string, boolean>,
    ),
  );

  const toggle = (id: string) => {
    setOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffaf3] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
      {/* =====================================================
          CLOUD BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[280px]
          -top-[200px]
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
          -right-[280px]
          top-[25%]
          h-[600px]
          w-[600px]
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
          h-[550px]
          w-[750px]
          rounded-full
          bg-[#efe0cd]/70
          blur-[160px]
        "
      />

      {/* Decorative rings */}

      <div className="pointer-events-none absolute right-[5%] top-[7%] h-[280px] w-[280px] rounded-full border border-[#9b6842]/[0.05]" />

      <div className="pointer-events-none absolute right-[8%] top-[10%] h-[210px] w-[210px] rounded-full border border-[#9b6842]/[0.05]" />

      {/* =====================================================
          PAGE
      ===================================================== */}

      <article className="relative z-10 mx-auto max-w-5xl">
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.header
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-12 md:mb-16"
        >
          {/* TOP */}

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
              Legal & Privacy
            </span>
          </div>

          {/* TITLE */}

          <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
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
                Privacy

                <span className="italic text-[#a65332]">
                  {" "}Policy
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
                How {company_name} handles the information you
                provide when contacting us through our website.
              </p>
            </div>

            {/* DATE */}

            <div
              className="
                border-l
                border-[#9b6842]/20
                pl-5
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
                Effective Date
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
            PRIVACY NOTICE
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.1,
          }}
          className="
            mb-8
            flex
            flex-col
            gap-5

            rounded-[22px]

            border
            border-[#a65332]/15

            bg-[#f1e2cf]/60

            p-5

            sm:flex-row
            sm:items-center
            sm:p-6
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center

              rounded-xl

              bg-[#493126]

              text-[#fffaf3]
            "
          >
            <ShieldCheck
              size={20}
              strokeWidth={1.8}
            />
          </div>

          <div>
            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#a65332]
              "
            >
              Your Privacy Matters
            </span>

            <p
              className="
                mt-1.5
                max-w-3xl
                text-[13px]
                leading-6
                text-[#695143]
              "
            >
              This page explains what information is collected,
              why it is used, and how submitted information is
              handled.
            </p>
          </div>
        </motion.div>

        {/* ===================================================
            SECTIONS
        =================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="space-y-3"
        >
          {sections.map((section, index) => {
            const isOpen = open[section.id];

            return (
              <div
                key={section.id}
                className={`
                  overflow-hidden

                  rounded-[18px]

                  border-2

                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? `
                        border-[#cba98e]
                        bg-[#fffdf9]
                        shadow-[0_8px_30px_rgba(73,49,38,0.06)]
                      `
                      : `
                        border-[#e0cdbd]
                        bg-white/55
                        hover:border-[#cba98e]
                      `
                  }
                `}
              >
                {/* ===========================================
                    BUTTON
                =========================================== */}

                <button
                  type="button"
                  onClick={() => toggle(section.id)}
                  aria-expanded={isOpen}
                  className="
                    group

                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4

                    px-4
                    py-4

                    text-left

                    sm:px-5
                  "
                >
                  <div className="flex min-w-0 items-center gap-4">
                    {/* NUMBER BOX */}

                    <span
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center

                        rounded-[10px]

                        text-[10px]
                        font-bold
                        tracking-[0.08em]

                        transition-all
                        duration-300

                        ${
                          isOpen
                            ? `
                              bg-[#493126]
                              text-[#fffaf3]
                            `
                            : `
                              bg-[#f1e2cf]
                              text-[#a65332]
                            `
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* TITLE */}

                    <h2
                      className={`
                        font-serif
                        text-[16px]
                        font-semibold
                        tracking-[-0.01em]

                        transition-colors
                        duration-300

                        sm:text-[17px]

                        ${
                          isOpen
                            ? "text-[#34251d]"
                            : "text-[#5b4335]"
                        }
                      `}
                    >
                      {section.title}
                    </h2>
                  </div>

                  {/* ARROW */}

                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center

                      rounded-[10px]

                      border

                      transition-all
                      duration-300

                      ${
                        isOpen
                          ? `
                            rotate-180
                            border-[#a65332]/15
                            bg-[#a65332]
                            text-white
                          `
                          : `
                            border-[#d7bfad]
                            bg-[#f7ebdf]
                            text-[#7b5a46]
                          `
                      }
                    `}
                  >
                    <ChevronDown
                      size={15}
                      strokeWidth={2}
                    />
                  </span>
                </button>

                {/* ===========================================
                    CONTENT
                =========================================== */}

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-5 sm:px-5">
                        <div
                          className="
                            ml-14
                            border-t
                            border-[#76513a]/10
                            pt-4
                          "
                        >
                          <p
                            className="
                              max-w-3xl
                              text-[13px]
                              leading-7
                              text-[#705b4d]

                              sm:text-[14px]
                            "
                          >
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.section>

        {/* ===================================================
            FOOTER BOX
        =================================================== */}

        <motion.footer
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.3,
          }}
          className="
            relative
            mt-8
            overflow-hidden

            rounded-[24px]

            bg-[#493126]

            p-5

            shadow-[0_16px_45px_rgba(73,49,38,0.14)]

            sm:p-6
          "
        >
          {/* CLOUD */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24

              h-60
              w-60

              rounded-full

              bg-[#c77a4a]/25

              blur-[65px]
            "
          />

          <div
            className="
              relative
              z-10

              flex
              flex-col
              gap-6

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* LEFT */}

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

                  bg-white/10

                  text-[#e3b48c]
                "
              >
                <LockKeyhole
                  size={16}
                  strokeWidth={1.8}
                />
              </span>

              <div>
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
                  Policy Information
                </span>

                <p
                  className="
                    mt-1
                    text-[11px]
                    text-[#fffaf3]/55
                  "
                >
                  Last updated:{" "}
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* PRINT */}

            <button
              type="button"
              onClick={() => window.print()}
              className="
                group

                flex
                items-center
                justify-between
                gap-5

                rounded-xl

                bg-[#fffaf3]

                py-1.5
                pl-5
                pr-1.5

                text-[10px]
                font-bold
                uppercase
                tracking-[0.09em]
                text-[#493126]

                transition-transform
                duration-300

                hover:-translate-y-0.5
              "
            >
              Print / Save as PDF

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-[9px]

                  bg-[#a65332]
                  text-white
                "
              >
                <Printer
                  size={15}
                  strokeWidth={1.8}
                />
              </span>
            </button>
          </div>
        </motion.footer>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <div
          className="
            mt-8
            flex
            items-center
            gap-4
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
              tracking-[0.18em]
              text-[#806957]/50

              sm:text-[9px]
            "
          >
            Privacy · Confidentiality · Respect
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
      </article>

      {/* =====================================================
          PRINT
      ===================================================== */}

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }

          article,
          article * {
            visibility: visible;
          }

          article {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }

          button {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
};

export default PrivacyPolicy;