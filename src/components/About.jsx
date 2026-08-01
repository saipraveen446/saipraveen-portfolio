import { motion } from 'framer-motion';
import { FaAward, FaBriefcase, FaEnvelope, FaFolderOpen, FaGithub, FaLinkedin, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { SiDevdotto } from 'react-icons/si';
import { LINKS, mailto } from '../config/links';

const MotionDiv = motion.div;
const MotionSection = motion.section;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const BIO_PARAS = [
  'Senior Software Engineer with 3+ years of experience building enterprise fintech products, specializing in debt collection platforms, loan recovery automation, multi-channel communication campaigns, legal workflows, field operations, and stock broking KYC, Re-KYC, and account lifecycle systems.',
  'I design and deliver applications, APIs, and automation solutions that streamline business operations, reduce manual effort, improve operational efficiency, and drive the organization digital transformation. I also manage production infrastructure, deployments, and third-party integrations to ensure reliable, high-performance systems.',
  'Beyond engineering, I lead initiatives from requirements to production, mentor developers, Contribute to architectural decisions, interview 50+ engineering candidates, and collaborate with cross-functional teams to deliver scalable solutions that drive organizational growth.',
];

/** Keep in sync with `Projects.jsx` / `Certificates.jsx` lists */
const HIGHLIGHT_STATS = [
  {
    label: 'Years experience',
    value: '3+',
    href: '#experience',
    icon: <FaBriefcase className="text-sm text-cyan-400/90" aria-hidden />,
  },
  {
    label: 'Projects Delivered',
    value: '10+',
    href: '#portfolio',
    icon: <FaFolderOpen className="text-sm text-sky-400/90" aria-hidden />,
  },
  {
    label: 'Certifications',
    value: '4',
    href: '#portfolio',
    icon: <FaAward className="text-sm text-indigo-300/90" aria-hidden />,
  },
  {
    label: 'Developers Mentored',
    value: '4+',
    href: '#experience',
    icon: <FaUsers className="text-sm text-emerald-300/90" aria-hidden />,
  },
];

const About = () => {
  return (
    <MotionSection
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="relative isolate overflow-x-clip scroll-mt-20 bg-gradient-to-b from-[#0d111c] via-[#0b0f18] to-[#101522] py-12 text-white md:scroll-mt-24 md:py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_18%,black,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-sky-600/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-1/4 h-64 w-64 rounded-full bg-indigo-600/8 blur-[90px]"
        aria-hidden
      />

      <div className="container relative z-[1] mx-auto max-w-5xl px-4 sm:px-6">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="text-center md:text-left"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="mb-2 inline-flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-sky-400/90 md:text-[11px]"
          >
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-cyan-400/70 md:w-8" aria-hidden />
            About
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-cyan-400/70" aria-hidden />
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.5rem] md:leading-tight"
          >
            About{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              me
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-2 max-w-2xl text-sm text-slate-400 md:mx-0 md:text-base"
          >
            Who I am, what I build, and how I deliver.
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mx-auto mt-3 h-px w-20 bg-gradient-to-r from-transparent via-cyan-500/45 to-transparent md:mx-0"
            aria-hidden
          />
        </MotionDiv>

        <div className="mt-5 grid gap-5 md:mt-7 lg:grid-cols-[minmax(0,280px)_1fr] lg:grid-rows-[auto_auto] lg:items-stretch lg:gap-x-8 lg:gap-y-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex w-full max-w-md self-stretch lg:col-start-1 lg:row-start-1 lg:mx-0"
          >
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md sm:px-5 sm:py-5">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
              <div className="mx-auto flex w-full max-w-[220px] flex-1 flex-col items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-70 blur-md" />
                  <div className="relative rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5">
                    <div className="relative h-36 w-36 overflow-hidden rounded-full bg-[#0b0f18] sm:h-36 sm:w-36 lg:h-32 lg:w-32">
                      <img
                        src="/assets/sai_profile.jpeg"
                        alt="Sai Praveen Sanapalli"
                        className="h-full w-full scale-[1.08] object-cover object-[center_20%]"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-center text-lg font-semibold text-white sm:text-lg">Sai Praveen Sanapalli</h3>
                <p className="mt-1 text-center text-sm font-medium text-sky-300/90">
                  Senior Software Engineer
                </p>
                <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500 sm:text-sm">
                  <FaMapMarkerAlt className="shrink-0 text-cyan-500/60" aria-hidden />
                  Hyderabad
                </p>
              </div>

              <div className="mt-auto flex justify-center gap-2 border-t border-white/10 pt-4">
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-sky-300 transition hover:border-sky-400/35 hover:bg-sky-500/10"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-white/20 hover:bg-white/10"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={LINKS.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-white/20 hover:bg-white/10"
                  aria-label="DEV Community"
                >
                  <SiDevdotto />
                </a>
                <a
                  href={mailto}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-sky-200 transition hover:border-sky-400/35 hover:bg-sky-500/10"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 self-stretch lg:col-start-2 lg:row-start-1"
          >
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-3.5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md sm:p-4 md:p-5">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-400/85">
                Summary
              </p>
              <div className="mt-2.5 space-y-2.5 text-sm leading-relaxed text-slate-300 max-md:text-left max-md:text-pretty sm:mt-3 sm:space-y-3 sm:text-base sm:leading-[1.65] md:text-left">
                {BIO_PARAS.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-4 border-t border-white/10 pt-3.5 sm:mt-5 sm:pt-4">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                  At a glance
                </p>
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-1.5 md:grid-cols-4 md:gap-2">
                  {HIGHLIGHT_STATS.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.06 * index, duration: 0.4 }}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex min-w-0 flex-col items-center rounded-lg border border-white/10 bg-black/25 px-2.5 py-2.5 text-center ring-1 ring-inset ring-white/[0.04] transition hover:border-cyan-500/25 hover:bg-black/35 hover:ring-cyan-500/10 sm:px-1 sm:py-3 md:px-1.5"
                    >
                      <span className="text-2xl font-bold tabular-nums leading-none tracking-tight text-white sm:text-[1.65rem]">
                        {item.value}
                      </span>
                      <span className="mt-1.5 flex w-full items-center justify-center gap-1.5 px-0.5 sm:mt-2 sm:gap-1.5">
                        <span className="flex shrink-0 items-center [&>svg]:block">{item.icon}</span>
                        <span className="min-w-0 font-mono text-[10px] font-semibold uppercase leading-tight tracking-[0.1em] text-slate-500 transition group-hover:text-slate-400 sm:text-[9px] sm:tracking-[0.08em]">
                          {item.label}
                        </span>
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </MotionDiv>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-950/25 ring-1 ring-white/12 transition hover:ring-white/20 max-md:w-full md:w-auto lg:col-start-2 lg:row-start-2 lg:justify-self-start"
          >
            Get in touch
            <span aria-hidden>→</span>
          </motion.a>
        </div>
      </div>
    </MotionSection>
  );
};

export default About;
