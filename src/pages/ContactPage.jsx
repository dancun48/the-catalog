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
  Users,
  Briefcase,
  Heart,
  Activity,
  ArrowRight,
  ChevronRight,
  Star,
  Video,
  Building2,
  Shield,
  Stethoscope,
  ExternalLink,
  HelpCircle
} from 'lucide-react';

const ContactPage = () => {
  const [activeBookingType, setActiveBookingType] = useState('corporate');
  const [formData, setFormData] = useState({
    // Common fields
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    time: '',
    message: '',
    consent: false,
    
    // Booking specific
    bookingType: 'executive-briefing',
    consultationType: 'general',
    partnershipDuration: '3',
    requestQuotation: false,
    insurance: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

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
    setFormStatus({ 
      submitted: true, 
      success: true, 
      message: 'Booking request sent successfully! We\'ll contact you within 24 hours.' 
    });
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, success: false, message: '' });
    }, 5000);
  };

  const bookingTypes = [
    { 
      id: 'corporate', 
      label: 'Corporate Booking', 
      icon: Briefcase,
      description: 'Workforce performance optimization for organizations'
    },
    { 
      id: 'online', 
      label: 'Online Consultation', 
      icon: Video,
      description: 'Remote consultations via Google Meet or WhatsApp'
    },
    { 
      id: 'clinic', 
      label: 'Clinic Consultation', 
      icon: Stethoscope,
      description: 'In-person consultation with Dr. Erick G Otieno'
    },
  ];

  const corporateOptions = [
    {
      id: 'executive-briefing | custom quotation',
      title: 'Executive Briefing | Custom Quotation',
      description: 'Understanding before commitment is the key. Discussion to tailor Wellness Hive based on your organizational needs and customization for impact.',
      platform: 'Google Meet (Add to calendar) | Direct Call',
      cta: 'Schedule a Meeting',
      price: null
    },
    {
      id: 'executive-workshop',
      title: 'Wellness Hive™ Executive Workshop',
      description: 'The start of your organization performance optimization',
      price: 'Starting from TSH 2,500,000/=',
      cta: 'Request Quotation'
    },
    {
      id: 'performance-partnership',
      title: 'Wellness Hive™ Performance Partnership',
      description: 'Extend your organization performance optimization into culture change and sustainable systems with 3 | 6 | 12 Months partnership options.',
      price: 'Starting from TSH 6,900,000/=',
      cta: 'Request Quotation'
    }
  ];

  const onlineOptions = [
    {
      id: 'general-health',
      title: 'General Health Consultation',
      description: 'Comprehensive health consultation with our medical team',
      platform: 'Google Meet | WhatsApp Call'
    },
    {
      id: 'counselling',
      title: 'Counselling Session',
      description: 'Professional counselling for mental wellness and emotional resilience',
      platform: 'Google Meet | WhatsApp Call'
    }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM'
  ];

  // FAQ link helper
  const FAQLink = ({ children }) => (
    <a 
      href="/faqs" 
      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium"
    >
      {children}
      <ExternalLink className="h-3 w-3" />
    </a>
  );

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-10 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Ready to optimize your workforce health? Get in touch with our team.
            </p>
            
            {/* FAQ Quick Link */}
            <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full">
              <HelpCircle className="h-4 w-4 text-primary" />
              <span className="text-sm text-gray-700">Have questions? Visit our <FAQLink>FAQs page</FAQLink> for quick answers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Email */}
            <motion.a
              href="mailto:hello@thecatalog.co.tz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 text-center card-hover block"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Email Us</h3>
              <p className="text-sm text-gray-600 mt-1 break-all">hello@thecatalog.co.tz</p>
            </motion.a>

            {/* Phone & WhatsApp */}
            <motion.a
              href="tel:+255746820288"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-6 text-center card-hover block"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Phone Calls | WhatsApp</h3>
              <p className="text-sm text-gray-600 mt-1">+255 746 820 288</p>
              <p className="text-xs text-gray-500 mt-2">Click to call or WhatsApp</p>
            </motion.a>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Working Hours</h3>
              <p className="text-sm text-gray-600 mt-1">Mon – Fri: 9 AM – 4:00 PM</p>
              <p className="text-sm text-gray-600">Saturday: 9 AM – 1:30 PM</p>
              <p className="text-xs text-gray-500 mt-2">Sunday | Public Holidays - Closed</p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-6 text-center cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Location</h3>
              <p className="text-sm text-gray-600 mt-1">Golden Jubilee Towers – Posta</p>
              <p className="text-sm text-gray-600">(Under renovation)</p>
              <p className="text-sm text-gray-600">Dar es Salaam, Tanzania</p>
              <p className="text-xs text-primary mt-2">Click to view map ↓</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Type Selection */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-900">
              Book Appointment
            </h2>
            <p className="text-gray-600 mt-2">Corporate Booking | Online Consultation | Clinic Consultation</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {bookingTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveBookingType(type.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
                    activeBookingType === type.id
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">{type.label}</p>
                    <p className={`text-xs ${activeBookingType === type.id ? 'text-white/80' : 'text-gray-500'}`}>
                      {type.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Forms */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeBookingType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="p-6 md:p-8">
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
                {/* Corporate Booking Form */}
                {activeBookingType === 'corporate' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Select Corporate Service
                      </label>
                      <div className="space-y-3">
                        {corporateOptions.map((option) => (
                          <label
                            key={option.id}
                            className={`block p-4 border rounded-xl cursor-pointer transition-all ${
                              formData.bookingType === option.id
                                ? 'border-primary bg-primary/5 ring-1 ring-primary'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <input
                                type="radio"
                                name="bookingType"
                                value={option.id}
                                checked={formData.bookingType === option.id}
                                onChange={handleInputChange}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <p className="font-medium text-gray-900">{option.title}</p>
                                  {option.price && (
                                    <span className="text-primary font-semibold">{option.price}</span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                                {option.platform && (
                                  <p className="text-xs text-gray-500 mt-2">Platform: {option.platform}</p>
                                )}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Common Form Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="+255 746 820 288"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Any specific requirements or questions?"
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        required
                        className="mr-3"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I agree to The Catalog's <a href="/privacy" className="text-primary hover:underline">privacy policy</a> and consent to being contacted.
                      </label>
                    </div>

                    <button type="submit" className="w-full btn-primary py-4 text-base">
                      {corporateOptions.find(o => o.id === formData.bookingType)?.cta || 'Submit Booking'}
                    </button>
                  </>
                )}

                {/* Online Consultation Form */}
                {activeBookingType === 'online' && (
                  <>
                    <div className="bg-primary/5 rounded-xl p-4 mb-6">
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Platform:</span> Google Meet | WhatsApp Call
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Meet with the doctor remotely, anywhere, everywhere</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Select Consultation Type
                      </label>
                      <div className="space-y-3">
                        {onlineOptions.map((option) => (
                          <label
                            key={option.id}
                            className={`block p-4 border rounded-xl cursor-pointer transition-all ${
                              formData.consultationType === option.id
                                ? 'border-primary bg-primary/5 ring-1 ring-primary'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <input
                                type="radio"
                                name="consultationType"
                                value={option.id}
                                checked={formData.consultationType === option.id}
                                onChange={handleInputChange}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <p className="font-medium text-gray-900">{option.title}</p>
                                <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                                <p className="text-xs text-gray-500 mt-2">Platform: {option.platform}</p>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="+255 746 820 288"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        required
                        className="mr-3"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I agree to The Catalog's <a href="/privacy" className="text-primary hover:underline">privacy policy</a> and consent to being contacted.
                      </label>
                    </div>

                    <button type="submit" className="w-full btn-primary py-4 text-base">
                      Book Online Consultation
                    </button>
                  </>
                )}

                {/* Clinic Consultation Form */}
                {activeBookingType === 'clinic' && (
                  <>
                    <div className="bg-primary/5 rounded-xl p-4 mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Dr. Erick G Otieno, MD</h3>
                      <p className="text-sm text-gray-700">Visit the doctor in-person</p>
                      <div className="mt-3 space-y-2 text-sm">
                        <p className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>DSB Polyclinic – Upanga, Dar es Salaam (opposite Tambaza Mosque)</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>Tuesday & Thursday – 9:30 AM to 2:00 PM</span>
                        </p>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-xs font-medium text-gray-600 mb-2">Accepted Insurance:</p>
                        <div className="flex flex-wrap gap-2">
                          {['NHIF', 'Jubilee', 'GA Insurance', 'MO Assurance'].map(ins => (
                            <span key={ins} className="px-3 py-1 bg-white text-primary text-xs rounded-full border border-primary/20">
                              {ins}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-primary/10">
                        <p className="text-xs text-gray-600">Direct calls for clinic bookings:</p>
                        <div className="flex gap-4 mt-2">
                          <a href="tel:+255759854854" className="text-sm text-primary hover:underline">+255 759 854 854</a>
                          <span className="text-gray-300">|</span>
                          <a href="tel:+255752854854" className="text-sm text-primary hover:underline">+255 752 854 854</a>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="+255 746 820 288"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                          <option value="">Select time</option>
                          <option value="09:30 AM">09:30 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="10:30 AM">10:30 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="11:30 AM">11:30 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="12:30 PM">12:30 PM</option>
                          <option value="01:00 PM">01:00 PM</option>
                          <option value="01:30 PM">01:30 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Provider (Optional)</label>
                      <select
                        name="insurance"
                        value={formData.insurance}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select insurance provider</option>
                        <option value="NHIF">NHIF</option>
                        <option value="Jubilee">Jubilee</option>
                        <option value="GA">GA Insurance</option>
                        <option value="MO">MO Assurance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        required
                        className="mr-3"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I agree to The Catalog's <a href="/privacy" className="text-primary hover:underline">privacy policy</a> and consent to being contacted.
                      </label>
                    </div>

                    <button type="submit" className="w-full btn-primary py-4 text-base">
                      Book Clinic Consultation
                    </button>
                  </>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Find Us Here
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit our office at Golden Jubilee Towers or find us at DSB Polyclinic for in-person consultations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Office Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="p-4 bg-primary/5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h3 className="font-display font-semibold text-gray-900">Head Office</h3>
                </div>
                <p className="text-sm text-gray-600 mt-1">Golden Jubilee Towers – Posta (Under renovation)</p>
              </div>
              <div className="h-80 bg-gray-100 relative">
                {/* Replace this with actual Google Maps embed */}
                <iframe
                  title="Golden Jubilee Towers Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.987231527329!2d39.284515!3d-6.816519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnNTkuNSJTIDM5wrAxNycwNC4yIkU!5e0!3m2!1sen!2stz!4v1710000000000!5m2!1sen!2stz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Golden Jubilee Towers</p>
                    <p className="text-xs text-gray-500">Ohio Street, Dar es Salaam</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Golden+Jubilee+Towers+Dar+es+Salaam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline flex items-center gap-1"
                  >
                    Get Directions
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Clinic Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="p-4 bg-primary/5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-primary" />
                  <h3 className="font-display font-semibold text-gray-900">DSB Polyclinic</h3>
                </div>
                <p className="text-sm text-gray-600 mt-1">Upanga, Dar es Salaam (opposite Tambaza Mosque)</p>
              </div>
              <div className="h-80 bg-gray-100 relative">
                {/* Replace this with actual Google Maps embed */}
                <iframe
                  title="DSB Polyclinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.969806252029!2d39.276215!3d-6.818819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDknMDcuNyJTIDM5wrAxNiczOS4yIkU!5e0!3m2!1sen!2stz!4v1710000000000!5m2!1sen!2stz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">DSB Polyclinic, Upanga</p>
                    <p className="text-xs text-gray-500">Opposite Tambaza Mosque</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=DSB+Polyclinic+Dar+es+Salaam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline flex items-center gap-1"
                  >
                    Get Directions
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Location Details */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-medium text-gray-900 mb-3">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-900">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-900">9:00 AM - 1:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday & Holidays</span>
                  <span className="font-medium text-gray-500">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-medium text-gray-900 mb-3">Clinic Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tuesday</span>
                  <span className="font-medium text-gray-900">9:30 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Thursday</span>
                  <span className="font-medium text-gray-900">9:30 AM - 2:00 PM</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-2">Direct Clinic Bookings:</p>
                  <div className="flex gap-4">
                    <a href="tel:+255759854854" className="text-sm text-primary hover:underline">+255 759 854 854</a>
                    <a href="tel:+255752854854" className="text-sm text-primary hover:underline">+255 752 854 854</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA Section */}
      <section className="py-12 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-900 mb-3">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Visit our comprehensive FAQ page for answers to common questions about our services, bookings, and more.
          </p>
          <a
            href="/faqs"
            className="inline-flex items-center gap-2 btn-primary px-8 py-4 text-base"
          >
            View Frequently Asked Questions
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-display font-semibold text-gray-900 mb-2">
            Prefer instant messaging?
          </h2>
          <p className="text-gray-600 mb-6">
            Chat with us on WhatsApp for quick responses to your inquiries.
          </p>
          <a
            href="https://wa.me/255746820288"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-medium hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;