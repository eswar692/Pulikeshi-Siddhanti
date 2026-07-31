"use client";

import { MessageCircle, PhoneCall, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { phone_number, whatsapp_number } from "./secrete";

const images = [
  "https://res.cloudinary.com/di7evjrx6/image/upload/v1785464201/WhatsApp_Image_2026-07-29_at_7.22.46_AM_qlpf8e.jpg",
  "https://res.cloudinary.com/di7evjrx6/image/upload/v1785464187/WhatsApp_Image_2026-07-29_at_7.23.05_AM_x3mgx3.jpg",
];

const ImgBonding = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#fffaf3]
        px-2
        py-16
        sm:px-6
        md:py-24
      "
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-[15%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#ead8c3]/35
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-[10%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#d9b79b]/20
            blur-[130px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* =====================================================
            IMAGES
        ===================================================== */}

        <div className="space-y-6 md:space-y-8">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-[#6f4933]/10
                bg-white/60
                p-[5px]
                shadow-[0_16px_45px_rgba(68,44,30,0.08)]

                sm:rounded-[30px]
              "
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[19px]
                  sm:rounded-[25px]
                "
              >
                <img
                  src={src}
                  alt={`Guruji ${index + 1}`}
                  className="
                    block
                    h-auto
                    w-full
                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-[1.015]
                  "
                />

                {/* subtle top light */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-[18%]
                    bg-gradient-to-b
                    from-white/10
                    to-transparent
                  "
                />

                {/* bottom fade */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-[18%]
                    bg-gradient-to-t
                    from-[#352319]/10
                    to-transparent
                  "
                />

                {/* inner border */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-[5px]
                    rounded-[15px]
                    border
                    border-white/20

                    sm:rounded-[21px]
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            CTA AFTER BOTH IMAGES
        ===================================================== */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
            mx-auto
            mt-10
            max-w-xl
            rounded-[24px]
            border
            border-[#704b35]/10
            bg-white/70
            p-2.5
            shadow-[0_15px_45px_rgba(68,44,30,0.08)]
            backdrop-blur-xl
            sm:mt-12
            sm:p-3
        "
        >
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">

            {/* ================= WHATSAPP ================= */}

            <motion.a
            href={`https://wa.me/${whatsapp_number}?text=${encodeURIComponent(
                "Hello Guruji, I would like to know more about your consultation."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            whileTap={{ scale: 0.96 }}
            whileHover={{ y: -2 }}
            className="
                group
                relative
                flex
                h-[62px]
                items-center
                justify-center
                overflow-hidden
                rounded-[17px]
                border
                border-[#16875d]/20
                bg-gradient-to-br
                from-[#20b879]
                via-[#159566]
                to-[#0d7550]
                px-3
                text-white
                shadow-[0_8px_22px_rgba(21,149,102,0.22)]
                transition-shadow
                duration-300
                hover:shadow-[0_13px_30px_rgba(21,149,102,0.30)]
                sm:h-[68px]
            "
            >
            {/* BACKGROUND GLOW */}
            <span
                className="
                pointer-events-none
                absolute
                -right-8
                -top-10
                h-24
                w-24
                rounded-full
                bg-[#7cf0bd]/30
                blur-2xl
                "
            />

            {/* TOP LIGHT */}
            <span
                className="
                pointer-events-none
                absolute
                inset-x-4
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/60
                to-transparent
                "
            />

            {/* HOVER SHINE */}
            <span
                className="
                pointer-events-none
                absolute
                -left-[60%]
                top-0
                h-full
                w-[35%]
                skew-x-[-20deg]
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                transition-all
                duration-700
                group-hover:left-[125%]
                "
            />

            {/* CONTENT */}
            <div className="relative z-10 flex items-center justify-center gap-2.5">
                <span
                className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/15
                    shadow-inner
                    backdrop-blur-md
                    sm:h-10
                    sm:w-10
                "
                >
                <MessageCircle
                    size={19}
                    strokeWidth={2.3}
                />
                </span>

                <span
                className="
                    text-[13px]
                    font-bold
                    tracking-[0.02em]
                    sm:text-[15px]
                "
                >
                WhatsApp
                </span>
            </div>
            </motion.a>

            {/* ================= CALL ================= */}

            <motion.a
            href={`tel:${phone_number}`}
            aria-label="Call"
            whileTap={{ scale: 0.96 }}
            whileHover={{ y: -2 }}
            className="
                group
                relative
                flex
                h-[62px]
                items-center
                justify-center
                overflow-hidden
                rounded-[17px]
                border
                border-[#315bc0]/20
                bg-gradient-to-br
                from-[#416fd5]
                via-[#3158b6]
                to-[#243f8e]
                px-3
                text-white
                shadow-[0_8px_22px_rgba(49,88,182,0.22)]
                transition-shadow
                duration-300
                hover:shadow-[0_13px_30px_rgba(49,88,182,0.30)]
                sm:h-[68px]
            "
            >
            {/* BACKGROUND GLOW */}
            <span
                className="
                pointer-events-none
                absolute
                -right-8
                -top-10
                h-24
                w-24
                rounded-full
                bg-[#8eb0ff]/30
                blur-2xl
                "
            />

            {/* TOP LIGHT */}
            <span
                className="
                pointer-events-none
                absolute
                inset-x-4
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/60
                to-transparent
                "
            />

            {/* HOVER SHINE */}
            <span
                className="
                pointer-events-none
                absolute
                -left-[60%]
                top-0
                h-full
                w-[35%]
                skew-x-[-20deg]
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                transition-all
                duration-700
                group-hover:left-[125%]
                "
            />

            {/* CONTENT */}
            <div className="relative z-10 flex items-center justify-center gap-2.5">
                <motion.span
                animate={{
                    rotate: [0, -7, 7, -5, 5, 0],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                }}
                className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/15
                    shadow-inner
                    backdrop-blur-md
                    sm:h-10
                    sm:w-10
                "
                >
                <PhoneCall
                    size={18}
                    strokeWidth={2.3}
                />
                </motion.span>

                <span
                className="
                    text-[13px]
                    font-bold
                    tracking-[0.02em]
                    sm:text-[15px]
                "
                >
                Call
                </span>
            </div>
            </motion.a>

        </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ImgBonding;