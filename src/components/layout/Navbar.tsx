'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Get all sections
      const sections = document.querySelectorAll('section[id]');
      
      // Find the section in view
      let foundActive = false;
      sections.forEach(section => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionHeight = sectionElement.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
          foundActive = true;
        }
      });

      // If no section is in view and we're at the top, set home as active
      if (!foundActive && window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          const navHeight = 64;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          
          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 0);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
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
                  width={96}
                  height={96}
                  quality={100}
                  className="object-contain"
                  priority
                />
              </motion.div>
              <motion.span 
                className={`ml-1 text-xl font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 dark:text-gray-300' 
                    : 'text-white'
                }`}
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
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleClick}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative ${
                      isScrolled 
                        ? 'text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400' 
                  : 'text-white/90 hover:text-white'
              }`}
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
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-colors duration-200 ${
            isScrolled 
              ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md' 
              : 'bg-black/90 backdrop-blur-md'
          }`}>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleClick}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 relative ${
                    isScrolled 
                      ? 'text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="mobileActiveIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400 rounded-r"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;