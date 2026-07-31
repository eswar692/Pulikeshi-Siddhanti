import {

  MessageCircle,
  ArrowUpRight,
  

  
} from "lucide-react";
import { motion } from "framer-motion";
import FAQ from "../Genaral/FAQ";
import {
  
 
  whatsapp_number,
} from "../Genaral/secrete";
import ImageView from "../Genaral/VideoView";
// import GuidanceSection from "../Genaral/about";
import Testimonials from "../Genaral/Testimonial";
import VideoTestimonials from "../Genaral/testimonialVideo";
import PoojaGallery from "../Genaral/img-corosel";
import AboutPulikeshi from "../Genaral/second-colomn";
import PulikeshiAboutHighlight from "../Genaral/highlights";
import Pulikeshi_Own from "../Genaral/face_videos";
import ImgBonding from "../Genaral/ingLook";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full bg-slate-950">
      <ImageView />  
    
    <ImgBonding/>
      
    <PoojaGallery/>
      <VideoTestimonials/>
      <AboutPulikeshi/>
      


      

        <Pulikeshi_Own/>
      
      
      <PulikeshiAboutHighlight/>
     
      
      
      <Problems />
      
    
      <Testimonials/>
      <FAQ />
    </div>
  );
};

export default Home;

/* ── Problems / Service Cards ── */

// ─── Data ─────────────────────────────────────────────────────────────────────



// ─── Motion variants ──────────────────────────────────────────────────────────

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Problems ─────────────────────────────────────────────────────────────────
const PROBLEMS = [
  {
    title: "Love Problems",
    desc: "Discover accurate, personalized astrological remedies to resolve love conflicts and reconnect with your partner.",
    img: "https://res.cloudinary.com/di7evjrx6/image/upload/v1785042413/WhatsApp_Image_2026-07-22_at_8.13.35_PM_zn7kan.jpg",
    tag: "Emotional",
  },
  {
    title: "Marriage Problems",
    desc: "Guruji provides accurate horoscope matching and proven solutions to resolve ongoing husband-wife disputes.",
    img: "https://res.cloudinary.com/di7evjrx6/image/upload/v1785042405/WhatsApp_Image_2026-07-22_at_8.19.02_PM_vuzu7u.jpg",
    tag: "Harmony",
  },
  {
    title: "Wife and husband problems",
    desc: "Guruji offers targeted planetary remedies to eliminate frequent arguments and restore lasting peace in your home.",
    img: "https://res.cloudinary.com/di7evjrx6/image/upload/v1785042394/WhatsApp_Image_2026-07-22_at_8.24.52_PM_uaiejp.jpg",
    tag: "Growth",
  },
  {
    title: "Affair issue",
    desc: "Protect your marriage from third-party interference and restore complete loyalty",
    img: "https://res.cloudinary.com/di7evjrx6/image/upload/v1785042386/WhatsApp_Image_2026-07-22_at_8.36.41_PM_wzq6uk.jpg",
    tag: "Clarity",
  },
  {
    title: "Destroy enemy",
    desc: "Guruji offers powerful Vedic protection remedies to overcome opponents and secure your peace of mind.",
    img: "https://res.cloudinary.com/di7evjrx6/image/upload/v1785042380/WhatsApp_Image_2026-07-22_at_8.48.13_PM_wrl7bw.jpg",
    tag: "Abundance",
  },
  
];
const Problems = () => {
  return (
    <>
      <GlobalStyles />

      <section
        className="
          relative
          overflow-hidden
          bg-[#f8f5ef]
          px-2
          py-24
          md:px-10
          md:py-32
        "
      >
        {/* =====================================================
            LAYER 1 — SOFT BACKGROUND
        ===================================================== */}

        {/* Top warm glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-220px]
            h-[500px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#ead8b7]/45
            blur-[120px]
          "
        />

        {/* Left soft cloud */}
        <div
          className="
            pointer-events-none
            absolute
            -left-[200px]
            top-[25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#eee3d3]/60
            blur-[120px]
          "
        />

        {/* Right warm cloud */}
        <div
          className="
            pointer-events-none
            absolute
            -right-[180px]
            top-[45%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#e8d1b2]/40
            blur-[130px]
          "
        />

        {/* Bottom soft glow */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-[-250px]
            left-[30%]
            h-[500px]
            w-[700px]
            rounded-full
            bg-[#e9dcc8]/50
            blur-[130px]
          "
        />

        {/* =====================================================
            LAYER 2 — SUBTLE DECORATION
        ===================================================== */}

        <svg
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-96
            w-96
            text-[#9b6a43]/[0.05]
          "
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="2"
            y="2"
            width="196"
            height="196"
            stroke="currentColor"
            strokeWidth="0.6"
          />

          <path
            d="M2 2L198 198M198 2L2 198"
            stroke="currentColor"
            strokeWidth="0.6"
          />

          <path
            d="M100 2V198M2 100H198"
            stroke="currentColor"
            strokeWidth="0.6"
          />
        </svg>

        <svg
          className="
            pointer-events-none
            absolute
            -bottom-24
            -left-16
            h-80
            w-80
            rotate-12
            text-[#9b6a43]/[0.04]
          "
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="2"
            y="2"
            width="196"
            height="196"
            stroke="currentColor"
            strokeWidth="0.6"
          />

          <path
            d="
              M50 2L2 50
              M150 2L198 50
              M50 198L2 150
              M150 198L198 150
            "
            stroke="currentColor"
            strokeWidth="0.6"
          />
        </svg>

        {/* =====================================================
            LAYER 3 — CONTENT
        ===================================================== */}

        <div className="relative z-10 mx-auto max-w-[1400px]">

          {/* =================================================
              SECTION HEADER
          ================================================= */}

          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-80px",
            }}
            className="mb-16 md:mb-20"
          >

            {/* Eyebrow */}
            <motion.div className="mb-5 flex items-center gap-3">

              <div
                className="
                  h-px
                  w-9
                  bg-gradient-to-r
                  from-[#9b6a43]
                  to-transparent
                "
              />

              <span
                className="
                  text-[0.65rem]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#9b6a43]
                "
                style={{
                  fontFamily: "monospace",
                }}
              >
                How We Help
              </span>

            </motion.div>

            {/* Heading row */}

            <motion.div
              className="
                flex
                flex-col
                gap-6
                md:flex-row
                md:items-end
                md:justify-between
              "
            >

              {/* LEFT HEADING */}
              <div>

                <h2
                  className="
                    font-bold
                    leading-none
                    text-[#302a25]
                  "
                  style={{
                    fontFamily:
                      "'Cinzel Decorative', 'Playfair Display', serif",

                    fontSize:
                      "clamp(1.8rem, 4vw, 3.2rem)",
                  }}
                >
                  Areas of
                </h2>

                <h2
                  className="
                    mt-2
                    font-bold
                    leading-none
                    text-[#9b6a43]
                  "
                  style={{
                    fontFamily:
                      "'Cinzel Decorative', 'Playfair Display', serif",

                    fontSize:
                      "clamp(1.8rem, 4vw, 3.2rem)",
                  }}
                >
                  Consultation
                </h2>

              </div>


              {/* RIGHT COUNT */}
              <div className="flex items-center gap-4">

                <div
                  className="
                    h-px
                    flex-1
                    bg-gradient-to-r
                    from-transparent
                    to-[#9b6a43]/30
                    md:w-32
                  "
                />

                <span
                  className="
                    font-light
                    text-[#302a25]/15
                  "
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "2.5rem",
                  }}
                >
                  {String(PROBLEMS.length).padStart(
                    2,
                    "0"
                  )}
                </span>

              </div>

            </motion.div>


            {/* Subtitle */}

            <motion.p
              className="
                mt-6
                max-w-xl
                leading-7
                text-[#70675e]
              "
              style={{
                fontFamily:
                  "'DM Sans', sans-serif",

                fontSize: "0.95rem",

                fontWeight: 400,
              }}
            >
              Rooted in traditional Kerala wisdom, each consultation
              is tailored to your unique situation — bringing clarity
              and guidance to life's most complex challenges.
            </motion.p>

          </motion.div>


          {/* =================================================
              CARDS GRID
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >

            {PROBLEMS.map((item, index) => (
              <ConsultationCard
                key={index}
                item={item}
                index={index}
              />
            ))}


            {/* CTA TILE */}

            <CTATile />

          </div>

        </div>

      </section>
    </>
  );
};



// ─── Consultation Card ────────────────────────────────────────────────────────

const ConsultationCard = ({
  item,
  index,
}: {
  item: (typeof PROBLEMS)[number];
  index: number;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.25 },
      }}
      className="
        group
        relative
        flex
        min-h-[500px]
        flex-col
        overflow-hidden
        rounded-[28px]
        border
        border-[#38291d]/[0.08]
        bg-[#fffdf9]
        shadow-[0_12px_40px_rgba(65,45,25,0.08)]
        transition-shadow
        duration-500
        hover:shadow-[0_22px_55px_rgba(65,45,25,0.14)]
      "
    >
      {/* =========================================
          IMAGE
      ========================================= */}

      <div className="relative m-2 h-[260px] overflow-hidden rounded-[22px]">
        <img
          src={item.img}
          alt={item.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.06]
          "
        />

        {/* subtle image shading */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#21170e]/45
            via-transparent
            to-black/[0.04]
          "
        />

        {/* CATEGORY */}
        <div className="absolute left-4 top-4">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/50
              bg-white/85
              px-3.5
              py-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#765237]
              shadow-sm
              backdrop-blur-xl
            "
          >
            {item.tag}
          </span>
        </div>

        {/* NUMBER */}
        <div
          className="
            absolute
            bottom-3
            right-4
            font-serif
            text-[38px]
            font-medium
            leading-none
            tracking-[-0.05em]
            text-white/90
            drop-shadow-md
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="flex flex-1 flex-col px-6 pb-6 pt-4">

        {/* small category line */}
        <div className="mb-4 flex items-center gap-3">
          <span className="h-[2px] w-7 rounded-full bg-[#b17b50]" />

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#a27a59]
            "
          >
            Personal Guidance
          </span>
        </div>

        {/* TITLE */}
        <h3
          className="
            max-w-[280px]
            font-serif
            text-[22px]
            font-semibold
            leading-[1.2]
            tracking-[-0.02em]
            text-[#2d241d]
            transition-colors
            duration-300
            group-hover:text-[#895b39]
          "
        >
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-3
            flex-1
            text-[14px]
            leading-[1.7]
            text-[#746a61]
          "
        >
          {item.desc}
        </p>

        {/* =========================================
            BOTTOM
        ========================================= */}

        <div
          className="
            mt-6
            border-t
            border-[#38291d]/[0.08]
            pt-4
          "
        >
          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/btn
              flex
              w-full
              items-center
              justify-between
              rounded-[14px]
              bg-[#34261d]
              px-5
              py-3.5
              no-underline
              shadow-[0_5px_15px_rgba(52,38,29,0.12)]
              transition-all
              duration-300

              hover:bg-[#8c603e]
              hover:shadow-[0_8px_22px_rgba(91,61,39,0.20)]
            "
          >
            <span
              className="
                flex
                items-center
                gap-2.5
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-[#fffaf4]
              "
            >
              <MessageCircle
                size={15}
                strokeWidth={1.8}
              />

           Chat Now
            </span>

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-white/10
                transition-all
                duration-300
                group-hover/btn:bg-white/20
              "
            >
              <ArrowUpRight
                size={14}
                strokeWidth={2}
                className="
                  text-white
                  transition-transform
                  duration-300
                  group-hover/btn:-translate-y-0.5
                  group-hover/btn:translate-x-0.5
                "
              />
            </span>
          </a>
        </div>
      </div>

      {/* =========================================
          VERY SUBTLE HOVER BORDER
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[28px]
          ring-1
          ring-inset
          ring-[#a97650]/0
          transition-all
          duration-500
          group-hover:ring-[#a97650]/20
        "
      />
    </motion.article>
  );
};

// ─── CTA Tile ─────────────────────────────────────────────────────────────────

const CTATile = () => (
  <motion.a
    href={`https://wa.me/${whatsapp_number}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -4, transition: { duration: 0.25 } }}
    className="group relative flex flex-col items-center justify-center rounded-xl overflow-hidden no-underline min-h-[280px] cursor-pointer"
    style={{
      background:
        "linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.04) 100%)",
      border: "1px solid rgba(212,175,55,0.2)",
    }}
  >
    {/* Animated background shimmer */}
    <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(212,175,55,0.08)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Corner diamonds */}
    {[
      "-top-0.5 -left-0.5",
      "-top-0.5 -right-0.5",
      "-bottom-0.5 -left-0.5",
      "-bottom-0.5 -right-0.5",
    ].map((pos, i) => (
      <div
        key={i}
        className={`absolute ${pos} w-2 h-2 bg-[#d4af37] rotate-45 opacity-40 group-hover:opacity-80 transition-opacity duration-300`}
      />
    ))}

    <div className="relative z-10 flex flex-col items-center gap-4 px-8 text-center">
      {/* Icon ring */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: "rgba(212,175,55,0.1)",
          border: "1px solid rgba(212,175,55,0.25)",
        }}
      >
        <MessageCircle size={22} className="text-[#d4af37]" strokeWidth={1.5} />
      </div>

      <div>
        <p
          className="text-[#d4af37] font-bold mb-1"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.95rem",
            letterSpacing: "0.05em",
          }}
        >
          Not Sure Where
          <br />
          to Start?
        </p>
        <p
          className="text-white/40"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 300,
          }}
        >
          Reach out — we'll guide you to the right consultation.
        </p>
      </div>

      <span
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[0.75rem] tracking-[0.08em] uppercase font-semibold text-[#08080c]"
        style={{
          fontFamily: "'Outfit', sans-serif",
          background: "linear-gradient(135deg, #d4af37, #f5e27a)",
          boxShadow: "0 4px 20px rgba(212,175,55,0.35)",
        }}
      >
        <MessageCircle size={13} strokeWidth={2.5} />
        Message Us
      </span>
    </div>
  </motion.a>
);

// ─── Global Styles ────────────────────────────────────────────────────────────

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
  `}</style>
);





