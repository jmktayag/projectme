'use client'; // Indicates this is a client-side component

// Import motion component from framer-motion for animations
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGitAlt, FaCode, FaRobot } from 'react-icons/fa';
import { SiSwift, SiFirebase, SiReact, SiSalesforce, SiPython, SiFigma, SiCanva, SiJenkins, SiApple, SiAndroid, SiXcode, SiGoogle, SiOpenai } from 'react-icons/si';

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
            className="space-y-6"
          >
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/profile.png"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                I&apos;m Mc Kein Tayag — a curious creator passionate about building meaningful digital and physical experiences.
              </p>
              <br />
              <p className="text-gray-600 dark:text-gray-300">
                From designing seamless mobile apps to handcrafting furniture and biking through heritage trails, 
                I blend creativity, logic, and exploration in everything I do.
              </p>
              <br />
              <p className="text-gray-600 dark:text-gray-300">
                I believe great design is both functional and delightful.
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Let&apos;s Work Together
            </motion.a>
          </motion.div>

          {/* Right column - Skills grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} // Start invisible and offset right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }} // Longer delay for staggered effect
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frontend</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Crafting clean and responsive user interfaces</p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <SiApple className="text-2xl text-gray-900 dark:text-white" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    iOS
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <SiAndroid className="text-2xl text-green-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Android
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <SiSwift className="text-2xl text-orange-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Swift
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <FaCode className="text-2xl text-blue-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Objective-C
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <SiFirebase className="text-2xl text-yellow-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Firebase
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <SiReact className="text-2xl text-blue-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    React Native
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Backend</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Powering apps with robust, scalable logic</p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <SiFirebase className="text-2xl text-yellow-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Firebase
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <SiSalesforce className="text-2xl text-blue-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Salesforce
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <SiPython className="text-2xl text-yellow-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Python
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Design</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Blending creativity with usability</p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <SiFigma className="text-2xl text-purple-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Figma
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <SiCanva className="text-2xl text-blue-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Canva
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tools</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Supporting dev workflows & automation</p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <SiXcode className="text-2xl text-blue-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Xcode Server
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <SiJenkins className="text-2xl text-red-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Jenkins
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <FaCode className="text-2xl text-blue-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    VS Code
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <FaRobot className="text-2xl text-purple-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Cursor AI
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <SiGoogle className="text-2xl text-blue-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Google AI
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <SiOpenai className="text-2xl text-green-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    ChatGPT
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="relative group">
                  <FaGitAlt className="text-2xl text-orange-500" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Git
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 