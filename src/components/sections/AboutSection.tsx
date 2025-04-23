'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose dark:prose-invert max-w-none"
          >
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate developer with expertise in building modern web applications.
              I love creating intuitive user experiences and solving complex problems through code.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              With a strong foundation in web technologies and a keen eye for design,
              I strive to create applications that are both functional and beautiful.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-300">React, Next.js, TypeScript</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
              <p className="text-gray-600 dark:text-gray-300">Node.js, Python, SQL</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Design</h3>
              <p className="text-gray-600 dark:text-gray-300">Figma, Tailwind CSS</p>
            </div>
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