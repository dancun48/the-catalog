import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Heart, 
  Brain, 
  Shield, 
  Users, 
  Zap, 
  Target,
  BarChart3,
  Award,
  TrendingUp,
  Clock,
  AlertTriangle,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Building2,
  Landmark,
  Wifi,
  Factory,
  Globe
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const WellnessHivePage = () => {
  // Problem points
  const problems = [
    { icon: AlertTriangle, text: "Burnout and emotional fatigue", color: "text-red-500" },
    { icon: Heart, text: "Undetected metabolic health risks", color: "text-orange-500" },
    { icon: Brain, text: "Poor stress regulation", color: "text-purple-500" },
    { icon: Shield, text: "Low psychological safety", color: "text-blue-500" },
    { icon: MessageCircle, text: "Communication breakdowns", color: "text-primary" }
  ];

  // Key areas
  const keyAreas = [
    { icon: Heart, title: "Preventive health awareness", description: "Educating employees on silent health risks affecting performance" },
    { icon: Brain, title: "Mental wellbeing and resilience", description: "Strengthening stress management and emotional regulation" },
    { icon: Users, title: "Emotional intelligence development", description: "Improving communication and team dynamics" },
    { icon: MessageCircle, title: "Leadership communication skills", description: "Enhancing leadership effectiveness through better communication" },
    { icon: Zap, title: "Workforce energy management", description: "Supporting healthier energy, focus, and productivity" }
  ];

  // Framework pillars
  const pillars = [
    {
      icon: Brain,
      title: "Mental Wellbeing & Emotional Resilience",
      description: "Strengthening stress management and emotional regulation through evidence-based techniques and ongoing support.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Emotional Intelligence for Workplace Culture",
      description: "Improving communication, leadership effectiveness, and team dynamics through EI development programs.",
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Preventive Health Awareness & Screening",
      description: "Educating employees on silent health risks affecting performance and facilitating early detection.",
      color: "primary"
    },
    {
      icon: AlertTriangle,
      title: "Burnout Risk Detection",
      description: "Helping organizations identify and manage workforce fatigue early through predictive analytics.",
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "Workforce Performance Optimization",
      description: "Supporting healthier energy, focus, and productivity through systematic performance enhancement.",
      color: "primary"
    }
  ];

  // Program formats
  const formats = [
    {
      icon: Users,
      title: "Corporate Workshops",
      description: "Interactive sessions focused on workplace wellbeing and performance, tailored to your organization's needs.",
      features: ["Half-day to multi-day formats", "Interactive group sessions", "Practical skill-building"]
    },
    {
      icon: Award,
      title: "Leadership Development Sessions",
      description: "Emotional intelligence and communication programs designed specifically for organizational leaders.",
      features: ["Executive coaching", "Team leadership", "Strategic communication"]
    },
    {
      icon: Heart,
      title: "Preventive Health Awareness Programs",
      description: "Educational sessions addressing metabolic and lifestyle health risks that impact workforce performance.",
      features: ["Health screenings", "Risk awareness", "Lifestyle optimization"]
    },
    {
      icon: Briefcase,
      title: "Workforce Wellbeing Initiatives",
      description: "Customized engagements designed to address your organization's unique wellbeing challenges and goals.",
      features: ["Needs assessment", "Custom programming", "Impact measurement"]
    }
  ];

  // Why partner points
  const whyPartner = [
    { text: "Medical-led — All programs developed and overseen by healthcare professionals" },
    { text: "Evidence-based — Rooted in scientific research and proven methodologies" },
    { text: "Practical and actionable — Real-world tools employees can use immediately" },
    { text: "Designed for real workplace environments — Flexible, scalable, and culturally appropriate" }
  ];

  // Target sectors
  const sectors = [
    { icon: Landmark, name: "Financial institutions", description: "Banks, insurance companies, investment firms" },
    { icon: Wifi, name: "Telecommunications companies", description: "Mobile network operators, tech companies" },
    { icon: Factory, name: "Mining and energy sector", description: "Extractive industries, energy providers" },
    { icon: Building2, name: "Corporate enterprises", description: "Multinationals, large local corporations" },
    { icon: Globe, name: "Government institutions", description: "Public sector organizations, parastatals" }
  ];

  return (
    <>
    <Helmet>
      <title>The Catalog - Wellness Hive</title>
      <meta name="description" content="Transform your organization's wellbeing and performance with our science-driven workplace wellness systems." />
    </Helmet>
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center text-sm font-medium text-primary mb-4">
                <span className="w-8 h-[2px] bg-secondary mr-2"></span>
                Wellness Hive
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
                Workplace Wellbeing & Performance Optimization Systems
              </h1>
              <p className="text-xl text-gray-600 mb-4 max-w-lg">
                Helping organizations build healthier, resilient, and high-performing teams through science-driven wellbeing and performance optimization strategies.
              </p>
              <p className="text-primary font-medium italic mb-8">
                Sustainable organizational performance begins with human wellbeing.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary px-8 py-4 text-base group">
                  Book a Corporate Consultation
                  <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-outline px-8 py-4 text-base">
                  Request Program Overview
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-gray-400">[Workplace wellness imagery]</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary mb-2 block">The Problem</span>
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-6">
                The Hidden Cost of Workforce Health
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Many workplace health risks are silent but deeply affect performance.
              </p>
              
              <div className="space-y-4 mb-8">
                {problems.map((problem, index) => (
                  <motion.div
                    key={problem.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <problem.icon className={`h-5 w-5 ${problem.color} mr-3 flex-shrink-0`} />
                    <span className="text-gray-700">{problem.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-lg font-medium text-primary border-l-4 border-secondary pl-4 italic">
                Organizations need more than wellness activities. They need structured wellbeing systems.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">Impact on Organizations</h3>
                  <div className="space-y-6">
                    {[
                      { label: "Productivity Loss", value: "34%", desc: "due to burnout" },
                      { label: "Healthcare Costs", value: "2.3x", desc: "higher for at-risk employees" },
                      { label: "Turnover Risk", value: "45%", desc: "increase with low wellbeing" }
                    ].map((stat, index) => (
                      <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0">
                        <div>
                          <p className="font-medium text-gray-900">{stat.label}</p>
                          <p className="text-sm text-gray-600">{stat.desc}</p>
                        </div>
                        <span className="text-2xl font-display font-semibold text-primary">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introducing Wellness Hive */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary mb-2 block">Introducing</span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              A New Model for Workplace Wellbeing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wellness Hive is The Catalog Healthcare's workplace health and performance optimization platform designed to help organizations measure, strengthen, and sustain workforce wellbeing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {keyAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100 card-hover"
              >
                <area.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-2xl font-display font-semibold text-primary">
              Healthier people. Stronger teams. Better performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Wellness Hive Framework */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              The Wellness Hive Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A System, Not Just a Program
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 border border-gray-100 card-hover ${
                  index % 3 === 1 ? 'lg:translate-y-8' : ''
                }`}
              >
                <div className={`w-14 h-14 bg-${pillar.color}/10 rounded-xl flex items-center justify-center mb-6`}>
                  <pillar.icon className={`h-7 w-7 text-${pillar.color}`} />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Formats */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Flexible Solutions for Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the format that best fits your organization's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {formats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 card-hover"
              >
                <format.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">{format.title}</h3>
                <p className="text-gray-600 mb-4">{format.description}</p>
                <ul className="space-y-2">
                  {format.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Organizations Partner With Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-6">
                A Different Approach to Workplace Wellbeing
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Most workplace wellness initiatives focus on activities. Wellness Hive focuses on systems and measurable impact.
              </p>
              
              <div className="space-y-4 mb-8">
                {whyPartner.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-xl font-medium text-primary border-l-4 border-secondary pl-4">
                Organizational performance begins with human wellbeing.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-display font-semibold mb-4">Measurable Impact</h3>
                <div className="space-y-6">
                  {[
                    { metric: "85%", label: "Reduction in burnout risk" },
                    { metric: "92%", label: "Improved team communication" },
                    { metric: "78%", label: "Better stress management" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-white/20 pb-4 last:border-0">
                      <span className="text-white/90">{item.label}</span>
                      <span className="text-3xl font-display font-bold">{item.metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Designed for Forward-Thinking Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partnering with leading organizations across sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center border border-gray-100 card-hover"
              >
                <sector.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-medium text-gray-900 text-sm mb-1">{sector.name}</h3>
                <p className="text-xs text-gray-500">{sector.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Partner Logos Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-gray-500 mb-6">Trusted by leading organizations across Tanzania</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-12 w-24 bg-gray-200 rounded-lg opacity-50 hover:opacity-100 transition-opacity" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About The Catalog Healthcare */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-medium text-primary mb-2 block">Part of</span>
                <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-6">
                  The Catalog Healthcare
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  A health intelligence platform focused on improving wellbeing and human performance through evidence‑based systems.
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { number: "500+", label: "Organizations" },
                    { number: "50K+", label: "Employees" },
                    { number: "95%", label: "Satisfaction" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl font-display font-semibold text-primary">{stat.number}</p>
                      <p className="text-xs text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-start p-4 bg-white rounded-xl">
                  <Target className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Organizational wellbeing and performance systems</h3>
                    <p className="text-sm text-gray-600">Comprehensive frameworks for workforce health</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-xl">
                  <Heart className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Preventive health optimization</h3>
                    <p className="text-sm text-gray-600">Early detection and lifestyle medicine</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-xl">
                  <Globe className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Public health education</h3>
                    <p className="text-sm text-gray-600">Community and workforce health awareness</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call To Action */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
              Build a Healthier, Higher-Performing Workforce
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Investing in workforce wellbeing is no longer optional. It is a strategic advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors text-base group">
                Book a Corporate Consultation
                <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Contact options */}
            <div className="flex items-center justify-center space-x-6 mt-12 text-white/80">
              <span className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2" />
                Quick response within 24h
              </span>
              <span className="flex items-center text-sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp consultation available
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <button className="hover:text-primary transition-colors">Download Brochure</button>
            <button className="hover:text-primary transition-colors">Schedule a Call</button>
            <button className="hover:text-primary transition-colors">View Case Studies</button>
            <button className="hover:text-primary transition-colors">Speak to an Advisor</button>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default WellnessHivePage;