import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Shield, Heart, Brain, AlertTriangle, Activity } from 'lucide-react';

const PositioningStrip = () => {
  const corporateFocus = [
    { icon: AlertTriangle, name: 'Burnout Risk Management' },
    { icon: Heart, name: 'Preventive Health Analytics' },
    { icon: Brain, name: 'Leadership Emotional Intelligence' },
    { icon: Activity, name: 'Mental Wellbeing' },
  ];

  const individualFocus = [
    { name: 'Early risk detection' },
    { name: 'Metabolic health optimization' },
    { name: 'Lifestyle interventions' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-secondary mb-3">
            A Smarter Approach to Health & Performance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            East Africa performance & health intelligence platform translating science and knowledge into actionable frameworks and systems.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* For Corporates */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">For Corporates</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">We don't run wellness activities. </span>
              <span className="text-primary font-semibold">We build performance optimization systems.</span>
            </p>
            <p className="text-gray-600 mb-4">Crafted to address:</p>
            <ul className="space-y-3">
              {corporateFocus.map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item.name}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-2xl font-display font-semibold text-gray-900 my-4">For Individuals</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">We don't run hospital or clinic. </span>
              <span className="text-primary font-semibold">We run preventive health intelligence.</span>
            </p>
            <p className="text-gray-600 mb-4">Focused on:</p>
            <ul className="space-y-3">
              {individualFocus.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-5 w-5 flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  </div>
                  <span className="text-gray-700">{item.name}</span>
                </li>
              ))}
            </ul>

          </motion.div>

        {/* The Catalog Healthcare Approach Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2"
        >
          <p className="text-xl text-gray-800 font-medium">
            <span className="text-primary font-semibold">The Catalog Healthcare Approach</span>
          </p>
        {/* Three Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='bg-gray-100 rounded-xl p-4'
        >
          <h3 className="text-2xl md:text-3xl font-display font-semibold my-6 text-secondary">
            THE 3 PILLARS
          </h3>
          
          <div className="flex flex-col items-start gap-12 justify-center">
            {/* Human Performance */}
            <div className="flex flex-row gap-3 items-center bg-primary/20 p-6 rounded-2xl">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-primary mb-3 shadow-lg text-center">HUMAN PERFORMANCE</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategies to improve energy, mental clarity, emotional intelligence and daily performance.
              </p>
            </div>

            {/* Workplace Wellness */}
            <div className="flex flex-row gap-3 items-center bg-secondary/20 p-6 rounded-2xl">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Users className="h-7 w-7 text-secondary" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-secondary mb-3 shadow-lg text-center">WORKPLACE WELLNESS</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Structured systems designed to strengthen resilience, productivity, and workforce health.
              </p>
            </div>

            {/* Preventive Health */}
            <div className="flex flex-row gap-3 items-center bg-primary/20 p-6 rounded-2xl">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-primary mb-3 shadow-lg text-center">PREVENTIVE HEALTH</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rooted in functional medicine & focused on early detection, health optimization and lifestyle intervention for long-term wellbeing.
              </p>
            </div>
          </div>
        </motion.div>

        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PositioningStrip;