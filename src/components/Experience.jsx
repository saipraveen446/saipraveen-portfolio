import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';

const MotionDiv = motion.div;
const MotionSection = motion.section;

const PREVIEW_COUNT = 4;

const experiences = [
  {
    id: 1,
    role: 'Senior Software Engineer',
    company: 'Ezfinanz',
    duration: 'Aug 2024 – Present',
    worktype: 'Full Time',
    location: 'Hyderabad, India',
    description:
      'Leading engineering for a modern debt collection platform — automating loan recovery, multi-channel campaigns, legal notice workflows, and field operations to cut manual work and improve recovery outcomes.',
    responsibilities: [
      'Architected and led end-to-end development of a loan debt recovery web application and internal automation tools using Frappe and Python, reducing manual effort by 70% and improving operational accuracy in an Agile environment.',
      'Implemented automated multi-channel campaigns (Click2Call, OBD, WhatsApp Cloud API, SMS, Email), achieving an 89% recovery rate and improving team productivity.',
      'Developed a bulk allocation and deallocation system (manual, Excel-based, and rule-based) handling over 40,000+ records.',
      'Engineered bulk generation and delivery of 2,000+ demand and legal notices via Email, WhatsApp, SMS, and Post, reducing dispatch time from days to 30 minutes and eliminating manual effort.',
      'Established bulk loan data synchronization via webhooks and cron jobs with external databases, ensuring real-time payment accuracy.',
      'Built a GPS-based Field Executive Tracking System using Google Maps APIs and OpenStreetMap to systematize visit planning and tracking, expense calculation, and audit workflows, replacing manual reporting.',
      'Designed settlement waivers, discount workflows, and promotional campaigns to boost loan settlements and reduce outstanding debt.',
      'Configured CI/CD pipelines using GitHub Actions, reducing deployment time by 50% across AWS EC2 and on-premise servers.',
      'Mentored 3 junior developers through code reviews and knowledge-sharing, enabling independent feature delivery within two months.',
      'Integrated Metabase, SOGO Mail, Frappe Helpdesk to streamline analytics, email delivery, and internal operations.',
      'Managed production infrastructure ensuring high availability, optimal performance, and zero-downtime deployments.',
      'Reduced operational costs by implementing Read Replicas and cutting manual workflows, decreasing team size by 28%.',
      'Configured Prometheus and Grafana for infrastructure monitoring, tracking server performance, resource utilization, and system health.',
      'Created comprehensive technical documentation to support future development, streamline knowledge sharing, reduce manual effort, and improve engineering efficiency.',
      'Reviewed existing products through demos to identify enhancement opportunities and implemented new features.'
    ],
    technologies: [ 'Frappe','Python','JavaScript','React', 'AWS', 'PostgreSQL','GitHub Actions', 'WhatsApp Cloud API', 'Prometheus', 'API Integration', 'Metabase', ],
  },
  {
    id: 2,
    role: 'Software Engineer',
    company: 'Ezfinanz',
    duration: 'May 2023 – Jul 2024',
    worktype: 'Full Time',
    location: 'Hyderabad, India',
    description:
      'Built stock broking onboarding, REKYC, and account closure flows — KYC APIs and third-party integrations that streamlined demat account lifecycle management.',
    responsibilities: [
      'Developed APIs for Stockbroking KYC onboarding and designed & built Demat Account Closure and REKYC applications (POA/DDPI, MTF, Nominee, KYC) using Laravel, and MySQL, building scalable RESTful APIs that streamlined account management workflows for stockbroking services.',
      'Integrated JWT authentication and third-party services KRA, Digio (Digilocker PAN, Bank Validation, IPV, eSign), UPI eMandate, SMS gateways, and Fincorp APIs for streamlined KYC processes.',
      'Optimized responsive web applications with efficient APIs, enabling faster data exchange and seamless third-party integrations that accelerated KYC processing across account onboarding workflows.',
      'Represented the company at ANMI 2024 (Mumbai), demonstrating products, interacting with prospective clients, and contributing to business networking and partnership opportunities.',
      'Drove technical screening and interviews for 50+ candidates, selecting 6 engineers and reducing team ramp-up time through structured evaluation and knowledge-sharing sessions.'
    ],
    technologies: [ 'Laravel', 'MySQL', 'JWT', 'REST APIs', 'Digio', 'KRA', 'UPI eMandate', 'Rest APIs'],
  },
  {
    id: 3,
    role: 'Software Developer Intern',
    company: 'Ezfinanz',
    duration: 'Oct 2022 – Apr 2023',
    worktype: 'Internship',
    location: 'Hyderabad, India',
    description:
      'Supported stock broking KYC onboarding — automated PDF document packs, admin status APIs, and basic site/server operations.',
    responsibilities: [
      'Automated KYC onboarding PDF generation using wkhtmltopdf, replacing manual 40-page booklet filling, printing, and individual FTP uploads with an end-to-end submission pipeline, eliminating hours of daily manual effort.',
      'Built admin dashboard APIs exposing KYC lifecycle status and account onboarding metrics, empowering team executives with real-time visibility to track and act on pending updates.',
      'Maintained company websites and server infrastructure including domain/DNS operations, Google Workspace (GSuite) access control, CloudPanel maintenance, and server provisioning.',
    ],
    technologies: ['Laravel', 'MySQL', 'REST APIs', 'wkhtmltopdf', 'CloudPanel', 'DNS', 'Server Management'],
  },
  {
    id: 4,
    role: 'Campus Leader',
    company: 'Techlearn',
    duration: 'Dec 2022',
    worktype: 'Internship',
    location: 'Remote',
    description:
      'Campus sales and marketing — partnerships and outreach to grow course enrollments.',
    responsibilities: [
      'Led campus marketing initiatives, increasing course enrollments through partnerships and targeted outreach.',
    ],
    technologies: ['Campus Marketing', 'Partnerships', 'Outreach'],
  },
  {
    id: 5,
    role: 'Community Influencer',
    company: 'Unschool',
    duration: 'Jun 2021 – Jul 2021',
    worktype: 'Internship',
    location: 'Remote',
    description:
      'Digital marketing internship — social campaigns and lead gen for online course growth.',
    responsibilities: [
      'Promoted online courses through social media and lead generation, enhancing customer engagement with tailored communication.',
    ],
    technologies: ['Social Media Marketing', 'Lead Generation', 'Customer Engagement'],
  },
];

const ExperienceCard = ({ exp, index, inView, isLast }) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = exp.responsibilities.length > PREVIEW_COUNT;
  const visible = expanded ? exp.responsibilities : exp.responsibilities.slice(0, PREVIEW_COUNT);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`relative grid gap-4 md:grid-cols-[6.5rem_1fr] md:gap-8 ${isLast ? '' : 'pb-10 md:pb-14'}`}
    >
      {/* Desktop company rail */}
      <div className="relative hidden md:block self-stretch">
        <div className="sticky top-24 pl-4">
          <p className="text-sm font-semibold leading-snug text-sky-200/90">{exp.company}</p>
        </div>
        <div
          className={`absolute left-[0.35rem] top-8 w-px bg-gradient-to-b from-cyan-500/45 via-sky-500/25 to-transparent ${
            isLast ? 'bottom-4' : 'bottom-0'
          }`}
          aria-hidden
        />
        <div
          className="absolute left-0 top-1.5 z-[1] h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.45)] ring-4 ring-[#0d111c]"
          aria-hidden
        />
      </div>

      {/* Card */}
      <article className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md transition duration-300 hover:border-cyan-500/25 hover:bg-white/[0.05] sm:p-6 md:p-7">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl transition group-hover:bg-cyan-400/12"
          aria-hidden
        />

        <header className="relative">
          <div className="flex items-start justify-between gap-2 sm:gap-4">
            <h3 className="min-w-0 text-base font-semibold leading-snug tracking-tight text-white sm:text-xl md:text-[1.35rem]">
              {exp.role}
            </h3>
            <span className="shrink-0 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-medium text-cyan-300 sm:px-3 sm:py-1 sm:text-xs">
              {exp.duration}
            </span>
          </div>

          <div className="mt-2 flex items-center justify-between gap-2 sm:mt-3 sm:flex-wrap sm:justify-start sm:gap-2">
            <p className="inline-flex min-w-0 shrink items-center gap-1.5 text-sm font-medium text-sky-200/90 md:hidden">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/20">
                <FaBriefcase className="text-[10px]" aria-hidden />
              </span>
              <span className="truncate">{exp.company}</span>
            </p>
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-300 sm:px-2.5 sm:py-1 sm:text-[11px]">
                {exp.worktype}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 sm:gap-1.5 sm:text-sm">
                <FaMapMarkerAlt className="shrink-0 text-cyan-500/60" aria-hidden />
                <span className="whitespace-nowrap">{exp.location}</span>
              </span>
            </div>
          </div>

          <p className="mt-2.5 text-sm leading-relaxed text-slate-400 max-md:text-left max-md:text-pretty sm:mt-3 sm:text-base sm:leading-relaxed md:text-left">
            {exp.description}
          </p>
        </header>

        <div className="relative mt-5 border-t border-white/10 pt-5">
          <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-400/85">
            Highlights
          </p>

          <ul className="w-full space-y-3">
            <AnimatePresence initial={false}>
              {visible.map((item, idx) => (
                <motion.li
                  key={`${exp.id}-${idx}`}
                  initial={expanded && idx >= PREVIEW_COUNT ? { opacity: 0, height: 0 } : false}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex w-full gap-2.5 text-sm leading-relaxed text-slate-300 sm:gap-3 sm:text-[0.9375rem] sm:leading-relaxed"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500"
                    aria-hidden
                  />
                  <span className="min-w-0 flex-1 max-md:text-left max-md:text-pretty md:text-left">
                    {item}
                  </span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {hasMore && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-sky-300 transition hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-200"
            >
              {expanded ? 'Show less' : 'Show more'}
              <FaChevronDown
                className={`text-[10px] transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                aria-hidden
              />
            </button>
          )}
        </div>

        <div className="relative mt-5 flex flex-wrap items-center justify-start gap-1.5 border-t border-white/10 pt-4 sm:gap-2 md:justify-start">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-[10px] font-medium leading-none text-slate-300 transition hover:border-cyan-500/30 hover:text-cyan-200 sm:text-[11px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    </MotionDiv>
  );
};

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  return (
    <MotionSection
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="relative isolate overflow-x-clip scroll-mt-20 bg-gradient-to-b from-[#101522] via-[#0d111c] to-[#0b0f18] py-12 text-white md:scroll-mt-24 md:py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-sky-600/8 blur-[100px]"
        aria-hidden
      />

      <div className="container relative z-[1] mx-auto max-w-5xl px-4 sm:px-6">
        <MotionDiv
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:mb-14"
        >
          <span className="mb-2 inline-flex items-center justify-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-sky-400/90 md:text-[11px]">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-cyan-400/70" aria-hidden />
            Career
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-cyan-400/70" aria-hidden />
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
            Loans &amp; debt collection, stock broking KYC, and fintech product delivery.
          </p>
          <div
            className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
            aria-hidden
          />
        </MotionDiv>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={index}
              inView={inView}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default Experience;
