import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// Add this CSS to your global styles if not present:
// .scrollbar-hide::-webkit-scrollbar { display: none; }
// .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

const workSections = [
  { title: 'Photography', key: 'photography' },
  { title: 'Videography', key: 'videography' },
  { title: 'Graphic Designer', key: 'graphicdesigner' },
];

const CARD_WIDTH = 240; // px (w-60)
const CARD_GAP = 16; // px (gap-4)

const photoImages = [
  '/images/p1.png',
  '/images/p2.png',
  '/images/p3.png',
  '/images/p4.png',
  '/images/p5.png',
  '/images/p6.png',
  '/images/p7.png',
  '/images/p8.png',
  '/images/p9.png',
  '/images/p10.png',
];

const videoFiles = [
  '/videos/Fianl Vr.mp4',
  '/videos/FINAL BARWARE 9_16.mp4',
  '/videos/9_16 Rakhi Video.mp4',
  '/videos/CHRIST 9_161 (1).mp4',
  '/videos/TPP TREE 9-16.mp4',
  '/videos/VID-20250624-WA0001.mp4',
  '/videos/VID-20250624-WA0002.mp4',
  '/videos/VID-20250624-WA0003.mp4',
  '/videos/VID-20250624-WA0004.mp4',
  '/videos/VID-20250624-WA0007.mp4',
];

const graphicImages = [
  '/images/g1.png',
  '/images/g2.png',
  '/images/g3.png',
  '/images/g4.png',
  '/images/g5.png',
  '/images/g6.png',
  '/images/g7.png',
  '/images/g8.png',
  '/images/g9.png',
  '/images/g10.png'
];

const Card = React.forwardRef(({ label, aspect, isActive, onHover, mediaSrc, isVideo }: { label: string; aspect?: string; isActive: boolean; onHover?: () => void; mediaSrc?: string; isVideo?: boolean }, ref: React.Ref<HTMLDivElement>) => (
  <motion.div
    ref={ref}
    className={
      `snap-center flex-shrink-0 ${aspect === '9/16' ? 'w-48 h-80' : 'w-60 h-80'} bg-white rounded-2xl shadow-md mx-2 transition-all duration-300 cursor-pointer relative group overflow-hidden`
    }
    whileHover={{ scale: 1.07, boxShadow: '0 0 32px 8px #a78bfa', zIndex: 10 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    onMouseEnter={onHover}
    tabIndex={0}
  >
    {isVideo && mediaSrc ? (
      <video
        src={mediaSrc}
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full group-hover:opacity-80 transition duration-300 rounded-2xl"
      />
    ) : mediaSrc ? (
      <img
        src={mediaSrc}
        alt={label}
        loading="lazy"
        className="object-cover w-full h-full group-hover:opacity-80 transition duration-300 rounded-2xl"
      />
    ) : (
      <img
        src={aspect === '9/16' ? '/images/Customer.png' : '/images/Me.png'}
        alt={label}
        loading="lazy"
        className="object-cover w-full h-full group-hover:opacity-80 transition duration-300 rounded-2xl"
      />
    )}
  </motion.div>
));

function HorizontalCardScroller({ section }: { section: { title: string; key: string } }) {
  const containerRef = useRef<HTMLDivElement>(null);

  let mediaArr: string[] = [];
  let isVideo = false;
  if (section.key === 'photography') {
    mediaArr = photoImages;
    isVideo = false;
  } else if (section.key === 'videography') {
    mediaArr = videoFiles;
    isVideo = true;
  } else if (section.key === 'graphicdesigner') {
    mediaArr = graphicImages;
    isVideo = false;
  }

  const scrollByCard = (dir: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = CARD_WIDTH + CARD_GAP;
      containerRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full">
      <button
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-purple-200 text-purple-700 rounded-full shadow p-2 transition disabled:opacity-40"
        style={{ marginLeft: '-24px' }}
        onClick={() => scrollByCard('left')}
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div
        ref={containerRef}
        className="flex items-center py-4 gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth hide-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        {mediaArr.map((src, i) => (
          <Card
            key={i}
            label={`${section.title} ${i + 1}`}
            aspect={section.key === 'videography' ? '9/16' : undefined}
            isActive={false}
            mediaSrc={typeof src === 'string' ? src : undefined}
            isVideo={isVideo}
          />
        ))}
      </div>
      <button
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-purple-200 text-purple-700 rounded-full shadow p-2 transition disabled:opacity-40"
        style={{ marginRight: '-24px' }}
        onClick={() => scrollByCard('right')}
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
}

const MyWork = () => (
  <motion.section className="py-10 px-4 md:px-8 max-w-6xl mx-auto" initial="hidden" animate="visible">
    <motion.h2 className="text-3xl font-bold mb-12 text-center relative text-white">
      My Work
      <motion.span className="absolute inset-0 bg-purple-500/10 blur-xl -z-10" animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
    </motion.h2>
    {workSections.map(section => (
      <div key={section.key} className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-white">{section.title}</h3>
        <HorizontalCardScroller section={section} />
      </div>
    ))}
  </motion.section>
);

export default MyWork; 

// Add this to your global CSS if not present:
// .hide-scrollbar::-webkit-scrollbar { display: none; }
// .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } 