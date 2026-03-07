import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize (if going from mobile to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setIsAboutOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsAboutOpen(false);
    }, 200); // Small delay to allow moving to dropdown
    setHoverTimeout(timeout);
  };

  // Handle dropdown item click
  const handleDropdownItemClick = () => {
    setIsAboutOpen(false);
  };

  // Handle mobile menu item click
  const handleMobileMenuItemClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: 'About', dropdown: true, path: '/about' },
    { name: 'Wellness Hive', href: '/wellness-hive' },
    { name: 'Optimiza', href: '/optimiza' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  const aboutDropdownItems = [
    { name: 'Vision & Mission', href: '/about#vision-mission' },
    { name: 'Core Values', href: '/about#core-values' },
    { name: 'Our Team', href: '/about#our-team' },
    { name: 'Our Story', href: '/about#our-story' },
    { name: 'Leadership', href: '/about#leadership' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center relative z-[101]">
              <img 
                src="/thecatalog.png" 
                alt="The Catalog Logo" 
                className="h-12 w-auto sm:h-16 md:h-20 lg:h-24" 
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 relative z-[101]">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a
                        href={item.path}
                        className="nav-link inline-flex items-center text-sm lg:text-base"
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
                      </a>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isAboutOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-[102]"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            {aboutDropdownItems.map((dropdownItem) => (
                              <a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 lg:py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                onClick={handleDropdownItemClick}
                              >
                                {dropdownItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a 
                      href={item.href} 
                      className="nav-link text-sm lg:text-base"
                      onClick={() => setIsAboutOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              
            </div><button 
                className="btn-primary ml-2 lg:ml-4 text-sm lg:text-base whitespace-nowrap"
                onClick={() => setIsAboutOpen(false)}
              >
                Book Now
              </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors relative z-[101]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay - Separate from nav for proper stacking */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-[90] md:hidden overflow-hidden"
            style={{ top: 0 }}
          >
            {/* Content wrapper with proper spacing for navbar */}
            <div className="h-full overflow-y-auto pt-24"> {/* pt-24 accounts for navbar height */}
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 pb-4">
                    {item.dropdown ? (
                      <div className="space-y-3">
                        <div className="font-display font-semibold text-gray-900 text-lg">
                          {item.name}
                        </div>
                        <div className="pl-4 space-y-3">
                          {aboutDropdownItems.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block py-2 text-gray-600 hover:text-primary transition-colors"
                              onClick={handleMobileMenuItemClick}
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block py-2 text-gray-800 hover:text-primary transition-colors font-medium"
                        onClick={handleMobileMenuItemClick}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                
                {/* Mobile Book Now button */}
                <div className="pt-4">
                  <button 
                    className="w-full btn-primary py-4 text-base"
                    onClick={handleMobileMenuItemClick}
                  >
                    Book Now
                  </button>
                </div>

                {/* Additional mobile menu footer */}
                <div className="pt-8 text-center text-sm text-gray-500">
                  <p>© 2026 The Catalog</p>
                  <p className="mt-1">All rights reserved</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;