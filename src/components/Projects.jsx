import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const MotionDiv = motion.div;

const projects = [
  {
    id: 1,
    title: 'DevTools Suite',
    description:
      'React + FastAPI developer toolkit with Password Generator, Base64 Tools, Unicode Converter, Cron Generator, Chmod Generator, JSON Tools, ASCII Converter, Color Generator, and Case Converter.',
    githubLink: 'https://github.com/saipraveen446/Devtools',
    skills: ['React', 'Vite', 'FastAPI', 'Python'],
    image: '/assets/project_ss/devtools_suite_ss.png',
  },
  {
    id: 2,
    title: 'Financial Calculators',
    description:
      'React SPA with EMI, FD, GST, HRA, interest, NPS, PPF, ROI, and SIP calculators — instant results for budgets, taxes, and investments.',
    githubLink: 'https://github.com/saipraveen446/financial-calculators',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    image: '/assets/project_ss/financial_calculators_ss.png',
  },
  {
    id: 3,
    title: 'Incubation Center',
    description:
      "Native Android app for RGUKT's E-Cell: post startup ideas, browse events and mentors, and collaborate with Firebase Auth and Realtime Database.",
    githubLink: 'https://github.com/saipraveen446/Incubation-Center-Mobile-Application',
    skills: ['Java', 'Android', 'Firebase', 'Material Design'],
    image: '/assets/project_ss/incubation_center_ss.png',
  },
  {
    id: 4,
    title: 'Smart ToDo Manager',
    description:
      'Task manager with prioritization, due dates, and reminders to stay organized and productive.',
    githubLink: 'https://github.com/saipraveen446/Smart-ToDo-Manage',
    skills: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    image: '/assets/project_ss/smart_todo_manager_ss.png',
  },
  {
    id: 5,
    title: 'OTP Password Generator',
    description:
      'Secure OTP and password generator for strong random passwords and time-based one-time passwords.',
    githubLink: 'https://github.com/saipraveen446/OTP-Password-Generator',
    skills: ['Laravel', 'JavaScript', 'HTML5', 'CSS'],
    image: '/assets/project_ss/otp_password_generator_ss.png',
  },
  {
    id: 6,
    title: 'Personal Portfolio',
    description:
      'Responsive portfolio built with React, Vite, Tailwind CSS, and Framer Motion — animated sections, project showcase, and a Web3Forms contact flow.',
    githubLink: 'https://github.com/saipraveen446/saipraveen-portfolio',
    skills: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    image: '/assets/project_ss/saipraveen-portfolio_ss.png',
  },
];

const Projects = () => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!preview) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setPreview(null);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [preview]);

  return (
    <>
      <MotionDiv
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        className="mx-auto w-full max-w-5xl"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {projects.map((project) => (
            <MotionDiv
              key={project.id}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-700/60 bg-gray-800/40 shadow-sm transition-shadow duration-200 hover:border-cyan-500/25 hover:shadow-lg hover:shadow-cyan-950/20"
            >
              <button
                type="button"
                onClick={() => setPreview({ src: project.image, title: project.title })}
                className="relative block h-40 w-full shrink-0 cursor-zoom-in overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 text-left sm:h-44 md:h-48"
                aria-label={`View ${project.title} screenshot`}
              >
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover object-top opacity-95 transition-opacity hover:opacity-100"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/400x240/1e293b/94a3b8?text=${encodeURIComponent(project.title)}`;
                  }}
                />
              </button>
              <div className="flex flex-1 flex-col p-4 sm:p-3">
                <h4 className="text-sm font-semibold leading-snug text-white">{project.title}</h4>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-gray-400">
                  {project.description}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1">
                  {project.skills.slice(0, 4).map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-md border border-gray-600/50 bg-gray-900/50 px-2 py-0.5 text-[10px] font-medium text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex gap-2 border-t border-gray-700/50 pt-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[2.75rem] flex-1 items-center justify-center gap-2 rounded-lg bg-gray-700/80 px-3 py-2.5 text-sm font-medium text-gray-100 transition hover:bg-gray-600"
                  >
                    <FaGithub className="text-base" /> Code
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[2.75rem] flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-2.5 text-sm font-medium text-white transition hover:opacity-95"
                    >
                      <FaExternalLinkAlt className="text-sm" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>

      <AnimatePresence>
        {preview && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setPreview(null)}
            role="dialog"
            aria-modal="true"
            aria-label={preview.title}
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              className="absolute right-4 top-4 z-[81] flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-gray-900/80 text-white transition hover:bg-gray-800"
              aria-label="Close image preview"
            >
              <FaTimes />
            </button>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] max-w-[min(96vw,1100px)] overflow-hidden rounded-xl border border-white/10 bg-gray-950 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={preview.src}
                alt={preview.title}
                className="max-h-[90vh] w-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/960x540/1e293b/94a3b8?text=${encodeURIComponent(preview.title)}`;
                }}
              />
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
