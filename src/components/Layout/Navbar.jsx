import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', dropdown: true },
    { name: 'Wellness Hive', href: '/wellness-hive' },
    { name: 'Optimiza', href: '/optimiza' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'Insights', href: '/insights' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-1">
            <span className="font-display font-semibold text-primary">
              <img src="/thecatalog.png" alt="The Catalog Logo" className="h-28 w-28" />
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className="nav-link inline-flex items-center"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <a href={item.href} className="nav-link">
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <button className="btn-primary ml-4">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* About Dropdown */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2"
          >
            {['Vision & Mission', 'Core Value', 'Our Team'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <div className="font-medium text-gray-900 py-2">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        <a href="#" className="block py-2 text-sm text-gray-600 hover:text-primary">Vision & Mission</a>
                        <a href="#" className="block py-2 text-sm text-gray-600 hover:text-primary">Core Value</a>
                        <a href="#" className="block py-2 text-sm text-gray-600 hover:text-primary">Our Team</a>
                      </div>
                    </div>
                  ) : (
                    <a href={item.href} className="block py-2 text-gray-600 hover:text-primary">
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <button className="w-full btn-primary mt-4">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;