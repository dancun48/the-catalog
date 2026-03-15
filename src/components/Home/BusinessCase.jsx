import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Heart } from 'lucide-react';
import statsImage from '../../assets/images/doc1.jpg';

const BusinessCase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-display font-semibold mb-4">The Business Case for Workforce Health</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Forward-thinking organizations recognize that employee health, energy and emotional resilience directly influence productivity, engagement and long-term performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Stats */}
          <div className="space-y-6">
            <div className="bg-primary/5 p-6 rounded-2xl">
              <p className="text-5xl font-bold text-primary mb-2">$1 Trillion</p>
              <p className="text-gray-700">Annual global productivity loss linked to workplace stress and burnout.</p>
            </div>
            
            <div className="bg-secondary/5 p-6 rounded-2xl">
              <p className="text-5xl font-bold text-secondary mb-2">90%</p>
              <p className="text-gray-700">of Top Performers demonstrate strong emotional intelligence.</p>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-2xl">
              <p className="text-5xl font-bold text-primary mb-2">20%</p>
              <p className="text-gray-700">Productivity loss associated with poor health, fatigue, and metabolic dysfunction.</p>
            </div>
            
            <div className="bg-secondary/5 p-6 rounded-2xl">
              <p className="text-5xl font-bold text-secondary mb-2">$3-$6</p>
              <p className="text-gray-700">Average return for every $1 invested in employee wellness.</p>
            </div>
          </div>

          {/* Right Column - Benefits & Image */}
          <div>
            <div className="bg-gray-50 p-8 rounded-2xl mb-6">
              <h3 className="text-2xl font-semibold mb-4">The Benefit</h3>
              <p className="text-gray-600 mb-4">Organizations with strong employee wellbeing programs report:</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <TrendingUp className="h-5 w-5 text-green-500 mr-3" />
                  41% lower absenteeism
                </li>
                <li className="flex items-center text-gray-700">
                  <Users className="h-5 w-5 text-blue-500 mr-3" />
                  17% higher productivity
                </li>
                <li className="flex items-center text-gray-700">
                  <Heart className="h-5 w-5 text-red-500 mr-3" />
                  59% lower employee turnover
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img src={statsImage} alt="Wellness Statistics" className="w-full h-auto" />
              </div>
              <p className="mt-3 text-sm text-gray-600 italic">
                Employees experiencing burnout are 63% more likely to take sick leave and 2.6 times more likely to seek another job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCase;