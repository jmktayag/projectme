'use client'; // Indicates this is a client-side component

// Import motion component from framer-motion for animations
import { motion } from 'framer-motion';

/* 
 * AboutSection Component
 * Displays information about the developer including skills and background
 * Uses Framer Motion for smooth animations when scrolling into view
 */
const AboutSection = () => {
  return (
    // Main section container with responsive padding and background colors
    <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Animated section title */}
        <motion.h2 
          // Animation settings for the title
          initial={{ opacity: 0, y: 20 }} // Start invisible and 20px below
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible when in view
          transition={{ duration: 0.5 }} // Animation duration
          viewport={{ once: true }} // Only animate once
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          About Me
        </motion.h2>
        {/* Two-column grid layout for content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column - About text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} // Start invisible and offset left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }} // Slight delay after title
            viewport={{ once: true }}
            className="prose dark:prose-invert max-w-none"
          >
            <p className="text-gray-600 dark:text-gray-300">
              I&apos;m a passionate developer with expertise in building modern web applications.
              I love creating intuitive user experiences and solving complex problems through code.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              With a strong foundation in web technologies and a keen eye for design,
              I strive to create applications that are both functional and beautiful.
            </p>
          </motion.div>

          {/* Right column - Skills grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} // Start invisible and offset right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }} // Longer delay for staggered effect
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Frontend skills card */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-300">React, Next.js, TypeScript</p>
            </div>

            {/* Backend skills card */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
              <p className="text-gray-600 dark:text-gray-300">Node.js, Python, SQL</p>
            </div>

            {/* Design skills card */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Design</h3>
              <p className="text-gray-600 dark:text-gray-300">Figma, Tailwind CSS</p>
            </div>

            {/* Tools skills card */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tools</h3>
              <p className="text-gray-600 dark:text-gray-300">Git, Docker, AWS</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 