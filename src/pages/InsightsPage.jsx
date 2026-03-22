import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Calendar, 
  FileText, 
  Download,
  ArrowRight,
  Clock,
  User,
  MapPin,
  Play,
  Building2
} from 'lucide-react';

// Import images (adjust paths as needed)
import news1 from '../assets/images/events/doc1.jpeg';
import news2 from '../assets/images/events/doc1.jpeg';
import news3 from '../assets/images/events/doc1.jpeg';
import event1 from '../assets/images/events/doc1.jpeg';
import event2 from '../assets/images/events/doc1.jpeg';
import event3 from '../assets/images/events/doc1.jpeg';
import article1 from '../assets/images/articles/doc1.jpeg';
import article2 from '../assets/images/articles/doc1.jpeg';
import article3 from '../assets/images/articles/doc1.jpeg';
import article4 from '../assets/images/articles/doc1.jpeg';
import resource1 from '../assets/images/resources/doc1.jpeg';
import resource2 from '../assets/images/resources/doc1.jpeg';
import resource3 from '../assets/images/resources/doc1.jpeg';
import resource4 from '../assets/images/resources/doc1.jpeg';

const InsightsPage = () => {
  // Temporary random links for demo purposes
  const generateRandomLink = (type, id) => {
    const links = {
      news: [
        'https://medium.com/@thecatalog/workplace-wellness-trends-2026',
        'https://thecatalog.co.tz/news/partnership-announcement',
        'https://linkedin.com/pulse/employee-wellness-impact'
      ],
      events: [
        'https://zoom.us/webinar/register/123456',
        'https://events.thecatalog.co.tz/summit-2026',
        'https://calendly.com/thecatalog/workshop'
      ],
      articles: [
        'https://hbr.org/workplace-wellness',
        'https://forbes.com/leadership-eq',
        'https://thecatalog.co.tz/blog/burnout-prevention',
        'https://medium.com/@thecatalog/future-healthcare-africa'
      ],
      resources: [
        'https://thecatalog.co.tz/downloads/whitepaper.pdf',
        'https://thecatalog.co.tz/downloads/survey-template.xlsx',
        'https://thecatalog.co.tz/downloads/mental-health-guide.pdf',
        'https://thecatalog.co.tz/downloads/executive-protocol.pdf'
      ]
    };
    
    const categoryLinks = links[type] || links.news;
    return categoryLinks[id % categoryLinks.length];
  };

  // Trusted/Worked With Partners
  const trustedPartners = [
    { name: 'NSSF Ilala', logo: '/partners/nssf.png', category: 'Government' },
    { name: 'Van Mo Logistics', logo: '/partners/vanmo.png', category: 'Logistics' },
    { name: 'District Healthcare Services (T)', logo: '/partners/dhs.png', category: 'Healthcare' },
    { name: 'Nasia Consult LTD', logo: '/partners/nasia.png', category: 'Consulting' },
    { name: 'Lancet Laboratories', logo: '/partners/lancet.png', category: 'Healthcare' },
    { name: 'Orbit Craft (Kenya)', logo: '/partners/orbitcraft.png', category: 'Technology' },
    { name: 'Ozyntria Tech (Kenya)', logo: '/partners/ozyntria.png', category: 'Technology' },
  ];

  // News Items
  const newsItems = [
    {
      id: 1,
      title: 'The Catalog Partners with NSSF Ilala for Employee Wellness Program',
      excerpt: 'Strategic partnership to implement comprehensive workforce wellness initiatives for over 2,000 employees.',
      date: 'March 15, 2026',
      author: 'Sarah Mwangi',
      image: news1,
      readTime: '4 min read',
      link: generateRandomLink('news', 0)
    },
    {
      id: 2,
      title: 'Wellness Hive Recognized as Top Workplace Wellness Solution',
      excerpt: 'Our flagship program receives industry recognition for innovative approach to workforce performance optimization.',
      date: 'March 10, 2026',
      author: 'James Omondi',
      image: news2,
      readTime: '3 min read',
      link: generateRandomLink('news', 1)
    },
    {
      id: 3,
      title: 'Expanding to Kenya: New Partnerships in Nairobi',
      excerpt: 'The Catalog announces expansion into Kenya with strategic partnerships in the technology sector.',
      date: 'March 5, 2026',
      author: 'Dr. Erick Otieno',
      image: news3,
      readTime: '5 min read',
      link: generateRandomLink('news', 2)
    }
  ];

  // Events Items
  const eventsItems = [
    {
      id: 4,
      title: 'Workforce Performance Optimization Webinar',
      description: 'Learn how data-driven wellness systems can transform your organization\'s performance.',
      date: 'April 5, 2026',
      time: '10:00 AM - 11:30 AM EAT',
      type: 'Webinar',
      platform: 'Zoom',
      image: event1,
      link: generateRandomLink('events', 0)
    },
    {
      id: 5,
      title: 'Executive Wellness Summit 2026',
      description: 'Join industry leaders for discussions on executive health, burnout prevention, and leadership wellness.',
      date: 'April 20-22, 2026',
      time: 'Full Day',
      type: 'Summit',
      location: 'Dar es Salaam, Tanzania',
      image: event2,
      link: generateRandomLink('events', 1)
    },
    {
      id: 6,
      title: 'Mental Health in the Workplace Workshop',
      description: 'Practical strategies for building emotionally resilient teams.',
      date: 'April 12, 2026',
      time: '2:00 PM - 4:00 PM EAT',
      type: 'Workshop',
      platform: 'Google Meet',
      image: event3,
      link: generateRandomLink('events', 2)
    }
  ];

  // Articles Items
  const articlesItems = [
    {
      id: 7,
      title: 'The ROI of Workplace Wellness: Beyond the Feel-Good Factor',
      excerpt: 'Data-driven analysis showing how wellness programs impact bottom-line performance.',
      date: 'March 12, 2026',
      author: 'Dr. Erick Otieno',
      image: article1,
      readTime: '8 min read',
      featured: true,
      link: generateRandomLink('articles', 0)
    },
    {
      id: 8,
      title: 'Burnout Prevention: A Guide for HR Leaders',
      excerpt: 'Practical frameworks for identifying and addressing burnout before it impacts your workforce.',
      date: 'March 8, 2026',
      author: 'Sarah Mwangi',
      image: article2,
      readTime: '6 min read',
      link: generateRandomLink('articles', 1)
    },
    {
      id: 9,
      title: 'Emotional Intelligence in Leadership',
      excerpt: 'Why EQ matters more than IQ for modern leaders and how to develop it.',
      date: 'March 3, 2026',
      author: 'James Omondi',
      image: article3,
      readTime: '5 min read',
      link: generateRandomLink('articles', 2)
    },
    {
      id: 10,
      title: 'The Future of Preventive Health in Africa',
      excerpt: 'Trends and innovations shaping the healthcare landscape across the continent.',
      date: 'February 28, 2026',
      author: 'Dr. Erick Otieno',
      image: article4,
      readTime: '7 min read',
      link: generateRandomLink('articles', 3)
    }
  ];

  // Resources Items
  const resourcesItems = [
    {
      id: 11,
      title: 'Workplace Wellness ROI Whitepaper',
      description: 'Comprehensive research on the financial impact of wellness programs.',
      type: 'Whitepaper',
      fileSize: '2.4 MB',
      format: 'PDF',
      downloadCount: 1245,
      image: resource1,
      link: generateRandomLink('resources', 0)
    },
    {
      id: 12,
      title: 'Employee Wellness Survey Template',
      description: 'Ready-to-use survey for assessing workforce wellness needs.',
      type: 'Template',
      fileSize: '856 KB',
      format: 'XLSX',
      downloadCount: 892,
      image: resource2,
      link: generateRandomLink('resources', 1)
    },
    {
      id: 13,
      title: 'Mental Health First Aid Guide',
      description: 'Practical guide for managers to support team mental health.',
      type: 'Guide',
      fileSize: '1.8 MB',
      format: 'PDF',
      downloadCount: 2103,
      image: resource3,
      link: generateRandomLink('resources', 2)
    },
    {
      id: 14,
      title: 'Executive Health Assessment Protocol',
      description: 'Comprehensive framework for executive wellness programs.',
      type: 'Protocol',
      fileSize: '3.2 MB',
      format: 'PDF',
      downloadCount: 567,
      image: resource4,
      link: generateRandomLink('resources', 3)
    }
  ];

  // Category sections configuration
  const sections = [
    {
      id: 'news',
      title: 'Latest News',
      icon: Newspaper,
      items: newsItems,
      viewAllLink: '/insights/news'
    },
    {
      id: 'events',
      title: 'Upcoming Events',
      icon: Calendar,
      items: eventsItems,
      viewAllLink: '/insights/events'
    },
    {
      id: 'articles',
      title: 'Featured Articles',
      icon: FileText,
      items: articlesItems,
      viewAllLink: '/insights/articles'
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: Download,
      items: resourcesItems,
      viewAllLink: '/insights/resources'
    }
  ];

  return (
    <main className="pt-12 md:pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-10 md:py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-primary mb-4">
              Insights
            </h1>
            <p className="text-lg font-medium text-secondary mb-2">
              News, events, articles, and resources to keep you informed about workforce wellness and performance optimization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sections.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                {/* Section Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <a
                    href={section.viewAllLink}
                    className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1 group"
                  >
                    View All
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Section Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {section.items.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover block"
                    >
                      {/* Image */}
                      <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content - Different layouts based on section type */}
                      <div className="p-5">
                        {section.id === 'news' && (
                          <>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {item.date}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {item.readTime}
                              </span>
                            </div>
                            <h3 className="text-base font-display font-semibold text-gray-900 mb-2 line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {item.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1 text-xs text-gray-500">
                                <User className="h-3 w-3" />
                                {item.author}
                              </span>
                              <span className="text-primary text-sm font-medium group-hover:gap-1 inline-flex items-center gap-0 transition-all">
                                Read More
                                <ArrowRight className="h-3 w-3" />
                              </span>
                            </div>
                          </>
                        )}

                        {section.id === 'events' && (
                          <>
                            <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium mb-3">
                              {item.type}
                            </div>
                            <h3 className="text-base font-display font-semibold text-gray-900 mb-2 line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {item.description}
                            </p>
                            <div className="space-y-1 mb-3">
                              <div className="flex items-center gap-2 text-xs text-gray-600">
                                <Calendar className="h-3 w-3 text-primary" />
                                <span>{item.date}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-600">
                                <Clock className="h-3 w-3 text-primary" />
                                <span>{item.time}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-600">
                                {item.platform ? (
                                  <>
                                    <Play className="h-3 w-3 text-primary" />
                                    <span>{item.platform}</span>
                                  </>
                                ) : (
                                  <>
                                    <MapPin className="h-3 w-3 text-primary" />
                                    <span>{item.location}</span>
                                  </>
                                )}
                              </div>
                            </div>
                            <span className="text-primary text-sm font-medium group-hover:gap-1 inline-flex items-center gap-0 transition-all">
                              Register Now
                              <ArrowRight className="h-3 w-3" />
                            </span>
                          </>
                        )}

                        {section.id === 'articles' && (
                          <>
                            {item.featured && (
                              <div id="featured" className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                                Featured
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {item.date}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {item.readTime}
                              </span>
                            </div>
                            <h3 className="text-base font-display font-semibold text-gray-900 mb-2 line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {item.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1 text-xs text-gray-500">
                                <User className="h-3 w-3" />
                                {item.author}
                              </span>
                              <span className="text-primary text-sm font-medium group-hover:gap-1 inline-flex items-center gap-0 transition-all">
                                Read Article
                                <ArrowRight className="h-3 w-3" />
                              </span>
                            </div>
                          </>
                        )}

                        {section.id === 'resources' && (
                          <>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                <FileText className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <span className="text-xs text-primary font-medium">{item.type}</span>
                                <h3 className="text-sm font-display font-semibold text-gray-900 line-clamp-1">
                                  {item.title}
                                </h3>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                              {item.description}
                            </p>
                            <div className="flex items-center justify-between text-xs mb-3">
                              <span className="text-gray-500">{item.format} • {item.fileSize}</span>
                              <span className="text-gray-500">{item.downloadCount.toLocaleString()} downloads</span>
                            </div>
                            <span className="text-primary text-sm font-medium group-hover:gap-1 inline-flex items-center gap-0 transition-all">
                              Download
                              <Download className="h-3 w-3 ml-1" />
                            </span>
                          </>
                        )}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-display font-semibold text-primary mb-3">
              Trusted By | Worked With
            </h2>
            <p className="text-secondary font-medium max-w-2xl mx-auto">
              We're proud to partner with leading organizations across East Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trustedPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center group hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                  <Building2 className="h-8 w-8 text-primary/60 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-medium text-gray-900 text-sm">{partner.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{partner.category}</p>
              </motion.div>
            ))}
          </div>

          {/* Partner CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Become a partner
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-semibold text-secondary mb-3">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest insights, events, and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default InsightsPage;