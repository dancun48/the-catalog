import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate();

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
        { name: 'Optimiza', href: '/health-optimiza' },
        { name: 'Podcast', href: '/podcast' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Insights', href: '/insights' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Medical Disclaimer', href: '/how-it-works#disclaimer' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Refund Policy', href: '/refund' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-4">
          {/* Brand Column */}
          <div className="col-span-1">
            <img src="/logofooter.png" alt="The Catalog Logo" className="size-28 bg-white rounded-xl" />
          </div>

          <div className="col-span-1 md:col-span-1">
            <p className="text-sm text-white mb-4">
              <strong>Building</strong> emotionally intelligent, high-performance workplaces through data-driven wellness systems.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-secondary text-white py-2 px-4 rounded-xl text-sm font-medium hover:bg-secondary/80 transition-colors"
            >
              Book Now →
            </Link>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="font-display font-semibold text-secondary mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link 
                        to={link.href}
                        onClick={scrollTo(0,0)} 
                        className="text-xs text-white hover:text-white/70 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-xs text-white hover:text-white/70 transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 mt-4 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
            <p className="text-xs text-white/60">
              © 2026 The Catalog Healthcare. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
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