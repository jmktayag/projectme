'use client';

import { motion, AnimatePresence } from 'framer-motion';
import RippleButton from '../common/RippleButton';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import { useState, useEffect } from 'react';

/* 
 * HeroSection Component
 * The main landing section of the website
 * Features animated text and gradient background effects
 */

// Star positions - we'll create a grid of stars with slight randomness
const stars = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1, // Random size between 1-3px
  duration: Math.random() * 2 + 1, // Random duration between 1-3s
  delay: Math.random() * 2, // Random delay for twinkling
}));

// Illustration data
const illustrations = [
  {
    id: 1,
    src: '/illustrations/cycling.svg',
    alt: 'Cycling Illustration',
  },
  {
    id: 2,
    src: '/illustrations/woodworking.svg',
    alt: 'Woodworking Illustration',
  },
  {
    id: 3,
    src: '/illustrations/programmer.svg',
    alt: 'Coding Illustration',
  }
];

const HeroSection = () => {
  // State for current illustration
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setCurrentIndex((prev) => (prev + 1) % illustrations.length);
      }
    }, 5000); // Change illustration every 5 seconds

    return () => clearInterval(timer);
  }, [isAnimating]);

  // Animation for the floating gradient movement
  const gradientProps = useSpring({
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
    config: { duration: 8000 },
    loop: true,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-[#0A0B14]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating elements */}
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-blue-500/20 blur-xl"
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-indigo-500/20 blur-xl"
        />
        
        {/* Additional floating element */}
        <motion.div
          animate={{ 
            y: [-15, 15, -15],
            x: [-15, 15, -15],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-purple-500/15 blur-xl"
        />
        
        {/* Animated grid pattern */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.07 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Text content */}
        <div className="text-center md:text-left">
          {/* Animated heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I&apos;m{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gradient"
              >
                Mc Kein
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                .
              </motion.span>
            </h1>
          </motion.div>
          
          {/* Animated description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-xl"
          >
            Full-stack developer, woodworker, and avid cyclist who loves to vlog about adventures.
          </motion.p>

          {/* Animated button container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
          >
            <RippleButton href="#projects" variant="primary">
              View Projects
            </RippleButton>
            <RippleButton href="/resume.pdf" variant="outline">
              Download Résumé
            </RippleButton>
          </motion.div>
        </div>

        {/* Illustration Slideshow */}
        <div className="relative w-full max-w-lg mx-auto md:ml-auto aspect-square">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
              className="absolute inset-0"
            >
              <Image
                src={illustrations[currentIndex].src}
                alt={illustrations[currentIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Animated gradient overlay */}
      <animated.div
        style={{
          ...gradientProps,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(45deg, rgba(37, 99, 235, 0.05), rgba(30, 64, 175, 0.03))',
          backgroundSize: '400% 400%',
          opacity: 0.8,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
    </section>
  );
};

export default HeroSection; 