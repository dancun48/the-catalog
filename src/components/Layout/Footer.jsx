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
        { name: 'Contact Us', href: '#' },
        { name: 'FAQs', href: '#' },
        { name: 'Privacy Policy', href: '#' },
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
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-display font-semibold text-primary">
                <img src="/thecatalog.png" alt="The Catalog Logo" className="size-24" />
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Building emotionally intelligent, high-performance workplaces through data-driven wellness systems.
            </p>
            <button className="text-primary text-sm font-medium hover:text-primary/80 transition-colors">
              Book Now →
            </button>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-sm text-gray-600 hover:text-primary transition-colors"
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
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2026 The Catalog. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-primary transition-colors"
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