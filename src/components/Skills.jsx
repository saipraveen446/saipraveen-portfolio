import React from 'react';
import {
  FaPython,
  FaJs,
  FaPhp,
  FaBootstrap,
  FaLaravel,
  FaReact,
  FaGithub,
  FaDocker,
  FaAws,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
} from 'react-icons/fa';
import {
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiFirebase,
  SiFrappe,
  SiFastapi,
  SiVite,
  SiTailwindcss,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiMetabase,
  SiAndroid,
  SiFramer,
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <FaPython className="text-cyan-400" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'PHP', icon: <FaPhp className="text-indigo-400" /> },
    { name: 'Frappe', icon: <SiFrappe className="text-emerald-400" /> },
    { name: 'Laravel', icon: <FaLaravel className="text-red-400" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-teal-400" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Vite', icon: <SiVite className="text-violet-400" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
    { name: 'WordPress', icon: <FaWordpress className="text-blue-400" /> },
    { name: 'Framer Motion', icon: <SiFramer className="text-pink-400" /> },
    { name: 'Android', icon: <SiAndroid className="text-green-400" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-sky-500" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
    { name: 'AWS', icon: <FaAws className="text-yellow-500" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-200" /> },
    { name: 'GitHub Actions', icon: <SiGithubactions className="text-sky-300" /> },
    { name: 'Prometheus', icon: <SiPrometheus className="text-orange-400" /> },
    { name: 'Grafana', icon: <SiGrafana className="text-orange-500" /> },
    { name: 'Metabase', icon: <SiMetabase className="text-blue-300" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
    { name: 'VS Code', icon: <FaCode className="text-blue-400" /> },
  ];

  return (
    <section id="skills" className="overflow-x-clip bg-gradient-to-b from-gray-900 to-gray-800 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center md:mb-12">
          <span className="mb-2 inline-flex items-center justify-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-sky-400/90 md:text-[11px]">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-cyan-400/70" aria-hidden />
            Stack
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-cyan-400/70" aria-hidden />
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies &{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Tools
            </span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-left text-sm leading-relaxed text-slate-400 md:text-center md:text-base">
            Throughout my journey, I&apos;ve worked with a diverse set of technologies and frameworks. These are the tools I rely on to build scalable systems, create seamless and exceptional digital experiences, and solve complex real-world problems.
          </p>
          <div
            className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
            aria-hidden
          />
        </div>

        <div className="w-full">
          <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex min-w-0 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/50 px-2 py-1.5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-gray-700/50 hover:shadow-cyan-500/10 sm:w-auto sm:justify-center sm:px-4 sm:py-2"
              >
                <span className="mr-1 shrink-0 text-base sm:mr-2 sm:text-xl">{skill.icon}</span>
                <span className="truncate text-xs font-medium text-gray-200 sm:text-sm md:text-base">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
