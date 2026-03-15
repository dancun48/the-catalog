import React from 'react';
import { motion } from 'framer-motion';
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
  RefreshCw
} from 'lucide-react';
import wellnesshive from '../assets/images/wellnesshive.jpg';
import { Helmet } from 'react-helmet-async';

import { useNavigate } from 'react-router-dom';

const WellnessHivePage = () => {
  const navigate = useNavigate();
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

  return (
    <>
      <Helmet>
        <title>The Catalog - Wellness Hive</title>
        <meta name="description" content="Workplace wellbeing and performance optimization systems powered by the Wellness Hive Performance Model™." />
      </Helmet>
    <main className="py-2">
      {/* Hero Section - unchanged */}
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
                Powered by Wellness Hive™ Performance Model
              </span>
              <h1 className="text-4xl max-w-lg font-display font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
                Workplace Wellbeing & Performance Optimization Systems
              </h1>
              <p className="text-xl text-gray-600 mb-4 max-w-lg">
                Helping organizations build healthier, resilient, and high-performing teams through science-driven wellbeing and performance optimization strategies.
              </p>
              <p className="text-primary font-medium italic mb-8">
                Sustainable organizational performance begins with human wellbeing.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => {navigate('/contact#book-now'); scrollTo(0,0)}} className="btn-primary px-8 py-4 text-base group text-sm">
                  Book a Corporate Consultation
                  <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => {navigate('/contact'); scrollTo(0,0)}} className="btn-outline px-8 py-4 text-base text-sm">
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
                <div className=" flex items-center justify-center">
                  <span className="text-gray-400"><img src={wellnesshive} alt="Wellness Hive" className="w-full h-full object-cover rounded-2xl" /></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part 1: Introducing Wellness Hive Performance Model™ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary mb-2 block"
            >
              Introducing
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-4xl font-display font-semibold tracking-tight text-gray-900 mb-4"
            >
              Wellness Hive™ Performance Model
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              A structured framework designed to translate science and wellbeing principles into measurable organizational performance metrics.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {performanceDrivers.map((driver, index) => (
              <motion.div
                key={driver.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center card-hover"
              >
                <driver.icon className={`h-8 w-8 mx-auto mb-3 text-${driver.color}`} />
                <span className="text-sm font-medium text-gray-900">{driver.name}</span>
              </motion.div>
            ))}
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-4xl font-display font-semibold tracking-tight text-gray-900 mb-4 text-center"
          >
            Hidden Cost of Unhealthy Workforce
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 text-center mb-12"
          >
            Often silent but deeply affect performance
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: "34%", label: "Productivity Loss", desc: "due to burnout", color: "primary" },
              { metric: "2.3x", label: "Healthcare Costs", desc: "higher for at-risk employees", color: "secondary" },
              { metric: "45%", label: "Turnover Risk", desc: "increase with low wellbeing", color: "primary" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center border border-gray-100"
              >
                <p className={`text-4xl font-display font-bold text-${stat.color} mb-2`}>{stat.metric}</p>
                <p className="font-medium text-gray-900">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 3: How We Deliver / Implementation Roadmap */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-4xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              How We Deliver
            </h2>
            <p className="text-xl text-gray-600">Implementation Roadmap</p>
            <p className="text-primary font-medium mt-2">A System, Not Just a Program</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left side - 4 squares */}
            <div className="grid grid-cols-2 gap-4">
              {roadmapSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-${step.color}/5 rounded-xl p-6 border border-${step.color}/10 card-hover`}
                >
                  <step.icon className={`h-8 w-8 text-${step.color} mb-3`} />
                  <h3 className="font-display font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-4xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Executive | Leadership Track
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wellness Hive™ Executive Workshops
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 mb-12 border border-gray-100"
          >
            <p className="text-lg text-gray-700 mb-6">
              High-impact, evidence-based workshops designed to help organizations strengthen workforce wellbeing, leadership effectiveness, and team performance. Each workshop combines insight, practical strategies, and interactive discussion, enabling employees and leaders to apply the concepts directly within their work environments.
            </p>

            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">Core Workshop Areas</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {workshopAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-xl"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{area.title}</h4>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="font-medium text-gray-900 mb-2">Delivery Format – Customizable to organization requirements</p>
              <p className="text-gray-600 mb-2">• Interactive corporate workshops • Leadership-focused sessions • Open discussions • Q&A and practical workplace applications</p>
              <p className="text-gray-600 mb-4">Delivery Mode: On-site, Virtually or Hybrid</p>
              <button className="btn-primary px-6 py-3">
                Book a Workshop
              </button>
              <p className="text-sm text-gray-600 mt-4">
                Many organizations begin with a workshop and later extend the engagement through our Wellness Hive Performance Partnership™, a structured program designed to strengthen workforce wellbeing and organizational performance over time.
              </p>
            </div>
          </motion.div>

          {/* Signs Your Workforce May Benefit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 mb-12 border border-gray-100"
          >
            <h2 className="text-3xl font-display font-semibold text-gray-900 mb-6">
              Signs Your Workforce May Benefit from a Performance Partnership
            </h2>
            <p className="text-gray-700 mb-6">
              Modern organizations face increasing pressure to maintain performance while protecting employee wellbeing. Many of the early warning signs appear subtly before they begin to affect productivity, collaboration, and workplace culture.
            </p>
            <p className="font-medium text-gray-900 mb-4">Your organization may benefit from a Wellness Hive™ Performance Partnership™ if you are noticing:</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {warningSigns.map((sign, index) => (
                <div key={index} className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-700 mb-4">
              Forward-thinking organizations recognize that these challenges are not simply HR issues. They are organizational performance challenges.
            </p>
            <p className="text-gray-700 mb-6">
              A structured wellbeing strategy helps address these risks early while strengthening the human foundations of long-term performance.
            </p>

            <div className="flex gap-4">
              <button className="btn-primary px-6 py-3">
                Explore the Wellness Hive™ Performance Partnership™
              </button>
              <button className="btn-outline px-6 py-3">
                Book a Corporate Consultation
              </button>
            </div>
          </motion.div>

          {/* Wellness Hive Performance Partnership™ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-display font-semibold text-gray-900 mb-4">
              Wellness Hive™ Performance Partnership
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              A structured 3–12 month workforce wellbeing and performance optimization engagement.
            </p>
            <p className="text-gray-700 mb-6">
              The Wellness Hive Performance Partnership™ helps organizations strengthen workforce resilience, leadership effectiveness, and employee wellbeing through a structured, evidence-based approach. Designed for modern organizations, the partnership focuses on the human drivers that influence productivity, collaboration, and long-term organizational performance.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
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
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
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

            <p className="text-gray-700 mb-6">
              <span className="font-semibold">Why Organizations Choose the Performance Partnership™:</span> Because sustainable performance is built on healthy, resilient, and emotionally intelligent teams. The partnership helps organizations move beyond one-off workshops toward long-term workforce wellbeing systems.
            </p>

            <button className="btn-primary px-6 py-3">
              Start a Performance Partnership Conversation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Final Call To Action */}
      <section className="py-14 bg-gradient-to-br from-primary to-primary/90">
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
            <button className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors text-base group">
              Book a Corporate Consultation
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