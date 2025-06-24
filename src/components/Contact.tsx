import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleOnHover, pulseAnimation } from '../utils/animations';

const CertificationCard = ({ title, year, platform }: { title: string; year: string; platform: string }) => (
  <motion.div
    className="bg-[#2A1B3D] rounded-xl p-6 relative overflow-hidden group"
    variants={fadeInUp}
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 0 20px rgba(139,92,246,0.3)"
    }}
  >
    {/* Glow effect */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    
    <div className="relative z-10">
      <motion.div 
        className="text-xl font-semibold mb-2 text-purple-400"
        variants={fadeInUp}
      >
        {title}
      </motion.div>
      <motion.div 
        className="text-sm text-gray-400 mb-2"
        variants={fadeInUp}
      >
        {platform}
      </motion.div>
      <motion.div 
        className="text-xs text-gray-500"
        variants={fadeInUp}
      >
        {year}
      </motion.div>
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <motion.section 
      className="py-10 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={staggerContainer}
      >
        {/* Interests Section */}
        <motion.div className="mb-12 relative">
          <motion.h3 
            className="text-2xl font-semibold mb-6"
            variants={fadeInUp}
          >
            Interests
          </motion.h3>
          <motion.div 
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 flex items-center justify-center shadow-xl"
            variants={fadeInUp}
          >
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-4"
              variants={staggerContainer}
            >
              {["Reading", "Exploring", "Fitness", "Cooking"].map((interest, index) => (
                <motion.span
                  key={index}
                  className="px-6 py-3 rounded-xl shadow-md bg-gradient-to-br from-purple-100/60 via-white/60 to-blue-100/60 text-purple-900 font-semibold text-base transition-all duration-300 cursor-pointer select-none hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-purple-200/80 hover:to-blue-200/80"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.98 }}
                  custom={index}
                >
                  {interest}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Let's Connect Section */}
        <motion.div className="relative mt-16">
          <motion.div 
            className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-purple-500 to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              height: ["80px", "100px", "80px"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.h2 
            className="text-3xl font-bold mb-12"
            variants={fadeInUp}
          >
            Let's Connect
          </motion.h2>
          
          <motion.div 
            className="mb-12 flex items-center justify-center gap-8 flex-wrap"
            variants={staggerContainer}
          >
            <motion.a 
              href="mailto:krupankbd@gmail.com" 
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span>krupankbd@gmail.com</span>
            </motion.a>

            <motion.a 
              href="tel:+919008775714" 
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              <span>+91 9008775714</span>
            </motion.a>
          </motion.div>

          <motion.div 
            className="relative w-24 h-24 mx-auto"
            variants={fadeInUp}
          >
            <motion.div 
              className="absolute inset-0 bg-purple-600/20 rounded-full blur-3xl"
              animate="pulse"
              variants={pulseAnimation}
            />
            <motion.div 
              className="relative bg-[#2A1B3D] rounded-full w-full h-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl">K</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact; 