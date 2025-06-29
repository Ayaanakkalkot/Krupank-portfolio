import React from 'react';

const skills = [
  {
    label: 'Product & Portrait Photography',
    icon: (
      <span className="relative flex items-center justify-center">
        <span className="absolute w-10 h-10 bg-purple-400 opacity-40 blur-xl rounded-full animate-pulse" />
        <svg className="text-purple-500 z-10 transition-transform duration-300 group-hover:scale-110" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      </span>
    ),
  },
  {
    label: 'Video Shooting & Direction',
    icon: (
      <span className="relative flex items-center justify-center">
        <span className="absolute w-10 h-10 bg-pink-400 opacity-40 blur-xl rounded-full animate-pulse" />
        <svg className="text-pink-500 z-10 transition-transform duration-300 group-hover:scale-110" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="7" width="14" height="10" rx="2" fill="currentColor" />
          <polygon points="20,7 24,12 20,17" fill="currentColor" />
        </svg>
      </span>
    ),
  },
  {
    label: 'Graphic Design',
    icon: (
      <span className="relative flex items-center justify-center">
        <span className="absolute w-10 h-10 bg-blue-400 opacity-40 blur-xl rounded-full animate-pulse" />
        <svg className="text-blue-500 z-10 transition-transform duration-300 group-hover:scale-110" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <rect x="6" y="6" width="12" height="12" rx="3" fill="currentColor" />
        </svg>
      </span>
    ),
  },
  {
    label: 'Editing (PHOTO & VIDEO)',
    icon: (
      <span className="relative flex items-center justify-center">
        <span className="absolute w-10 h-10 bg-yellow-400 opacity-40 blur-xl rounded-full animate-pulse" />
        <svg className="text-yellow-500 z-10 transition-transform duration-300 group-hover:scale-110" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="17" width="16" height="2" rx="1" />
          <rect x="8" y="5" width="8" height="10" rx="2" />
        </svg>
      </span>
    ),
  },
  {
    label: 'Branding & Identity Design',
    icon: (
      <span className="relative flex items-center justify-center">
        <span className="absolute w-10 h-10 bg-green-400 opacity-40 blur-xl rounded-full animate-pulse" />
        <svg className="text-green-500 z-10 transition-transform duration-300 group-hover:scale-110" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="14" cy="12" r="6" fill="currentColor" />
          <text x="14" y="16" textAnchor="middle" fontSize="10" fill="#fff">B</text>
        </svg>
      </span>
    ),
  },
  {
    label: 'Creative Brainstorming & Ideation',
    icon: (
      <span className="relative flex items-center justify-center">
        <span className="absolute w-10 h-10 bg-fuchsia-400 opacity-40 blur-xl rounded-full animate-pulse" />
        <svg className="text-fuchsia-500 z-10 transition-transform duration-300 group-hover:scale-110" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </span>
    ),
  },
  {
    label: 'Attention to Detail & Quality',
    icon: (
      <span className="relative flex items-center justify-center">
        <span className="absolute w-10 h-10 bg-cyan-400 opacity-40 blur-xl rounded-full animate-pulse" />
        <svg className="text-cyan-500 z-10 transition-transform duration-300 group-hover:scale-110" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </span>
    ),
  },
  {
    label: 'Motion Graphics & Basic VFX',
    icon: (
      <span className="relative flex items-center justify-center">
        <span className="absolute w-10 h-10 bg-orange-400 opacity-40 blur-xl rounded-full animate-pulse" />
        <svg className="text-orange-500 z-10 transition-transform duration-300 group-hover:scale-110" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </span>
    ),
  },
];

const Skills = () => (
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 my-6 shadow-2xl max-w-4xl mx-auto border border-white/20">
    <h2 className="text-3xl font-bold text-white mb-6 text-center tracking-wide relative">
      Skills
      <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -z-10 w-60 h-16 bg-gradient-to-r from-purple-400/30 via-fuchsia-400/20 to-blue-400/30 blur-2xl rounded-full" />
    </h2>
    <ul className="space-y-4">
      {skills.map((skill, idx) => (
        <li
          key={idx}
          className="group flex items-center gap-3 text-white text-base rounded-xl px-3 py-2 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-[1.03] cursor-pointer relative overflow-visible"
        >
          <span className="text-2xl flex-shrink-0">{skill.icon}</span>
          <span className="font-medium drop-shadow-lg">{skill.label}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Skills; 