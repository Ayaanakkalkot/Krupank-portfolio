import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const experiences = [
  {
    role: 'VISUAL CONTENT CREATOR',
    company: 'THE PURPLE PONY',
    duration: 'Jun 2023 - Jun 2025',
    icon: (
      <span className="bg-purple-500/80 p-3 rounded-full shadow-lg">
        {/* Camera Icon (Heroicons) */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5V6.75A2.25 2.25 0 015.25 4.5h1.086a2.25 2.25 0 002.12-1.553l.155-.464A1.5 1.5 0 0110.03 2.25h3.94a1.5 1.5 0 011.419 1.233l.155.464A2.25 2.25 0 0017.664 4.5h1.086A2.25 2.25 0 0121 6.75v.75" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5v9.75A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25V7.5m18 0H3m18 0l-1.5 9.75M3 7.5l1.5 9.75" />
          <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </span>
    ),
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
    icon: (
      <span className="bg-blue-500/80 p-3 rounded-full shadow-lg">
        {/* Video Icon (Heroicons) */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-5.25 3.75L21 15" />
        </svg>
      </span>
    ),
    bullets: [
      "Edit and create videos for the company's website, social media platforms, and client presentations",
      'Work with the marketing team to develop creative concepts and execute them into high-quality videos'
    ]
  },
  {
    role: 'VIDEO EDITOR INTERN',
    company: 'EDUKUL',
    duration: 'May 2022 - Jul 2022',
    icon: (
      <span className="bg-pink-500/80 p-3 rounded-full shadow-lg">
        {/* Education/Play Icon (Heroicons) */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a2.25 2.25 0 01-3.18 0l-6.36-6.36a2.25 2.25 0 013.18-3.18l6.36 6.36a2.25 2.25 0 010 3.18z" />
        </svg>
      </span>
    ),
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

const ExperienceCard = ({ role, company, duration, bullets, icon, idx }: any) => (
  <motion.div
    className="relative group flex flex-col sm:flex-col md:flex-row items-center md:items-stretch bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12 transition-all duration-300 hover:shadow-2xl hover:scale-[1.025] focus-within:scale-[1.025] outline-none"
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
    {/* Floating Icon */}
    <div className="mr-0 md:mr-6 mb-4 md:mb-0 flex-shrink-0 z-20">
      {icon}
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
    className="relative py-4 px-2 sm:px-4 md:px-8 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
  >
    {/* Timeline vertical line */}
    <div className="absolute left-2 sm:left-4 top-24 bottom-8 w-1 bg-gradient-to-b from-purple-400/40 via-white/10 to-blue-400/30 rounded-full z-0 hidden sm:block" />
    {/* Section Title */}
    <motion.h2 className="section-title mb-8 sm:mb-12 md:mb-16 relative text-white text-2xl sm:text-3xl md:text-4xl">
      Experience
      <motion.span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 blur-xl -z-10" animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
    </motion.h2>
    {/* Cards Stack */}
    <div className="relative z-10 flex flex-col gap-8 sm:gap-12 md:gap-16">
      {experiences.map((exp, idx) => (
        <ExperienceCard key={idx} {...exp} idx={idx} />
      ))}
    </div>
    {/* Soft glowing radial background */}
    <motion.div
      className="pointer-events-none absolute -z-10 left-1/2 top-1/2 w-[120vw] h-[80vw] max-w-[1600px] max-h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-70"
      style={{
        background: 'radial-gradient(ellipse at 60% 40%, rgba(139,92,246,0.25) 0%, rgba(59,130,246,0.12) 40%, rgba(42,27,77,0.7) 100%)',
      }}
      animate={{ opacity: [0.6, 0.8, 0.6], scale: [1, 1.05, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
  </motion.section>
);

export default Experience; 