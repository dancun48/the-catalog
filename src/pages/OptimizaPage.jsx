import React from 'react';
import { motion } from 'framer-motion';
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
  MessageCircle,
  TrendingUp,
  Stethoscope,
  FileText,
  Download,
  CreditCard,
  Upload
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import partner1 from '../assets/images/partner1.jpg';
import doctorerick from '../assets/images/doc1.jpeg';
import optimizahero from '../assets/images/optimiza-hero.jpg';
import { useNavigate } from 'react-router-dom';

const OptimizaPage = () => {

  const navigate = useNavigate();

  // partners data
  const partners = [
    { id: 1, name: "Partner 1", image: partner1 },
    { id: 2, name: "Partner 2", image: partner1 },
    { id: 3, name: "Partner 3", image: partner1 },
    { id: 4, name: "Partner 4", image: partner1 }
  ];

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

  // Signature programs
  const programs = [
    {
      title: "Optimiza Prime",
      description: "Full preventive health intelligence assessment with comprehensive diagnostics and personalized optimization plan.",
      icon: Shield
    },
    {
      title: "Metabolic Reset",
      description: "Weight & diabetes optimization pathway with lifestyle medicine approach and continuous monitoring.",
      icon: Activity
    },
    {
      title: "Executive Vitality",
      description: "Preventive care for high-performing leaders with priority access and personalized health strategy.",
      icon: Award
    }
  ];

  // Membership plans
  const plans = [
    {
      name: "Annual Health Advisory",
      price: "Annual",
      features: ["Quarterly health reviews", "Preventive screenings", "Lifestyle optimization", "Digital health tracking"],
      cta: "Join Annual Plan"
    },
    {
      name: "Executive Retainer",
      price: "Premium",
      features: ["Priority consultations", "Executive health assessments", "24/7 health advisory", "Family coverage options"],
      cta: "Enquire Retainer",
      popular: true
    },
    {
      name: "Preventive Monitoring",
      price: "Monthly",
      features: ["Continuous health tracking", "Monthly check-ins", "Lifestyle coaching", "Early risk detection"],
      cta: "Start Monitoring"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Health Optimiza transformed how I approach my wellbeing. The preventive focus caught issues I didn't know existed.",
      name: "James Mwangi",
      role: "CEO, Mwangi Enterprises",
      rating: 5
    },
    {
      quote: "Our executive team has never been healthier. The coordinated approach saves us time and delivers real results.",
      name: "Sarah Johnson",
      role: "HR Director, Tanzania Banking Corp",
      rating: 5
    },
    {
      quote: "Dr. Erick's approach to lifestyle medicine is revolutionary. Finally, healthcare that makes sense.",
      name: "Dr. Amina Hassan",
      role: "Medical Director",
      rating: 5
    }
  ];

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
                Health Optimiza™
              </span>
              <h1 className="text-4xl max-w-lg font-display font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
                Detect Risk Early.
                <span className="text-primary"> Optimize Your Health</span> Fully.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Doctor-led health check-ups, preventive consultations, and lifestyle counselling — coordinated through Tanzania's leading diagnostic partners.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary px-8 py-4 text-base group">
                  Book Consultation
                  <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-outline px-8 py-4 text-base">
                  Start Health Check-Up
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
                  <span className="text-sm text-gray-600">24/7 Care</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-[4/3] flex items-center justify-center">
                  <img src={optimizahero} alt="Optimiza Hero" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Positioning Strip */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Title Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <span className="text-primary text-sm font-medium">Our Philosophy</span>
              </div>
              <h2 className="text-4xl font-display font-bold tracking-tight text-gray-900 leading-tight mb-4">
                We don't run a <span className="text-secondary">hospital</span>.
              </h2>
              <p className="text-2xl font-medium text-primary mt-2">
                We run your health intelligence.
              </p>
              <p className="text-gray-600 mt-6 leading-relaxed">
                We believe in proactive health management over reactive treatment. 
                Our approach combines medical expertise with data-driven insights to 
                help you stay ahead of health challenges.
              </p>
              
              {/* Stat or Highlight */}
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary">95%</p>
                  <p className="text-xs text-gray-500">Client satisfaction</p>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-xs text-gray-500">Medical support</p>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-xs text-gray-500">Clients served</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Feature Grid with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Stethoscope, title: "Doctor-led assessments", description: "Licensed medical professionals" },
                { icon: Activity, title: "Partner diagnostic network", description: "Certified lab partners" },
                { icon: Heart, title: "Personalized prevention plans", description: "Tailored to your needs" },
                { icon: TrendingUp, title: "Lifestyle medicine focus", description: "Sustainable health habits" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-gray-50 rounded-2xl p-5 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-4xl text-primary">Our Services</h2>
            <p className="section-subtitle mt-4 text-secondary">
              Comprehensive preventive health solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 card-hover"
              >
                <div className={`w-14 h-14 bg-${service.color}/10 rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className={`h-7 w-7 text-${service.color}`} />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className={`h-4 w-4 text-${service.color} mr-2 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center text-primary font-medium group text-sm">
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="section-title text-4xl text-primary">How It Works</h2>
            <p className="section-subtitle mt-4 text-secondary">
              Your journey to optimal health in five simple steps
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-14 hidden lg:block" />
            
            <div className="grid lg:grid-cols-5 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative bg-gray-50 lg:bg-transparent p-6 lg:p-0 rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-semibold mx-auto mb-4 relative z-10">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={()=> {navigate('/contact'); scrollTo(0,0)}}
              className="btn-primary px-8 py-4 text-base">
              Begin My Health Journey
            </button>
          </div>
        </div>
      </section>

      {/* Diagnostic Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-3xl font-display font-semibold text-primary mb-3">Diagnostic Partner Ecosystem</h3>
            <p className="text-secondary max-w-2xl mx-auto">
              We coordinate your testing through Tanzania's most reputable diagnostic providers — ensuring accuracy and trusted results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner) => (
              <div key={partner.id} className="h-16 w-32 rounded-2xl flex items-center justify-center">
                <img src={partner.image} alt={partner.name} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Programs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-4xl text-primary">Signature Programs</h2>
            <p className="section-subtitle mt-4 text-secondary text-lg font-medium">
              Specialized health optimization pathways designed for specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 card-hover"
              >
                <program.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                <button className="text-primary font-medium text-sm group inline-flex items-center">
                  Explore Program
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-4xl">Why Health Optimiza</h2>
            <p className="section-subtitle mt-4">
              A fundamentally different approach to your health
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-2 gap-4 p-6 bg-gray-50 border-b border-gray-200">
              <div className="text-lg font-display font-semibold text-gray-900">Traditional Healthcare</div>
              <div className="text-lg font-display font-semibold text-primary">Health Optimiza</div>
            </div>
            {comparison.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-2 gap-4 p-6 border-b border-gray-100 last:border-0"
              >
                <div className="text-gray-600 flex items-center">
                  <span className="text-gray-400 mr-2">✕</span>
                  {item.traditional}
                </div>
                <div className="text-gray-900 font-medium flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-secondary mr-2" />
                  {item.optimiza}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Authority Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl md:text-3xl font-display font-semibold tracking-tight text-gray-900 mb-4">
                Led by Dr. Erick George Otieno
              </h2>
              <p className="text-lg text-primary mb-4">Preventive Health Physician</p>
              <p className="text-gray-600 mb-6">
                Focused on metabolic health, lifestyle medicine, and executive wellness. With over 15 years of experience in preventive medicine, Dr. Erick brings a comprehensive approach to health optimization.
              </p>
              <div className="space-y-3 mb-8">
                {["Preventive Medicine Specialist", "Lifestyle Medicine Practitioner", "Corporate Health Advisor"].map((cred) => (
                  <div key={cred} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-secondary mr-3" />
                    <span className="text-gray-700">{cred}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary px-8 py-4 text-base">
                Book with Dr. Erick
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
                <img src={doctorerick} alt="Dr. Erick George Otieno" className="w-full h-full object-cover rounded-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Health */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-gray-900 mb-4">
                  Corporate & Executive Health
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We support organizations to detect workforce health risks early and optimize employee vitality.
                </p>
                <button className="btn-primary px-8 py-4 text-base">
                  Enquire Corporate Services
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Risk Detection", "Vitality Programs", "Executive Assessments", "Team Wellness"].map((item) => (
                  <div key={item} className="bg-white rounded-xl p-4 text-center">
                    <span className="text-sm font-medium text-gray-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-4xl">What Our Clients Say</h2>
            <p className="section-subtitle mt-4">
              Real stories from real people
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 card-hover"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-4xl">Membership & Continuity Care</h2>
            <p className="section-subtitle mt-4">
              Choose the plan that fits your health journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 border ${
                  plan.popular ? 'border-primary shadow-xl' : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-primary mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full ${
                  plan.popular ? 'btn-primary' : 'btn-outline'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-4xl font-display font-semibold text-white mb-6">
              Your health should not wait for illness.
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Start your preventive journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Book Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
                Start Check-Up
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
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