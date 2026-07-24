import { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { company_name } from "./secrete";

/**
 * Site header for a Vedic astrology practice.
 *
 * Structure:
 *  - Top utility bar: social links (deep indigo)
 *  - Main nav: logo + primary navigation (cream), becomes sticky + gains
 *    a shadow once the page is scrolled, and collapses into a slide-down
 *    mobile menu below a breakpoint.
 *
 * Palette: deep indigo (#1a1330 / #241c3d) + warm gold (#d4a24e / #e8bc6e)
 * + cream (#fdf6ec), replacing the earlier maroon/red theme.
 */

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
];


const Logo = "public/logo.png"



/**
 * Tracks scroll direction and returns whether the header should be
 * visible. Rules:
 *  - Always visible near the top of the page (< `topOffset`px).
 *  - Hides while actively scrolling down past that point.
 *  - Reappears immediately on any upward scroll.
 *  - Ignores tiny jitters below `threshold`px so it doesn't flicker.
 */
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
        setIsVisible(delta < 0); // delta < 0 means scrolling up
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

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, topOffset]);

  return isVisible;
}

// function BrandMark({ className = "h-11 w-11" }: { className?: string }) {
//   // Simple flame-in-a-drop mark, drawn as SVG so it scales cleanly
//   // and can be recolored with `currentColor` / fill props instead of
//   // shipping a raster logo.
//   return (
//     <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
//       <path
//         d="M32 4C20 20 12 30 12 40a20 20 0 0 0 40 0c0-10-8-20-20-36z"
//         fill="#fdf6ec"
//         stroke="#241c3d"
//         strokeWidth="2"
//       />
//       <path
//         d="M32 16c-6 9-10 15-10 21a10 10 0 0 0 20 0c0-6-4-12-10-21z"
//         fill="#d4a24e"
//       />
//       <circle cx="32" cy="38" r="5" fill="#241c3d" />
//     </svg>
//   );
// }

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const isHeaderVisible = useHeaderVisibility();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Never hide the header while the mobile menu is open — otherwise a
  // downward scroll on a long open menu would yank it off-screen.
  const showHeader = isHeaderVisible || isMobileMenuOpen;

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 font-sans transition-transform duration-300 ease-in-out will-change-transform ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Utility bar */}
      <div className="bg-[#1a1330] text-[#e8bc6e]">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-4 py-2 sm:px-6">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e8bc6e]/80 transition-colors hover:text-[#f4d999]"
            >
              <Icon size={16} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`bg-[#fdf6ec] transition-shadow duration-300 ${
          isScrolled ? "shadow-[0_2px_12px_rgba(26,19,48,0.1)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4  sm:px-6">
          {/* Logo */}
          <a href="/" className="flex items-center ">
            <img src={Logo} alt="" className="w-10 pr-3" />
            <span className="leading-tight">
              <span className="block font-serif text-lg font-semibold tracking-wide text-[#241c3d]">
                {company_name}
              </span>
              <span className="block text-[11px] font-medium tracking-[0.2em] text-[#b3894a]">
                GURUJI
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="group relative"
                  onMouseEnter={() =>
                    item.children && setOpenSubmenu(item.label)
                  }
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 py-2 text-[15px] font-medium tracking-wide text-[#332957] transition-colors hover:text-[#b3894a]"
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className="mt-px transition-transform group-hover:rotate-180"
                      />
                    )}
                  </a>
                  {/* animated underline */}
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-[#d4a24e] transition-transform duration-200 group-hover:scale-x-100" />

                  {item.children && (
                    <div
                      className={`absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3 transition-all duration-150 ${
                        openSubmenu === item.label
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0"
                      }`}
                    >
                      <ul className="overflow-hidden rounded-lg border border-[#e8dcc8] bg-white shadow-lg">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-[#332957] transition-colors hover:bg-[#fdf1e2] hover:text-[#b3894a]"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <a
            href="/contact"
            className="hidden rounded-full bg-[#241c3d] px-5 py-2.5 text-sm font-semibold text-[#fdf6ec] transition-colors hover:bg-[#1a1330] md:inline-block"
          >
            Book a reading
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="rounded-md p-2 text-[#332957] md:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-[#fdf6ec] transition-[max-height] duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <nav
          aria-label="Mobile primary"
          className="border-t border-[#e8dcc8] px-4 py-3"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="border-b border-[#e8dcc8] last:border-none"
              >
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    className="flex-1 py-3 text-[15px] font-medium text-[#332957]"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() =>
                        setOpenSubmenu((current) =>
                          current === item.label ? null : item.label,
                        )
                      }
                      className="p-3 text-[#241c3d]"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && (
                  <ul
                    className={`overflow-hidden pl-3 transition-[max-height] duration-200 ${
                      openSubmenu === item.label ? "max-h-60 pb-2" : "max-h-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block py-2 text-sm text-[#241c3d]/90"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a
            href="/contact"
            className="mt-3 block rounded-full bg-[#241c3d] py-2.5 text-center text-sm font-semibold text-[#fdf6ec]"
          >
            Book a reading
          </a>
        </nav>
      </div>
    </header>
  );
}