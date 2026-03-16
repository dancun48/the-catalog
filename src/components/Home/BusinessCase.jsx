import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Heart } from 'lucide-react';

const BusinessCase = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">
            The Business Case for Workforce Health
          </h2>
          <p className="text-lg font-medium text-secondary max-w-5xl mx-auto">
            Forward-thinking organizations recognize that employee health, energy and emotional resilience directly influence productivity, engagement and long-term performance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Top Left */}
            <div className="bg-primary/5 p-6 rounded-2xl">
              <p className="text-4xl font-bold text-primary mb-3">$1T</p>
              <p className="text-sm md:text-base text-gray-700 leading-tight">
                Annual global productivity loss linked to workplace stress and burnout.
              </p>
            </div>

            {/* Top Right */}
            <div className="bg-secondary/5 p-6 rounded-2xl">
              <p className="text-4xl font-bold text-secondary mb-3">90%</p>
              <p className="text-sm md:text-base text-gray-700 leading-tight">
                of Top Performers demonstrate strong emotional intelligence.
              </p>
            </div>

            {/* Bottom Left */}
            <div className="bg-secondary/5 p-6 rounded-2xl">
              <p className="text-4xl font-bold text-secondary mb-3">20%</p>
              <p className="text-sm md:text-base text-gray-700 leading-tight">
                Productivity loss associated with poor health, fatigue, and metabolic dysfunction.
              </p>
            </div>

            {/* Bottom Right */}
            <div className="bg-primary/5 p-6 rounded-2xl">
              <p className="text-4xl font-bold text-primary mb-3">$3-6</p>
              <p className="text-sm md:text-base text-gray-700 leading-tight">
                Average return for every $1 invested in employee wellness.
              </p>
            </div>
          </motion.div>
          
          {/* Right Column - Benefits & Quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Benefits Card */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-2">The Benefit</h3>
              <p className="text-gray-600 mb-6">Organizations with strong employee wellbeing programs report:</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Lower absenteeism</span>
                  </div>
                  <span className="text-2xl font-bold text-green-500">41%</span>
                </div>
                
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Higher productivity</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-500">17%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 text-red-500 mr-3" />
                    <span className="text-gray-700">Lower employee turnover</span>
                  </div>
                  <span className="text-2xl font-bold text-red-500">59%</span>
                </div>
              </div>
            </div>
            
            {/* Quote Card */}
            <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
              <p className="text-gray-700 italic">
                "Employees experiencing burnout are <span className="font-semibold text-primary">63% more likely</span> to take sick leave and <span className="font-semibold text-primary">2.6 times more likely</span> to seek another job."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCase;