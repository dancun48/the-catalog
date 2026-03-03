import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  HeartPulse, 
  Brain, 
  Shield, 
  Zap 
} from 'lucide-react';

const PositioningStrip = () => {
  const features = [
    { icon: AlertTriangle, name: 'Burnout Risk Detection', color: 'text-red-500' },
    { icon: HeartPulse, name: 'Preventive Health Analytics', color: 'text-primary' },
    { icon: Brain, name: 'Leadership Emotional Intelligence', color: 'text-purple-500' },
    { icon: Shield, name: 'Psychological Safety Frameworks', color: 'text-green-500' },
    { icon: Zap, name: 'Energy Optimization Models', color: 'text-secondary' },
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-4xl font-display font-semibold tracking-tight text-gray-900 mb-3">
            We don't run wellness activities.
          </h2>
          <p className="text-2xl text-primary font-medium">
            We build performance systems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-6 text-center card-hover cursor-default">
                <feature.icon className={`h-8 w-8 mx-auto mb-3 ${feature.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium text-gray-900 leading-tight block">
                  {feature.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositioningStrip;