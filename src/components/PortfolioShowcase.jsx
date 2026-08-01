import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Projects from './Projects';
import Certificates from './Certificates';

const MotionDiv = motion.div;

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'projects':
        return <Projects />;
      case 'certificates':
        return <Certificates />;
      default:
        return <Projects />;
    }
  };

  return (
    <section id="portfolio" className="w-full overflow-x-clip bg-gradient-to-b from-gray-900 to-gray-800 py-10 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="w-full"
        >
          <div className="mb-8 text-center md:mb-12">
            <span className="mb-2 inline-flex items-center justify-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-sky-400/90 md:text-[11px]">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-cyan-400/70" aria-hidden />
              Showcase
              <span className="h-px w-6 bg-gradient-to-l from-transparent to-cyan-400/70" aria-hidden />
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Portfolio{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Showcase
              </span>
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
              Select projects and certifications.
            </p>
            <div
              className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
              aria-hidden
            />
          </div>

          <div className="mb-7 flex justify-center md:mb-12">
            <div
              className="mx-auto flex w-full max-w-md min-h-[2.75rem] items-center gap-2 rounded-full border border-gray-700/80 bg-gray-800/60 p-1 shadow-inner backdrop-blur-sm sm:max-w-lg sm:gap-2.5 md:min-h-[2.9rem] md:max-w-xl md:gap-3 md:p-1.5"
              role="tablist"
              aria-label="Portfolio sections"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`min-h-[2.4rem] flex-1 rounded-full px-4 py-2 text-center text-xs font-semibold transition-all duration-200 sm:px-6 sm:py-2.5 sm:text-sm md:min-h-[2.55rem] md:px-7 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-900/25'
                      : 'text-gray-400 hover:bg-gray-700/50 hover:text-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <MotionDiv
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="mt-2 w-full md:mt-4"
            >
              {renderTabContent()}
            </MotionDiv>
          </AnimatePresence>
        </MotionDiv>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
