import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Award,
  Briefcase,
  Star,
  CheckCircle2,
  ArrowRight,
  Quote,
  Linkedin,
  Mail,
  Globe
} from 'lucide-react';
import doc1 from '../assets/images/doc1.jpg';

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash links for scrolling to sections
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Team members data
  const teamMembers = [
    {
      name: "Dr. Erick George Otieno",
      role: "Founder & Chief Medical Officer",
      bio: "Preventive health physician focused on metabolic health, lifestyle medicine, and executive wellness with over 15 years of experience.",
      photo: doc1,
      linkedin: "#",
      email: "#"
    },
    {
      name: "Sarah Mwangi",
      role: "Director of Organizational Wellbeing",
      bio: "Organizational psychologist specializing in workplace mental health, emotional intelligence, and team dynamics.",
      photo: doc1,
      linkedin: "#",
      email: "#"
    },
    {
      name: "James Kimani",
      role: "Head of Performance Optimization",
      bio: "Expert in workforce performance metrics, data analytics, and behavioral science applications in corporate settings.",
      photo: doc1,
      linkedin: "#",
      email: "#"
    },
    {
      name: "Dr. Amina Hassan",
      role: "Lead Preventive Health Specialist",
      bio: "Lifestyle medicine practitioner with expertise in metabolic health, nutrition science, and chronic disease prevention.",
      photo: doc1,
      linkedin: "#",
      email: "#"
    },
    {
      name: "Michael Ochieng",
      role: "Director of Corporate Partnerships",
      bio: "Strategic partnership development with leading organizations across East Africa.",
      photo: doc1,
      linkedin: "#",
      email: "#"
    },
    {
      name: "Dr. Grace Nduku",
      role: "Senior Wellness Advisor",
      bio: "Public health specialist focused on workforce health education and preventive screening programs.",
      photo: doc1,
      linkedin: "#",
      email: "#"
    }
  ];

  // Core values
  const coreValues = [
    {
      icon: Heart,
      title: "Human-Centered",
      description: "We place human wellbeing at the center of everything we do, recognizing that healthy people build healthy organizations."
    },
    {
      icon: Shield,
      title: "Scientific Integrity",
      description: "Every program, recommendation, and system we build is rooted in evidence-based science and medical expertise."
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "We work alongside organizations as true partners, understanding their unique challenges and co-creating solutions."
    },
    {
      icon: Target,
      title: "Measurable Impact",
      description: "We are committed to delivering tangible, measurable results that translate directly to organizational performance."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We hold ourselves to the highest standards of quality, continuously refining our approach based on outcomes."
    },
    {
      icon: Globe,
      title: "Local Relevance",
      description: "Our solutions are designed for the Tanzanian and East African context, respecting cultural nuances and local realities."
    }
  ];

  // Milestones
  const milestones = [
    { year: "2018", title: "The Catalog Founded", description: "Started as a health intelligence platform" },
    { year: "2019", title: "First Corporate Partnership", description: "Partnered with leading financial institution" },
    { year: "2020", title: "Wellness Hive Launch", description: "Introduced workplace wellness programs" },
    { year: "2021", title: "Expanded to 50+ Organizations", description: "Rapid growth across East Africa" },
    { year: "2022", title: "Optimiza Platform Launch", description: "Preventive health optimization services" },
    { year: "2023", title: "Reached 100+ Corporate Partners", description: "Leading workplace wellness provider" },
    { year: "2024", title: "Wellness Hive Performance Model™", description: "Launched proprietary framework" },
    { year: "2025", title: "Regional Expansion", description: "Serving organizations across East Africa" }
  ];

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-semibold tracking-tight text-gray-900 mb-6">
              About The Catalog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We are a health intelligence platform committed to transforming how organizations approach workforce wellbeing and human performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary px-6 py-3">
                Meet Our Team
              </button>
              <button className="btn-outline px-6 py-3">
                View Our Impact
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8"
            >
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-3xl font-display font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create a future where every organization in East Africa builds emotionally intelligent, high-performance workforces through data-driven wellness systems.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic">
                  "We envision workplaces where human wellbeing and organizational performance are not competing priorities, but complementary forces."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8"
            >
              <Target className="h-12 w-12 text-secondary mb-4" />
              <h2 className="text-3xl font-display font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To translate science and wellbeing principles into measurable organizational performance metrics, helping businesses build healthier, more resilient, and higher-performing teams.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  We achieve this through medical-led, evidence-based systems that move beyond activities into structured wellbeing frameworks.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a simple insight to a movement transforming workplace health
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-1.5"></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                    <h3 className="text-xl font-display font-semibold text-gray-900 mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="core-values" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 card-hover"
              >
                <value.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-display font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate experts dedicated to your organization's wellbeing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div className="flex space-x-2">
                    <a href={member.linkedin} className="text-gray-400 hover:text-primary transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-primary transition-colors">
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-display font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-6">
                Why Organizations Trust Us
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Medical-led, evidence-based approach",
                  "Proven track record with 100+ organizations",
                  "Culturally relevant for East African context",
                  "Measurable ROI on wellbeing investments",
                  "Long-term partnership focus"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary px-6 py-3">
                Partner With Us
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-lg text-gray-700 italic mb-6">
                "The Catalog has transformed how we approach employee wellbeing. Their medical-led approach and measurable results make them an invaluable partner."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">James Mwangi</p>
                  <p className="text-sm text-gray-600">CEO, Mwangi Enterprises</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "100+", label: "Organizations" },
              { number: "50K+", label: "Employees Reached" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "7+", label: "Years of Impact" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.number}</p>
                <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
              Join Us in Building Healthier Workplaces
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Partner with us to transform your organization's approach to workforce wellbeing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Book a Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
                Download Company Profile
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;