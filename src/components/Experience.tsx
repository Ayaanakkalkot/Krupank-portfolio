import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const experiences = [
  {
    role: 'VISUAL CONTENT CREATOR',
    company: 'THE PURPLE PONY',
    duration: 'Jun 2023 - Jun 2025',
    bullets: [
      'Captured high-quality photos and videos for products, campaigns, social media and promotional ads',
      'Shot products independently using both strobe and continuous lighting setups, creating professional, well-lit images for e-commerce, catalogs, and advertising campaigns.',
      'GRAPHICS - Designed banners, page layouts, and promotional graphics for websites and campaigns, working closely with the marketing team to brainstorm ideas and bring them to life.'
    ]
  },
  {
    role: 'VIDEO EDITOR INTERN',
    company: 'CONVIN',
    duration: 'Aug 2022 - May 2023',
    bullets: [
      "Edit and create videos for the company's website, social media platforms, and client presentations",
      'Work with the marketing team to develop creative concepts and execute them into high-quality videos'
    ]
  },
  {
    role: 'VIDEO EDITOR INTERN',
    company: 'EDUKUL',
    duration: 'May 2022 - Jul 2022',
    bullets: [
      'Edited and produced videos to enhance the learning experience for students',
      "Assisted in creating educational videos for the company's online learning platform"
    ]
  }
];

const timelineColors = [
  'from-purple-400 via-purple-600 to-blue-400',
  'from-blue-400 via-blue-600 to-purple-400',
  'from-pink-400 via-purple-400 to-blue-400',
];

const ExperienceCard = ({ role, company, duration, bullets, idx }: any) => (
  <motion.div
    className="relative group flex flex-col sm:flex-col md:flex-row items-center md:items-stretch bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.025] focus-within:scale-[1.025] outline-none"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, delay: idx * 0.18, type: 'spring', bounce: 0.2 }}
    tabIndex={0}
  >
    {/* Timeline Dot & Line */}
    <div className="absolute left-[-32px] sm:left-[-40px] md:left-[-44px] top-8 flex flex-col items-center z-10 md:static md:mr-8">
      <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br ${timelineColors[idx % timelineColors.length]} shadow-lg border-4 border-white/40 flex items-center justify-center`}></span>
      {idx < experiences.length - 1 && (
        <span className="w-1 h-16 sm:h-24 md:h-32 bg-gradient-to-b from-white/30 to-purple-400/30 rounded-full mt-1"></span>
      )}
    </div>
    {/* Card Content */}
    <div className="flex-1 z-10">
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
        <span className="text-base sm:text-lg md:text-xl font-bold text-white drop-shadow-glow group-hover:text-purple-300 transition duration-200">
          {role}
        </span>
        <span className="text-xs sm:text-sm text-purple-200 md:ml-4">{company}</span>
        <span className="text-xs text-purple-300 md:ml-auto">{duration}</span>
      </div>
      <ul className="list-disc list-inside text-xs sm:text-sm text-purple-100/90 pl-2 space-y-1">
        {bullets.map((b: string, i: number) => (
          <li key={i} className="transition duration-200 group-hover:text-white group-focus:text-white group-hover:drop-shadow-glow">{b}</li>
        ))}
      </ul>
    </div>
    {/* Glassmorphic Glow */}
    <motion.div
      className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-white/20 via-purple-400/10 to-blue-400/10 opacity-40 group-hover:opacity-60 blur-xl z-0"
      animate={{ opacity: [0.4, 0.6, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />
    {/* Glowing border on hover/focus */}
    <motion.div
      className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-purple-400/70 group-focus:border-purple-400/70 group-hover:shadow-[0_0_32px_8px_rgba(139,92,246,0.25)] group-focus:shadow-[0_0_32px_8px_rgba(139,92,246,0.25)] transition-all duration-500 blur-sm"
      animate={{}}
    />
  </motion.div>
);

const Experience = () => (
  <motion.section
    className="relative pt-0 pb-2 px-2 sm:px-4 md:px-8 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
  >
    {/* Timeline vertical line */}
    <div className="absolute left-2 sm:left-4 top-16 bottom-8 w-1 bg-gradient-to-b from-purple-400/40 via-white/10 to-blue-400/30 rounded-full z-0 hidden sm:block" />
    {/* Section Title */}
    <motion.h2 className="section-title mb-0 sm:mb-6 md:mb-8 relative text-white text-2xl sm:text-3xl md:text-4xl">
      Experience
      <motion.span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 blur-xl -z-10" animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
    </motion.h2>
    {/* Cards Stack */}
    <div className="relative z-10 flex flex-col gap-4 sm:gap-6 md:gap-8">
      {experiences.map((exp, idx) => (
        <ExperienceCard key={idx} {...exp} idx={idx} />
      ))}
    </div>
  </motion.section>
);

export default Experience; 