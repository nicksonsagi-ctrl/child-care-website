import React, { useState, useEffect } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import {
  Heart,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FloatingClouds } from './SafeImage';

interface NavRoute {
  label: string;
  path: string;
}

const PRIMARY_NAV: NavRoute[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Programs', path: '/programs' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Gallery', path: '/gallery' },
];

const MORE_NAV: NavRoute[] = [
  { label: 'Our Team', path: '/team' },
  { label: 'Events', path: '/events' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact Us', path: '/contact' },
];

const ALL_NAV: NavRoute[] = [...PRIMARY_NAV, ...MORE_NAV];

export const MainLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const location = useLocation();

  // Scroll to top and close menus on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [location.pathname]);

  const isMoreRouteActive = MORE_NAV.some((item) => item.path === location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#27364B]">
      {/* Sticky Header - Strict 1-row, 3-zone contract on desktop, <=15% viewport height on mobile */}
      <header className="sticky top-0 z-50 bg-[#FFFDF7]/95 backdrop-blur-md border-b border-[#27364B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Title, single line */}
          <Link
            to="/"
            className="font-display text-lg sm:text-xl font-semibold tracking-tight text-[#27364B] whitespace-nowrap shrink-0 hover:opacity-85 transition-opacity"
          >
            Little Hearts Children&apos;s Care Home
          </Link>

          {/* Zone 2: Desktop Navigation Links (single-line text with subtle hover/active underlines) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#27364B]/75"
          >
            {PRIMARY_NAV.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `py-1 whitespace-nowrap shrink-0 transition-colors border-b-2 ${
                    isActive
                      ? 'text-[#27364B] font-semibold border-[#27364B]'
                      : 'border-transparent hover:text-[#27364B] hover:border-[#27364B]/30'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Explore More Dropdown for Team, Events, Testimonials, FAQ, Contact Us */}
            <div
              className="relative"
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMoreDropdownOpen((prev) => !prev)}
                aria-expanded={moreDropdownOpen}
                className={`inline-flex items-center gap-1 py-1 whitespace-nowrap shrink-0 transition-colors border-b-2 cursor-pointer ${
                  isMoreRouteActive
                    ? 'text-[#27364B] font-semibold border-[#27364B]'
                    : 'border-transparent hover:text-[#27364B] hover:border-[#27364B]/30'
                }`}
              >
                <span>Community &amp; Info</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    moreDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {moreDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full pt-2 w-52 z-50"
                  >
                    <div className="bg-[#FFFDF7] rounded-2xl border border-[#27364B]/12 shadow-lg p-2 flex flex-col gap-0.5">
                      {MORE_NAV.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `px-3.5 py-2.5 rounded-xl text-sm whitespace-nowrap shrink-0 transition-colors ${
                              isActive
                                ? 'bg-[#D8F1FF] text-[#27364B] font-semibold'
                                : 'text-[#27364B]/80 hover:bg-[#FFF0B3]/50 hover:text-[#27364B]'
                            }`
                          }
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/enroll"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#FFFDF7] bg-[#27364B] rounded-xl hover:bg-[#27364B]/90 transition-transform active:scale-98 whitespace-nowrap shrink-0 shadow-xs"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[#27364B]/15 text-[#27364B] hover:bg-[#D8F1FF]/50 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-[#FFFDF7] border-b border-[#27364B]/15 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-2">
                  {ALL_NAV.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.path === '/'}
                      className={({ isActive }) =>
                        `px-3.5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap shrink-0 transition-colors ${
                          isActive
                            ? 'bg-[#D8F1FF] text-[#27364B] font-semibold'
                            : 'text-[#27364B]/80 hover:bg-[#FFF0B3]/40'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#27364B]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#27364B]/75">
                  <div className="flex items-center gap-4">
                    <a
                      href="tel:+15552348910"
                      className="inline-flex items-center gap-1.5 font-medium hover:text-[#27364B]"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span className="font-mono-num">(555) 234-8910</span>
                    </a>
                    <span aria-hidden="true">·</span>
                    <span>Mon–Fri 7:30 AM – 6:00 PM</span>
                  </div>
                  <Link
                    to="/enroll"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#27364B] text-[#FFFDF7] font-semibold text-xs whitespace-nowrap"
                  >
                    <span>Start Enrollment Application</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Secondary Quick-Navigation & Contact Ribbon (Non-sticky, scrolls naturally so all 11 pages + contact info are 1-click visible) */}
      <div className="bg-[#D8F1FF]/45 border-b border-[#27364B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#27364B]/85">
          {/* Direct Links for All 11 Pages */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <span className="font-semibold text-[#27364B] mr-1 whitespace-nowrap shrink-0">
              All Pages:
            </span>
            {ALL_NAV.map((item, idx) => (
              <React.Fragment key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-2 py-0.5 rounded-md whitespace-nowrap shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#27364B] text-[#FFFDF7] font-semibold'
                        : 'hover:bg-white/80 text-[#27364B]/80 hover:text-[#27364B]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
                {idx < ALL_NAV.length - 1 && (
                  <span className="text-[#27364B]/30 select-none" aria-hidden="true">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Header Contact Information */}
          <div className="hidden xl:flex items-center gap-4 text-xs text-[#27364B]/80 shrink-0">
            <a
              href="tel:+15552348910"
              className="inline-flex items-center gap-1.5 hover:text-[#27364B] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#27364B]" />
              <span className="font-mono-num">(555) 234-8910</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="mailto:hello@littleheartscare.org"
              className="inline-flex items-center gap-1.5 hover:text-[#27364B] transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[#27364B]" />
              <span>hello@littleheartscare.org</span>
            </a>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-[#27364B]" />
              <span>Mon–Fri: 7:30 AM – 6:00 PM</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Page View with Smooth Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Professional Footer with Decorative Pastel Background */}
      <footer className="relative bg-[#27364B] text-[#FFFDF7] pt-16 pb-12 overflow-hidden mt-20">
        {/* Decorative top border strip using the 5 pastel colors */}
        <div className="absolute top-0 left-0 right-0 h-2 grid grid-cols-5">
          <div className="bg-[#D8F1FF]" />
          <div className="bg-[#FFDCE5]" />
          <div className="bg-[#FFF0B3]" />
          <div className="bg-[#D8F4E5]" />
          <div className="bg-[#E8DDFB]" />
        </div>

        <FloatingClouds className="w-64 text-white/5 absolute -top-6 right-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
            {/* Column 1: Brand & Mission */}
            <div className="lg:col-span-4 space-y-4">
              <Link to="/" className="inline-flex items-center gap-2.5 group">
                <span className="w-9 h-9 rounded-xl bg-[#FFDCE5] text-[#27364B] flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5 fill-[#27364B]" />
                </span>
                <span className="font-display text-xl font-semibold tracking-tight text-[#FFFDF7]">
                  Little Hearts Children&apos;s Care Home
                </span>
              </Link>
              <p className="text-sm text-[#FFFDF7]/80 leading-relaxed max-w-sm">
                Where Little Hearts Grow Big Dreams. A nurturing, Montessori- and Reggio-inspired
                early childhood home for ages 6 months to 7 years.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Little Hearts on Instagram"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FFDCE5] hover:text-[#27364B] flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Little Hearts on Facebook"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#D8F1FF] hover:text-[#27364B] flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Little Hearts on YouTube"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FFF0B3] hover:text-[#27364B] flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Navigation Links (Part 1) */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-sm font-semibold text-[#FFF0B3] tracking-wide">
                Explore Home
              </h3>
              <ul className="space-y-2.5 text-sm text-[#FFFDF7]/80">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="hover:text-white transition-colors">
                    Our Programs
                  </Link>
                </li>
                <li>
                  <Link to="/facilities" className="hover:text-white transition-colors">
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-white transition-colors">
                    Photo Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Community & Family Links (Part 2) */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-sm font-semibold text-[#D8F4E5] tracking-wide">
                Family Resources
              </h3>
              <ul className="space-y-2.5 text-sm text-[#FFFDF7]/80">
                <li>
                  <Link to="/team" className="hover:text-white transition-colors">
                    Meet Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="hover:text-white transition-colors">
                    Upcoming Events &amp; Open Houses
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="hover:text-white transition-colors">
                    Parent Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-white transition-colors">
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact &amp; Tour Scheduling
                  </Link>
                </li>
                <li>
                  <Link to="/enroll" className="hover:text-white font-semibold text-[#FFDCE5] transition-colors">
                    Online Enrollment Application →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Hours */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-sm font-semibold text-[#D8F1FF] tracking-wide">
                Visit Our Sanctuary
              </h3>
              <ul className="space-y-3 text-sm text-[#FFFDF7]/80">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FFDCE5] shrink-0 mt-1" />
                  <span>420 Willow Creek Lane, Meadowbrook Gardens, CA 94301 (Sample Address)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#D8F1FF] shrink-0" />
                  <span className="font-mono-num">(555) 234-8910</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#FFF0B3] shrink-0" />
                  <span>hello@littleheartscare.org</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#D8F4E5] shrink-0 mt-0.5" />
                  <span>Mon – Fri: 7:30 AM – 6:00 PM · Sat Tours by Appointment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Licensing */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFFDF7]/65">
            <p>
              &copy; {new Date().getFullYear()} Little Hearts Children&apos;s Care Home. All rights
              reserved. State Licensed Early Childhood Sanctuary #LH-94021.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/faq" className="hover:text-white transition-colors">
                Safety &amp; Wellness Policy
              </Link>
              <span aria-hidden="true">·</span>
              <Link to="/enroll" className="hover:text-white transition-colors">
                Family Privacy Notice
              </Link>
              <span aria-hidden="true">·</span>
              <Link to="/contact" className="hover:text-white transition-colors">
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
