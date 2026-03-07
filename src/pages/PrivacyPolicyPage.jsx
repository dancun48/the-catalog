import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, Clock, CheckCircle } from 'lucide-react';

const PrivacyPolicyPage = () => {

  const lastUpdated = new Date('2026-03-07T00:00:00Z');
  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: 'We collect information you provide directly to us, such as when you create an account, book a consultation, or communicate with us. This may include your name, email address, phone number, company details, and health information relevant to our services.'
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: 'We use the information we collect to provide, maintain, and improve our services, to process your bookings, to communicate with you, and to personalize your experience. We may also use your information to send you updates, marketing communications, and service-related announcements.'
    },
    {
      title: 'Information Sharing and Disclosure',
      icon: Shield,
      content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.'
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: 'We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.'
    },
    {
      title: 'Your Rights',
      icon: CheckCircle,
      content: 'You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us using the information provided below.'
    },
    {
      title: 'Data Retention',
      icon: Clock,
      content: 'We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.'
    }
  ];

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              Last updated: {lastUpdated.toLocaleDateString()}
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Your privacy is important to us. This policy describes how we collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none mb-12"
          >
            <p className="text-gray-600 leading-relaxed">
              The Catalog ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
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
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-display font-semibold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-13">
                    {section.content}
                  </p>
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
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:privacy@thecatalog.co.tz" className="text-gray-700 hover:text-primary transition-colors">
                  privacy@thecatalog.co.tz
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-gray-700">
                  The Catalog, 123 Samora Avenue, Dar es Salaam, Tanzania
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
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;