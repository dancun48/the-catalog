import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Target, ArrowRight } from 'lucide-react';

const WellnessPrograms = () => {
  const programs = [
    {
      icon: FlaskConical,
      title: 'The Pilot Lab',
      description: 'Innovation and testing ground for cutting-edge wellness initiatives. Perfect for organizations ready to pioneer new approaches to workforce wellness.',
      color: 'primary',
      bgColor: 'bg-primary/10',
      textColor: 'text-primary',
      features: ['Rapid prototyping', 'Data validation', 'Custom solutions'],
    },
    {
      icon: Target,
      title: 'Core Program',
      description: 'Comprehensive workforce wellness and performance optimization. Our flagship program delivering measurable results across your entire organization.',
      color: 'secondary',
      bgColor: 'bg-secondary/10',
      textColor: 'text-secondary',
      features: ['Holistic wellness', 'Performance tracking', 'Team integration'],
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-2 block">Wellness Hive</span>
          <h2 className="section-title">Two Programs, One Goal</h2>
          <p className="section-subtitle mt-4">
            Choose the path that best fits your organization's needs
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 card-hover"
            >
              <div className={`w-14 h-14 ${program.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                <program.icon className={`h-7 w-7 ${program.textColor}`} />
              </div>
              
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-3">
                {program.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {program.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <div className={`w-1.5 h-1.5 rounded-full ${program.textColor} bg-${program.color} mr-2`} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="inline-flex items-center text-primary font-medium group">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessPrograms;