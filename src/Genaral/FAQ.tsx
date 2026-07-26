"use client";

import { useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { person_name, phone_number } from "./secrete";

/* =========================================================
   FAQ DATA
   Short questions + quick answers
========================================================= */

const FAQS = [
  {
    question: "How can I book a consultation?",
    answer: `Simply contact us on WhatsApp or call +91 ${phone_number}. Our team will help you choose a convenient consultation time.`,
    tag: "Booking",
  },
  {
    question: `Can I meet ${person_name} personally?`,
    answer:
      "Yes. In-person consultations are available by prior appointment. Contact us before your visit to confirm availability.",
    tag: "Visit",
  },
  {
    question: "Can I consult from another city?",
    answer:
      "Yes. Phone consultations are available, so you can speak with us without visiting in person.",
    tag: "Online",
  },
  {
    question: "What can I discuss in a consultation?",
    answer:
      "You can discuss relationships, marriage, family concerns, career, business, personal decisions, and other life situations.",
    tag: "Topics",
  },
  {
    question: "What should I share before the session?",
    answer:
      "Share your main concern and any relevant details requested when booking. This helps us prepare for your consultation.",
    tag: "Prepare",
  },
  {
    question: "How long does a consultation take?",
    answer:
      "The duration depends on your questions and situation. You can confirm the expected session time while booking.",
    tag: "Duration",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
        lg:px-10
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-220px]
          h-[450px]
          w-[850px]
          -translate-x-1/2
          rounded-full
          bg-[#e7d3b7]/45
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[35%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#eadfd0]/60
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[200px]
          bottom-[-100px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#dfc5a5]/35
          blur-[130px]
        "
      />

      {/* subtle decorative circle */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          h-[380px]
          w-[380px]
          rounded-full
          border
          border-[#8b5e3c]/[0.05]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          top-36
          h-[250px]
          w-[250px]
          rounded-full
          border
          border-[#8b5e3c]/[0.05]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-12
            flex
            flex-col
            gap-8
            md:mb-14
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          {/* LEFT */}

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#a7754d]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#956541]
                "
              >
                Quick Answers
              </span>
            </div>

            <h2
              className="
                max-w-xl
                font-serif
                text-4xl
                font-semibold
                leading-[1.1]
                tracking-[-0.03em]
                text-[#302820]
                md:text-5xl
              "
            >
              Questions before
              <span className="block text-[#9b6a43]">
                your consultation?
              </span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}

          <p
            className="
              max-w-sm
              text-[14px]
              leading-7
              text-[#756b62]
              md:text-[15px]
            "
          >
            Everything you need to know before booking your session,
            explained simply.
          </p>
        </motion.div>

        {/* =================================================
            MAIN FAQ BOX
        ================================================= */}

        <div
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-[#4c3929]/[0.08]
            bg-[#fffdf9]
            shadow-[0_18px_60px_rgba(65,45,25,0.08)]
          "
        >
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              isLast={index === FAQS.length - 1}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            relative
            mt-8
            overflow-hidden
            rounded-[24px]
            bg-[#34271e]
            px-6
            py-7
            sm:px-8
            md:flex
            md:items-center
            md:justify-between
          "
        >
          {/* CTA glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-32
              h-[300px]
              w-[300px]
              rounded-full
              bg-[#b9875c]/20
              blur-[70px]
            "
          />

          {/* CTA LEFT */}

          <div className="relative z-10">

            <div className="mb-2 flex items-center gap-2">
              <Sparkles
                size={14}
                className="text-[#d6ae88]"
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#d6ae88]
                "
              >
                Need more help?
              </span>
            </div>

            <h3
              className="
                font-serif
                text-xl
                font-semibold
                text-[#fffaf4]
                sm:text-2xl
              "
            >
              Have a question not listed here?
            </h3>

            <p
              className="
                mt-2
                max-w-lg
                text-sm
                leading-6
                text-white/55
              "
            >
              Send us a message and we'll help you with your
              consultation questions.
            </p>
          </div>

          {/* CTA BUTTON */}

          <motion.a
            href={`https://wa.me/${phone_number}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              relative
              z-10
              mt-6
              inline-flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#fffaf4]
              px-6
              py-3.5
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-[#34271e]
              no-underline
              shadow-lg
              transition-colors
              hover:bg-white
              md:mt-0
              md:w-auto
            "
          >
            <MessageCircle
              size={15}
              strokeWidth={2}
            />

            Ask on WhatsApp

            <ArrowUpRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </motion.a>
        </motion.div>

        {/* BOTTOM TRUST TEXT */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-7 bg-[#9b6a43]/20" />

          <span
            className="
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#8c725e]/60
            "
          >
            Personal · Simple · Confidential
          </span>

          <span className="h-px w-7 bg-[#9b6a43]/20" />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FAQ ITEM
========================================================= */

const FAQItem = ({
  faq,
  index,
  isOpen,
  isLast,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  index: number;
  isOpen: boolean;
  isLast: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
      }}
      className={`
        relative
        transition-colors
        duration-300

        ${isOpen ? "bg-[#f8f1e7]" : "bg-transparent"}

        ${
          !isLast
            ? "border-b border-[#4c3929]/[0.07]"
            : ""
        }
      `}
    >
      {/* QUESTION */}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          group
          flex
          w-full
          items-center
          gap-4
          px-5
          py-5
          text-left
          sm:gap-5
          sm:px-7
          sm:py-6
        "
      >
        {/* NUMBER */}

        <span
          className={`
            hidden
            w-8
            flex-shrink-0
            font-serif
            text-[12px]
            transition-colors
            sm:block

            ${
              isOpen
                ? "text-[#9b6a43]"
                : "text-[#302820]/25"
            }
          `}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* TEXT */}

        <div className="min-w-0 flex-1">

          {/* TAG */}

          <span
            className={`
              mb-1.5
              block
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.16em]
              transition-colors

              ${
                isOpen
                  ? "text-[#9b6a43]"
                  : "text-[#88776a]/50"
              }
            `}
          >
            {faq.tag}
          </span>

          {/* QUESTION TEXT */}

          <h3
            className={`
              pr-2
              font-serif
              text-[16px]
              font-semibold
              leading-snug
              transition-colors
              sm:text-[17px]

              ${
                isOpen
                  ? "text-[#805738]"
                  : "text-[#332b25] group-hover:text-[#805738]"
              }
            `}
          >
            {faq.question}
          </h3>
        </div>

        {/* + / CHEVRON */}

        <span
          className={`
            flex
            h-10
            w-10
            flex-shrink-0
            items-center
            justify-center
            rounded-full
            border
            transition-all
            duration-300

            ${
              isOpen
                ? `
                  rotate-180
                  border-[#9b6a43]
                  bg-[#9b6a43]
                  text-white
                `
                : `
                  border-[#4c3929]/10
                  bg-white
                  text-[#806650]
                  group-hover:border-[#9b6a43]/30
                `
            }
          `}
        >
          <ChevronDown
            size={17}
            strokeWidth={1.8}
          />
        </span>
      </button>

      {/* =====================================================
          ANSWER
      ===================================================== */}

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
              height: {
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              },
              opacity: {
                duration: 0.22,
              },
            }}
            className="overflow-hidden"
          >
            <div
              className="
                px-5
                pb-6
                sm:pl-[4.75rem]
                sm:pr-20
              "
            >
              {/* Accent line */}

              <div className="mb-3 h-[2px] w-8 rounded-full bg-[#b9875c]" />

              <p
                className="
                  max-w-2xl
                  text-[14px]
                  leading-7
                  text-[#70655c]
                "
              >
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};