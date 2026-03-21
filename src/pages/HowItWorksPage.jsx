import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Building, 
  CheckCircle, 
  Calendar, 
  CreditCard, 
  Video, 
  Mail, 
  FileText,
  MessageSquare,
  TrendingUp,
  Stethoscope,
  AlertTriangle,
  Shield,
  Clock,
  ChevronRight,
  Phone,
  Globe,
  BookOpen,
  Award,
  Heart,
  ArrowRight
} from 'lucide-react';

const HowItWorksPage = () => {
  const [activeTab, setActiveTab] = useState('individual');

  const individualSteps = [
    { 
      step: 1, 
      title: 'Choose a Service', 
      icon: BookOpen, 
      description: 'Select an online consultation or digital product from our website.',
      details: 'Browse our services including preventive care, health optimization, and wellness programs.'
    },
    { 
      step: 2, 
      title: 'Submit Your Details', 
      icon: User, 
      description: 'Provide basic information including your contact details and health concern.',
      details: 'Share your name, phone number, email, and brief description of your health needs.'
    },
    { 
      step: 3, 
      title: 'Confirm Schedule', 
      icon: Calendar, 
      description: 'Date and time of appointment will be confirmed.',
      details: 'Choose a convenient time slot that works for your schedule.'
    },
    { 
      step: 4, 
      title: 'Secure Payment', 
      icon: CreditCard, 
      description: 'You receive a secure payment link via AzamPay (Mobile or card).',
      details: 'Payments are processed through trusted payment providers with full security.'
    },
    { 
      step: 5, 
      title: 'Consultation or Delivery', 
      icon: Video, 
      description: 'Sessions are via Google Meet or WhatsApp.',
      details: 'Connect with our licensed medical doctors from anywhere.'
    },
    { 
      step: 6, 
      title: 'Follow-Up', 
      icon: MessageSquare, 
      description: 'You may receive recommendations or guidance after your session.',
      details: 'Personalized health recommendations and ongoing support.'
    }
  ];

  const corporateSteps = [
    { 
      step: 1, 
      title: 'Submit an Inquiry', 
      icon: Mail, 
      description: 'Organizations contact us through the website or email.',
      details: 'Reach out with your organization\'s wellness needs and goals.'
    },
    { 
      step: 2, 
      title: 'Needs Assessment', 
      icon: FileText, 
      description: 'We review your requirements and align on objectives.',
      details: 'Our team analyzes your workplace wellness requirements.'
    },
    { 
      step: 3, 
      title: 'Proposal & Scope', 
      icon: TrendingUp, 
      description: 'Structured engagement plan is shared.',
      details: 'Receive a detailed proposal with timelines, deliverables, and pricing.'
    },
    { 
      step: 4, 
      title: 'Payment Process', 
      icon: CreditCard, 
      description: 'An invoice or payment link is issued via AzamPay.',
      details: 'Secure payment processing for corporate engagements.'
    },
    { 
      step: 5, 
      title: 'Service Delivery', 
      icon: Building, 
      description: 'Workshops, sessions, or programs are delivered as agreed.',
      details: 'Tailored wellness programs for your team.'
    },
    { 
      step: 6, 
      title: 'Post-Session Support', 
      icon: MessageSquare, 
      description: 'Follow-up or reporting may be provided where applicable.',
      details: 'Comprehensive reporting and ongoing support.'
    }
  ];

  const keyBenefits = [
    { icon: Stethoscope, title: 'Licensed Medical Doctors', description: 'All consultations are delivered by qualified healthcare professionals.' },
    { icon: Clock, title: 'Flexible Scheduling', description: 'Book appointments at times that work for you.' },
    { icon: Shield, title: 'Secure & Private', description: 'Your health information is kept strictly confidential.' },
    { icon: Award, title: 'Evidence-Based Care', description: 'Medical decisions based on clinical judgment and available data.' }
  ];

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              How It Works
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              A simple, structured process designed to guide you from inquiry to consultation
            </p>
            
            {/* Tab Switcher */}
            <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setActiveTab('individual')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === 'individual'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                <User className="inline-block w-4 h-4 mr-2" />
                Individual Clients
              </button>
              <button
                onClick={() => setActiveTab('corporate')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === 'corporate'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                <Building className="inline-block w-4 h-4 mr-2" />
                Corporate Clients
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps Section with Animation */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(activeTab === 'individual' ? individualSteps : corporateSteps).map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                        <div className="absolute -top-4 left-6 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                          {step.step}
                        </div>
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mt-4">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {step.description}
                        </p>
                        <p className="text-sm text-gray-500">
                          {step.details}
                        </p>
                      </div>
                      
                      {/* Connector Line (desktop only) */}
                      {index < (activeTab === 'individual' ? individualSteps.length : corporateSteps.length) - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                          <ChevronRight className="w-6 h-6 text-gray-300" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Note about payments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500 bg-gray-50 inline-block px-6 py-3 rounded-full">
              💡 Website payments are for online services ONLY
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-semibold text-gray-900 mb-4">
              Why Choose The Catalog Healthcare?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Medical Disclaimer Section */}
      <section id="disclaimer" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-amber-50 rounded-3xl p-8 border border-amber-200"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                  Medical Disclaimer
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    The services provided by <strong>The Catalog Healthcare</strong> are delivered by licensed medical doctors and include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Preventive health care</li>
                    <li>Medical consultations</li>
                    <li>Interpretation of laboratory results</li>
                    <li>Prescription of medication where clinically appropriate</li>
                    <li>Health optimization and lifestyle guidance</li>
                  </ul>
                  
                  <div className="bg-white rounded-xl p-4 mt-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Clinical Responsibility</h3>
                    <p>
                      All medical decisions, including treatment and medication use, are made based on clinical judgment, 
                      information provided by the client, and available medical data. Clients are encouraged to follow up 
                      appropriately and seek additional care where necessary.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Scope of Care</h3>
                    <p>
                      Consultations may be conducted online (Google Meet, phone, or WhatsApp) or in-person where applicable. 
                      Where necessary, clients may be referred for laboratory investigations or advised to seek in-person 
                      evaluation at appropriate healthcare facilities.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border-l-4 border-amber-500">
                    <h3 className="font-semibold text-gray-800 mb-2">Limitations of Service</h3>
                    <p>
                      While we provide professional medical guidance, our services:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Do not replace emergency medical care</li>
                      <li>May be limited by the absence of physical examination in remote consultations</li>
                      <li>Rely on the accuracy of information provided by the client</li>
                    </ul>
                    <p className="mt-3 font-medium text-amber-700">
                      For urgent or life-threatening conditions, clients should seek immediate care at a qualified medical facility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Consent Acknowledgment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-gray-50 rounded-2xl"
          >
            <div className="flex items-start gap-3">
              <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 italic leading-relaxed mb-3">
                  "I acknowledge that The Catalog Healthcare provides medical consultations, including preventive care, 
                  interpretation of laboratory results, and treatment recommendations where appropriate. I understand that 
                  online consultations may have limitations compared to in-person evaluations, and I agree to provide accurate 
                  information to support clinical decision-making. I consent to receive services under these conditions."
                </p>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 pt-2 border-t border-gray-200">
                  <span>By proceeding with any booking, you agree to our:</span>
                  <a href="/medical-disclaimer" className="text-primary hover:underline">Medical Disclaimer</a>
                  <span>•</span>
                  <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a>
                  <span>•</span>
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                  <span>•</span>
                  <a href="/refund" className="text-primary hover:underline">Refund Policy</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to get started?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors"
              >
                Book a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-xl hover:bg-primary/5 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorksPage;