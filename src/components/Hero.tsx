import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimation } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

// Add sparkle component
const Sparkle = ({ className = "", style = {}, delay = 0, size = "8" }) => {
  return (
    <motion.div
      className={`absolute rounded-full bg-white/80 blur-[1px] ${className}`}
      style={{
        width: size + 'px',
        height: size + 'px',
        ...style
      }}
      animate={{
        scale: [0.5, 1.2, 0.5],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 2 + Math.random(),
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values for cursor interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation config
  const springConfig = { damping: 15, stiffness: 150 };

  // Create smooth values for rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  // Continuous floating animation
  const floatingAnimation = {
    y: [0, -20, 0],
    rotateZ: [-2, 2, -2],
    scale: [1, 1.02, 1],
  };

  const floatingTransition = {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  };

  // Handle mouse move on the container
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = (event.clientX - rect.left) / rect.width - 0.5;
    const centerY = (event.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(centerX);
    mouseY.set(centerY);
  };

  return (
    <motion.section 
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 py-4"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Intro text */}
        <motion.div 
          className="text-center mb-4 sm:mb-8"
          variants={staggerContainer}
        >
          <motion.p 
            className="text-base sm:text-lg mb-2"
            variants={fadeInUp}
          >
            Hello! I Am <span className="text-purple-500">Krupank B</span>
          </motion.p>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4"
            variants={fadeInUp}
          >
            A VISUAL CONTENT CREATOR
          </motion.h1>
          <motion.div 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            variants={fadeInUp}
          >
            Who brings ideas to life
          </motion.div>
          <motion.p 
            className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto"
            variants={fadeInUp}
          >
            Hey! I'm a Visual Content Creator who loves making cool photos, videos, and designs. Whether I'm behind the camera, editing a video, or designing a graphic, I always aim to create stuff that looks great and feels real. Let's work together and make your ideas come to life!
          </motion.p>
        </motion.div>

        {/* 3D Image with enhanced effects */}
        <motion.div 
          className="flex justify-center items-center w-full mb-2 sm:mb-2 perspective-1000"
          variants={fadeInUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            mouseX.set(0);
            mouseY.set(0);
          }}
        >
          <div className="relative w-[140px] h-[140px] xs:w-[160px] xs:h-[160px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[240px] lg:h-[240px] xl:w-[260px] xl:h-[260px]">
            {/* Background glow effects */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20 blur-2xl"
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [0.8, 0.9, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Additional outer glow */}
            <motion.div
              className="absolute -inset-4 rounded-full bg-white/10 blur-3xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Background sparkles */}
            <Sparkle className="top-1/4 left-1/4 -z-1" size="4" delay={0.2} />
            <Sparkle className="top-3/4 right-1/4 -z-1" size="5" delay={0.7} />
            <Sparkle className="top-1/2 left-1/3 -z-1" size="3" delay={1.1} />
            <Sparkle className="bottom-1/3 right-1/3 -z-1" size="4" delay={1.5} />
            
            {/* Foreground sparkles */}
            <Sparkle className="top-0 left-1/4" size="4" delay={0} />
            <Sparkle className="top-1/4 -left-1" size="6" delay={0.5} />
            <Sparkle className="top-1/2 -right-1" size="3" delay={1.0} />
            <Sparkle className="bottom-1/4 left-0" size="5" delay={1.5} />
            <Sparkle className="bottom-0 right-1/4" size="4" delay={0.2} />
            <Sparkle className="-top-1 right-1/3" size="6" delay={0.7} />
            <Sparkle className="top-1/3 -right-2" size="3" delay={1.2} />
            <Sparkle className="bottom-1/3 -left-2" size="5" delay={1.7} />
            <Sparkle className="top-2/3 right-0" size="4" delay={0.3} />
            <Sparkle className="-bottom-1 left-1/3" size="3" delay={0.9} />
            <Sparkle className="bottom-2/3 -right-1" size="5" delay={1.4} />
            <Sparkle className="-top-2 left-1/2" size="4" delay={0.6} />

            <motion.div 
              className="relative w-full h-full transform-gpu"
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
              }}
              animate={floatingAnimation}
              transition={floatingTransition}
            >
              {/* Image container with 3D effect */}
              <motion.div
                className="relative z-10 w-full h-full rounded-full overflow-hidden ring-2 ring-white/30 bg-white/5"
                style={{
                  transform: "translateZ(0px)",
                }}
              >
                <motion.img
                  src="/images/Krupank.jpg"
                  alt="Krupank B"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 20%",
                  }}
                />

                {/* Additional inner glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/20"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero; 