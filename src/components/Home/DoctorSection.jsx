import React from 'react';
import { motion } from 'framer-motion';
import doctorImage from '../../assets/images/doc1.jpg';

const DoctorSection = () => {
  const focusAreas = [
    'Preventive & Lifestyle Medicine',
    'Metabolic Health Optimization',
    'Workplace Wellness & Performance',
    'Emotional Intelligence & Resilience'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              Dr. Erick George Otieno
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded The Catalog Healthcare to bridge the gap between preventive healthcare, emotional intelligence, mental health and workplace performance.
            </p>
            <p className="text-gray-600 mb-8">
              Through consultations, corporate wellness programs and The Catalog Podcast™, he works with individuals and organizations to build healthier, more resilient and high-performing lives through science-based health strategies.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Focus Areas:</h3>
            <ul className="space-y-2">
              {focusAreas.map((area, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  {area}
                </li>
              ))}
            </ul>
            
            <p className="mt-6 text-primary font-medium">
              Host — The Catalog Podcast™ | Advancing Preventive Health & Human Performance Conversations in Africa
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={doctorImage} 
                alt="Dr. Erick George Otieno" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;