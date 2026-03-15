import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Briefcase, Globe } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const CoreServices = () => {

  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-4xl font-bold text-primary tracking-tight mb-2 block">
            How We Support Health & Performance
          </span>
          <p className="text-lg text-secondary">
            3 Core Service Areas Designed for impact at all levels of the community pyramid
          </p>
        </motion.div>

        {/* Service Areas - Exactly as shown in screenshot */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Individuals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-display font-semibold text-gray-900">Individuals</h3>
            </div>
            
            <h4 className="text-xl text-primary font-medium mb-4">Health Optimiza™</h4>
            <p className="text-gray-600 mb-4">Personalized doctor-led consultations & counselling focused on:</p>
            <ul className="space-y-2 mb-8">
              <li className="text-gray-700 flex items-start">
                <span className="text-primary mr-2">•</span>
                Preventive health
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-primary mr-2">•</span>
                Metabolic health
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-primary mr-2">•</span>
                Lifestyle medicine
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-primary mr-2">•</span>
                Nutrition optimization
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-primary mr-2">•</span>
                Long-term wellbeing
              </li>
            </ul>
            
            <button onClick={()=> {navigate('/health-optimiza'); scrollTo(0, 0)}} className="inline-flex items-center text-secondary font-medium group hover:text-primary/80 transition-colors">
              Explore | Health Optimiza™
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Corporate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-display font-semibold text-gray-900">Corporate</h3>
            </div>
            
            <h4 className="text-xl text-primary font-medium mb-4">Wellness Hive™</h4>
            <p className="text-gray-600 mb-4">Workshops and long-term programs designed to help organizations optimize:</p>
            <ul className="space-y-2 mb-8">
              <li className="text-gray-700 flex items-start">
                <span className="text-primary mr-2">•</span>
                Employee wellbeing
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-primary mr-2">•</span>
                Mental resilience
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-primary mr-2">•</span>
                Emotional intelligence
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-primary mr-2">•</span>
                Workforce performance
              </li>
            </ul>
            
            <button onClick={()=>{navigate('/wellness-hive'); scrollTo(0,0)}} className="inline-flex items-center text-secondary font-medium group hover:text-primary/80 transition-colors">
              Explore | Wellness Hive™
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-6">
              <Globe className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-display font-semibold text-gray-900">Community</h3>
            </div>
            
            <h4 className="text-xl text-primary font-medium mb-4">The Catalog Podcast™</h4>
            <p className="text-gray-600 mb-4">A doctor-led platform exploring the science of:</p>
            <ul className="space-y-2 mb-8">
              <li className="text-gray-700 flex items-start">
                <span className="text-primary mr-2">•</span>
                Preventive health
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-primary mr-2">•</span>
                Human performance
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-primary mr-2">•</span>
                Emotional Intelligence
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-primary mr-2">•</span>
                Mental Health
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-primary mr-2">•</span>
                Metabolic health
              </li>
            </ul>
            
            <div className="space-y-3">
              <button className="inline-flex items-center text-secondary font-medium group hover:text-primary/80 transition-colors w-full">
                Watch | Episodes
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center text-secondary font-medium group hover:text-primary/80 transition-colors w-full">
                Subscribe | YouTube
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;