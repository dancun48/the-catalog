import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldAlert, Gauge, Repeat, Users, Shield, Heart, Brain, AlertTriangle, Activity } from 'lucide-react';

import pillars from "../../assets/images/3pillars.jpeg";

const PositioningStrip = () => {
  const corporateFocus = [
    { icon: AlertTriangle, name: 'Burnout Risk Management' },
    { icon: Heart, name: 'Preventive Health Analytics' },
    { icon: Brain, name: 'Leadership Emotional Intelligence' },
    { icon: Activity, name: 'Mental Wellbeing' },
  ];

  const individualFocus = [
    { icon: ShieldAlert, name: 'Early risk detection' },
    { icon: Gauge, name: 'Metabolic health optimization' },
    { icon: Repeat, name: 'Lifestyle interventions' },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-3">
            A Smarter Approach to Health & Performance
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            East Africa performance & health intelligence platform translating science and knowledge into actionable frameworks and systems.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-10">
            <div className='flex flex-col gap-10 h-auto'>
          {/* For Corporates */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg"
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
          </motion.div>
          {/* For Individuals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">For Individuals</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">We don't run a hospital or a clinic.</span>
              <span className="text-primary font-semibold">We run preventive health intelligence.</span>
            </p>
            <p className="text-gray-600 mb-4">Focused on:</p>
            <ul className="space-y-3">
              {individualFocus.map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          </div>

        {/* The Catalog Healthcare Approach Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2"
        >
          <img src={pillars} alt="The Catalog Healthcare Approach" className="w-full rounded-2xl shadow-sm h-[680px] object-cover bg-transparent" />
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PositioningStrip;