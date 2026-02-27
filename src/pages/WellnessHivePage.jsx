import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Users, Heart } from 'lucide-react';

const WellnessHivePage = () => {
  return (
    <main className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-semibold tracking-tight text-gray-900 mb-6">
              Wellness Hive
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Workforce performance optimization service that transforms how organizations approach employee wellbeing.
            </p>
            <button className="btn-primary px-8 py-4 text-base">
              Schedule a Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Risk Detection', desc: 'Early identification of burnout and mental health risks' },
              { icon: TrendingUp, title: 'Performance Tracking', desc: 'Measure the impact of wellness on productivity' },
              { icon: Users, title: 'Team Integration', desc: 'Build cohesive, emotionally intelligent teams' },
              { icon: Heart, title: 'Holistic Wellness', desc: 'Comprehensive approach to employee wellbeing' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WellnessHivePage;