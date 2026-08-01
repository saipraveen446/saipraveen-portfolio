import { motion } from 'framer-motion';
import { FaArrowRight, FaFileDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiDevdotto } from 'react-icons/si';
import { LINKS, mailto } from '../../config/links';

const MotionDiv = motion.div;
const MotionSpan = motion.span;
const MotionP = motion.p;
const MotionA = motion.a;

const FULL_NAME = 'Sai Praveen Sanapalli';
const CHAR_DELAY = 0.055;
const NAME_START = 0.4;
const NAME_DONE = NAME_START + FULL_NAME.length * CHAR_DELAY + 0.15;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
});

const SOCIALS = [
  { href: LINKS.linkedin, icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: LINKS.github, icon: <FaGithub />, label: 'GitHub' },
  { href: LINKS.blog, icon: <SiDevdotto />, label: 'DEV Community' },
  { href: mailto, icon: <FaEnvelope />, label: 'Email' },
];

const PortfolioScreen = () => (
  <div className="ws-screen-inner ws-portfolio-screen">
    <div className="ws-screen-bg" aria-hidden>
      <div className="ws-screen-mesh" />
      <div className="ws-screen-grid" />
      <MotionDiv
        className="ws-screen-orb ws-screen-orb-a"
        animate={{ x: [0, 12, 0], y: [0, -8, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <MotionDiv
        className="ws-screen-orb ws-screen-orb-b"
        animate={{ x: [0, -10, 0], y: [0, 10, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
    </div>

    <div className="ws-screen-toolbar">
      <span className="ws-dot ws-dot-red" />
      <span className="ws-dot ws-dot-yellow" />
      <span className="ws-dot ws-dot-green" />
      <span className="ws-screen-title">portfolio — home</span>
    </div>

    <div className="ws-portfolio-body">
     

      <MotionDiv
        className="ws-status-pill"
        variants={fadeUp(0.28)}
        initial="hidden"
        animate="visible"
      >
        <span className="ws-status-dot" />
        Open to roles &amp; collaborations
      </MotionDiv>

      <h1 className="ws-portfolio-name">
        <span className="ws-portfolio-name-text" aria-label={FULL_NAME}>
          {FULL_NAME.split('').map((char, i) => (
            <MotionSpan
              key={`${char}-${i}`}
              className="ws-name-char"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: NAME_START + i * CHAR_DELAY,
                duration: 0.12,
                ease: 'easeOut',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </MotionSpan>
          ))}
          <MotionSpan
            className="ws-name-cursor"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              delay: NAME_START,
              duration: NAME_DONE - NAME_START + 0.6,
              times: [0, 0.05, 0.92, 1],
              ease: 'linear',
            }}
            aria-hidden
          />
        </span>
      </h1>

      <MotionP
        className="ws-portfolio-tagline"
        variants={fadeUp(NAME_DONE + 0.05)}
        initial="hidden"
        animate="visible"
      >
        Senior Software Engineer
      </MotionP>

      <MotionP
        className="ws-portfolio-bio"
        variants={fadeUp(NAME_DONE + 0.15)}
        initial="hidden"
        animate="visible"
      >
        <span className="ws-bio-line">
          Building scalable software that solves real business problems.
        </span>
        <span className="ws-bio-line">
          Delivering reliable systems for business growth and operational excellence.
        </span>
      </MotionP>

      <MotionDiv
        className="ws-portfolio-actions"
        variants={fadeUp(NAME_DONE + 0.28)}
        initial="hidden"
        animate="visible"
      >
        <MotionA
          href="#contact"
          className="ws-btn ws-btn-primary"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
        >
          Get in touch
        </MotionA>
        <MotionA
          href="#portfolio"
          className="ws-btn ws-btn-ghost"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
        >
          View projects
          <FaArrowRight className="text-xs" />
        </MotionA>
        <MotionA
          href={LINKS.resumeDownload}
          download="SAIPRAVEEN_SANAPALLI_Sr_SWE_RESUME.pdf"
          className="ws-btn ws-btn-ghost"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaFileDownload className="text-xs" />
          Resume
        </MotionA>
      </MotionDiv>

      <MotionDiv
        className="ws-portfolio-socials"
        variants={fadeUp(NAME_DONE + 0.4)}
        initial="hidden"
        animate="visible"
      >
        {SOCIALS.map((s, i) => (
          <MotionA
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={s.label}
            className="ws-portfolio-social-link"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: NAME_DONE + 0.5 + i * 0.07 }}
          >
            {s.icon}
          </MotionA>
        ))}
      </MotionDiv>
    </div>

    <div className="ws-screen-scanline" aria-hidden />
  </div>
);

export default PortfolioScreen;
