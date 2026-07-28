"use client";

import { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

import { company_name } from "./secrete";

type NavItem = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
  }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    Icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    Icon: Youtube,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    Icon: Linkedin,
  },
];

const Logo = "https://res.cloudinary.com/di7evjrx6/image/upload/v1785250925/WhatsApp_Image_2026-07-27_at_8.02.14_PM_fnctxp.jpg";

/* =========================================================
   HEADER VISIBILITY
========================================================= */

function useHeaderVisibility(threshold = 6, topOffset = 80) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (currentY < topOffset) {
        setIsVisible(true);
      } else if (Math.abs(delta) > threshold) {
        setIsVisible(delta < 0);
      }

      lastY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold, topOffset]);

  return isVisible;
}

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [openSubmenu, setOpenSubmenu] =
    useState<string | null>(null);

  const isHeaderVisible = useHeaderVisibility();

  const showHeader =
    isHeaderVisible || isMobileMenuOpen;

  /* SCROLL STATE */

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* LOCK BODY WHEN MOBILE MENU OPEN */

  useEffect(() => {
    document.body.style.overflow =
      isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`
        sticky
        top-0
        z-50
        w-full

        transition-transform
        duration-500
        ease-[cubic-bezier(.16,1,.3,1)]

        ${
          showHeader
            ? "translate-y-0"
            : "-translate-y-full"
        }
      `}
    >

      {/* =====================================================
          TOP UTILITY BAR
      ===================================================== */}

      <div
        className="
          border-b
          border-[#6f4932]/10
          bg-[#f1e3d1]
        "
      >
        <div
          className="
            mx-auto
            flex
            h-8
            max-w-7xl
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-8
          "
        >

          {/* LEFT */}

          <div
            className="
              hidden
              items-center
              gap-2
              sm:flex
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#a65332]
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#795b47]/70
              "
            >
              Vedic Guidance · Traditional Wisdom
            </span>
          </div>


          {/* SOCIAL */}

          <div
            className="
              ml-auto
              flex
              items-center
              gap-1
            "
          >
            {SOCIAL_LINKS.map(
              ({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full

                    text-[#79553c]/60

                    transition-all
                    duration-300

                    hover:bg-[#a65332]/10
                    hover:text-[#a65332]
                  "
                >
                  <Icon
                    size={13}
                    strokeWidth={1.8}
                  />
                </a>
              )
            )}
          </div>

        </div>
      </div>


      {/* =====================================================
          MAIN NAVIGATION
      ===================================================== */}

      <div
        className={`
          border-b

          transition-all
          duration-500

          ${
            isScrolled
              ? `
                border-[#6f4932]/10
                bg-[#fffaf3]/90
                shadow-[0_8px_35px_rgba(67,45,30,0.08)]
                backdrop-blur-xl
              `
              : `
                border-transparent
                bg-[#fffaf3]
              `
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[76px]
            max-w-7xl
            items-center
            justify-between
            px-4
            sm:px-6
            lg:h-[82px]
            lg:px-8
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="/"
            aria-label={`${company_name} Home`}
            className="
              group
              flex
              min-w-0
              items-center
              gap-3
            "
          >

            {/* LOGO IMAGE */}

            <div
              className="
                relative
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full

                bg-[#f4e5d1]

                ring-1
                ring-[#a65332]/10

                transition-transform
                duration-300

                group-hover:scale-[1.04]
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-1
                  rounded-full
                  bg-[#d99b61]/10
                  blur-md
                "
              />

              <img
                src={Logo}
                alt={company_name}
                className="
                  relative
                  z-13
                  h-12
                  w-12
                  rounded-full
                "
              />
            </div>


            {/* BRAND */}

            <div className="min-w-0">

              <span
                className="
                  block
                  max-w-[190px]
                  truncate
                  font-serif
                  text-[17px]
                  font-semibold
                  leading-tight
                  tracking-[-0.01em]
                  text-[#38281f]

                  sm:max-w-[260px]
                  sm:text-[19px]
                "
              >
                {company_name}
              </span>

              <div
                className="
                  mt-1
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    h-px
                    w-4
                    bg-[#a65332]
                  "
                />

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#9b6842]
                  "
                >
                  Guruji
                </span>
              </div>

            </div>

          </a>


          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <nav
            aria-label="Primary"
            className="hidden md:block"
          >
            <ul
              className="
                flex
                items-center
                gap-1
                lg:gap-2
              "
            >

              {NAV_ITEMS.map((item) => (

                <li
                  key={item.label}
                  className="group relative"
                  onMouseEnter={() => {
                    if (item.children) {
                      setOpenSubmenu(item.label);
                    }
                  }}
                  onMouseLeave={() => {
                    setOpenSubmenu(null);
                  }}
                >

                  <a
                    href={item.href}
                    className="
                      relative
                      flex
                      items-center
                      gap-1.5
                      rounded-full

                      px-4
                      py-2.5

                      text-[13px]
                      font-semibold
                      tracking-[0.02em]
                      text-[#594334]

                      transition-all
                      duration-300

                      hover:bg-[#f3e6d5]
                      hover:text-[#a65332]
                    "
                  >
                    {item.label}

                    {item.children && (
                      <ChevronDown
                        size={13}
                        strokeWidth={1.8}
                        className="
                          transition-transform
                          duration-300
                          group-hover:rotate-180
                        "
                      />
                    )}

                  </a>


                  {/* SMALL ACTIVE STYLE LINE */}

                  <span
                    className="
                      absolute
                      bottom-[3px]
                      left-1/2

                      h-[2px]
                      w-4

                      -translate-x-1/2
                      scale-x-0

                      rounded-full
                      bg-[#a65332]

                      transition-transform
                      duration-300

                      group-hover:scale-x-100
                    "
                  />


                  {/* =========================================
                      DROPDOWN
                  ========================================= */}

                  {item.children && (

                    <div
                      className={`
                        absolute
                        left-1/2
                        top-full

                        w-[230px]

                        -translate-x-1/2
                        pt-4

                        transition-all
                        duration-300

                        ${
                          openSubmenu === item.label
                            ? `
                              visible
                              translate-y-0
                              opacity-100
                            `
                            : `
                              invisible
                              -translate-y-2
                              opacity-0
                            `
                        }
                      `}
                    >
                      <ul
                        className="
                          overflow-hidden
                          rounded-[18px]

                          border
                          border-[#75503a]/10

                          bg-[#fffdf9]/95
                          p-2

                          shadow-[0_18px_50px_rgba(57,38,25,0.13)]

                          backdrop-blur-xl
                        "
                      >

                        {item.children.map(
                          (child) => (
                            <li key={child.label}>

                              <a
                                href={child.href}
                                className="
                                  block
                                  rounded-xl
                                  px-4
                                  py-3

                                  text-[13px]
                                  font-medium
                                  text-[#594334]

                                  transition-colors

                                  hover:bg-[#f3e5d3]
                                  hover:text-[#a65332]
                                "
                              >
                                {child.label}
                              </a>

                            </li>
                          )
                        )}

                      </ul>
                    </div>

                  )}

                </li>
              ))}

            </ul>
          </nav>


          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <a
            href="/contact"
            className="
              group
              hidden
              items-center
              gap-3

              rounded-full

              bg-[#493126]

              py-2
              pl-5
              pr-2

              text-[11px]
              font-bold
              uppercase
              tracking-[0.1em]
              text-white

              shadow-[0_8px_24px_rgba(73,49,38,0.16)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#9a5d3c]
              hover:shadow-[0_12px_30px_rgba(73,49,38,0.20)]

              md:flex
            "
          >
            Book a Reading

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full

                bg-[#fffaf3]
                text-[#493126]

                transition-transform
                duration-300

                group-hover:rotate-45
              "
            >
              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
              />
            </span>

          </a>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label={
              isMobileMenuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={isMobileMenuOpen}
            onClick={() =>
              setIsMobileMenuOpen(
                (open) => !open
              )
            }
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center

              rounded-full

              border
              border-[#74503a]/10

              bg-[#f3e6d5]
              text-[#493126]

              transition-all

              active:scale-95

              md:hidden
            "
          >
            {isMobileMenuOpen ? (
              <X
                size={20}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                size={21}
                strokeWidth={1.8}
              />
            )}
          </button>

        </div>
      </div>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`
          absolute
          inset-x-0
          top-full

          overflow-hidden

          border-b
          border-[#74503a]/10

          bg-[#fffaf3]/98

          shadow-[0_20px_40px_rgba(60,40,25,0.12)]

          backdrop-blur-xl

          transition-all
          duration-500
          ease-[cubic-bezier(.16,1,.3,1)]

          md:hidden

          ${
            isMobileMenuOpen
              ? `
                visible
                max-h-[calc(100vh-100px)]
                translate-y-0
                opacity-100
              `
              : `
                invisible
                max-h-0
                -translate-y-3
                opacity-0
              `
          }
        `}
      >

        <nav
          aria-label="Mobile primary"
          className="
            mx-auto
            max-w-7xl
            px-5
            pb-7
            pt-4
          "
        >

          <ul className="flex flex-col">

            {NAV_ITEMS.map((item, index) => (

              <li
                key={item.label}
                className="
                  border-b
                  border-[#76513a]/10
                  last:border-none
                "
              >

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <a
                    href={item.href}
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className="
                      flex
                      flex-1
                      items-center
                      gap-4
                      py-4

                      font-serif
                      text-[19px]
                      font-medium
                      text-[#493126]
                    "
                  >
                    <span
                      className="
                        w-5
                        font-sans
                        text-[9px]
                        font-semibold
                        text-[#a65332]/60
                      "
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    {item.label}

                  </a>


                  {item.children && (

                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() =>
                        setOpenSubmenu(
                          (current) =>
                            current === item.label
                              ? null
                              : item.label
                        )
                      }
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-full

                        text-[#76513a]
                      "
                    >
                      <ChevronDown
                        size={16}
                        className={`
                          transition-transform
                          duration-300

                          ${
                            openSubmenu === item.label
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </button>

                  )}

                </div>


                {/* MOBILE SUB MENU */}

                {item.children && (

                  <div
                    className={`
                      overflow-hidden

                      transition-all
                      duration-300

                      ${
                        openSubmenu === item.label
                          ? "max-h-60 pb-3"
                          : "max-h-0"
                      }
                    `}
                  >

                    <div
                      className="
                        ml-9
                        rounded-[16px]
                        bg-[#f2e4d2]/70
                        p-2
                      "
                    >

                      {item.children.map(
                        (child) => (

                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() =>
                              setIsMobileMenuOpen(
                                false
                              )
                            }
                            className="
                              block
                              rounded-xl
                              px-4
                              py-2.5

                              text-[13px]
                              font-medium
                              text-[#674b38]

                              transition-colors

                              hover:bg-white/70
                              hover:text-[#a65332]
                            "
                          >
                            {child.label}
                          </a>

                        )
                      )}

                    </div>
                  </div>

                )}

              </li>
            ))}

          </ul>


          {/* MOBILE CTA */}

          <a
            href="/contact"
            onClick={() =>
              setIsMobileMenuOpen(false)
            }
            className="
              group
              mt-6

              flex
              w-full
              items-center
              justify-between

              rounded-full

              bg-[#493126]

              py-2
              pl-6
              pr-2

              text-[11px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-white

              shadow-[0_10px_30px_rgba(73,49,38,0.18)]
            "
          >
            Book a Reading

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                bg-[#fffaf3]
                text-[#493126]
              "
            >
              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
              />
            </span>

          </a>


          {/* SMALL FOOTER */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-between
              border-t
              border-[#76513a]/10
              pt-5
            "
          >

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#806650]/50
              "
            >
              Traditional Vedic Guidance
            </span>


            <div className="flex gap-1">

              {SOCIAL_LINKS.map(
                ({ label, href, Icon }) => (

                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center

                      rounded-full

                      bg-[#f2e4d2]
                      text-[#805738]
                    "
                  >
                    <Icon
                      size={13}
                      strokeWidth={1.8}
                    />
                  </a>

                )
              )}

            </div>

          </div>

        </nav>
      </div>

    </header>
  );
}