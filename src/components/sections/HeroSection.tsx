'use client';

import { motion } from 'framer-motion';
import RippleButton from '../common/RippleButton';

/* 
 * HeroSection Component
 * The main landing section of the website
 * Features animated text and call-to-action buttons
 */
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background shapes for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100 dark:bg-red-900/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Main content container */}
      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Animated heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Hi, I'm Mc Kein.
        </motion.h1>
        
        {/* Animated description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Full-stack developer, woodworker, and avid cyclist who loves to vlog about adventures.
        </motion.p>

        {/* Animated button container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Call-to-action buttons */}
          <RippleButton href="#projects" variant="primary">
            View Projects
          </RippleButton>
          <RippleButton href="/resume.pdf" variant="outline">
            Download Résumé
          </RippleButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 