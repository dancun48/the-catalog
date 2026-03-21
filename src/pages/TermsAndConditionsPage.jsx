import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  ClipboardList, 
  Calendar, 
  CreditCard, 
  Users, 
  UserCheck, 
  AlertTriangle, 
  Shield, 
  Lock, 
  Mail, 
  Phone,
  Globe,
  BookOpen,
  Briefcase,
  RefreshCw
} from 'lucide-react';
import { formatDate } from '../utils/formatDate';

const TermsAndConditionsPage = () => {
  const lastUpdated = new Date();
  const formattedDate = lastUpdated.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

  const sections = [
    {
      title: 'Services Overview',
      icon: ClipboardList,
      content: 'The Catalog Healthcare provides preventive and general health consultations, health optimization and lifestyle guidance, and workplace wellness and corporate programs. All services are delivered online (Google Meet, phone, or WhatsApp) or in-person where applicable.'
    },
    {
      title: 'Nature of Services',
      icon: BookOpen,
      content: 'Our services are intended for preventive and general health support, lifestyle and individual performance optimization, and workplace wellness and performance optimization. They are not a substitute for emergency medical care. If you are experiencing a medical emergency, you should seek immediate care from a qualified medical facility.'
    },
    {
      title: 'Appointments and Bookings',
      icon: Calendar,
      content: 'Clients are required to provide accurate information when booking. Appointments are confirmed only after booking approval (where applicable) and payment confirmation. The Catalog Healthcare reserves the right to reschedule appointments where necessary.'
    },
    {
      title: 'Payments',
      icon: CreditCard,
      content: 'All payments are processed through approved payment providers (Azam-Pay). Payment must be completed before service delivery unless otherwise agreed. Pricing for services is clearly communicated prior to payment.'
    },
    {
      title: 'Cancellations and Rescheduling',
      icon: RefreshCw,
      content: 'Clients may request rescheduling at least 12 hours before the session. Late cancellations or missed appointments are non-refundable. Further details are outlined in our Refund Policy.'
    },
    {
      title: 'Corporate Services',
      icon: Briefcase,
      content: 'For corporate clients, engagement terms may be defined in a separate agreement or proposal. Timelines, deliverables, and payment terms will be agreed upon before service delivery. Email will be the standard mode of confirmation for all corporate agreements.'
    },
    {
      title: 'Client Responsibility',
      icon: UserCheck,
      content: 'Clients are responsible for providing accurate and honest information, participating actively in consultations or programs, and following recommendations at their own discretion. Results may vary depending on individual circumstances.'
    },
    {
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: 'The Catalog Healthcare provides professional guidance based on available information. We are not liable for outcomes resulting from client decisions or misuse or misinterpretation of provided information.'
    },
    {
      title: 'Intellectual Property',
      icon: Shield,
      content: 'All content on this website, including text materials, frameworks, models, and resources, are the property of The Catalog Healthcare and may not be copied, reproduced, or distributed without permission.'
    },
    {
      title: 'Privacy',
      icon: Lock,
      content: 'Use of our services is also governed by our Privacy Policy, which outlines how personal data is collected and handled. For more details, please refer to the Privacy Policy section.'
    },
    {
      title: 'Changes to Terms',
      icon: FileText,
      content: 'The Catalog Healthcare reserves the right to update these Terms & Conditions at any time. Continued use of the website or services constitutes acceptance of any updates.'
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-4">
              Last updated: {formattedDate}
            </p>
            <p className="text-primary font-medium max-w-2xl mx-auto">
              Please read these terms carefully before using our services. By accessing our website or booking a consultation, you agree to be bound by these Terms & Conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none mb-12"
          >
            <p className="text-gray-600 leading-relaxed">
              The Catalog Healthcare ("we," "our," or "us") is a performance optimization, workplace wellness, and preventive health consultancy. These Terms & Conditions govern your use of our website and services. By accessing or using our services, you agree to comply with and be bound by these terms.
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
              Contact Information
            </h2>
            <p className="text-gray-600 mb-6">
              If you have any questions regarding these Terms & Conditions, please contact us:
            </p>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:support@thecatalog.co.tz" className="text-gray-700 hover:text-primary transition-colors">
                  support@thecatalog.co.tz
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
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditionsPage;