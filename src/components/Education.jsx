import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const MotionDiv = motion.div;
const MotionSection = motion.section;

const education = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science',
    institution: 'Rajiv Gandhi University of Knowledge and Technologies',
    year: '2018 – 2022',
    location: 'Nuzvid, Andhra Pradesh',
    score: '8.05',
  },
  {
    id: 2,
    degree: 'Pre-University Course',
    institution: 'Rajiv Gandhi University of Knowledge and Technologies',
    year: '2016 – 2018',
    location: 'Nuzvid, Andhra Pradesh',
    score: '7.68',
  },
  {
    id: 3,
    degree: 'SSC',
    institution: 'Zilla Parishad High School',
    year: '2016',
    location: 'K.E. Chinnayyapalem, Andhra Pradesh',
    score: '9.8',
  },
];

const EducationCard = ({ edu, index, inView, compact = false }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 22 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -4 }}
    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md transition duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-cyan-950/20 ${
      compact ? 'p-5' : 'p-5 sm:p-6'
    }`}
  >
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sky-500/10 blur-2xl transition group-hover:bg-cyan-400/15"
      aria-hidden
    />

    <div className="relative flex items-start justify-between gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 ring-1 ring-cyan-400/25">
        <FaGraduationCap className="text-lg text-cyan-300" aria-hidden />
      </div>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
        <span className="font-medium uppercase tracking-wide text-cyan-400/80">CGPA</span>
        <span className="tabular-nums text-white">{edu.score}</span>
      </span>
    </div>

    <h3 className="relative mt-4 text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
      {edu.degree}
    </h3>
    <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{edu.institution}</p>

    <div className="relative mt-auto space-y-2 border-t border-white/10 pt-4">
      <p className="flex items-start gap-2 text-xs text-slate-500">
        <FaMapMarkerAlt className="mt-0.5 shrink-0 text-cyan-500/70" aria-hidden />
        <span>{edu.location}</span>
      </p>
      <p className="flex items-center gap-2 text-xs font-medium text-sky-300/90">
        <FaCalendarAlt className="shrink-0 text-cyan-500/70" aria-hidden />
        <span>{edu.year}</span>
      </p>
    </div>
  </MotionDiv>
);

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MotionSection
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="relative isolate overflow-x-clip scroll-mt-20 bg-gradient-to-b from-[#0b0f18] via-[#0d111c] to-[#101522] py-12 text-white md:scroll-mt-24 md:py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-56 w-[min(90%,40rem)] -translate-x-1/2 rounded-full bg-sky-600/10 blur-[90px]"
        aria-hidden
      />

      <div className="container relative z-[1] mx-auto max-w-6xl px-4 sm:px-6">
        <MotionDiv
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:mb-14"
        >
          <span className="mb-2 inline-flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-sky-400/90 md:text-[11px]">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-cyan-400/70" aria-hidden />
            Academic path
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-cyan-400/70" aria-hidden />

          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Education{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <div
            className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
            aria-hidden
          />
        </MotionDiv>

        {/* Desktop timeline */}
        <div className="hidden md:block">
          <div className="relative mx-auto max-w-5xl">
            <div
              className="absolute left-[8%] right-[8%] top-7 h-px bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent"
              aria-hidden
            />

            <div className="relative z-10 mb-10 grid grid-cols-3 gap-6 lg:gap-8">
              {education.map((edu) => (
                <div key={`step-${edu.id}`} className="flex flex-col items-center">
                  <MotionDiv
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 ring-4 ring-[#0d111c]"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <FaGraduationCap className="text-xl text-white" aria-hidden />
                  </MotionDiv>
                  <span className="mt-3 font-mono text-[11px] font-medium tracking-wide text-cyan-400/90">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-5 lg:gap-7">
              {education.map((edu, index) => (
                <EducationCard key={edu.id} edu={edu} index={index} inView={inView} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden">
          <div className="mx-auto max-w-lg space-y-8">
            {education.map((edu, index) => (
              <div key={`mobile-${edu.id}`} className="flex gap-3.5">
                <div className="flex w-11 shrink-0 flex-col items-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/25">
                    <FaGraduationCap className="text-base text-white" aria-hidden />
                  </div>
                  {index < education.length - 1 ? (
                    <div
                      className="mt-2 w-px flex-1 min-h-[2rem] bg-gradient-to-b from-cyan-500/45 to-blue-500/20"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <div className="min-w-0 flex-1">
                  <EducationCard edu={edu} index={index} inView={inView} compact />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default Education;
