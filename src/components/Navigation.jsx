import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { LINKS } from '../config/links';

const MotionHeader = motion.header;
const MotionDiv = motion.div;
const MotionButton = motion.button;

const SCROLL_OFFSET = -80;

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Resume', href: LINKS.resumeView, external: true },
    { name: 'Contact', to: 'contact' },
    { name: 'Blog', href: LINKS.blog, external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, closeMenu]);

  const linkClass =
    'nav-link group relative cursor-pointer rounded-md px-2.5 py-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 lg:px-3 lg:text-sm';

  return (
    <MotionHeader
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-gray-800/60 bg-gray-950/90 py-2 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'border-b border-transparent bg-gradient-to-b from-gray-950/90 via-gray-950/40 to-transparent py-4 backdrop-blur-sm'
      }`}
    >
      <div className="container relative z-[60] mx-auto px-4">
        <nav className="flex h-14 items-center justify-between md:h-16">
          <MotionDiv whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="home"
              className="group inline-block cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              smooth
              duration={500}
              offset={SCROLL_OFFSET}
              onClick={closeMenu}
            >
              <span className="text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text md:text-2xl">
                Sai Praveen
              </span>
              <span className="mt-0.5 block h-0.5 max-w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </MotionDiv>

          <div className="hidden items-center gap-0.5 md:flex lg:gap-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-1`}
                >
                  {link.name}
                  <FaExternalLinkAlt className="text-[8px] opacity-50" aria-hidden />
                  <span className="nav-underline pointer-events-none absolute bottom-1 left-2.5 right-2.5 h-0.5 origin-center scale-x-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform duration-300 group-hover:scale-x-100 lg:left-3 lg:right-3" />
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={SCROLL_OFFSET}
                  spy
                  spyThrottle={80}
                  activeClass="nav-link-active"
                  className={linkClass}
                >
                  {link.name}
                  <span className="nav-underline pointer-events-none absolute bottom-1 left-2.5 right-2.5 h-0.5 origin-center scale-x-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform duration-300 group-hover:scale-x-100 lg:left-3 lg:right-3" />
                </Link>
              )
            )}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((o) => !o)}
              className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-panel"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <MotionButton
              key="nav-backdrop"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-14 z-[55] bg-black/65 backdrop-blur-sm md:hidden"
              aria-label="Close menu"
              onClick={closeMenu}
            />
            <MotionDiv
              key="nav-panel"
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              className="pointer-events-auto fixed left-4 right-4 top-[4.5rem] z-[58] max-h-[min(70vh,calc(100dvh-6rem))] overflow-y-auto rounded-2xl border border-gray-700/80 bg-gray-950/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col py-1">
                {navLinks.map((link, i) => (
                  <MotionDiv
                    key={link.name}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold uppercase tracking-wide text-gray-300 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400/60"
                        onClick={closeMenu}
                      >
                        {link.name}
                        <FaExternalLinkAlt className="text-xs opacity-50" aria-hidden />
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        smooth
                        duration={500}
                        offset={SCROLL_OFFSET}
                        spy
                        spyThrottle={50}
                        activeClass="mobile-nav-active"
                        className="mobile-nav-link relative block cursor-pointer px-4 py-3.5 text-sm font-semibold uppercase tracking-wide text-gray-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400/60"
                        onClick={closeMenu}
                      >
                        <span className="relative inline-block pb-1">
                          {link.name}
                          <span
                            className="mobile-nav-underline pointer-events-none absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                            aria-hidden
                          />
                        </span>
                      </Link>
                    )}
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link.nav-link-active {
          color: rgb(255 255 255);
        }
        .nav-link.nav-link-active .nav-underline {
          transform: scaleX(1);
        }
        .mobile-nav-link .mobile-nav-underline {
          opacity: 0;
          transform: scaleX(0);
          transform-origin: center;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .mobile-nav-link:hover {
          color: #fff;
        }
        .mobile-nav-link:hover .mobile-nav-underline,
        .mobile-nav-link.mobile-nav-active .mobile-nav-underline {
          opacity: 1 !important;
          transform: scaleX(1) !important;
        }
        .mobile-nav-link.mobile-nav-active {
          color: #fff !important;
        }
      `}</style>
    </MotionHeader>
  );
};

export default Navigation;
