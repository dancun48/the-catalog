import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Calendar, 
  Heart, 
  Activity, 
  Brain, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle2,
  Shield,
  Clock,
  Star,
  Phone,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  TrendingUp,
  Stethoscope,
  FileText,
  Download,
  CreditCard,
  Upload,
  RefreshCw
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

// images
import hero_1 from '../assets/images/optimiza/optimiza1.png';
import hero_2 from '../assets/images/optimiza/optimiza2.png';
import whoisthisfor from '../assets/images/optimiza/witf1.png'
import whoisthisfor2 from '../assets/images/optimiza/witf2.png'

const OptimizaPage = () => {

  const navigate = useNavigate();

  const heroImages = [
    {src: hero_1, alt: "Optimiza Hero 1"},
    {src: hero_2, alt: "Wellness assessment"}
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // auto-slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying){
      interval = setInterval (() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
      }, 2000); // for a 2 second delay
    };
    return () =>  clearInterval(interval);
       }, [isAutoPlaying, heroImages.length]);

    // manual navigation handlers
    const nextImage = () => {
      setIsAutoPlaying(false);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
      setTimeout(() => setIsAutoPlaying(true), 4000); // resume auto-play after 4 seconds
    }
    const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

    // variants for slide animation
    const slideVariants = {
      enter: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.95
      }),
      center : {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut'
        }
      },
      exit: (direction) => ({
        x: direction > 0 ? -300 : 300,
        opacity: 0,
        scale: 0.95,
        transition: {
          duration: 0.5,
          ease: 'easeOut'
        }
      })
    };

  // Services data
  const services = [
    {
      icon: Activity,
      title: "Comprehensive Health Check-Ups",
      description: "Tailored health screenings coordinated through leading laboratories and imaging partners — interpreted through a preventive and lifestyle medicine lens.",
      includes: ["Blood panels", "Metabolic screening", "Cardiovascular risk markers", "Hormonal profiling", "Executive panels"],
      cta: "Start My Check-Up",
      color: "primary"
    },
    {
      icon: Heart,
      title: "Preventive Medical Consultations",
      description: "Doctor-led consultations focused on early detection, chronic disease prevention, and long-term vitality.",
      includes: ["Preventive reviews", "Chronic advisory", "Second opinions", "Lifestyle prescriptions"],
      cta: "Book Consultation",
      color: "secondary"
    },
    {
      icon: Brain,
      title: "Lifestyle & Health Counselling",
      description: "Sustainable behavior change programs designed to optimize metabolism, mental resilience, and performance.",
      includes: ["Nutrition", "Weight management", "Diabetes lifestyle support", "Preventive health"],
      cta: "Start Counselling",
      color: "primary"
    }
  ];

  // How it works steps
  const steps = [
    { number: "01", title: "Book consultation", description: "Schedule your initial preventive health consultation online" },
    { number: "02", title: "Complete digital health assessment", description: "Fill out comprehensive health history and lifestyle questionnaire" },
    { number: "03", title: "Diagnostic referrals", description: "Get coordinated referrals to partner labs and imaging centers" },
    { number: "04", title: "Receive health intelligence report", description: "Review your comprehensive health analysis with our team" },
    { number: "05", title: "Start optimization plan", description: "Begin your personalized preventive health journey" }
  ];

  // Comparison data
  const comparison = [
    { traditional: "Treats illness", optimiza: "Prevents disease" },
    { traditional: "Facility dependent", optimiza: "Ecosystem coordinated" },
    { traditional: "Reactive care", optimiza: "Predictive care" },
    { traditional: "One-time visits", optimiza: "Continuous optimization" }
  ];

  // // Signature programs
  // const programs = [
  //   {
  //     title: "Optimiza Prime",
  //     description: "Full preventive health intelligence assessment with comprehensive diagnostics and personalized optimization plan.",
  //     icon: Shield
  //   },
  //   {
  //     title: "Metabolic Reset",
  //     description: "Weight & diabetes optimization pathway with lifestyle medicine approach and continuous monitoring.",
  //     icon: Activity
  //   },
  //   {
  //     title: "Executive Vitality",
  //     description: "Preventive care for high-performing leaders with priority access and personalized health strategy.",
  //     icon: Award
  //   }
  // ];

  // // Membership plans
  // const plans = [
  //   {
  //     name: "Annual Health Advisory",
  //     price: "Annual",
  //     features: ["Quarterly health reviews", "Preventive screenings", "Lifestyle optimization", "Digital health tracking"],
  //     cta: "Join Annual Plan"
  //   },
  //   {
  //     name: "Executive Retainer",
  //     price: "Premium",
  //     features: ["Priority consultations", "Executive health assessments", "24/7 health advisory", "Family coverage options"],
  //     cta: "Enquire Retainer",
  //     popular: true
  //   },
  //   {
  //     name: "Preventive Monitoring",
  //     price: "Monthly",
  //     features: ["Continuous health tracking", "Monthly check-ins", "Lifestyle coaching", "Early risk detection"],
  //     cta: "Start Monitoring"
  //   }
  // ];

  // // Testimonials
  // const testimonials = [
  //   {
  //     quote: "Health Optimiza transformed how I approach my wellbeing. The preventive focus caught issues I didn't know existed.",
  //     name: "James Mwangi",
  //     role: "CEO, Mwangi Enterprises",
  //     rating: 5
  //   },
  //   {
  //     quote: "Our executive team has never been healthier. The coordinated approach saves us time and delivers real results.",
  //     name: "Sarah Johnson",
  //     role: "HR Director, Tanzania Banking Corp",
  //     rating: 5
  //   },
  //   {
  //     quote: "Dr. Erick's approach to lifestyle medicine is revolutionary. Finally, healthcare that makes sense.",
  //     name: "Dr. Amina Hassan",
  //     role: "Medical Director",
  //     rating: 5
  //   }
  // ];

  return (
    <>
      <Helmet>
        <title>The Catalog - Health Optimiza</title>
        <meta name="description" content="Detect risk early. Optimize your health fully with our doctor-led preventive care and lifestyle medicine approach." />
      </Helmet>
    <main className="py-2">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center text-sm font-medium text-primary mb-4">
                <span className="w-8 h-[2px] bg-secondary mr-2"></span>
                <span className='text-secondary mr-1'>Powered by</span>Health Optimiza™
              </span>
              <h1 className="text-4xl max-w-lg font-display font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
                Not Sure About Your Health? <br/>
                Get<span className="text-primary"> Clear, Practical</span> Guidance Today.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Online consultations and lifestyle counselling to help you understand your health, manage concerns early and take the right next steps.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={()=> {navigate('/contact#book-now'); scrollTo(0,0)}}
                  className="bg-secondary px-6 py-2 rounded-xl text-sm group text-white hover:bg-secondary/80 duration-300 transition-easeOut">
                  Book | Consultation
                  <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={()=> {navigate('/contact'); scrollTo(0,0)}}
                  className="border-2 border-primary rounded-xl px-6 py-2 text-sm group hover:bg-primary/30 duration-300 transition-easeOut">
                  Start | Counselling
                  <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              
              {/* Quick stats */}
              <div className="flex items-center space-x-6 mt-12">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm text-gray-600">Doctor-led</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-secondary mr-2" />
                  <span className="text-sm text-gray-600">10+ Partners</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm text-gray-600">Online / In-person</span>
                </div>
              </div>
            </motion.div>
            
            <div className="relative">
              <motion.div
                initial={{opacity: 0, scale: 0.95}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.6, delay: 0.2}}
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <AnimatePresence initial={false} custom={1}>
                      <motion.div
                        key={currentImageIndex}
                        custom={1}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0"
                      >
                        <img 
                          src={heroImages[currentImageIndex].src} 
                          alt={heroImages[currentImageIndex].alt}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 z-10 backdrop-blur-sm"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5 text-gray-700" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 z-10 backdrop-blur-sm"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5 text-gray-700" />
                    </button>
                    
                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {heroImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setIsAutoPlaying(false);
                            setCurrentImageIndex(index);
                            setTimeout(() => setIsAutoPlaying(true), 5000);
                          }}
                          className={`transition-all duration-300 rounded-full ${
                            currentImageIndex === index
                              ? 'w-8 h-2 bg-primary'
                              : 'w-2 h-2 bg-white/60 hover:bg-white/80'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                
                {/* Image Counter Badge */}
                <div className="absolute -bottom-1 right-4 bg-white shadow-md rounded-full px-3 py-1 text-xs font-medium text-gray-600">
                  {currentImageIndex + 1} / {heroImages.length}
                </div>
              </motion.div>
            </div>
            </div>
            </div>
      </section>

      {/* Positioning Strip */}
      <section className="py-20 bg-white border-y border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
        <span className="text-sm font-medium text-primary">Personalized Care</span>
      </div>
      <h2 className="text-4xl font-display font-bold text-primary">
        Simple, Personal Health Support
      </h2>
      <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">
        Expert care tailored to your needs — from the comfort of your home
      </p>
    </motion.div>

    {/* Service Cards */}
    <div className="space-y-8">
      {/* Online Medical Consultations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-primary/5 to-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Main Service */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Online Medical Consultations</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Speak directly with a doctor about your symptoms, concerns, or ongoing conditions — without visiting a hospital.
            </p>
          </div>

          {/* Middle Column - What We Help With */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary"></span>
              We can help you with:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Understanding symptoms",
                "Second medical opinions",
                "Managing ongoing conditions (e.g. BP, diabetes)",
                "Interpreting lab results",
                "General health concerns"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="lg:col-span-1 flex justify-start lg:justify-end items-start">
            <button
              onClick={() => { navigate('/contact#book-now'); window.scrollTo(0, 0); }}
              className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 group shadow-md"
            >
              Book | Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Lifestyle & Health Counselling */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-secondary/5 to-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Main Service */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">Lifestyle & Health Counselling</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Guided sessions to help you improve your habits, manage stress, eat healthy and build a healthier daily routine.
            </p>
          </div>

          {/* Middle Column - What We Support */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-secondary"></span>
              We support you with:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Diabetes lifestyle Management",
                "Stress & Burnout Management",
                "Weight & Eating Habits",
                "Low Energy and Fatigue",
                "Lifestyle-related Conditions",
                "Building Sustainable Routines"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="lg:col-span-1 flex justify-start lg:justify-end items-start">
            <button
              onClick={() => { navigate('/contact#book-now'); window.scrollTo(0, 0); }}
              className="bg-secondary text-white px-6 py-3 rounded-xl font-medium hover:bg-secondary/90 transition-all duration-300 flex items-center gap-2 group shadow-md"
            >
              Start | Counselling
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Trust Badge */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="mt-12 text-center"
    >
      <div className="inline-flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full">
        <Shield className="h-4 w-4 text-primary" />
        <span className="text-sm text-gray-600">Secure, confidential, and doctor-led consultations</span>
      </div>
    </motion.div>
  </div>
</section>

      {/* Services Section */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Row - Who Is This For */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-medium text-primary">Who We Serve</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Who Is This For?
              </h3>
              <p className="text-secondary font-semibold mb-4 text-lg">This is FOR YOU if:</p>
              <ul className="space-y-3">
                {[
                  "You want quick medical advice without hospital visits",
                  "You need clarity about your health",
                  "You are managing a long-term condition",
                  "You want a second opinion",
                  "You want to improve your lifestyle and daily habits"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl w-[350px] overflow-hidden shadow-xs">
                <img 
                  src={whoisthisfor} 
                  alt="Health consultation" 
                  className="w-auto h-[300px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            </motion.div>
          </div>

          {/* Second Row - Why Health Optimiza */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="rounded-2xl w-[350px] overflow-hidden shadow-xs">
                  <img 
                    src={whoisthisfor2} 
                    alt="Health optimization" 
                    className="w-auto h-[300px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-medium text-secondary">Why Choose Us</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">
                Why Health Optimiza
              </h3>
              <ul className="space-y-3">
                {[
                  "Doctor-led consultations with licensed professionals",
                  "Personalized health optimization plans",
                  "Evidence-based preventive care",
                  "Coordinated diagnostic network",
                  "Lifestyle medicine approach for sustainable results"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <button
              onClick={() => { navigate('/contact#book-now'); window.scrollTo(0, 0); }}
              className="bg-secondary text-white px-8 py-4 rounded-xl inline-flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              Meet Your Doctor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
      {/* pricing section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-primary font-display font-bold text-gray-900 mb-4">
            Simple & Transparent Pricing
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Quality healthcare at fair prices. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <div className="mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Us?</h3>
              <p className="text-gray-600">Experience healthcare reimagined with convenience and expertise.</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { icon: Shield, title: "Private & Confidential", desc: "Your health information stays secure" },
                { icon: Clock, title: "No hospital queues", desc: "Skip the wait, get seen on time" },
                { icon: Brain, title: "Get clarity in one session", desc: "Clear diagnosis and actionable next steps" },
                { icon: Heart, title: "Follow-up available", desc: "Continuous care when you need it" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3 group p-3 rounded-xl hover:bg-white transition-all">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => { navigate('/contact#book-now'); window.scrollTo(0, 0); }}
              className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              Book | Session
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Column - Pricing Plans */}
          <div className="space-y-6">
            {/* General Health */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex flex-wrap justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Activity className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Online General Health</h3>
                  </div>
                  <p className="text-secondary font-medium mb-4">Duration: 30 minutes</p>
                  <ul className="space-y-2">
                    {["General medical consultation", "Symptom discussion", "Lab result(s) overview", "Clear next steps"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">Tsh 35,000</p>
                  <p className="text-xs text-gray-400">VAT Not Inclusive</p>
                  <button 
                    onClick={() => { navigate('/contact#book-now'); window.scrollTo(0, 0); }}
                    className="mt-3 text-primary text-sm font-medium hover:gap-2 inline-flex items-center gap-1 transition-all"
                  >
                    Book Now
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Counselling Session */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-full blur-2xl" />
              <div className="flex flex-wrap justify-between gap-4 relative">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Brain className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Online Counselling Session</h3>
                  </div>
                  <p className="text-secondary font-medium mb-4">Duration: 45 minutes</p>
                  <ul className="space-y-2">
                    {["Lifestyle and habit support", "Stress & mental wellbeing", "Nutrition and routine guidance", "Diabetic lifestyle support"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-secondary">Tsh 20,000</p>
                  <p className="text-xs text-gray-400">VAT Not Inclusive</p>
                  <button 
                    onClick={() => { navigate('/contact#book-now'); window.scrollTo(0, 0); }}
                    className="mt-3 text-secondary text-sm font-medium hover:gap-2 inline-flex items-center gap-1 transition-all"
                  >
                    Book Now
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Follow-up Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Follow-up Counselling", price: "Tsh 30,000", icon: Heart },
                { title: "Follow-up Consultation", price: "Tsh 20,000", icon: RefreshCw }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-primary/5 to-white rounded-2xl p-5 text-center border border-gray-100 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                    <p className="text-xl font-bold text-gray-900 mb-1">{item.price}</p>
                    <p className="text-xs text-gray-400 mb-3">VAT Not Inclusive</p>
                    <button 
                      onClick={() => { navigate('/contact#book-now'); window.scrollTo(0, 0); }}
                      className="text-primary text-sm font-medium hover:gap-2 inline-flex items-center gap-1 transition-all"
                    >
                      Book Now
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="text-center pt-2">
              <p className="text-xs text-gray-400">
                * All prices are in Tanzanian Shillings (Tsh) and exclusive of VAT (18%)
              </p>
              <p className="text-xs text-gray-400 mt-1">
                * Payments are processed securely via AzamPay
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Final CTA */}
      <section className="py-10 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-semibold text-white mb-6">
              Your Health Should NOT Wait for Illness.
            </h2>
            <p className="text-xl text-secondary font-medium mb-10">
              Start your preventive journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <button 
                onClick={()=> {navigate('/contact#book-now'); scrollTo(0,0)}}
                className="bg-white text-primary px-8 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Book | Consultation
              </button>
              <button 
                onClick={()=> {navigate('/contact#book-now'); scrollTo(0,0)}}
                className="border-2 border-white text-white px-8 py-2 rounded-full font-medium hover:bg-white/10 transition-colors">
                Start | Check-Up
              </button>
              <button 
                onClick={()=> {navigate('/contact#book-now'); scrollTo(0,0)}}
                className="border-2 border-white text-white px-8 py-2 rounded-full font-medium hover:bg-white/10 transition-colors">
                Speak to a Doctor
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Features Bar */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center"><Calendar className="h-4 w-4 mr-2 text-primary" /> Online Booking</span>
            <span className="flex items-center"><FileText className="h-4 w-4 mr-2 text-secondary" /> Intake Forms</span>
            <span className="flex items-center"><CreditCard className="h-4 w-4 mr-2 text-primary" /> Secure Payment</span>
            <span className="flex items-center"><MessageCircle className="h-4 w-4 mr-2 text-secondary" /> WhatsApp Chat</span>
            <span className="flex items-center"><Upload className="h-4 w-4 mr-2 text-primary" /> Lab Uploads</span>
            <span className="flex items-center"><Download className="h-4 w-4 mr-2 text-secondary" /> Report Portal</span>
          </div>
        </div>
      </section>
    </main>
      </>
  );
};

export default OptimizaPage;