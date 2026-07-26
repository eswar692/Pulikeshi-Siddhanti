"use client";

import { MessagesSquare, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import { phone_number, whatsapp_number } from "./secrete";

const CallToAction = () => {
  return (
    <>
      <WhatsappBtn />
      <CallBtn />
    </>
  );
};

export default CallToAction;

/* =========================================================
   WHATSAPP — BOTTOM LEFT
========================================================= */

const WhatsappBtn = () => {
  return (
    <motion.a
      href={`https://wa.me/${whatsapp_number}?text=Hello%20Astro%20Honest%20Center`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message on WhatsApp"
      className="
        fixed
        bottom-6
        left-5
        z-50

        flex
        h-[58px]
        w-[58px]
        items-center
        justify-center

        rounded-full
        bg-gradient-to-br
        from-green-400
        via-green-500
        to-emerald-600

        text-white

        shadow-[0_8px_30px_rgba(34,197,94,0.45)]

        lg:hidden
      "
      animate={{
        y: [0, -5, 0],
        scale: [1, 1.06, 1],
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* OUTER PULSE */}
      <motion.span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          border-2
          border-green-400/60
        "
        animate={{
          scale: [1, 1.55],
          opacity: [0.7, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* SECOND PULSE */}
      <motion.span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          border
          border-green-300/40
        "
        animate={{
          scale: [1, 1.35],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.5,
        }}
      />

      {/* GLOW */}
      <span
        className="
          pointer-events-none
          absolute
          inset-1
          rounded-full
          bg-green-300/30
          blur-lg
        "
      />

      {/* INNER GLASS */}
      <span
        className="
          pointer-events-none
          absolute
          inset-[3px]
          rounded-full
          border
          border-white/25
        "
      />

      {/* ICON */}
      <MessagesSquare
        className="
          relative
          z-10
          h-[27px]
          w-[27px]
          drop-shadow-md
        "
        strokeWidth={2.2}
      />
    </motion.a>
  );
};

/* =========================================================
   CALL — BOTTOM RIGHT
========================================================= */

const CallBtn = () => {
  return (
    <motion.a
      href={`tel:${phone_number}`}
      aria-label="Call Now"
      className="
        fixed
        bottom-6
        right-5
        z-50

        flex
        h-[58px]
        w-[58px]
        items-center
        justify-center

        rounded-full
        bg-gradient-to-br
        from-[#e9a94f]
        via-[#d87838]
        to-[#b94d2d]

        text-white

        shadow-[0_8px_30px_rgba(185,77,45,0.42)]

        lg:hidden
      "
      animate={{
        y: [0, -5, 0],
        scale: [1, 1.06, 1],
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.25,
      }}
    >
      {/* OUTER PULSE */}
      <motion.span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          border-2
          border-orange-400/60
        "
        animate={{
          scale: [1, 1.55],
          opacity: [0.7, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.25,
        }}
      />

      {/* SECOND PULSE */}
      <motion.span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          border
          border-yellow-300/40
        "
        animate={{
          scale: [1, 1.35],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.75,
        }}
      />

      {/* GLOW */}
      <span
        className="
          pointer-events-none
          absolute
          inset-1
          rounded-full
          bg-orange-300/30
          blur-lg
        "
      />

      {/* INNER GLASS */}
      <span
        className="
          pointer-events-none
          absolute
          inset-[3px]
          rounded-full
          border
          border-white/25
        "
      />

      {/* PHONE ICON */}
      <motion.span
        className="relative z-10 flex"
        animate={{
          rotate: [0, -10, 10, -7, 7, 0],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeInOut",
        }}
      >
        <PhoneCall
          className="
            h-[26px]
            w-[26px]
            drop-shadow-md
          "
          strokeWidth={2.2}
        />
      </motion.span>
    </motion.a>
  );
};