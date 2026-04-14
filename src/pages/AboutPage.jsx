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
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import erick from '../assets/images/team/erick.png';
import mebu from '../assets/images/team/mebu.png';
import aseri from '../assets/images/team/aseri.png';
import irene from '../assets/images/team/irene.png';
import dancun from '../assets/images/team/dancun.jpeg';
import doc1 from '../assets/images/team/doc1.jpeg'

const AboutPage = () => {
  const navigate = useNavigate();
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
    bio: "General Physician with over 6+ years of clinical expertise, dedicated to leading The Catalog with a focus on workplace wellness, healthier nutrition and lifestyle medicine. He is passionate about inspiring healthier communities through practical, innovative health solutions.",
    photo: erick,
    linkedin: "https://linkedin.com/in/erick-otieno",
    email: "erick.otieno@thecatalog.health"
  },
  {
    name: "Dr. Hussein Mebu",
    role: "Director of Clinical Programs",
    bio: "General Physician adding 8 years of clinical and administrative experience to the team, he strongly focuses on mental health advocacy and wellness. Dedicated to promoting well-being, resilience, and healthier lifestyles through leadership and everyday inspiration.",
    photo: mebu,
    linkedin: "https://linkedin.com/in/hussein-mebu",
    email: "hussein.mebu@thecatalog.health"
  },
  {
    name: "Dr. Aseri Msagati",
    role: "Director of Corporate Wellness Programs",
    bio: "General Physician with over 7 years of clinical experience with focus in mental health and counseling. Committed to supporting workplace wellness and guiding individuals and teams toward balance and emotional well-being.",
    photo: aseri,
    linkedin: "https://linkedin.com/in/aseri-msagati",
    email: "aseri.msagati@thecatalog.health"
  },
  {
    name: "Dancun Otieno",
    role: "Founder & CEO — Ozyntria Tech",
    bio: "With more than 6+ years of IT experience, he brings technical expertise and creativity to The Catalog. Passionate about leveraging technology to make wellness solutions more accessible and impactful.",
    photo: dancun,
    linkedin: "https://linkedin.com/in/dancun-otieno",
    email: "ozyntriatec@gmail.com"
  },
  {
    name: "Irene Sangandele",
    role: "Public Relations Specialist",
    bio: "With 5+ years of experience in communications and public relations, she is passionate about using her expertise to create a positive impact, strengthen community engagement, and help The Catalog connect with people in ways that inspire healthier lives.",
    photo: irene,
    linkedin: "https://linkedin.com/in/irene-sangandele",
    email: "irene@thecatalog.health"
  },
  {
    name: "Francis Lusinde",
    role: "IT Specialist",
    bio: "With more than 15 years of IT experience, he brings technical expertise and creativity to The Catalog. Passionate about leveraging technology to make wellness solutions more accessible and impactful.",
    photo: doc1,
    linkedin: "https://linkedin.com/in/francis-lusinde",
    email: "francis.lusinde@thecatalog.health"
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

  // Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

  return (
    <>
      <Helmet>
        <title>The Catalog - About</title>
        <meta name="description" content="Learn about The Catalog's mission, vision, and values in transforming workplace wellbeing across East Africa." />
      </Helmet>
    <main className="py-2">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-display font-semibold tracking-tight text-gray-900 mb-6">
              About The Catalog
            </h1>
            <p className="text-md font-medium text-secondary mb-8">
              We are a health intelligence platform committed to transforming how organizations approach workforce wellbeing and human performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary px-6 py-3 text-sm">
                Meet Our Team
              </button>
              <button className="btn-outline px-6 py-3 text-sm">
                View Our Impact
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="py-10 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8"
            >
              <Eye className="h-10 w-10 text-secondary mb-2" />
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Our Vision</h2>
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
              <Target className="h-10 w-10 text-primary mb-2" />
              <h2 className="text-2xl font-display font-semibold text-secondary mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To translate science and wellbeing principles into measurable organizational performance metrics, helping businesses build healthier, more resilient, and higher-performing teams.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic">
                  "We achieve this through medical-led, evidence-based systems that move beyond activities into structured wellbeing frameworks."
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
            <h2 className="text-4xl font-display font-semibold tracking-tight text-primary mb-4">
              Our Story
            </h2>
            <p className="text-md text-secondary max-w-2xl mx-auto font-medium leading-relaxed">
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
                    <h3 className="text-md font-display font-semibold text-gray-900 mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="core-values" className="py-10 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-display font-semibold tracking-tight text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-md text-secondary max-w-2xl mx-auto font-medium leading-relaxed">
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

      <section id="our-team" className="py-10 bg-gradient-to-b from-white to-gray-50/50 scroll-mt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-semibold tracking-tight text-primary">
            The Catalog Team
          </h2>
          <p className="text-lg text-secondary max-w-2xl font-medium mx-auto leading-relaxed">
            Passionate experts dedicated to your organization's wellbeing
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Card inner container with gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Content */}
              <div className="relative p-8">
                {/* Photo and Social Links */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-white shadow-lg">
                      <img 
                        src={member.photo} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                  </div>
                  
                  <div className="flex space-x-2">
                    <motion.a 
                      href={member.linkedin} 
                      className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 group/social"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4 transition-transform duration-300 group-hover/social:scale-110" />
                    </motion.a>
                    <motion.a 
                      href={`mailto:${member.email}`} 
                      className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-secondary hover:text-white transition-all duration-300 group/social"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="h-4 w-4 transition-transform duration-300 group-hover/social:scale-110" />
                    </motion.a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-secondary bg-secondary/5 inline-block px-3 py-1 rounded-full">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Decorative corner line */}
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-16"
        />
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
      <section className="py-10 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-semibold text-white mb-6">
              Join Us in Building Healthier Workplaces
            </h2>
            <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto font-medium">
              Partner with us to transform your organization's approach to workforce wellbeing.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <button 
                onClick={()=>{navigate('/contact#book-now'); scrollTo(0,0)}}
                className="bg-white text-primary px-8 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Book | Consultation
              </button>
              <button 
                onClick={()=>{navigate('/insights#resources'); scrollTo(0,0)}}
                className="border-2 border-white text-white px-8 py-2 rounded-full font-medium hover:bg-white/10 transition-colors">
                Download Company Profile
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
};

export default AboutPage;