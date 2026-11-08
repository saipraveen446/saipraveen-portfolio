import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBuilding, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';

const MotionDiv = motion.div;
const MotionSection = motion.section;

const PREVIEW_COUNT = 4;

const companies = [
  {
    id: 'ezfinanz',
    company: 'Ezfinanz',
    location: 'Hyderabad, India',
    duration: 'Oct 2022 – Present',
    roles: [
      {
        id: 'ezf-senior',
        role: 'Senior Software Engineer',
        duration: 'Jan 2025 – Present',
        worktype: 'Full Time',
        description:
          'Leading delivery across manufacturing execution, loan recovery, and internal platform work — digitizing shop-floor operations, automating debt collection, and standing up HRMS and helpdesk systems.',
        projects: [
          {
            client: 'MTAR Technologies',
            name: 'Manufacturing Execution System (MES)',
            points: [
              'Building an MES on the ERPNext Manufacturing module to digitize shop-floor operations.',
              'Integrating Dynamics 365 Business Central with ERPNext via REST APIs for production data sync.',
              'Building end-to-end job tracking across Released Production Orders (RPOs), routings, machines and operators assignment, and production activity monitoring.',
              'Implementing CNC machine connectivity for real-time data capture and live machine monitoring.',
            ],
          },
          {
            client: 'Ezfinanz',
            name: 'Loan Collection & Recovery Management',
            points: [
              'Architected and led end-to-end development of a debt recovery platform and internal automation tools on Frappe and Python, cutting manual effort by 70%.',
              'Built automated multi-channel collection campaigns (Click2Call, OBD, WhatsApp Cloud API, SMS, Email), contributing to an 89% recovery rate.',
              'Built a bulk allocation and deallocation engine (manual, Excel, rule-based) for 40,000+ loan records.',
              'Automated generation and delivery of 2,000+ demand and legal notices via Email, WhatsApp, SMS, and Post, cutting dispatch time from days to 30 minutes.',
              'Established bulk loan data synchronization via webhooks and cron jobs with external databases, ensuring real-time payment accuracy.',
              'Built a GPS-based field executive tracking system (Google Maps API, OpenStreetMap) for visit planning, expense calculation, and audits, replacing manual reporting.',
              'Designed settlement waiver, discount, and promotional campaign workflows to reduce outstanding debt.',
              'Cut operating costs with database read replicas and automation, sustaining output with 28% fewer staff.',
              'Configured CI/CD pipelines using GitHub Actions, reducing deployment time by 50% across AWS EC2 and on-premise servers.',
              'Integrated Metabase, SOGo Mail, Frappe Helpdesk; managed DLT SMS, WhatsApp, and call vendors.',
              'Mentored 3 junior developers via code reviews and knowledge sharing to deliver solo in 2 months.',
              'Configured Prometheus and Grafana for infrastructure monitoring, tracking server performance, resource utilization, and system health.',
              'Created comprehensive technical documentation to support future development, streamline knowledge sharing, reduce manual effort, and improve engineering efficiency.',
              'Reviewed existing products through demos to identify enhancement opportunities and implemented new features.'
            ],
          },
          {
            client: 'Nettlinx Limited',
            name: 'HRMS, Helpdesk, and Internal Tools',
            points: [
              'Set up Frappe and HRMS on the server, configuring departments, designations, and biometric integration, and automated employee ID card and email account creation via APIs.',
              'Set up Frappe Helpdesk for support ticketing and Frappe Raven for internal team messaging.',
              'Contributed to Internet Leased Line (ILL) workflows for connection requests and configuration details.',
              'Led the Nettlinx website project, defining its structure, content, and features, and reviewing code.',
            ],
          },
        ],
        technologies: [
          'Frappe',
          'ERPNext',
          'Python',
          'JavaScript',
          'React',
          'Dynamics 365',
          'AWS',
          'PostgreSQL',
          'GitHub Actions',
          'WhatsApp Cloud API',
          'Prometheus',
          'Metabase',
        ],
      },
      {
        id: 'ezf-se',
        role: 'Software Engineer',
        duration: 'May 2023 – Dec 2024',
        worktype: 'Full Time',
        description:
          'Built stock-broking onboarding, Re-KYC, and demat account closure platforms — KYC APIs and third-party integrations that streamlined the demat account lifecycle.',
        projects: [
          {
            client: 'Northeast Broking Services Ltd.',
            name: 'Demat Closure and Re-KYC Platforms',
            points: [
              'Delivered Demat Closure and Re-KYC platforms (POA/DDPI, MTF, Nominee, KYC) using Laravel, MySQL, and RESTful APIs, streamlining account management for stock-broking clients.',
              'Automated end-to-end KYC verification by integrating KRA, Digio (DigiLocker PAN verification, bank validation, IPV, eSign), SMS gateways, and Fincorp APIs, sharply reducing manual agent work.',
              'Interviewed 50+ candidates, hired 6 engineers, and ran knowledge-sharing sessions for faster ramp-up.',
              'Represented the company at ANMI 2024 (Mumbai), demonstrating products, interacting with prospective clients, and contributing to business networking and partnership opportunities.',
              'Optimized APIs and web apps for faster third-party data exchange, accelerating KYC onboarding.',

            ],
          },
        ],
        technologies: ['Laravel', 'MySQL', 'JWT', 'REST APIs', 'Digio', 'KRA'],
      },
      {
        id: 'ezf-intern',
        role: 'Software Engineer Intern',
        duration: 'Oct 2022 – Apr 2023',
        worktype: 'Internship',
        description:
          'Supported stock-broking KYC onboarding — automated document packs, admin status APIs, and site and server operations.',
        projects: [
          {
            points: [
              'Automated KYC onboarding PDF generation using wkhtmltopdf, replacing manual 40-page booklet filling, printing, and individual FTP uploads with an end-to-end submission pipeline, eliminating hours of daily manual effort.',
              'Built admin dashboard APIs exposing KYC lifecycle status and account onboarding metrics, giving team executives real-time visibility to track and act on pending updates.',
              'Maintained company websites and servers, covering domain/DNS, Google Workspace access, CloudPanel, and server provisioning.',
            ],
          },
        ],
        technologies: ['Laravel', 'MySQL', 'REST APIs', 'wkhtmltopdf', 'CloudPanel', 'DNS', 'Server Management'],
      },
    ],
  },
  {
    id: 'techlearn',
    company: 'Techlearn',
    location: 'Remote',
    duration: 'Dec 2022',
    roles: [
      {
        id: 'tl-campus-leader',
        role: 'Campus Leader',
        duration: 'Dec 2022',
        worktype: 'Internship',
        description: 'Campus sales and marketing — partnerships and outreach to grow course enrollments.',
        projects: [
          {
            points: [
              'Led campus marketing initiatives, increasing course enrollments through partnerships and targeted outreach.',
            ],
          },
        ],
        technologies: ['Campus Marketing', 'Partnerships', 'Outreach'],
      },
    ],
  },
  {
    id: 'unschool',
    company: 'Unschool',
    location: 'Remote',
    duration: 'Jun 2021 – Jul 2021',
    roles: [
      {
        id: 'us-influencer',
        role: 'Community Influencer',
        duration: 'Jun 2021 – Jul 2021',
        worktype: 'Internship',
        description: 'Digital marketing internship — social campaigns and lead gen for online course growth.',
        projects: [
          {
            points: [
              'Promoted online courses through social media and lead generation, enhancing customer engagement with tailored communication.',
            ],
          },
        ],
        technologies: ['Social Media Marketing', 'Lead Generation', 'Customer Engagement'],
      },
    ],
  },
];

const RoleCard = ({ role }) => {
  const [expanded, setExpanded] = useState(false);

  const totalPoints = role.projects.reduce((sum, p) => sum + p.points.length, 0);
  const hasMore = totalPoints > PREVIEW_COUNT;

  let budget = expanded ? Infinity : PREVIEW_COUNT;
  const visibleProjects = [];
  role.projects.forEach((project) => {
    if (budget <= 0) return;
    visibleProjects.push({ ...project, points: project.points.slice(0, budget) });
    budget -= project.points.length;
  });

  return (
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
          <h4 className="min-w-0 text-base font-semibold leading-snug tracking-tight text-white sm:text-lg md:text-xl">
            {role.role}
          </h4>
          <span className="shrink-0 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-medium text-cyan-300 sm:px-3 sm:py-1 sm:text-xs">
            {role.duration}
          </span>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-300 sm:px-2.5 sm:py-1 sm:text-[11px]">
            {role.worktype}
          </span>
        </div>

        <p className="mt-2.5 text-sm leading-relaxed text-slate-400 max-md:text-pretty sm:mt-3 sm:text-base sm:leading-relaxed">
          {role.description}
        </p>
      </header>

      <div className="relative mt-5 space-y-5 border-t border-white/10 pt-5">
        <AnimatePresence initial={false}>
          {visibleProjects.map((project, pIdx) => (
            <motion.div
              key={`${role.id}-p${pIdx}`}
              initial={pIdx > 0 && expanded ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-2.5"
            >
              {project.client ? (
                <p className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="text-sm font-semibold tracking-tight text-sky-200 sm:text-[0.9375rem]">
                    {project.client}
                  </span>
                  {project.name && (
                    <>
                      <span className="text-slate-600" aria-hidden>
                        |
                      </span>
                      <span className="text-sm italic text-slate-400">{project.name}</span>
                    </>
                  )}
                </p>
              ) : (
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-400/85">
                  Highlights
                </p>
              )}

              <ul className="w-full space-y-2.5 md:pl-3">
                <AnimatePresence initial={false}>
                  {project.points.map((item, idx) => (
                    <motion.li
                      key={`${role.id}-p${pIdx}-${idx}`}
                      initial={expanded ? { opacity: 0, height: 0 } : false}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex w-full gap-2.5 text-sm leading-relaxed text-slate-300 sm:gap-3 sm:text-[0.9375rem] sm:leading-relaxed"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500"
                        aria-hidden
                      />
                      <span className="min-w-0 flex-1 text-pretty">{item}</span>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>

        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-sky-300 transition hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-200"
          >
            {expanded ? 'Show less' : 'Show more'}
            <FaChevronDown
              className={`text-[10px] transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              aria-hidden
            />
          </button>
        )}
      </div>

      <div className="relative mt-5 flex flex-wrap items-center gap-1.5 border-t border-white/10 pt-4 sm:gap-2">
        {role.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-[10px] font-medium leading-none text-slate-300 transition hover:border-cyan-500/30 hover:text-cyan-200 sm:text-[11px]"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

const CompanyGroup = ({ group, index, inView, isLast }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 24 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
    transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    className={`relative ${isLast ? '' : 'pb-10 md:pb-14'}`}
  >
    {/* Timeline rail */}
    <span
      className={`absolute left-[0.3rem] top-6 hidden w-px bg-gradient-to-b from-cyan-500/45 via-sky-500/25 to-transparent md:block ${
        isLast ? 'bottom-4' : 'bottom-0'
      }`}
      aria-hidden
    />

    {/* Company header */}
    <header className="relative md:pl-10">
      <span
        className="absolute left-0 top-2 z-[1] hidden h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.45)] ring-4 ring-[#0d111c] md:block"
        aria-hidden
      />
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/20">
            <FaBuilding className="text-[10px]" aria-hidden />
          </span>
          <h3 className="truncate text-lg font-bold tracking-tight text-white sm:text-xl">
            {group.company}
          </h3>
          <span className="inline-flex shrink-0 items-center gap-1 text-[11px] text-slate-400 sm:gap-1.5 sm:text-sm">
            <FaMapMarkerAlt className="shrink-0 text-cyan-500/60" aria-hidden />
            <span className="whitespace-nowrap">{group.location}</span>
          </span>
        </div>
        <span className="shrink-0 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-sky-300/80 sm:text-[11px]">
          {group.duration}
        </span>
      </div>
      <div
        className="mt-3 h-px w-full bg-gradient-to-r from-cyan-500/30 via-white/10 to-transparent"
        aria-hidden
      />
    </header>

    {/* Roles under the company */}
    <div className="mt-4 space-y-4 md:mt-5 md:space-y-5 md:pl-10">
      {group.roles.map((role) => (
        <RoleCard key={role.id} role={role} />
      ))}
    </div>
  </MotionDiv>
);

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
          {companies.map((group, index) => (
            <CompanyGroup
              key={group.id}
              group={group}
              index={index}
              inView={inView}
              isLast={index === companies.length - 1}
            />
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default Experience;
