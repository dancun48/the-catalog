import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Calendar, 
  Briefcase, 
  Download, 
  AlertCircle, 
  Mail, 
  Phone,
  Globe,
  Shield,
  RefreshCw,
  Building,
  User,
  CreditCard,
  FileText
} from 'lucide-react';

const RefundPolicyPage = () => {
  const lastUpdated = new Date('2026-03-01T00:00:00Z');

  const sections = [
    {
      title: 'General Policy',
      icon: DollarSign,
      content: 'Payments made for consultations, programs, or services are generally non-refundable, as they secure time, expertise, and service allocation. However, we recognize that certain situations may require flexibility, as outlined below.'
    },
    {
      title: 'Consultation Services (Individual Clients)',
      icon: User,
      subsections: [
        {
          subtitle: 'Rescheduling',
          content: 'Clients may request to reschedule a booked consultation if the request is made at least 12 hours before the scheduled session. Rescheduling is subject to availability.'
        },
        {
          subtitle: 'Late Cancellation / No-show',
          content: 'Missed appointments or cancellations made less than 12 hours before the session are non-refundable.'
        },
        {
          subtitle: 'Refund Eligibility',
          content: 'Refunds may be considered only if the service is not delivered due to an error on our (The Catalog Healthcare) side, or there is a verified technical failure preventing service delivery. Approved refunds will be processed within 5-10 business days.'
        }
      ]
    },
    {
      title: 'Corporate Services (Workshops / Programs)',
      icon: Building,
      subsections: [
        {
          subtitle: 'Cancellation',
          content: 'Cancellations must be made at least 3-5 business days in advance.'
        },
        {
          subtitle: 'Refund Terms',
          content: 'Refund eligibility depends on the stage of engagement. If preparation or resource allocation has already begun, partial refunds may apply. All corporate agreements may include specific terms outlined in a formal proposal or contract.'
        }
      ]
    },
    {
      title: 'Digital Products & Online Services',
      icon: Download,
      content: 'For any digital products (like e-books, PDFs), downloadable plans, or recorded sessions, payments are non-refundable once access has been granted.'
    },
    {
      title: 'Failed or Duplicate Payments',
      icon: AlertCircle,
      content: 'If a client is charged more than once, or a transaction fails but funds are deducted, please contact us immediately. Verified cases will be resolved and refunded accordingly.'
    },
    {
      title: 'Refund Process',
      icon: RefreshCw,
      content: 'To request a refund, clients must contact us via email (support@thecatalog.co.tz) or phone/WhatsApp (+255 746 820 288) and provide: full name, transaction reference, date, time and line of transaction (Mobile or Card), and reason for request. All requests are reviewed on a case-by-case basis.'
    },
    {
      title: 'Policy Updates',
      icon: FileText,
      content: 'The Catalog Healthcare reserves the right to update this Refund Policy at any time to reflect operational, legal, or service changes.'
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
              <DollarSign className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Refund Policy
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-4">
              Last updated: {lastUpdated.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-primary font-medium max-w-2xl mx-auto">
              Please review our refund policy carefully. We strive to provide clarity and fairness in all our transactions.
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
              The Catalog Healthcare ("we," "our," or "us") is committed to providing high-quality health and wellness services. This Refund Policy outlines the terms under which refunds may be issued for our services.
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
              Contact for Refund Requests
            </h2>
            <p className="text-gray-600 mb-6">
              For any refund-related inquiries or to submit a refund request, please contact us:
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
              <div className="mt-4 pt-3 border-t border-primary/20">
                <p className="text-sm text-gray-500">
                  Please include your full name, transaction reference, and reason for request when contacting us.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default RefundPolicyPage;