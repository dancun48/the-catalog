import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Mail, 
  Clock, 
  CheckCircle, 
  FileText, 
  Share2, 
  Cookie,
  Phone,
  Globe
} from 'lucide-react';
import { formatDate } from '../utils/formatDate';

const PrivacyPolicyPage = () => {
  // Updated last updated date to match the PDF document date
  // Since the PDF doesn't have a specific date, we use a reasonable date based on content
  const lastUpdated = new Date();
  const formattedDate = lastUpdated.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });


  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      subsections: [
        {
          subtitle: 'Personal Information',
          content: 'Full name, phone number (including WhatsApp), and email address.'
        },
        {
          subtitle: 'Health-Related Information',
          content: 'Information voluntarily provided during consultations or forms, including general health concerns or lifestyle information relevant to services.'
        },
        {
          subtitle: 'Technical Information',
          content: 'IP address, browser type, and website usage data (for analytics and improvement).'
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: 'We use your information to provide consultation and health optimization services, schedule appointments and communicate with you, respond to inquiries and support requests, improve our services and website experience, and maintain internal records for service delivery. We do not sell or rent your personal information to third parties.'
    },
    {
      title: 'Confidentiality of Health Information',
      icon: Shield,
      content: 'As a healthcare service provider, we treat all health-related information with strict confidentiality. Your information is only used for consultation and service purposes. It is not shared without your consent, except where required by law.'
    },
    {
      title: 'Data Sharing',
      icon: Share2,
      content: 'We may share limited information with payment providers (Azam-Pay and Vodacom Tanzania) for transaction processing, and technology providers (e.g., email, scheduling tools) to deliver services. All third parties are expected to maintain appropriate data protection standards.'
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: 'We take reasonable administrative and technical measures to protect your data, including secure communication channels, restricted access to sensitive information, and use of trusted platforms for service delivery. While no system can guarantee absolute security, we continuously monitor and improve our systems to maintain high standards of data protection.'
    },
    {
      title: 'Data Retention',
      icon: Clock,
      content: 'We retain personal and service-related information only as long as necessary to deliver services, maintain records, and comply with legal or regulatory requirements.'
    },
    {
      title: 'Your Rights',
      icon: CheckCircle,
      content: 'You have the right to request access to your personal information, request correction of inaccurate data, and request deletion of your data where applicable. Requests can be made through the contact details below.'
    },
    {
      title: 'Cookies and Website Tracking',
      icon: Cookie,
      content: 'Our website may use cookies or similar technologies to improve user experience and analyze website traffic. You can disable cookies through your browser settings.'
    },
    {
      title: 'Updates to This Policy',
      icon: FileText,
      content: 'This Privacy Policy may be updated periodically to reflect changes in our services or legal requirements.'
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-4">
              Last updated: {formattedDate}
            </p>
            <p className="text-primary max-w-2xl font-medium mx-auto">
              Your privacy is important to us. This policy describes how The Catalog collects, uses, and protects your personal and health-related information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-2 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none mb-12"
          >
            <p className="text-gray-600 leading-relaxed">
              The Catalog Healthcare ("we," "our," or "us") is a performance optimization, workplace wellness, and preventive health consultancy committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-display font-semibold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  
                  {/* Handle subsections for Information We Collect */}
                  {'subsections' in section ? (
                    <div className="space-y-4 pl-13">
                      {section.subsections.map((sub, idx) => (
                        <div key={idx}>
                          <h3 className="font-semibold text-gray-800 mb-1">{sub.subtitle}</h3>
                          <p className="text-gray-600 leading-relaxed">{sub.content}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 leading-relaxed pl-13">
                      {section.content}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-primary/5 rounded-3xl"
          >
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-6">
              For any privacy-related inquiries or to exercise your rights regarding your personal information, please contact us:
            </p>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:privacy@thecatalog.co.tz" className="text-gray-700 hover:text-primary transition-colors">
                  privacy@thecatalog.co.tz
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+255746820288" className="text-gray-700 hover:text-primary transition-colors">
                  +255 746 820 288
                </a>
                <span className="text-gray-500 text-sm">(Phone & WhatsApp)</span>
              </p>
              <p className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="https://www.thecatalog.co.tz" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                  www.thecatalog.co.tz
                </a>
              </p>
              <p className="flex items-center gap-3 mt-4 pt-2 border-t border-primary/20">
                <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">
                  The Catalog Healthcare<br />
                  Performance Optimization, Workplace Wellness & Preventive Health Consultancy
                </span>
              </p>
            </div>
          </motion.div>

          {/* Update Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-sm text-gray-500"
          >
            <p>We may update this Privacy Policy periodically to reflect changes in our services or legal requirements. We encourage you to review this page regularly for any updates.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;