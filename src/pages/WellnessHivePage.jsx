import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Heart, 
  Shield, 
  TrendingUp, 
  Users,
  Activity,
  Zap,
  AlertTriangle,
  MessageCircle,
  Target,
  BarChart3,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  FileText,
  PenTool,
  LineChart,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Quote
} from 'lucide-react';

import wellnesshive from '../assets/images/hero/wh1.png';
import wellnesshive2 from '../assets/images/hero/wh3.png';
import wellnesshive3 from '../assets/images/hero/wh4.png';
import doc1 from '../assets/images/hero/doc1.jpeg';

import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const WellnessHivePage = () => {

  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);

   // Carousel images
  const carouselImages = [
    {
      src: wellnesshive,
      alt: "Workplace Wellness Session",
      title: "Wellness Hive™",
      description: "Transforming workplace cultures through science-driven wellness programs"
    },
    {
      src: wellnesshive2,
      alt: "Health Assessment",
      title: "Health Optimization",
      description: "Data-driven insights for peak performance"
    },
    {
      src: wellnesshive3,
      alt: "Leadership Training",
      title: "Leadership Excellence",
      description: "Developing resilient leaders for sustainable success"
    },
    {
      src: doc1,
      alt: "Expert Consultation",
      title: "Expert Guidance",
      description: "Doctor-led consultations for workforce wellbeing"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };
  
  // Performance drivers for WHPM
  const performanceDrivers = [
    { icon: Brain, name: "Mental Wellbeing", color: "primary" },
    { icon: Users, name: "Emotional Intelligence", color: "secondary" },
    { icon: Heart, name: "Preventive Health Awareness", color: "primary" },
    { icon: AlertTriangle, name: "Burnout Risk Management", color: "secondary" },
    { icon: TrendingUp, name: "Performance Optimization", color: "primary" }
  ];

  // Implementation roadmap steps
  const roadmapSteps = [
    { icon: PenTool, title: "Assessment", description: "Surveys, feedback, baselines, indexes", color: "primary" },
    { icon: Target, title: "Intervention", description: "Workshops, training, screening", color: "secondary" },
    { icon: BarChart3, title: "Measurement", description: "Track KPIs, analyze surveys, evaluate trends", color: "primary" },
    { icon: RefreshCw, title: "Optimization", description: "Refine programs, expand initiatives, strengthen leadership", color: "secondary" }
  ];

  // Key optimization areas
  const optimizationAreas = [
    "Mental Health & Burnout Prevention",
    "Emotional Intelligence & Leadership Behavior",
    "Smart Nutrition & Cognitive Performance",
    "Preventive Health & Screening",
    "Workplace Energy & Fatigue Management"
  ];

  // Core workshop areas
  const workshopAreas = [
    {
      title: "Mental Wellbeing & Workplace Resilience",
      description: "Helping employees manage stress, pressure, and emotional demands in modern work environments."
    },
    {
      title: "Emotional Intelligence for Leadership & Teams",
      description: "Strengthening communication, empathy, and collaboration across teams and leadership structures."
    },
    {
      title: "Preventing Burnout in High-Performance Work Environments",
      description: "Helping organizations recognize early signs of fatigue while supporting sustainable workforce resilience."
    },
    {
      title: "Preventive Health Awareness for Workforce Performance",
      description: "Educating employees on silent health risks that affect energy, focus, and productivity."
    }
  ];

  // Warning signs
  const warningSigns = [
    "Increasing signs of employee burnout or mental fatigue",
    "Declining engagement, motivation, or team morale",
    "Communication challenges between leaders and teams",
    "Employees struggling with stress, pressure, or emotional demands",
    "Rising concerns around workforce health and wellbeing",
    "Leadership teams seeking to build resilient, high-performing cultures"
  ];

  // Partnership formats
  const partnershipFormats = [
    { duration: "3-Month", title: "Performance Partnership", description: "Focused workforce wellbeing activation." },
    { duration: "6-Month", title: "Performance Partnership", description: "Structured workforce resilience and leadership development." },
    { duration: "12-Month", title: "Performance Partnership", description: "Comprehensive organizational wellbeing and performance optimization." }
  ];

  // Helper function to get color classes
  const getColorClass = (color, type = 'text') => {
    const colorMap = {
      primary: { text: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
      secondary: { text: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/20' }
    };
    return colorMap[color]?.[type] || colorMap.primary[type];
  };

  return (
    <>
      <Helmet>
        <title>The Catalog - Wellness Hive</title>
        <meta name="description" content="Workplace wellbeing and performance optimization systems powered by the Wellness Hive Performance Model™." />
      </Helmet>
      <main className="py-2">
      {/* Hero Section with Image Carousel */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                  <span className="inline-flex items-center text-sm font-medium text-primary mb-4">
                  <span className="w-8 h-[2px] bg-secondary mr-2"></span>
                  Powered by <span className="text-secondary">Wellness Hive</span>™ Performance Model
                </span>                
                <h1 className="text-4xl font-display font-bold tracking-tight leading-tight mb-6">
                  Workplace <span className="text-primary">Wellbeing</span> & 
                  <span className="text-secondary"> Performance</span> 
                  <br />
                  <span className="text-primary">Optimization</span> Systems
                </h1>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Helping organizations build healthier, resilient, and high-performing teams through science-driven wellbeing and performance optimization strategies.
                </p>
                
                <p className="text-primary font-medium italic mb-8 border-l-4 border-primary pl-4">
                  <span className='text-secondary'>Sustainable organizational performance</span> begins with human wellbeing.
                </p>
                
                <div className="flex flex-wrap gap-4 text-xs">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { navigate('/contact#book-now'); window.scrollTo(0, 0); }} 
                    className="bg-primary text-white px-6 py-4 rounded-xl font-medium group shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book | Corporate Consultation
                    <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }} 
                    className="bg-secondary text-white px-6 py-4 rounded-xl font-medium group shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Request | Program Overview
                    <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Content - Elegant Carousel */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
                ref={carouselRef}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="relative aspect-[4/3]"
                    >
                      <img 
                        src={carouselImages[currentSlide].src} 
                        alt={carouselImages[currentSlide].alt}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Slide Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">{carouselImages[currentSlide].title}</h3>
                        <p className="text-white/90 text-sm">{carouselImages[currentSlide].description}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-full p-2 transition-all duration-300"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-full p-2 transition-all duration-300"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>

                  {/* Auto-play Indicator */}
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 transition-all duration-300"
                  >
                    {isAutoPlaying ? (
                      <Pause className="h-4 w-4 text-white" />
                    ) : (
                      <Play className="h-4 w-4 text-white" />
                    )}
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setIsAutoPlaying(false);
                          setCurrentSlide(index);
                          setTimeout(() => setIsAutoPlaying(true), 10000);
                        }}
                        className={`transition-all duration-300 rounded-full ${
                          currentSlide === index
                            ? 'w-6 h-1.5 bg-white'
                            : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Part 1: Introducing Wellness Hive Performance Model™ */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm font-medium text-gray-500 mb-2 block"
              >
                Introducing
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-4xl font-display font-semibold tracking-tight text-primary mb-4"
              >
                Wellness Hive™ Performance Model
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-secondary max-w-3xl mx-auto mb-8"
              >
                A structured framework designed to translate science and wellbeing principles into measurable organizational performance metrics.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-5 gap-4 mb-12">
              {performanceDrivers.map((driver, index) => {
                const Icon = driver.icon;
                const textColor = getColorClass(driver.color, 'text');
                return (
                  <motion.div
                    key={driver.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 text-center card-hover"
                  >
                    <Icon className={`h-8 w-8 mx-auto mb-3 ${textColor}`} />
                    <span className="text-sm font-medium text-gray-900">{driver.name}</span>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-xl text-primary font-display italic border-t border-gray-200 pt-8">
                "Human performance is not accidental – it is designed."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Part 2: Hidden Cost of Unhealthy Workforce */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-4xl font-display font-semibold tracking-tight text-primary mb-4 text-center"
            >
              Hidden Cost of Unhealthy Workforce
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-secondary text-center mb-12"
            >
              Often silent but deeply affect performance
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { metric: "34%", label: "Productivity Loss", desc: "due to burnout", color: "primary" },
                { metric: "2.3x", label: "Healthcare Costs", desc: "higher for at-risk employees", color: "secondary" },
                { metric: "45%", label: "Turnover Risk", desc: "increase with low wellbeing", color: "primary" }
              ].map((stat, index) => {
                const textColor = getColorClass(stat.color, 'text');
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 text-center border border-gray-100"
                  >
                    <p className={`text-4xl font-display font-bold ${textColor} mb-2`}>{stat.metric}</p>
                    <p className="font-medium text-gray-900">{stat.label}</p>
                    <p className="text-sm text-gray-600">{stat.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Part 3: How We Deliver / Implementation Roadmap */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-4xl font-display font-semibold tracking-tight text-primary mb-4">
                How We Deliver
              </h2>
              <p className="text-secondary mt-2 max-w-3xl mx-auto">A System, Not Just a Program</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left side - 4 squares */}
              <div className="grid grid-cols-2 gap-4">
                {roadmapSteps.map((step, index) => {
                  const Icon = step.icon;
                  const bgColor = getColorClass(step.color, 'bg');
                  const borderColor = getColorClass(step.color, 'border');
                  const textColor = getColorClass(step.color, 'text');
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`${bgColor} rounded-xl p-6 border ${borderColor} card-hover`}
                    >
                      <Icon className={`h-8 w-8 ${textColor} mb-3`} />
                      <h3 className="font-display font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right side - portrait rectangle */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-display font-semibold mb-6">Key Optimization Areas</h3>
                <div className="space-y-4">
                  {optimizationAreas.map((area, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Part 4: Executive | Leadership Track */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl text-primary font-semibold max-w-2xl mx-auto">
                Wellness Hive™ Executive Workshops
              </h2>
              <p className="text-secondary mt-4 max-w-3xl mx-auto">
                High impact, evidence-based workshops designed to help organizations strengthen workforce wellbeing, leadership effectiveness and team performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 mb-12 border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className='font-bold text-primary mb-2'>Integrated With:</h3>
                    <p className="text-gray-600"><span className='text-secondary'>Wellness Hive™ </span>to deliver tailored, measurable, and impactful performance optimization to organizations of any size.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className='font-bold text-primary mb-2'>Structure:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Interactive | Expert-led sessions</li>
                      <li>Practical skills lab & drills</li>
                      <li>Q&A sessions | Open discussions</li>
                      <li>Leadership-focused discussions</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className='font-bold text-primary mb-2'>Delivery Mode:</h3>
                    <p className="text-gray-600">On-site | Virtual | Hybrid</p>
                  </div>
                                    <div className="border-t border-gray-200 pt-6">
                    <button 
                      onClick={() => { navigate('/contact#book-now'); window.scrollTo(0, 0); }}
                      className="btn-primary px-6 py-3"
                    >
                      Book | Workshop
                    </button>
                  </div>

                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">Core Workshop Areas</h3>
                  <div className="flex flex-col gap-6 mb-4">
                    {workshopAreas.map((area, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-gray-50 rounded-xl"
                      >
                        <h4 className="font-semibold text-primary/90 mb-2">{area.title}</h4>
                        <p className="text-sm text-gray-600">{area.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-center text-gray-600 mt-6 pt-4 border-t border-gray-100">
                Many organizations begin with workshop and later extend to <span className="text-secondary font-semibold">Wellness Hive™ Performance Partnership.</span>
              </p>
            </motion.div>

            {/* Signs Your Workforce May Benefit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-semibold text-primary mb-6 text-center">
                Signs Your Workforce May Benefit from a Performance Partnership
              </h2>
              <p className="text-secondary mb-6 text-center max-w-3xl mx-auto">
                Many early warning signs appear subtly before they begin to affect productivity, collaboration and workplace culture.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 items-start mb-6">
                <div className='bg-secondary/20 p-4 rounded-2xl'>
                  <p className="font-bold text-primary mb-4 text-center">Your organization may benefit from a Wellness Hive™ Performance Partnership if you are noticing:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {warningSigns.map((sign, index) => (
                      <div key={index} className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{sign}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Ready to take action?</h3>
                  <p className="text-gray-600 mb-4">Let's discuss how Wellness Hive can transform your organization's wellbeing culture.</p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => { navigate('/contact#book-now'); window.scrollTo(0, 0); }}
                      className="btn-primary px-6 py-2 text-sm"
                    >
                      Explore | Wellness Hive™ Performance Partnership
                    </button>
                    <button 
                      onClick={() => { navigate('/contact#book-now'); window.scrollTo(0, 0); }}
                      className="btn-outline px-6 py-2 text-sm"
                    >
                      Book | Corporate Consultation
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-secondary mb-8 text-center text-sm mx-auto mt-4 border-t pt-6">
                A structured wellbeing strategy helps address these risks early while strengthening the human foundations of long-term performance.
              </p>
            </motion.div>

            {/* Wellness Hive Performance Partnership™ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8"
            >
              <h2 className="text-center text-3xl font-display font-semibold text-primary mb-4">
                Wellness Hive™ Performance Partnership
              </h2>
              <p className="text-center text-secondary mb-4 max-w-3xl mx-auto">
                A structured in-depth workforce wellbeing and performance optimization engagement. Focusing on the human drivers that influence productivity, collaboration and long-term organizational performance.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className='flex flex-col'>
                  <h3 className="font-semibold text-gray-900 mb-3">What the Partnership Focuses On</h3>
                  <ul className="space-y-2">
                    {[
                      "Workforce mental wellbeing and resilience",
                      "Emotional intelligence for leadership and teams",
                      "Burnout risk awareness and prevention",
                      "Preventive health education",
                      "Sustainable workforce performance"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => { navigate('/contact#book-now'); window.scrollTo(0, 0); }}
                    className="btn-primary px-6 py-3 mt-10 text-sm self-start"
                  >
                    Start | Performance Partnership Conversation
                  </button>

                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Engagement Formats</h3>
                  <div className="space-y-3">
                    {partnershipFormats.map((format, index) => (
                      <div key={index} className="bg-white rounded-lg p-3">
                        <p className="font-medium text-gray-900">{format.duration} {format.title}</p>
                        <p className="text-sm text-gray-600">{format.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-center mt-6 text-sm border-t pt-6">
                <span className="text-secondary">The partnership helps organizations move beyond one-off workshops toward long-term workforce wellbeing systems.</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final Call To Action */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-4xl font-display font-semibold text-white mb-6">
                Build a Healthier, Higher-Performing Workforce
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Investing in workforce wellbeing is no longer optional. It is a strategic advantage.
              </p>
              <button 
                onClick={() => { navigate('/contact#book-now'); window.scrollTo(0, 0); }}
                className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors text-base group"
              >
                Book | Corporate Consultation
                <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WellnessHivePage;