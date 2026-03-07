import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  HelpCircle, 
  Mail, 
  MessageCircle,
  Phone,
  FileText,
  Users,
  Activity,
  CreditCard,
  Calendar
} from 'lucide-react';

const FAQsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState({});

  
  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'general', name: 'General', icon: FileText },
    { id: 'wellness-hive', name: 'Wellness Hive', icon: Users },
    { id: 'optimiza', name: 'Optimiza', icon: Activity },
    { id: 'bookings', name: 'Bookings', icon: Calendar },
    { id: 'payments', name: 'Payments', icon: CreditCard },
  ];

  const faqs = [
    // General
    {
      id: 1,
      category: 'general',
      question: 'What is The Catalog?',
      answer: 'The Catalog is a workforce performance optimization platform that provides data-driven wellness systems for organizations. We help build emotionally intelligent, high-performance workforces through our Wellness Hive and Optimiza services.'
    },
    {
      id: 2,
      category: 'general',
      question: 'Where are you located?',
      answer: 'We are headquartered in Dar es Salaam, Tanzania, with satellite offices across East Africa. Our primary office is located at 123 Samora Avenue, Dar es Salaam.'
    },
    {
      id: 3,
      category: 'general',
      question: 'What areas do you serve?',
      answer: 'We primarily serve organizations across East Africa, including Tanzania, Kenya, Uganda, Rwanda, and expanding to other African markets.'
    },

    // Wellness Hive
    {
      id: 4,
      category: 'wellness-hive',
      question: 'What is Wellness Hive?',
      answer: 'Wellness Hive is our workforce performance optimization service that helps organizations build emotionally intelligent, high-performance teams through data-driven wellness systems and measurable organizational performance.'
    },
    {
      id: 5,
      category: 'wellness-hive',
      question: 'How does Wellness Hive differ from traditional wellness programs?',
      answer: 'Unlike traditional wellness activities, Wellness Hive builds performance systems with measurable outcomes. We focus on burnout risk detection, preventive health analytics, leadership emotional intelligence, and energy optimization models.'
    },
    {
      id: 6,
      category: 'wellness-hive',
      question: 'How long does it take to see results?',
      answer: 'Most organizations begin seeing measurable improvements within 3-6 months, with significant cultural and performance shifts within the first year of implementation.'
    },

    // Optimiza
    {
      id: 7,
      category: 'optimiza',
      question: 'What is Optimiza?',
      answer: 'Optimiza is our health optimization service that offers doctor-led health check-ups, preventive consultations, and lifestyle counselling coordinated through Tanzania\'s leading diagnostic partners.'
    },
    {
      id: 8,
      category: 'optimiza',
      question: 'What health check-ups do you offer?',
      answer: 'We offer comprehensive health screenings including blood panels, metabolic screening, cardiovascular risk markers, hormonal profiling, and executive panels. All tests are coordinated through our partner diagnostic network.'
    },
    {
      id: 9,
      category: 'optimiza',
      question: 'Are consultations virtual or in-person?',
      answer: 'We offer both virtual and in-person consultations. Initial consultations can be done virtually, while physical examinations and diagnostic tests require in-person visits to our partner facilities.'
    },

    // Bookings
    {
      id: 10,
      category: 'bookings',
      question: 'How do I book a consultation?',
      answer: 'You can book through our website contact page, call us directly, or send a message on WhatsApp. We aim to respond to all booking inquiries within 24 hours.'
    },
    {
      id: 11,
      category: 'bookings',
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made 24 hours before your appointment can be rescheduled at no cost. Late cancellations (within 24 hours) may incur a 50% fee, and no-shows are charged the full amount.'
    },
    {
      id: 12,
      category: 'bookings',
      question: 'Can I book for my entire team?',
      answer: 'Yes! We offer corporate bookings for teams and organizations. Contact our corporate health specialist for customized packages and group rates.'
    },

    // Payments
    {
      id: 13,
      category: 'payments',
      question: 'What payment methods do you accept?',
      answer: 'We accept mobile money (M-Pesa, Tigo Pesa, Airtel Money), bank transfers, credit/debit cards, and corporate invoicing for organizational clients.'
    },
    {
      id: 14,
      category: 'payments',
      question: 'Do you accept insurance?',
      answer: 'We work with major health insurance providers in Tanzania. Please contact us with your insurance details to verify coverage before booking.'
    },
    {
      id: 15,
      category: 'payments',
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment plans for our signature programs and membership packages. Contact our team to discuss payment options that work for you.'
    },
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Find answers to common questions about our services, bookings, and more.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-gray-200 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                        openItems[faq.id] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openItems[faq.id] ? 'auto' : 0,
                      opacity: openItems[faq.id] ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No FAQs found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-semibold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Can't find the answer you're looking for? Please reach out to our friendly team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary px-8 py-4 text-base inline-flex items-center justify-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </a>
            <a
              href="https://wa.me/255123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-8 py-4 text-base inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
            <a
              href="tel:+255123456789"
              className="btn-outline px-8 py-4 text-base inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQsPage;