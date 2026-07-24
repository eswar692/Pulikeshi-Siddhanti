"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";
import { person_name } from "./secrete";

const testimonials = [
  {
    name: "Arjun Verma",
    location: "Mumbai",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: `${person_name} Ji gave me clear direction during a difficult stretch in my business. I came to him after a significant loss, unsure what to do next — the remedies he suggested were practical, easy to follow, and started showing results within weeks. I finally felt like someone understood the full picture, not just the surface problem.`,
  },
  {
    name: "Mala Kapoor",
    location: "Goa",
    image: "https://astrologerdeepaksharma.in/images/client-1.png",
    text: `I've consulted Pandith ${person_name} several times over the past two years, and every reading has been remarkably accurate. What I appreciate most is that he doesn't just tell you what's coming — he explains the timing and reasoning behind it, so you feel equipped rather than just told what to expect.`,
  },
  {
    name: "Pratha Kumari",
    location: "Delhi",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: "My children suddenly became distant and stopped listening to me at home. I was genuinely worried and didn't know where to turn. His guidance gave us a structured way to reconnect, and within a couple of months our home felt calm again — the changes he suggested were small but made a real difference.",
  },
  {
    name: "Vikram Rao",
    location: "Hyderabad",
    image: "https://astrologerdeepaksharma.in/images/client-1.png",
    text: `Before a major career decision, I wanted a second opinion beyond just logic and spreadsheets. ${person_name} Ji's horoscope reading gave me clarity on timing I hadn't considered, and looking back a year later, the advice held up completely. I recommend him to anyone standing at a crossroads.`,
  },
  {
    name: "Sunitha Reddy",
    location: "Vijayawada",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: "The Vastu consultation for our new home was thorough and thoughtful — he walked through every room and explained the reasoning behind each suggestion instead of giving vague instructions. Small, affordable changes, but the difference in how the house feels is noticeable every single day.",
  },
  {
    name: "Karthik Nair",
    location: "Kochi",
    image: "https://astrologerdeepaksharma.in/images/client-1.png",
    text: `Since I live abroad, phone consultation was my only option — and it turned out to be just as detailed as an in-person session. ${person_name} Ji took the time to understand my situation fully before offering guidance. Deeply grateful for the clarity and peace of mind it brought.`,
  },
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 4500, stopOnInteraction: false })],
  );

  return (
    <section className="relative overflow-hidden bg-[#161029] px-6 py-20 sm:px-10 lg:px-16">
      {/* Chart-line watermark — same signature motif used across the site */}
      <svg
        className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 text-[#d4a24e]/[0.05]"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="196" height="196" stroke="currentColor" strokeWidth="0.6" />
        <path d="M2 2L198 198M198 2L2 198" stroke="currentColor" strokeWidth="0.6" />
        <path d="M100 2V198M2 100H198" stroke="currentColor" strokeWidth="0.6" />
      </svg>
      <div className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,162,78,0.08),transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(90,70,150,0.12),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl text-center">
        {/* Eyebrow */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#d4a24e]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d4a24e]">
            Client Voices
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4a24e]" />
        </div>

        <h2 className="font-serif text-4xl font-bold text-[#fdf6ec] md:text-5xl">
          What Our Clients Say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#fdf6ec]/50">
          Real experiences from people who found clarity and direction with{" "}
          <span className="font-medium text-[#d4a24e]">{person_name}</span>.
        </p>

        {/* Carousel */}
        <div className="mt-16 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <div className="group relative flex h-full flex-col rounded-2xl border border-[#d4a24e]/12 bg-[#241c3d] p-7 text-left shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a24e]/28">
                  <Quote
                    size={22}
                    className="absolute right-6 top-6 text-[#d4a24e]/20 transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Header: small avatar + name/location */}
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#d4a24e]/30">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#fdf6ec]">
                        {t.name}
                      </h3>
                      <span className="text-xs uppercase tracking-wide text-[#d4a24e]/60">
                        {t.location}
                      </span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mt-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        size={13}
                        fill="#d4a24e"
                        className="text-[#d4a24e]"
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="mt-4 text-sm italic leading-relaxed text-[#fdf6ec]/70">
                    "{t.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}