'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    // Add smooth scrolling behavior to the html element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Function to handle hash changes and scroll adjustments
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          const navHeight = 64; // Navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          
          // Delay the scroll slightly to ensure proper positioning
          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 0);
        }
      }
    };

    // Add event listeners
    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial hash on page load
    if (window.location.hash) {
      handleHashChange();
    }

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and name section */}
          <div className="flex-shrink-0">
            <Link 
              href="#home" 
              className="flex items-center group"
              onClick={handleClick}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-24 h-24"
              >
                <Image
                  src="/logo/mk-logo.svg"
                  alt="MK Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              <motion.span 
                className="ml-1 text-xl font-medium text-gray-700 dark:text-gray-300 transition-colors duration-200"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Mc Kein Tayag
              </motion.span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleClick}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 focus:outline-none transition-colors duration-200"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 transition-colors duration-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleClick}
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar; 