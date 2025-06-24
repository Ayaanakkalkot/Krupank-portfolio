import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const Card = React.forwardRef(({ label, aspect, isActive, onHover, mediaSrc, isVideo }: { label: string; aspect?: string; isActive: boolean; onHover?: () => void; mediaSrc?: string; isVideo?: boolean }, ref: React.Ref<HTMLDivElement>) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle custom fullscreen modal
  const handleFullscreen = () => {
    setIsModalOpen(true);
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  
  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Map video to poster image (fallback to a default if not found)
  const posterMap: Record<string, string> = {
    '/videos/Fianl Vr.mp4': '/images/p1.png',
    '/videos/FINAL BARWARE 9_16.mp4': '/images/p2.png',
    '/videos/9_16 Rakhi Video.mp4': '/images/p3.png',
    '/videos/CHRIST 9_161 (1).mp4': '/images/p4.png',
    '/videos/TPP TREE 9-16.mp4': '/images/p5.png',
    '/videos/VID-20250624-WA0001.mp4': '/images/p6.png',
    '/videos/VID-20250624-WA0002.mp4': '/images/p7.png',
    '/videos/VID-20250624-WA0003.mp4': '/images/p8.png',
    '/videos/VID-20250624-WA0004.mp4': '/images/p9.png',
    '/videos/VID-20250624-WA0007.mp4': '/images/p10.png',
  };
  const poster = mediaSrc && posterMap[mediaSrc] ? posterMap[mediaSrc] : '/images/Me.png';

  return (
    <>
      <motion.div
        ref={ref}
        className={
          `snap-center flex-shrink-0 ${aspect === '9/16' ? 'w-28 md:w-48 h-60 md:h-80' : 'w-40 md:w-60 h-60 md:h-80'} bg-white rounded-md shadow-md mx-1 md:mx-2 transition-all duration-300 cursor-pointer relative group`
        }
        whileHover={{ scale: 1.07, zIndex: 10 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onMouseEnter={isVideo ? handlePlay : onHover}
        onMouseLeave={isVideo ? handlePause : undefined}
        tabIndex={0}
      >
        <div className="w-full h-full rounded-md overflow-hidden">
          {isVideo && mediaSrc ? (
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                src={mediaSrc}
                poster={poster}
                preload="metadata"
                muted
                playsInline
                className="object-cover w-full h-full transition duration-300 rounded-md"
                onClick={handleFullscreen}
              />
              {!isPlaying && (
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition"
                  onClick={handlePlay}
                  tabIndex={-1}
                  aria-label="Play video"
                  type="button"
                >
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#fff" fillOpacity="0.7"/><polygon points="20,16 36,24 20,32" fill="#a78bfa"/></svg>
                </button>
              )}
            </div>
          ) : mediaSrc ? (
            <img
              src={mediaSrc}
              alt={label}
              loading="lazy"
              className="object-cover w-full h-full transition duration-300 rounded-md"
            />
          ) : (
            <img
              src={aspect === '9/16' ? '/images/Customer.png' : '/images/Me.png'}
              alt={label}
              loading="lazy"
              className="object-cover w-full h-full transition duration-300 rounded-md"
            />
          )}
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && isVideo && mediaSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => {
              setIsModalOpen(false);
              if (videoRef.current) {
                videoRef.current.pause();
                setIsPlaying(false);
              }
            }}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Video Container with 1080x1920 ratio */}
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative" style={{ width: 'min(1080px, 90vh * 0.5625)', height: 'min(1920px, 90vh)' }}>
                <video
                  src={mediaSrc}
                  autoPlay
                  controls
                  className="w-full h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

function HorizontalCardScroller({ section }: { section: { title: string; key: string } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = React.useState({ left: 0, width: 0, scrollWidth: 0 });

  React.useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScroll({
          left: containerRef.current.scrollLeft,
          width: containerRef.current.clientWidth,
          scrollWidth: containerRef.current.scrollWidth,
        });
      }
    };
    const ref = containerRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
      // Set initial
      setScroll({ left: ref.scrollLeft, width: ref.clientWidth, scrollWidth: ref.scrollWidth });
    }
    return () => {
      if (ref) ref.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-purple-200 text-purple-700 rounded-full shadow p-2 transition disabled:opacity-40 hidden sm:block"
        style={{ marginLeft: '-24px' }}
        onClick={() => scrollByCard('left')}
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div
        ref={containerRef}
        className="flex items-center py-4 gap-2 md:gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth hide-scrollbar"
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
      {/* Scroll indicator bar - only on mobile/tablet */}
      <div className="relative w-full h-2 mt-2 flex items-center justify-center block md:hidden">
        <div className="w-5/6 h-0.5 bg-white/20 rounded-full overflow-hidden relative">
          {/* Small thumb that moves based on scroll position */}
          <div
            className="absolute top-0 h-2 w-1/5 rounded-full bg-gradient-to-r from-purple-400/80 to-blue-400/80 shadow-md transition-all duration-300"
            style={{
              left: scroll.width && scroll.scrollWidth
                ? `calc(${(scroll.left / (scroll.scrollWidth - scroll.width)) * 80}% )`
                : '0%',
            }}
          />
        </div>
      </div>
      <button
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-purple-200 text-purple-700 rounded-full shadow p-2 transition disabled:opacity-40 hidden sm:block"
        style={{ marginRight: '-24px' }}
        onClick={() => scrollByCard('right')}
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
}

const MyWork = () => (
  <motion.section className="py-6 md:py-10 px-2 md:px-4 max-w-6xl mx-auto" initial="hidden" animate="visible">
    <motion.h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center relative text-white">
      My Work
      <motion.span className="absolute inset-0 bg-purple-500/10 blur-xl -z-10" animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
    </motion.h2>
    {workSections.map(section => (
      <div key={section.key} className="mb-10 md:mb-16">
        <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4 text-white">{section.title}</h3>
        <HorizontalCardScroller section={section} />
      </div>
    ))}
  </motion.section>
);

export default MyWork; 

// Add this to your global CSS if not present:
// .hide-scrollbar::-webkit-scrollbar { display: none; }
// .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } 