'use client'; // Indicates this is a client-side component

/**
 * AboutSection Component
 * 
 * A responsive section that displays personal information, skills, and expertise.
 * Features:
 * - Animated entrance effects using Framer Motion
 * - Interactive skill cards with hover effects
 * - Responsive grid layout
 * - Dark mode support
 * - Accessible tooltips
 * 
 * @component
 * @example
 * ```tsx
 * <AboutSection />
 * ```
 */

// Import motion component from framer-motion for animations
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGitAlt, FaCode, FaRobot } from 'react-icons/fa';
import { SiSwift, SiFirebase, SiReact, SiSalesforce, SiPython, SiFigma, SiCanva, SiJenkins, SiApple, SiAndroid, SiXcode, SiGoogle, SiOpenai } from 'react-icons/si';
import { SkillCategory, SkillIconProps, SkillCardProps } from '@/types';

// Animation variants for consistent motion effects
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: 0.2 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: 0.4 }
};

// Skill card data structure for better maintainability
const skillCategories: Record<string, SkillCategory> = {
  frontend: {
    title: 'Frontend',
    description: 'Crafting clean and responsive user interfaces',
    skills: [
      { icon: SiApple, name: 'iOS', color: 'text-gray-900 dark:text-white' },
      { icon: SiAndroid, name: 'Android', color: 'text-green-500' },
      { icon: SiSwift, name: 'Swift', color: 'text-orange-500' },
      { icon: FaCode, name: 'Objective-C', color: 'text-blue-500' },
      { icon: SiFirebase, name: 'Firebase', color: 'text-yellow-500' },
      { icon: SiReact, name: 'React Native', color: 'text-blue-500' }
    ]
  },
  backend: {
    title: 'Backend',
    description: 'Powering apps with robust, scalable logic',
    skills: [
      { icon: SiFirebase, name: 'Firebase Cloud Functions', color: 'text-yellow-500' },
      { icon: SiSalesforce, name: 'Salesforce', color: 'text-blue-500' },
      { icon: SiPython, name: 'Python', color: 'text-yellow-500' }
    ]
  },
  design: {
    title: 'Design',
    description: 'Blending creativity with usability',
    skills: [
      { icon: SiFigma, name: 'Figma', color: 'text-purple-500' },
      { icon: SiCanva, name: 'Canva', color: 'text-blue-500' }
    ]
  },
  tools: {
    title: 'Tools',
    description: 'Supporting dev workflows & automation',
    skills: [
      { icon: SiXcode, name: 'Xcode Server', color: 'text-blue-500' },
      { icon: SiJenkins, name: 'Jenkins', color: 'text-red-500' },
      { icon: FaCode, name: 'VS Code', color: 'text-blue-500' },
      { icon: FaRobot, name: 'Cursor AI', color: 'text-purple-500' },
      { icon: SiGoogle, name: 'Google AI', color: 'text-blue-500' },
      { icon: SiOpenai, name: 'ChatGPT', color: 'text-green-500' },
      { icon: FaGitAlt, name: 'Git', color: 'text-orange-500' }
    ]
  }
};

/**
 * SkillIcon Component
 * 
 * Renders an individual skill icon with hover effects and tooltip
 * 
 * @param {Object} props - Component props
 * @param {IconType} props.icon - React icon component
 * @param {string} props.name - Skill name for tooltip
 * @param {string} props.color - Tailwind color class
 */
const SkillIcon = ({ icon: Icon, name, color }: SkillIconProps) => (
  <motion.div 
    whileHover={{ scale: 1.2 }} 
    className="relative group"
  >
    <Icon className={`text-2xl ${color}`} />
    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
      {name}
    </span>
  </motion.div>
);

/**
 * SkillCard Component
 * 
 * Renders a category of skills with title and description
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Category title
 * @param {string} props.description - Category description
 * @param {Array} props.skills - Array of skill objects
 */
const SkillCard = ({ title, description, skills }: SkillCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
  >
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <SkillIcon key={index} {...skill} />
      ))}
    </div>
  </motion.div>
);

/* 
 * AboutSection Component
 * Displays information about the developer including skills and background
 * Uses Framer Motion for smooth animations when scrolling into view
 */
const AboutSection = () => {
  return (
    // Main section container with responsive padding and background colors
    <section 
      id="about" 
      className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      aria-label="About Me"
    >
      <div className="max-w-7xl mx-auto">
        {/* Animated section title */}
        <motion.h2 
          {...fadeInUp}
          viewport={{ once: true }}
          className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-2"
        >
          About Me
        </motion.h2>
        <div className="h-1 bg-blue-600 mx-auto mt-4 mb-10" style={{ width: '6.5rem' }}></div>
        {/* Two-column grid layout for content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column - About text */}
          <motion.div 
            {...fadeInLeft}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/profile.png"
                alt="Mc Kein Tayag"
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
              aria-label="Contact Me"
            >
              Let&apos;s Work Together
            </motion.a>
          </motion.div>

          {/* Right column - Skills grid */}
          <motion.div 
            {...fadeInRight}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {Object.values(skillCategories).map((category, index) => (
              <SkillCard key={index} {...category} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 