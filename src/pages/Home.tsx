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

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full bg-slate-950">
      <ImageView />  
      {/* <GuidanceSection/> */}

      
      <AboutPulikeshi/>
      <PulikeshiAboutHighlight/>``
      <VideoTestimonials/>
      <PoojaGallery/>
      
      
      <Problems />
      
      {/* <AboutAstrologer /> */}
      {/* <AstrologyServices /> */}
      {/* <AstrologyServicesModern /> */}
      {/* <AllServicesModern /> */}
      {/* <HomeLastDesign /> */}
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

// const STATS = [
//   { icon: <Users size={14} />, value: "10K+", label: "Consultations" },
//   { icon: <Award size={14} />, value: "75yrs", label: "Legacy" },
//   { icon: <Star size={14} />, value: "4.9", label: "Rating" },
// ];

// const AboutAstrologer = () => {
//   const [imgHovered, setImgHovered] = useState(false);

//   return (
//     <section className="relative py-24 md:py-32 px-5 md:px-10 bg-[#06060c] overflow-hidden">
//       {/* ── Dot grid texture ── */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.025]"
//         style={{
//           backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)",
//           backgroundSize: "28px 28px",
//         }}
//       />

//       {/* ── Ambient orbs ── */}
//       <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.07),transparent_65%)] pointer-events-none" />
//       <div className="absolute -bottom-32 -right-20 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.05),transparent_65%)] pointer-events-none" />

//       {/* ── Vertical rule (desktop) ── */}
//       <div className="absolute top-0 bottom-0 left-[50%] w-px bg-[linear-gradient(to_bottom,transparent,rgba(212,175,55,0.06)_30%,rgba(212,175,55,0.06)_70%,transparent)] hidden lg:block pointer-events-none" />

//       <div className="relative z-10 max-w-[1400px] mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* ── LEFT: Image column ── */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//             className="order-2 lg:order-1 flex justify-center lg:justify-start"
//           >
//             <div
//               className="relative w-full max-w-[420px]"
//               onMouseEnter={() => setImgHovered(true)}
//               onMouseLeave={() => setImgHovered(false)}
//             >
//               {/* Decorative corner frames */}
//               <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#d4af37]/40 pointer-events-none z-20" />
//               <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#d4af37]/40 pointer-events-none z-20" />
//               <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-[#d4af37]/20 pointer-events-none z-20" />
//               <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-[#d4af37]/20 pointer-events-none z-20" />

//               {/* Glow halo behind image */}
//               <div
//                 className="absolute -inset-4 rounded-2xl pointer-events-none transition-opacity duration-500"
//                 style={{
//                   background:
//                     "radial-gradient(ellipse, rgba(212,175,55,0.14), transparent 70%)",
//                   opacity: imgHovered ? 1 : 0.5,
//                 }}
//               />

//               {/* Image wrapper */}
//               <div
//                 className="relative rounded-xl overflow-hidden"
//                 style={{ border: "1px solid rgba(212,175,55,0.12)" }}
//               >
//                 <img
//                   src="https://i.pinimg.com/1200x/a2/2e/34/a22e34ab3f1765939a7825677df5861f.jpg"
//                   alt={`${company_name} practitioner`}
//                   className="w-full h-[460px] object-cover object-top transition-transform duration-700"
//                   style={{ transform: imgHovered ? "scale(1.04)" : "scale(1)" }}
//                 />
//                 {/* Image overlay gradient */}
//                 <div className="absolute inset-0 bg-[linear-gradient(to_top,#06060c_0%,transparent_40%)]" />
//                 <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,6,12,0.3),transparent_50%)]" />

//                 {/* Floating name badge on image */}
//                 <div className="absolute bottom-5 left-5 right-5">
//                   <div
//                     className="px-4 py-3 rounded-lg"
//                     style={{
//                       background: "rgba(6,6,12,0.75)",
//                       border: "1px solid rgba(212,175,55,0.18)",
//                       backdropFilter: "blur(12px)",
//                     }}
//                   >
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p
//                           className="text-white font-semibold leading-tight"
//                           style={{
//                             fontFamily: "'Cinzel', serif",
//                             fontSize: "0.85rem",
//                             letterSpacing: "0.04em",
//                           }}
//                         >
//                           {company_name}
//                         </p>
//                         <p
//                           className="text-[#d4af37]/60 mt-0.5"
//                           style={{
//                             fontFamily: "monospace",
//                             fontSize: "0.6rem",
//                             letterSpacing: "0.15em",
//                           }}
//                         >
//                           TRADITIONAL KERALA PRACTITIONER
//                         </p>
//                       </div>
//                       <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45 flex-shrink-0" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Stats row below image */}
//               <div className="grid grid-cols-3 gap-2 mt-4">
//                 {STATS.map((s) => (
//                   <div
//                     key={s.label}
//                     className="flex flex-col items-center gap-0.5 py-3 rounded-lg transition-colors duration-200"
//                     style={{
//                       background: "rgba(212,175,55,0.04)",
//                       border: "1px solid rgba(212,175,55,0.1)",
//                     }}
//                   >
//                     <div className="text-[#d4af37]/50 mb-0.5">{s.icon}</div>
//                     <span
//                       className="text-white font-bold leading-none"
//                       style={{
//                         fontFamily: "'Cinzel', serif",
//                         fontSize: "1rem",
//                       }}
//                     >
//                       {s.value}
//                     </span>
//                     <span
//                       className="text-white/30 uppercase tracking-widest"
//                       style={{ fontFamily: "monospace", fontSize: "0.55rem" }}
//                     >
//                       {s.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* ── RIGHT: Text column ── */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
//             className="order-1 lg:order-2 flex flex-col gap-6"
//           >
//             {/* Eyebrow */}
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-px bg-[linear-gradient(90deg,#d4af37,transparent)]" />
//               <span
//                 className="text-[#d4af37]/60 tracking-[0.28em] uppercase"
//                 style={{ fontFamily: "monospace", fontSize: "0.6rem" }}
//               >
//                 About Us
//               </span>
//             </div>

//             {/* Heading */}
//             <div>
//               <h2
//                 className="text-white font-bold leading-none"
//                 style={{
//                   fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
//                   fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)",
//                   letterSpacing: "-0.01em",
//                 }}
//               >
//                 {company_name}
//               </h2>
//               <p
//                 className="text-[#d4af37] font-light italic mt-2"
//                 style={{
//                   fontFamily: "'Playfair Display', serif",
//                   fontSize: "clamp(0.95rem, 1.6vw, 1.2rem)",
//                   letterSpacing: "0.04em",
//                 }}
//               >
//                 Rooted in tradition. Guided by wisdom.
//               </p>
//             </div>

//             {/* Gold rule */}
//             <div className="flex items-center gap-3">
//               <div className="h-px w-12 bg-[linear-gradient(90deg,#d4af37,transparent)]" />
//               <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45" />
//               <div className="w-1 h-1 bg-[#d4af37]/30 rotate-45" />
//             </div>

//             {/* Body text */}
//             <div className="space-y-4">
//               <p
//                 className="leading-relaxed"
//                 style={{
//                   fontFamily: "'DM Sans', sans-serif",
//                   fontSize: "clamp(0.88rem, 1.2vw, 0.98rem)",
//                   fontWeight: 300,
//                   color: "rgba(255,255,255,0.5)",
//                 }}
//               >
//                 Meet{" "}
//                 <span className="text-white font-medium">{company_name}</span>,
//                 a trusted practitioner whose knowledge is rooted in{" "}
//                 <span className="text-[#d4af37]/80 font-medium">
//                   traditional Kerala wisdom
//                 </span>
//                 . His guidance has helped thousands discover clarity, balance,
//                 and confidence across life's most complex crossroads.
//               </p>
//               <p
//                 className="leading-relaxed"
//                 style={{
//                   fontFamily: "'DM Sans', sans-serif",
//                   fontSize: "clamp(0.88rem, 1.2vw, 0.98rem)",
//                   fontWeight: 300,
//                   color: "rgba(255,255,255,0.5)",
//                 }}
//               >
//                 Through personalized consultations and thoughtful insights,{" "}
//                 {company_name} supports people in navigating life decisions with
//                 calmness, awareness, and grounded understanding — blending
//                 ancient practices with genuine human care.
//               </p>
//             </div>

//             {/* Feature pills */}
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "Confidential Sessions",
//                 "Personalized Guidance",
//                 "Kerala Tradition",
//                 "75+ Years Legacy",
//               ].map((label) => (
//                 <span
//                   key={label}
//                   className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
//                   style={{
//                     background: "rgba(212,175,55,0.06)",
//                     border: "1px solid rgba(212,175,55,0.14)",
//                     fontFamily: "'Outfit', sans-serif",
//                     fontSize: "0.68rem",
//                     letterSpacing: "0.06em",
//                     color: "rgba(212,175,55,0.7)",
//                     textTransform: "uppercase",
//                     fontWeight: 600,
//                   }}
//                 >
//                   <span className="w-1 h-1 rounded-full bg-[#d4af37]/50 flex-shrink-0" />
//                   {label}
//                 </span>
//               ))}
//             </div>

//             {/* CTA buttons */}
//             <div className="flex flex-wrap gap-3 pt-2">
//               {/* Primary */}
//               <motion.a
//                 href={`tel:${phone_number}`}
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="group inline-flex items-center gap-2.5 no-underline px-6 py-3.5 rounded-sm font-semibold text-[0.8rem] tracking-[0.07em] uppercase text-[#06060c]"
//                 style={{
//                   fontFamily: "'Outfit', sans-serif",
//                   background:
//                     "linear-gradient(135deg, #d4af37 0%, #f5e27a 50%, #d4af37 100%)",
//                   backgroundSize: "200% 100%",
//                   boxShadow: "0 4px 24px rgba(212,175,55,0.4)",
//                 }}
//               >
//                 <Phone size={14} strokeWidth={2.5} />
//                 Call Now
//                 <ArrowRight
//                   size={12}
//                   strokeWidth={2.5}
//                   className="opacity-60 transition-transform duration-200 group-hover:translate-x-0.5"
//                 />
//               </motion.a>

//               {/* Ghost */}
//               <motion.a
//                 href={`https://wa.me/${whatsapp_number}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="group inline-flex items-center gap-2.5 no-underline px-6 py-3.5 rounded-sm font-semibold text-[0.8rem] tracking-[0.07em] uppercase transition-all duration-300"
//                 style={{
//                   fontFamily: "'Outfit', sans-serif",
//                   color: "rgba(255,255,255,0.75)",
//                   background: "rgba(255,255,255,0.04)",
//                   border: "1px solid rgba(255,255,255,0.1)",
//                 }}
//                 onMouseEnter={(e) => {
//                   const el = e.currentTarget as HTMLElement;
//                   el.style.background = "rgba(212,175,55,0.08)";
//                   el.style.borderColor = "rgba(212,175,55,0.3)";
//                   el.style.color = "rgba(255,255,255,0.9)";
//                 }}
//                 onMouseLeave={(e) => {
//                   const el = e.currentTarget as HTMLElement;
//                   el.style.background = "rgba(255,255,255,0.04)";
//                   el.style.borderColor = "rgba(255,255,255,0.1)";
//                   el.style.color = "rgba(255,255,255,0.75)";
//                 }}
//               >
//                 <MessageCircle size={14} strokeWidth={2} />
//                 Chat Now
//                 <ArrowRight
//                   size={12}
//                   strokeWidth={2.5}
//                   className="opacity-40 transition-transform duration-200 group-hover:translate-x-0.5"
//                 />
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* ── Google Fonts (self-contained) ── */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
//       `}</style>
//     </section>
//   );
// };

// const SERVICES = [
//   {
//     title: "Relationship Recovery",
//     desc: "Emotional challenges in relationships are common. Traditional consultation helps heal and restore understanding between partners.",
//     img: "https://i.pinimg.com/1200x/56/23/3a/56233a0caad6ac1136c682118ca138f8.jpg",
//     tag: "Healing",
//     index: "01",
//   },
//   {
//     title: "Partner Conflict Support",
//     desc: "Traditional guidance helps ease conflicts and bring balance in relationships with your partner.",
//     img: "https://i.pinimg.com/736x/da/1e/de/da1ede4ba8faa752488419d5a2802fd7.jpg",
//     tag: "Balance",
//     index: "02",
//   },
//   {
//     title: "Relationship Harmony",
//     desc: "Holistic consultation provides a path to resolve issues and restore harmony and trust between partners.",
//     img: "https://i.pinimg.com/736x/bc/49/b6/bc49b6e04d96e9d687ea1740e4cc93ed.jpg",
//     tag: "Trust",
//     index: "03",
//   },
//   {
//     title: "Family Well-being",
//     desc: "Address family challenges with traditional guidance that promotes peace, harmony, and positivity at home.",
//     img: "https://i.pinimg.com/736x/e7/b3/63/e7b36387a8c950dbb340455e0fdbdb1e.jpg",
//     tag: "Peace",
//     index: "04",
//   },
// ];

// const AstrologyServices = () => {
//   return (
//     <section className="relative py-24 md:py-32 px-5 md:px-10 bg-[#06060c] overflow-hidden">
//       {/* ── Dot grid texture ── */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.025]"
//         style={{
//           backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)",
//           backgroundSize: "28px 28px",
//         }}
//       />

//       {/* ── Ambient orbs ── */}
//       <div
//         className="absolute top-0 left-0 w-[400px] h-[300px] rounded-full pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse, rgba(212,175,55,0.06), transparent 70%)",
//         }}
//       />
//       <div
//         className="absolute bottom-0 right-0 w-[350px] h-[280px] rounded-full pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse, rgba(99,102,241,0.05), transparent 70%)",
//         }}
//       />

//       <div className="relative z-10 max-w-[1400px] mx-auto">
//         {/* ── Section Header ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
//           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
//           className="mb-16 md:mb-20"
//         >
//           {/* Eyebrow */}
//           <div className="flex items-center gap-3 mb-4">
//             <div className="w-8 h-px bg-[linear-gradient(90deg,#d4af37,transparent)]" />
//             <span
//               className="text-[#d4af37]/60 tracking-[0.28em] uppercase"
//               style={{ fontFamily: "monospace", fontSize: "0.6rem" }}
//             >
//               Our Specialties
//             </span>
//           </div>

//           {/* Heading + count row */}
//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
//             <div>
//               <h2
//                 className="text-white font-bold leading-none"
//                 style={{
//                   fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
//                   fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
//                 }}
//               >
//                 Consultation
//               </h2>
//               <h2
//                 className="text-[#d4af37] font-bold leading-none mt-1"
//                 style={{
//                   fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
//                   fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
//                 }}
//               >
//                 Services
//               </h2>
//             </div>

//             <div className="flex items-center gap-4">
//               <div
//                 className="h-px flex-1 md:w-24"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, transparent, rgba(212,175,55,0.3))",
//                 }}
//               />
//               <span
//                 className="text-white/15 font-light leading-none"
//                 style={{ fontFamily: "'Cinzel', serif", fontSize: "2.5rem" }}
//               >
//                 {String(SERVICES.length).padStart(2, "0")}
//               </span>
//             </div>
//           </div>

//           {/* Subtitle */}
//           <p
//             className="mt-5 max-w-lg leading-relaxed"
//             style={{
//               fontFamily: "'DM Sans', sans-serif",
//               fontSize: "0.9rem",
//               fontWeight: 300,
//               color: "rgba(255,255,255,0.4)",
//             }}
//           >
//             Each service is rooted in Kerala's ancient traditions — tailored
//             personally to bring clarity and balance to your life's most
//             sensitive relationships.
//           </p>
//         </motion.div>

//         {/* ── Cards Grid ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {SERVICES.map((service, idx) => (
//             <ServiceCard key={idx} service={service} idx={idx} />
//           ))}
//         </div>

//         {/* ── Bottom CTA strip ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
//           className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 px-6 py-5 rounded-xl"
//           style={{
//             background: "rgba(212,175,55,0.04)",
//             border: "1px solid rgba(212,175,55,0.1)",
//           }}
//         >
//           <div className="flex items-center gap-3">
//             <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45 flex-shrink-0" />
//             <p
//               className="text-white/50"
//               style={{
//                 fontFamily: "'DM Sans', sans-serif",
//                 fontSize: "0.85rem",
//                 fontWeight: 300,
//               }}
//             >
//               Not sure which service fits?{" "}
//               <span className="text-white/70 font-medium">
//                 We'll guide you personally.
//               </span>
//             </p>
//           </div>

//           <motion.a
//             href={`tel:${phone_number}`}
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.97 }}
//             className="group flex-shrink-0 inline-flex items-center gap-2.5 no-underline px-6 py-3 rounded-sm font-semibold text-[0.78rem] tracking-[0.08em] uppercase text-[#06060c]"
//             style={{
//               fontFamily: "'Outfit', sans-serif",
//               background: "linear-gradient(135deg, #d4af37, #f5e27a)",
//               boxShadow: "0 4px 20px rgba(212,175,55,0.35)",
//             }}
//           >
//             <Phone size={13} strokeWidth={2.5} />
//             Call for Guidance
//             <ArrowRight
//               size={12}
//               strokeWidth={2.5}
//               className="opacity-60 transition-transform duration-200 group-hover:translate-x-0.5"
//             />
//           </motion.a>
//         </motion.div>
//       </div>

//       {/* ── Fonts (self-contained) ── */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
//       `}</style>
//     </section>
//   );
// };

// ─── Service Card ─────────────────────────────────────────────────────────────

// const ServiceCard = ({ service, idx } ) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 32 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-40px" }}
//       transition={{ duration: 0.6, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
//       whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//       className="group relative flex flex-col overflow-hidden rounded-xl cursor-pointer"
//       style={{
//         background: "linear-gradient(160deg, #0f0f1a 0%, #0a0a12 100%)",
//         border: hovered
//           ? "1px solid rgba(212,175,55,0.22)"
//           : "1px solid rgba(255,255,255,0.05)",
//         transition: "border-color 0.3s ease",
//       }}
//     >
//       {/* Image */}
//       <div className="relative overflow-hidden h-52 flex-shrink-0">
//         <img
//           src={service.img}
//           alt={service.title}
//           className="w-full h-full object-cover will-change-transform transition-transform duration-700"
//           style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
//         />

//         {/* Overlays */}
//         <div
//           className="absolute inset-0 transition-opacity duration-500"
//           style={{ background: "#06060c", opacity: hovered ? 0.1 : 0.28 }}
//         />
//         <div className="absolute inset-0 bg-[linear-gradient(to_top,#0a0a12_0%,transparent_55%)]" />

//         {/* Tag pill */}
//         <div className="absolute top-3 left-3">
//           <span
//             className="inline-block px-2.5 py-1 rounded-full text-[0.58rem] tracking-[0.15em] uppercase font-semibold"
//             style={{
//               fontFamily: "monospace",
//               background: "rgba(6,6,12,0.75)",
//               border: "1px solid rgba(212,175,55,0.22)",
//               color: "rgba(212,175,55,0.8)",
//               backdropFilter: "blur(8px)",
//             }}
//           >
//             {service.tag}
//           </span>
//         </div>

//         {/* Index number */}
//         <div
//           className="absolute top-3 right-3 leading-none transition-colors duration-300"
//           style={{
//             fontFamily: "'Cinzel', serif",
//             fontSize: "1.05rem",
//             fontWeight: 700,
//             color: hovered ? "rgba(212,175,55,0.35)" : "rgba(255,255,255,0.12)",
//           }}
//         >
//           {service.index}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col flex-1 p-5">
//         {/* Animated gold accent bar */}
//         <div
//           className="h-px mb-3 transition-all duration-400"
//           style={{
//             background: "linear-gradient(90deg, #d4af37, transparent)",
//             width: hovered ? "56px" : "28px",
//           }}
//         />

//         <h3
//           className="leading-snug mb-2.5 transition-colors duration-300"
//           style={{
//             fontFamily: "'Cinzel', serif",
//             fontSize: "0.88rem",
//             fontWeight: 600,
//             letterSpacing: "0.04em",
//             color: hovered ? "#f5e27a" : "rgba(255,255,255,0.9)",
//           }}
//         >
//           {service.title}
//         </h3>

//         <p
//           className="leading-relaxed flex-1 mb-5"
//           style={{
//             fontFamily: "'DM Sans', sans-serif",
//             fontSize: "0.77rem",
//             fontWeight: 300,
//             color: "rgba(255,255,255,0.4)",
//           }}
//         >
//           {service.desc}
//         </p>

//         {/* CTA row */}
//         <a
//           href={`tel:${phone_number}`}
//           className="flex items-center justify-between no-underline px-4 py-2.5 rounded-lg transition-all duration-300"
//           style={{
//             background: hovered
//               ? "rgba(212,175,55,0.12)"
//               : "rgba(212,175,55,0.06)",
//             border: hovered
//               ? "1px solid rgba(212,175,55,0.32)"
//               : "1px solid rgba(212,175,55,0.1)",
//           }}
//         >
//           <span
//             className="flex items-center gap-2 font-semibold tracking-[0.08em] uppercase"
//             style={{
//               fontFamily: "'Outfit', sans-serif",
//               fontSize: "0.7rem",
//               color: "#d4af37",
//             }}
//           >
//             <Phone size={12} strokeWidth={2.5} />
//             Call Now
//           </span>
//           <ArrowUpRight
//             size={13}
//             strokeWidth={2}
//             className="transition-all duration-200"
//             style={{
//               color: hovered ? "#d4af37" : "rgba(212,175,55,0.4)",
//               transform: hovered ? "translate(1px,-1px)" : "translate(0,0)",
//             }}
//           />
//         </a>
//       </div>

//       {/* Inner glow border on hover */}
//       <div
//         className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500"
//         style={{
//           boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.15)",
//           opacity: hovered ? 1 : 0,
//         }}
//       />
//     </motion.div>
//   );
// };

/* ── Wellness Services (image cards) ── */

// const AstrologyServicesModern = () => {
//   const SERVICES = [
//     {
//       title: "Marriage Consultation",
//       img: "https://i.pinimg.com/736x/be/96/4b/be964bb4f6d6e07752fc4b363859b048.jpg",
//       tag: "Marriage",
//       index: "01",
//     },
//     {
//       title: "Couple Conflict Support",
//       img: "https://i.pinimg.com/736x/f5/b2/00/f5b200772b619765261b2a50b595ae72.jpg",
//       tag: "Conflict",
//       index: "02",
//     },
//     {
//       title: "Relationship Restoration",
//       img: "https://i.pinimg.com/1200x/2f/5b/b3/2f5bb3dde2c5891188f1170b5d12260f.jpg",
//       tag: "Restore",
//       index: "03",
//     },
//     {
//       title: "Financial Well-being",
//       img: "https://i.pinimg.com/736x/40/99/9c/40999c10cdac6c327a1378c45be496b5.jpg",
//       tag: "Wellness",
//       index: "04",
//     },
//   ];
//   return (
//     <section className="relative py-24 md:py-32 px-5 md:px-10 bg-[#06060c] overflow-hidden">
//       {/* Dot grid */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.025]"
//         style={{
//           backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)",
//           backgroundSize: "28px 28px",
//         }}
//       />

//       {/* Ambient orbs */}
//       <div
//         className="absolute top-0 right-0 w-[380px] h-[280px] rounded-full pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse, rgba(212,175,55,0.06), transparent 70%)",
//         }}
//       />
//       <div
//         className="absolute bottom-0 left-0 w-[320px] h-[240px] rounded-full pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse, rgba(99,102,241,0.04), transparent 70%)",
//         }}
//       />

//       <div className="relative z-10 max-w-[1400px] mx-auto">
//         {/* Section header */}
//         <motion.div
//           initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
//           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
//           className="mb-14 md:mb-18"
//         >
//           {/* Eyebrow */}
//           <div className="flex items-center gap-3 mb-4">
//             <div className="w-8 h-px bg-[linear-gradient(90deg,#d4af37,transparent)]" />
//             <span
//               className="text-[#d4af37]/60 tracking-[0.28em] uppercase"
//               style={{ fontFamily: "monospace", fontSize: "0.6rem" }}
//             >
//               Wellness
//             </span>
//           </div>

//           {/* Heading + count */}
//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
//             <div>
//               <h2
//                 className="text-white font-bold leading-none"
//                 style={{
//                   fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
//                   fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
//                 }}
//               >
//                 Wellness
//               </h2>
//               <h2
//                 className="text-[#d4af37] font-bold leading-none mt-1"
//                 style={{
//                   fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
//                   fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
//                 }}
//               >
//                 Services
//               </h2>
//             </div>
//             <div className="flex items-center gap-4">
//               <div
//                 className="h-px flex-1 md:w-24"
//                 style={{
//                   background:
//                     "linear-gradient(90deg,transparent,rgba(212,175,55,0.3))",
//                 }}
//               />
//               <span
//                 className="text-white/15 font-light leading-none"
//                 style={{ fontFamily: "'Cinzel', serif", fontSize: "2.5rem" }}
//               >
//                 {String(SERVICES.length).padStart(2, "0")}
//               </span>
//             </div>
//           </div>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {SERVICES.map((service, idx) => (
//             <ServiceCard key={idx} service={service} idx={idx} />
//           ))}
//         </div>
//       </div>

//       {/* Fonts */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
//       `}</style>
//     </section>
//   );
// };

// ─── Service Card ─────────────────────────────────────────────────────────────

/* ── All Services (icon cards) ── */

//    
//   const services = [
//     {
//       title: "Relationship Healing",
//       icon: Heart,
//       desc: "Traditional guidance to restore emotional balance and mutual understanding.",
//     },
//     {
//       title: "Legal Matter Support",
//       icon: Scale,
//       desc: "Traditional insights to support clarity and peace of mind during legal challenges.",
//     },
//     {
//       title: "Family Harmony",
//       icon: Users,
//       desc: "Supportive consultation to improve peace and well-being in family relationships.",
//     },
//     {
//       title: "Business Direction",
//       icon: Briefcase,
//       desc: "Holistic insights to help with planning and professional growth.",
//     },
//     {
//       title: "Couple Well-being",
//       icon: Users,
//       desc: "Guidance focused on emotional well-being and togetherness.",
//     },
//     {
//       title: "Traditional Rituals",
//       icon: Sparkles,
//       desc: "Sacred Kerala practices aimed at inner balance and personal grounding.",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#161029] px-4 py-24">
//       {/* Chart-line watermark — consistent site signature */}
//       <svg
//         className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 text-[#d4a24e]/[0.05]"
//         viewBox="0 0 200 200"
//         fill="none"
//         aria-hidden="true"
//       >
//         <rect x="2" y="2" width="196" height="196" stroke="currentColor" strokeWidth="0.6" />
//         <path d="M2 2L198 198M198 2L2 198" stroke="currentColor" strokeWidth="0.6" />
//         <path d="M100 2V198M2 100H198" stroke="currentColor" strokeWidth="0.6" />
//       </svg>
//       <div className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,162,78,0.08),transparent_70%)]" />
//       <div className="pointer-events-none absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(90,70,150,0.12),transparent_65%)]" />

//       <div className="relative mx-auto max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-16 text-center"
//         >
//           <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d4a24e]">
//             Full Spectrum
//           </span>
//           <h2 className="mt-2 font-serif text-4xl font-bold tracking-wide text-[#fdf6ec] md:text-5xl">
//             Our Services
//           </h2>
//           <div className="mt-4 flex items-center justify-center gap-3">
//             <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4a24e]" />
//             <div className="h-2 w-2 rounded-full bg-[#d4a24e]" />
//             <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4a24e]" />
//           </div>
//         </motion.div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, id) => (
//             <motion.div
//               key={id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: (id % 3) * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -6 }}
//               className="group rounded-2xl border border-[#d4a24e]/12 bg-[#241c3d] p-8 text-center shadow-lg shadow-black/30 transition-all duration-300 hover:border-[#d4a24e]/28"
//             >
//               <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-[#d4a24e]/20 bg-[#d4a24e]/10 transition-all duration-300 group-hover:border-[#d4a24e]/40 group-hover:bg-[#d4a24e]/15">
//                 <service.icon className="h-8 w-8 text-[#d4a24e]" strokeWidth={1.75} />
//               </div>

//               <h3 className="mb-3 font-serif text-xl font-semibold tracking-wide text-[#fdf6ec]">
//                 {service.title}
//               </h3>

//               <p className="mb-6 text-sm font-light leading-relaxed text-[#fdf6ec]/50">
//                 {service.desc}
//               </p>

//               <a href={`tel:${phone_number}`}>
//                 <button className="group/btn flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c1622f] to-[#d4a24e] py-2.5 text-sm font-semibold text-[#1a1330] shadow-md shadow-black/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#d4a24e]/25">
//                   Get in Touch
//                   <ArrowRight
//                     size={14}
//                     className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
//                   />
//                 </button>
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



/* ── Home Last / CTA ── */

// const HomeLastDesign = () => {
//   const [imgHovered, setImgHovered] = useState(false);

//   const PILLARS = [
//     { icon: <Eye size={13} />, label: "Vastu" },
//     { icon: <Sparkles size={13} />, label: "Horoscope" },
//     { icon: <Shield size={13} />, label: "Well-being" },
//   ];

//   return (
//     <section className="relative py-24 md:py-32 px-5 md:px-10 bg-[#06060c] overflow-hidden">
//       {/* Dot grid */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.025]"
//         style={{
//           backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)",
//           backgroundSize: "28px 28px",
//         }}
//       />

//       {/* Ambient orbs */}
//       <div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(212,175,55,0.06), transparent 65%)",
//         }}
//       />
//       <div
//         className="absolute -top-20 -right-20 w-[350px] h-[350px] pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(99,102,241,0.04), transparent 65%)",
//         }}
//       />

//       {/* Vertical center rule */}
//       <div
//         className="absolute top-0 bottom-0 left-[50%] w-px pointer-events-none hidden lg:block"
//         style={{
//           background:
//             "linear-gradient(to bottom, transparent, rgba(212,175,55,0.06) 30%, rgba(212,175,55,0.06) 70%, transparent)",
//         }}
//       />

//       <div className="relative z-10 max-w-[1400px] mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
//           {/* ── LEFT: Portrait ── */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
//             className="flex justify-center lg:justify-start"
//           >
//             <div className="relative">
//               {/* Outer decorative ring */}
//               <div
//                 className="absolute -inset-5 rounded-full pointer-events-none transition-opacity duration-500"
//                 style={{
//                   background:
//                     "conic-gradient(from 0deg, rgba(212,175,55,0.12), transparent 40%, rgba(212,175,55,0.08), transparent 80%)",
//                   opacity: imgHovered ? 1 : 0.5,
//                 }}
//               />

//               {/* Corner frame accents */}
//               <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]/35 rounded-tl-sm pointer-events-none z-20" />
//               <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]/35 rounded-br-sm pointer-events-none z-20" />

//               {/* Glow halo */}
//               <div
//                 className="absolute -inset-6 rounded-full pointer-events-none transition-opacity duration-500"
//                 style={{
//                   background:
//                     "radial-gradient(circle, rgba(212,175,55,0.16), transparent 65%)",
//                   opacity: imgHovered ? 1 : 0.4,
//                 }}
//               />

//               {/* Circle portrait */}
//               <div
//                 className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden"
//                 style={{ border: "1px solid rgba(212,175,55,0.2)" }}
//                 onMouseEnter={() => setImgHovered(true)}
//                 onMouseLeave={() => setImgHovered(false)}
//               >
//                 <img
//                   src="https://i.pinimg.com/1200x/3d/ef/55/3def558579612a517065a7c48310e918.jpg"
//                   alt={person_name}
//                   className="w-full h-full object-cover will-change-transform transition-transform duration-700"
//                   style={{ transform: imgHovered ? "scale(1.07)" : "scale(1)" }}
//                 />
//                 {/* Shimmer overlay */}
//                 <div
//                   className="absolute inset-0 rounded-full transition-opacity duration-500"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, rgba(212,175,55,0.15), transparent 50%)",
//                     opacity: imgHovered ? 1 : 0,
//                   }}
//                 />
//                 {/* Inner border ring */}
//                 <div
//                   className="absolute inset-0 rounded-full"
//                   style={{ border: "1px solid rgba(212,175,55,0.1)" }}
//                 />
//               </div>

//               {/* Floating name badge */}
//               <div
//                 className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-lg whitespace-nowrap z-20"
//                 style={{
//                   background: "rgba(6,6,12,0.85)",
//                   border: "1px solid rgba(212,175,55,0.2)",
//                   backdropFilter: "blur(12px)",
//                   boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
//                 }}
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45 flex-shrink-0" />
//                   <div>
//                     <p
//                       className="text-white font-semibold leading-none"
//                       style={{
//                         fontFamily: "'Cinzel', serif",
//                         fontSize: "0.82rem",
//                         letterSpacing: "0.05em",
//                       }}
//                     >
//                       {person_name}
//                     </p>
//                     <p
//                       className="text-[#d4af37]/55 mt-0.5 leading-none"
//                       style={{
//                         fontFamily: "monospace",
//                         fontSize: "0.55rem",
//                         letterSpacing: "0.15em",
//                       }}
//                     >
//                       KERALA PRACTITIONER
//                     </p>
//                   </div>
//                   <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45 flex-shrink-0" />
//                 </div>
//               </div>

//               {/* Rotating orbit dot */}
//               <div className="absolute inset-0 rounded-full pointer-events-none animate-orbit">
//                 <div
//                   className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 rounded-full bg-[#d4af37]"
//                   style={{ boxShadow: "0 0 8px rgba(212,175,55,0.8)" }}
//                 />
//               </div>
//             </div>
//           </motion.div>

//           {/* ── RIGHT: Text ── */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
//             className="flex flex-col gap-6"
//           >
//             {/* Eyebrow */}
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-px bg-[linear-gradient(90deg,#d4af37,transparent)]" />
//               <span
//                 className="text-[#d4af37]/60 tracking-[0.28em] uppercase"
//                 style={{ fontFamily: "monospace", fontSize: "0.6rem" }}
//               >
//                 Meet Your Guide
//               </span>
//             </div>

//             {/* Heading */}
//             <div>
//               <h2
//                 className="text-white font-bold leading-none"
//                 style={{
//                   fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
//                   fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)",
//                   letterSpacing: "-0.01em",
//                 }}
//               >
//                 {person_name}
//               </h2>
//               <p
//                 className="text-[#d4af37] font-light italic mt-2"
//                 style={{
//                   fontFamily: "'Playfair Display', serif",
//                   fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
//                   letterSpacing: "0.04em",
//                 }}
//               >
//                 Trusted Traditional Kerala Consultation
//               </p>
//             </div>

//             {/* Gold rule */}
//             <div className="flex items-center gap-3">
//               <div className="h-px w-10 bg-[linear-gradient(90deg,#d4af37,transparent)]" />
//               <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45" />
//               <div className="w-1 h-1 bg-[#d4af37]/30 rotate-45" />
//             </div>

//             {/* Body text */}
//             <p
//               className="leading-relaxed max-w-lg"
//               style={{
//                 fontFamily: "'DM Sans', sans-serif",
//                 fontSize: "clamp(0.88rem, 1.2vw, 0.98rem)",
//                 fontWeight: 300,
//                 color: "rgba(255,255,255,0.5)",
//               }}
//             >
//               With deep understanding of{" "}
//               <span className="text-[#d4af37]/85 font-medium">Vastu</span>,{" "}
//               <span className="text-[#d4af37]/70 font-medium">
//                 horoscope interpretation
//               </span>
//               , and{" "}
//               <span className="text-[#d4af37]/60 font-medium">
//                 holistic well-being consultation
//               </span>
//               , {person_name} provides calm, thoughtful guidance to help
//               individuals move forward with clarity and confidence.
//             </p>

//             {/* Pillar chips */}
//             <div className="flex flex-wrap gap-2">
//               {PILLARS.map((p) => (
//                 <span
//                   key={p.label}
//                   className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg"
//                   style={{
//                     background: "rgba(212,175,55,0.06)",
//                     border: "1px solid rgba(212,175,55,0.14)",
//                     fontFamily: "'Outfit', sans-serif",
//                     fontSize: "0.7rem",
//                     letterSpacing: "0.08em",
//                     textTransform: "uppercase",
//                     fontWeight: 600,
//                     color: "rgba(212,175,55,0.75)",
//                   }}
//                 >
//                   <span className="text-[#d4af37]/50">{p.icon}</span>
//                   {p.label}
//                 </span>
//               ))}
//             </div>

//             {/* CTA buttons */}
//             <div className="flex flex-wrap gap-3 pt-1">
//               <motion.a
//                 href={`tel:${phone_number}`}
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="group inline-flex items-center gap-2.5 no-underline px-6 py-3.5 rounded-sm font-semibold tracking-[0.07em] uppercase text-[#06060c]"
//                 style={{
//                   fontFamily: "'Outfit', sans-serif",
//                   fontSize: "0.78rem",
//                   background:
//                     "linear-gradient(135deg, #d4af37 0%, #f5e27a 50%, #d4af37 100%)",
//                   backgroundSize: "200% 100%",
//                   boxShadow: "0 4px 24px rgba(212,175,55,0.4)",
//                 }}
//               >
//                 <Phone size={14} strokeWidth={2.5} />
//                 Call Now
//                 <ArrowRight
//                   size={12}
//                   strokeWidth={2.5}
//                   className="opacity-60 group-hover:translate-x-0.5 transition-transform duration-200"
//                 />
//               </motion.a>

//               <motion.a
//                 href={`https://wa.me/${whatsapp_number}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="group inline-flex items-center gap-2.5 no-underline px-6 py-3.5 rounded-sm font-semibold tracking-[0.07em] uppercase transition-all duration-300"
//                 style={{
//                   fontFamily: "'Outfit', sans-serif",
//                   fontSize: "0.78rem",
//                   color: "rgba(255,255,255,0.75)",
//                   background: "rgba(255,255,255,0.04)",
//                   border: "1px solid rgba(255,255,255,0.1)",
//                 }}
//                 onMouseEnter={(e) => {
//                   const el = e.currentTarget as HTMLElement;
//                   el.style.background = "rgba(212,175,55,0.08)";
//                   el.style.borderColor = "rgba(212,175,55,0.3)";
//                   el.style.color = "rgba(255,255,255,0.9)";
//                 }}
//                 onMouseLeave={(e) => {
//                   const el = e.currentTarget as HTMLElement;
//                   el.style.background = "rgba(255,255,255,0.04)";
//                   el.style.borderColor = "rgba(255,255,255,0.1)";
//                   el.style.color = "rgba(255,255,255,0.75)";
//                 }}
//               >
//                 <MessageCircle size={14} strokeWidth={2} />
//                 Chat on WhatsApp
//                 <ArrowRight
//                   size={12}
//                   strokeWidth={2.5}
//                   className="opacity-40 group-hover:translate-x-0.5 transition-transform duration-200"
//                 />
//               </motion.a>
//             </div>

//             {/* Trust line */}
//             <div className="flex items-center gap-3 pt-1">
//               <div className="w-1 h-1 bg-[#d4af37]/40 rotate-45" />
//               <p
//                 className="text-[#d4af37]/40 tracking-[0.18em] uppercase"
//                 style={{ fontFamily: "monospace", fontSize: "0.58rem" }}
//               >
//                 Trusted Guidance &nbsp;·&nbsp; Calm Insights &nbsp;·&nbsp;
//                 Personal Clarity
//               </p>
//               <div className="w-1 h-1 bg-[#d4af37]/40 rotate-45" />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Fonts + orbit animation */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600&family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&family=Outfit:wght@400;500;600;700&display=swap');
//         @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         .animate-orbit { animation: orbit 8s linear infinite; }
//       `}</style>
//     </section>
//   );
// };
