import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'About',
      links: [
        { name: 'Vision & Mission', href: '#' },
        { name: 'Core Value', href: '#' },
        { name: 'Our Team', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Wellness Hive', href: '/wellness-hive' },
        { name: 'Optimiza', href: '/optimiza' },
        { name: 'Podcast', href: '/podcast' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Insights', href: '/insights' },
        { name: 'Articles', href: '#' },
        { name: 'Journals', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Cookies Policy', href: '/cookies' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-8 mb-4">
          {/* Brand Column */}
          <img src="/logofooter.png" alt="The Catalog Logo" className="size-28 bg-white rounded-xl" />

          <div className="flex flex-col items-start">
            <p className="text-sm text-white mb-4">
              <strong>Building </strong> emotionally intelligent, high-performance workplaces through data-driven wellness systems.
            </p>
            <button className="text-white bg-secondary py-2 px-4 rounded-xl text-sm font-medium hover:text-primary/80 transition-colors">
              Book Now →
            </button>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display font-semibold text-gray-900 mb-4 text-secondary">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-xs text-white hover:text-white/60 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-white/60">
              © 2026 The Catalog. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 text-xs">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;