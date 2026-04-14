import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  HelpCircle,
  FileText,
  DollarSign,
  Loader2
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  const [activeBookingType, setActiveBookingType] = useState('corporate');
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  // Web3Forms configuration
 const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Get the appropriate subject based on booking type
  const getFormSubject = () => {
    switch(activeBookingType) {
      case 'corporate':
        const selectedOption = corporateOptions.find(o => o.id === formData.bookingType);
        return `Corporate Booking: ${selectedOption?.title || 'Corporate Inquiry'}`;
      case 'online':
        const selectedConsultation = onlineOptions.find(o => o.id === formData.consultationType);
        return `Online Consultation: ${selectedConsultation?.title || 'Health Consultation'}`;
      case 'clinic':
        return 'Clinic Consultation Booking';
      default:
        return 'General Inquiry';
    }
  };

  // Prepare form data for Web3Forms
  const prepareFormData = () => {
    const formPayload = new FormData();
    
    // Required Web3Forms fields
    formPayload.append('access_key', WEB3FORMS_ACCESS_KEY);
    formPayload.append('subject', getFormSubject());
        
    // Add all form data
    formPayload.append('first_name', formData.firstName);
    formPayload.append('last_name', formData.lastName);
    formPayload.append('name', `${formData.firstName} ${formData.lastName}`);
    formPayload.append('email', formData.email);
    formPayload.append('phone', formData.phone);
    formPayload.append('company', formData.company || 'N/A');
    formPayload.append('preferred_date', formData.date);
    formPayload.append('preferred_time', formData.time);
    formPayload.append('message', formData.message);
    formPayload.append('booking_type', activeBookingType);
    
    // Add booking-specific fields
    if (activeBookingType === 'corporate') {
      formPayload.append('service_type', formData.bookingType);
      const selectedOption = corporateOptions.find(o => o.id === formData.bookingType);
      formPayload.append('service_title', selectedOption?.title || 'N/A');
    } else if (activeBookingType === 'online') {
      formPayload.append('consultation_type', formData.consultationType);
    } else if (activeBookingType === 'clinic') {
      formPayload.append('insurance_provider', formData.insurance || 'None');
    }
    
    // Add consent
    formPayload.append('consent', formData.consent ? 'Yes' : 'No');
    
    // Add timestamp
    formPayload.append('submitted_at', new Date().toISOString());
    
    return formPayload;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate consent
    if (!formData.consent) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please agree to the Privacy Policy, Terms & Conditions, and Refund Policy to proceed.'
      });
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: '' });
      }, 5000);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formPayload = prepareFormData();
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload
      });
      
      const result = await response.json();
      
      if (result.success) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Booking request sent successfully! We\'ll contact you within 24 hours.'
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          date: '',
          time: '',
          message: '',
          consent: false,
          bookingType: 'executive-briefing',
          consultationType: 'general',
          partnershipDuration: '3',
          requestQuotation: false,
          insurance: ''
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Something went wrong. Please try again or contact us directly via phone/WhatsApp.'
      });
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: '' });
      }, 5000);
    }
  };

    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, success: false, message: '' });
    }, 5000);

  const bookingTypes = [
    { 
      id: 'corporate', 
      label: 'Corporate Booking', 
      icon: Briefcase,
      description: 'Workforce performance optimization for organizations',
      link: '#corporate-booking'
    },
    { 
      id: 'online', 
      label: 'Online Consultation', 
      icon: Video,
      description: 'Remote consultations via Google Meet or WhatsApp',
      link: '#online-booking'
    },
    { 
      id: 'clinic', 
      label: 'Clinic Consultation', 
      icon: Stethoscope,
      description: 'In-person consultation with Dr. Erick G Otieno',
      link: '#clinic-booking'
    },
  ];

  const corporateOptions = [
    {
      id: 'executive-briefing',
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
      description: 'Comprehensive health consultation for general wellness and preventive care',
      platform: 'Tsh 35,000'
    },
    {
      id: 'counselling',
      title: 'Counselling Session',
      description: 'Professional counselling for mental wellness and emotional resilience',
      platform: 'Tsh 20,000'
    }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM'
  ];

  // Policy Links Component
  const PolicyLinks = ({ className = '' }) => (
    <div className={`flex flex-wrap gap-3 text-xs ${className}`}>
      <Link to="/privacy" className="text-secondary font-medium text-xs hover:text-primary transition-colors">
        Privacy Policy
      </Link>
      <span className="text-gray-300">|</span>
      <Link to="/terms" className="text-secondary font-medium text-xs hover:text-primary transition-colors">
        Terms & Conditions
      </Link>
      <span className="text-gray-300">|</span>
      <Link to="/refund" className="text-secondary  font-medium text-xs hover:text-primary transition-colors">
        Refund Policy
      </Link>
      <span className="text-gray-300">|</span>
      <Link to="/cookies" className="text-secondary font-medium text-xs hover:text-primary transition-colors">
        Cookies Policy
      </Link>
      <span className="text-gray-300">|</span>
      <Link to="/how-it-works#disclaimer" className="text-secondary font-medium text-xs hover:text-primary transition-colors">
        Medical Disclaimer
      </Link>
    </div>
  );

  // FAQ link helper
  const FAQLink = ({ children }) => (
    <Link 
      to="/faqs" 
      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium"
    >
      {children}
      <ExternalLink className="h-3 w-3" />
    </Link>
  );

  return (
    <>
    <Helmet>
      <title>The Catalog - Contact Us</title>
      <meta name="description" content="Get in touch with our team to optimize your workforce health." />
    </Helmet>
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-10">
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
            <p className="text-lg md:text-xl text-primary mb-8">
              Ready to optimize your workforce health? Get in touch with our team.
            </p>
            
            {/* Policy Quick Links */}
            <div className="mb-4">
              <PolicyLinks className="justify-center" />
            </div>
            
            {/* FAQ Quick Link */}
            <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full">
              <HelpCircle className="h-4 w-4 text-primary" />
              <span className="text-sm text-gray-700">Have questions? Visit our <FAQLink>FAQs page</FAQLink> for quick answers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-4 bg-white">
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
      <section id="book-now" className="py-8 bg-white border-y border-gray-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary">
              Book Appointment
            </h2>
            <p className="text-secondary mt-2">Corporate Booking | Online Consultation | Clinic Consultation</p>
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
              {formStatus.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                    formStatus.success 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}
                >
                  <CheckCircle className={`h-5 w-5 flex-shrink-0 ${
                    formStatus.success ? 'text-green-500' : 'text-red-500'
                  }`} />
                  <p className={`text-sm ${
                    formStatus.success ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {formStatus.message}
                  </p>
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
                        I agree to The Catalog's <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>,{' '}
                        <Link to="/terms" className="text-primary hover:underline">Terms & Conditions</Link>, and{' '}
                        <Link to="/refund" className="text-primary hover:underline">Refund Policy</Link> and consent to being contacted.
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        corporateOptions.find(o => o.id === formData.bookingType)?.cta || 'Submit Booking'
                      )}
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
                                <p className="text-sm text-primary mt-1">{option.description}</p>
                                <p className="text-xs text-secondary mt-2">Price: {option.platform}</p>
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
                        I agree to The Catalog's <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>,{' '}
                        <Link to="/terms" className="text-primary hover:underline">Terms & Conditions</Link>, and{' '}
                        <Link to="/refund" className="text-primary hover:underline">Refund Policy</Link> and consent to being contacted.
                      </label>
                    </div>

                    <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    onlineOptions.find(o => o.id === formData.bookingType)?.cta || 'Submit Booking'
                  )}
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
                        I agree to The Catalog's <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>,{' '}
                        <Link to="/terms" className="text-primary hover:underline">Terms & Conditions</Link>, and{' '}
                        <Link to="/refund" className="text-primary hover:underline">Refund Policy</Link> and consent to being contacted.
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
            <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-primary mb-4">
              Find Us Here
            </h2>
            <p className="text-md text-secondary font-medium max-w-2xl mx-auto">
              Visit our office at Golden Jubilee Towers or find us at DSB Polyclinic for in-person consultations.
            </p>
          </motion.div>

          <div className="text-center w-4/5 mx-auto">
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
                <p className="text-sm text-gray-600 mt-1 text-left">Upanga, Dar es Salaam (opposite Tambaza Mosque)</p>
              </div>
              <div className="h-80 bg-gray-100 relative">
                {/* Replace this with actual Google Maps embed */}
                <iframe 
                  title='DSB Polyclinic Location'
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7032334306405!2d39.27735119999999!3d-6.8059091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b9e6536c03d%3A0xffe584e8bd769d4a!2sDSB%20Polyclinic!5e0!3m2!1sen!2ske!4v1775096742324!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border:0}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className='absolute inset-0'
                  />
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">DSB Polyclinic, Upanga</p>
                    <p className="text-xs text-gray-500">Opposite Tambaza Mosque</p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/1wdCqHqvun3if8wd9"
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
                    <span className="text-gray-300">|</span>
                    <a href="tel:+255752854854" className="text-sm text-primary hover:underline">+255 752 854 854</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Summary Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/terms" className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <FileText className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Terms & Conditions</h3>
              <p className="text-sm text-gray-600">View our service terms and conditions</p>
            </Link>
            
            <Link to="/privacy" className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Privacy Policy</h3>
              <p className="text-sm text-gray-600">How we protect your information</p>
            </Link>
            
            <Link to="/refund" className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <DollarSign className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Refund Policy</h3>
              <p className="text-sm text-gray-600">Our refund and cancellation terms</p>
            </Link>
          </div>
        </div>
      </section>

{/* Support & Help Section */}
<section className="py-12 bg-primary/5">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-900 mb-3">
        Need Assistance?
      </h2>
      <p className="text-gray-600">
        We're here to help. Choose the option that works best for you.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      {/* FAQ Option */}
      <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Frequently Asked Questions
        </h3>
        <p className="text-gray-600 mb-6 text-sm">
          Find quick answers to common questions about our services, bookings, and policies.
        </p>
        <Link
          to="/faqs"
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
        >
          View FAQs
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* WhatsApp Option */}
      <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Instant Messaging
        </h3>
        <p className="text-gray-600 mb-6 text-sm">
          Chat with us on WhatsApp for quick responses to your inquiries.
        </p>
        <a
          href="https://wa.me/255746820288"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          WhatsApp Us
          <MessageCircle className="h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
</section>
</main>
</>
  );
};
export default ContactPage;
