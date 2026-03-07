import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Users,
  Briefcase,
  Heart,
  Activity,
  ArrowRight,
  ChevronRight,
  Star
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    bookingType: 'consultation',
    preferredDate: '',
    preferredTime: '',
    message: '',
    consent: false
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [activeTab, setActiveTab] = useState('booking');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({ submitted: true, success: true, message: 'Booking request sent successfully! We\'ll contact you within 24 hours.' });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, success: false, message: '' });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        bookingType: 'consultation',
        preferredDate: '',
        preferredTime: '',
        message: '',
        consent: false
      });
    }, 5000);
  };

  const services = [
    { value: 'wellness-hive', label: 'Wellness Hive - Workforce Performance' },
    { value: 'optimiza-checkup', label: 'Optimiza - Health Check-Up' },
    { value: 'optimiza-consultation', label: 'Optimiza - Medical Consultation' },
    { value: 'optimiza-counselling', label: 'Optimiza - Health Counselling' },
    { value: 'podcast', label: 'Podcast Inquiry' },
    { value: 'corporate', label: 'Corporate Program' },
    { value: 'other', label: 'Other Inquiry' }
  ];

  const bookingTypes = [
    { value: 'consultation', label: 'Initial Consultation', icon: Users },
    { value: 'checkup', label: 'Health Check-Up', icon: Activity },
    { value: 'counselling', label: 'Counselling Session', icon: Heart },
    { value: 'corporate', label: 'Corporate Booking', icon: Briefcase }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const faqs = [
    {
      question: "How do I book a consultation?",
      answer: "You can book directly through this page by filling out the booking form, or contact us via phone or WhatsApp for immediate assistance."
    },
    {
      question: "What happens after I book?",
      answer: "You'll receive a confirmation email within 24 hours with your appointment details and any necessary pre-appointment instructions."
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes, we offer both in-person and virtual consultations via video call for your convenience."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 24 hours before your appointment can be rescheduled at no cost. Late cancellations may incur a fee."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Erick George Otieno",
      role: "Lead Preventive Health Physician",
      availability: "Mon-Fri, 9AM-5PM",
      image: "/team/dr-erick.jpg"
    },
    {
      name: "Sarah Mwangi",
      role: "Wellness Coordinator",
      availability: "Mon-Sat, 8AM-6PM",
      image: "/team/sarah.jpg"
    },
    {
      name: "James Omondi",
      role: "Corporate Health Specialist",
      availability: "Mon-Fri, 9AM-4PM",
      image: "/team/james.jpg"
    }
  ];

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Ready to optimize your workforce health? Book a consultation or send us a message.
            </p>
            
            {/* Quick contact stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-gray-600">Support Available</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-secondary">48h</p>
                <p className="text-sm text-gray-600">Avg. Response Time</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Phone, title: "Call Us", info: "+255 123 456 789", sub: "24/7 Support", href: "tel:+255123456789" },
              { icon: Mail, title: "Email Us", info: "hello@thecatalog.co.tz", sub: "24h Response", href: "mailto:hello@thecatalog.co.tz" },
              { icon: MapPin, title: "Visit Us", info: "Dar es Salaam", sub: "Tanzania", href: "#map" },
              { icon: MessageCircle, title: "WhatsApp", info: "Chat with us", sub: "Quick Response", href: "https://wa.me/255123456789" }
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-4 md:p-6 text-center card-hover block"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1">{item.info}</p>
                <p className="text-2xs md:text-xs text-gray-500 mt-1">{item.sub}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact/Booking Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form - Takes 2/3 of space */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('booking')}
                    className={`flex-1 py-4 px-6 text-sm font-medium transition-colors relative ${
                      activeTab === 'booking' 
                        ? 'text-primary' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Book Appointment
                    {activeTab === 'booking' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('message')}
                    className={`flex-1 py-4 px-6 text-sm font-medium transition-colors relative ${
                      activeTab === 'message' 
                        ? 'text-primary' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Send Message
                    {activeTab === 'message' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                </div>

                {/* Form */}
                <div className="p-4 md:p-8">
                  {formStatus.submitted && formStatus.success && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <p className="text-sm text-green-700">{formStatus.message}</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Booking Type Selection (shown only in booking tab) */}
                    {activeTab === 'booking' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          What would you like to book?
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {bookingTypes.map((type) => {
                            const Icon = type.icon;
                            return (
                              <label
                                key={type.value}
                                className={`relative flex flex-col items-center p-3 border rounded-xl cursor-pointer transition-all ${
                                  formData.bookingType === type.value
                                    ? 'border-primary bg-primary/5 ring-1 ring-primary'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="bookingType"
                                  value={type.value}
                                  checked={formData.bookingType === type.value}
                                  onChange={handleInputChange}
                                  className="sr-only"
                                />
                                <Icon className={`h-5 w-5 mb-1 ${
                                  formData.bookingType === type.value ? 'text-primary' : 'text-gray-400'
                                }`} />
                                <span className={`text-xs text-center ${
                                  formData.bookingType === type.value ? 'text-primary font-medium' : 'text-gray-600'
                                }`}>
                                  {type.label}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="+255 123 456 789"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Your Company Name"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors appearance-none bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date/Time Fields - shown only in booking tab */}
                    {activeTab === 'booking' && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            required={activeTab === 'booking'}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Time *
                          </label>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            required={activeTab === 'booking'}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          >
                            <option value="">Select time</option>
                            {timeSlots.map(time => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {activeTab === 'booking' ? 'Additional Notes' : 'Message *'}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required={activeTab === 'message'}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder={activeTab === 'booking' 
                          ? "Any specific requirements or questions?" 
                          : "How can we help you?"}
                      />
                    </div>

                    {/* Consent */}
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        required
                        className="mt-1 mr-3"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I agree to The Catalog's privacy policy and consent to being contacted about my inquiry.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full btn-primary py-4 text-base flex items-center justify-center gap-2 group"
                    >
                      {activeTab === 'booking' ? 'Book Appointment' : 'Send Message'}
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* WhatsApp alternative */}
                    <p className="text-center text-sm text-gray-500">
                      Prefer instant messaging?{' '}
                      <a 
                        href="https://wa.me/255123456789" 
                        className="text-secondary hover:text-secondary/80 font-medium inline-flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat on WhatsApp
                        <ChevronRight className="h-3 w-3" />
                      </a>
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar - Takes 1/3 of space */}
            <div className="lg:col-span-1 space-y-6">
              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-display font-semibold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-500">Closed</span>
                  </div>
                </div>
              </motion.div>

              {/* Quick FAQ */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="font-display font-semibold text-gray-900 mb-4">Quick FAQs</h3>
                <div className="space-y-4">
                  {faqs.slice(0, 2).map((faq, index) => (
                    <div key={index}>
                      <p className="text-sm font-medium text-gray-900 mb-1">{faq.question}</p>
                      <p className="text-xs text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                  <a href="/faq" className="text-primary text-sm font-medium inline-flex items-center gap-1 group">
                    View all FAQs
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* Team Members Preview */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6"
              >
                <h3 className="font-display font-semibold text-gray-900 mb-4">Speak with our team</h3>
                <div className="space-y-3">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{member.name}</p>
                        <p className="text-xs text-gray-600">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Dar es Salaam, we're easily accessible for in-person consultations.
            </p>
          </motion.div>

          <div className="bg-gray-100 rounded-3xl h-96 relative overflow-hidden">
            {/* Placeholder for actual map - replace with Google Maps embed or Mapbox */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="text-gray-600">Map for the office</p>
                <p className="text-sm text-gray-500">123 Samora Avenue, Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </div>

          {/* Address Details */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <p className="font-medium text-gray-900">Address</p>
              <p className="text-sm text-gray-600">123 Samora Avenue<br />Dar es Salaam, Tanzania</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-gray-900">Parking</p>
              <p className="text-sm text-gray-600">Free parking available<br />Accessible entrance</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-gray-900">Public Transport</p>
              <p className="text-sm text-gray-600">2 min walk from bus stop<br />Near CBD</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
              Ready to Transform Your Workforce Health?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join hundreds of companies that have optimized their workforce performance with The Catalog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Schedule a Call
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;