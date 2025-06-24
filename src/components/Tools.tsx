import React from 'react';

const tools = [
  {
    label: 'Adobe After Effects',
    icon: (
      <span className="relative flex items-center justify-center">
        <span className="absolute w-10 h-10 bg-[#9999FF] opacity-40 blur-xl rounded-full animate-pulse" />
        <svg className="text-[#9999FF] z-10 transition-transform duration-300 group-hover:scale-110" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">Ae</text>
        </svg>
      </span>
    ),
  },
  {
    label: 'Adobe Photoshop',
    icon: (
      <span className="relative flex items-center justify-center">
        <span className="absolute w-10 h-10 bg-[#31A8FF] opacity-40 blur-xl rounded-full animate-pulse" />
        <svg className="text-[#31A8FF] z-10 transition-transform duration-300 group-hover:scale-110" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">Ps</text>
        </svg>
      </span>
    ),
  },
  {
    label: 'Figma',
    icon: (
      <span className="relative flex items-center justify-center">
        <span className="absolute w-10 h-10 bg-[#A259FF] opacity-40 blur-xl rounded-full animate-pulse" />
        <svg className="text-[#A259FF] z-10 transition-transform duration-300 group-hover:scale-110" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="8" cy="8" r="4" fill="#A259FF" />
          <circle cx="16" cy="8" r="4" fill="#F24E1E" />
          <circle cx="8" cy="16" r="4" fill="#1ABCFE" />
          <circle cx="16" cy="16" r="4" fill="#0ACF83" />
        </svg>
      </span>
    ),
  },
  {
    label: 'Adobe Illustrator',
    icon: (
      <span className="relative flex items-center justify-center">
        <span className="absolute w-10 h-10 bg-[#FF9A00] opacity-40 blur-xl rounded-full animate-pulse" />
        <svg className="text-[#FF9A00] z-10 transition-transform duration-300 group-hover:scale-110" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">Ai</text>
        </svg>
      </span>
    ),
  },
  {
    label: 'Adobe Lightroom',
    icon: (
      <span className="relative flex items-center justify-center">
        <span className="absolute w-10 h-10 bg-[#31A8FF] opacity-40 blur-xl rounded-full animate-pulse" />
        <svg className="text-[#31A8FF] z-10 transition-transform duration-300 group-hover:scale-110" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">Lr</text>
        </svg>
      </span>
    ),
  },
];

const Tools = () => (
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 my-6 shadow-2xl max-w-4xl mx-auto border border-white/20">
    <h2 className="text-3xl font-bold text-white mb-6 text-center tracking-wide relative">
      Tools
      <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -z-10 w-60 h-16 bg-gradient-to-r from-purple-400/30 via-fuchsia-400/20 to-blue-400/30 blur-2xl rounded-full" />
    </h2>
    <ul className="space-y-4">
      {tools.map((tool, idx) => (
        <li
          key={idx}
          className="group flex items-center gap-3 text-white text-base rounded-xl px-3 py-2 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-[1.03] cursor-pointer relative overflow-visible"
        >
          <span className="text-2xl flex-shrink-0">{tool.icon}</span>
          <span className="font-medium drop-shadow-lg">{tool.label}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Tools; 