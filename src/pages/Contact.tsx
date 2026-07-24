import { Phone, MessageCircle } from "lucide-react";
import Form from "../Genaral/Form";
import {
  company_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";
import { motion } from "framer-motion";

/**
 * Subtle 9x9 kundli-style chart lines, used as a background watermark
 * instead of a generic dot grid — a nod to the actual subject matter
 * (astrological birth charts) rather than decorative noise.
 */
function ChartMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect x="2" y="2" width="196" height="196" stroke="currentColor" strokeWidth="0.6" />
      <path d="M2 2L198 198M198 2L2 198" stroke="currentColor" strokeWidth="0.6" />
      <path d="M100 2V198M2 100H198" stroke="currentColor" strokeWidth="0.6" />
      <path d="M50 2L2 50M150 2L198 50M50 198L2 150M150 198L198 150" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}

export default function Contact() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#161029] px-6 py-24">
      {/* Background: chart motif watermark, not a dot grid */}
      <ChartMotif className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] text-[#d4a24e]/[0.06]" />
      <ChartMotif className="pointer-events-none absolute -bottom-32 -left-24 h-[380px] w-[380px] rotate-12 text-[#d4a24e]/[0.05]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[700px] -translate-x-1/2 rounded-full bg-[#d4a24e]/[0.08] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#5a4696]/[0.12] blur-[100px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto mb-16 max-w-3xl text-center"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d4a24e]">
          Begin the Conversation
        </span>
        <h2 className="mt-3 font-serif text-4xl font-bold leading-tight tracking-wide text-[#fdf6ec] md:text-5xl">
          Consult <span className="text-[#d4a24e]">{company_name}</span>
        </h2>
        <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#d4a24e] to-transparent" />
        <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-[#fdf6ec]/55">
          We're here to support you on your personal journey. Reach out via{" "}
          <span className="font-medium text-[#d4a24e]">WhatsApp</span>,{" "}
          <span className="font-medium text-[#d4a24e]">phone</span>, or fill
          the form below to connect with us directly.
        </p>
      </motion.div>

      {/* Grid: Info + Form */}
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {/* Contact Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col gap-6 rounded-2xl border border-[#d4a24e]/12 bg-[#241c3d] p-8 shadow-2xl shadow-black/40 md:p-10"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d4a24e]">
              Contact
            </span>
            <h3 className="mt-2 font-serif text-2xl font-bold tracking-wide text-[#fdf6ec]">
              Get in Touch
            </h3>
            <div className="mt-3 h-px w-10 bg-gradient-to-r from-[#d4a24e] to-transparent" />
          </div>

          <p className="text-sm font-light leading-relaxed text-[#fdf6ec]/55">
            Whether you're seeking clarity about{" "}
            <span className="font-medium text-[#d4a24e]">career</span>,{" "}
            <span className="font-medium text-[#d4a24e]">relationship</span>,
            or{" "}
            <span className="font-medium text-[#d4a24e]">life planning</span>,
            our consultations are here to help.
          </p>

          {/* Phone */}
          <a
            href={`tel:${phone_number}`}
            className="group flex items-center gap-3 rounded-xl border border-[#d4a24e]/12 bg-white/[0.02] p-4 transition-all duration-200 hover:border-[#d4a24e]/30 hover:bg-[#d4a24e]/5"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#d4a24e]/20 bg-[#d4a24e]/10">
              <Phone size={15} className="text-[#d4a24e]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#d4a24e]/60">
                Phone
              </p>
              <p className="text-sm font-medium text-[#fdf6ec] transition-colors group-hover:text-[#d4a24e]">
                {phone_number}
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-[#d4a24e]/12 bg-white/[0.02] p-4 transition-all duration-200 hover:border-[#d4a24e]/30 hover:bg-[#d4a24e]/5"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#d4a24e]/20 bg-[#d4a24e]/10">
              <MessageCircle size={15} className="text-[#d4a24e]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#d4a24e]/60">
                WhatsApp
              </p>
              <p className="text-sm font-medium text-[#fdf6ec] transition-colors group-hover:text-[#d4a24e]">
                {whatsapp_number}
              </p>
            </div>
          </a>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c1622f] to-[#d4a24e] px-5 py-2.5 text-sm font-semibold text-[#1a1330] shadow-md shadow-black/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#d4a24e]/30"
            >
              <Phone size={13} /> Call Now
            </a>

            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d4a24e]/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-[#fdf6ec] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d4a24e]/45 hover:bg-white/10"
            >
              <MessageCircle size={13} /> Chat Now
            </a>
          </div>

          <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4a24e]/50">
            ✦ Trusted &nbsp;·&nbsp; Confidential &nbsp;·&nbsp; Respectful
          </p>
        </motion.div>

        {/* Form Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="rounded-2xl border border-[#d4a24e]/12 bg-[#241c3d] p-8 shadow-2xl shadow-black/40 md:p-10"
        >
          <div className="mb-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d4a24e]">
              Book Session
            </span>
            <h3 className="mt-2 font-serif text-2xl font-bold tracking-wide text-[#fdf6ec]">
              Book a Session
            </h3>
            <div className="mt-3 h-px w-10 bg-gradient-to-r from-[#d4a24e] to-transparent" />
          </div>
          <Form />
        </motion.div>
      </div>

      {/* Services Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto mt-20 max-w-5xl"
      >
        <div className="rounded-2xl border border-[#d4a24e]/12 bg-[#241c3d] p-8 text-center shadow-xl shadow-black/40 md:p-12">
          <div className="mx-auto mb-8 h-px w-full bg-gradient-to-r from-transparent via-[#d4a24e]/40 to-transparent" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d4a24e]">
            What We Offer
          </span>
          <h3 className="mb-6 mt-3 font-serif text-3xl font-bold tracking-wide text-[#fdf6ec] md:text-4xl">
            Our Consultation Services
          </h3>

          <p className="mx-auto max-w-3xl text-sm font-light leading-relaxed text-[#fdf6ec]/55 md:text-base">
            Offering detailed{" "}
            <span className="font-medium text-[#d4a24e]">
              palmistry sessions
            </span>
            ,{" "}
            <span className="font-medium text-[#d4a24e]">
              horoscope analysis
            </span>
            ,{" "}
            <span className="font-medium text-[#d4a24e]">
              personal well-being reviews
            </span>
            , and{" "}
            <span className="font-medium text-[#d4a24e]">
              Vastu consultations
            </span>
            . Gain clarity and direction through personalized traditional
            Kerala insights into{" "}
            <span className="font-medium italic text-[#fdf6ec]">
              relationships, career, financial planning, and personal
              well-being
            </span>
            .
          </p>

          <div className="mx-auto mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#d4a24e]/40 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}