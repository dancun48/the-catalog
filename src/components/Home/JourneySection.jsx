import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const JourneySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-semibold mb-4">Start Your Health & Performance Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you are seeking personal health optimization or workforce wellbeing programs. We provide practical, science-based strategies designed to improve health, resilience and long-term performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For Organizations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-display font-semibold mb-6">For Organizations</h3>
            <h4 className="text-xl text-primary mb-4">Workforce Health & Performance Programs:</h4>
            <p className="text-gray-600 mb-6">
              Partner with The Catalog to strengthen employee wellbeing, resilience, and workplace performance through structured health and wellness programs.
            </p>
            
            <h5 className="font-semibold mb-3">Best for:</h5>
            <ul className="space-y-2 mb-8">
              <li className="text-gray-700">• HR leaders</li>
              <li className="text-gray-700">• Leadership teams</li>
              <li className="text-gray-700">• Organizations investing in workforce wellbeing</li>
            </ul>
            
            <button className="btn-primary px-6 py-3 text-base group inline-flex items-center">
              Book a Health Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* For Individuals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-display font-semibold mb-6">For Individuals</h3>
            <h4 className="text-xl text-primary mb-4">Preventive Health & Optimization Consultations:</h4>
            <p className="text-gray-600 mb-6">
              Doctor-led consultations focused on metabolic health, lifestyle medicine and long-term wellbeing.
            </p>
            
            <h5 className="font-semibold mb-3">Best for:</h5>
            <ul className="space-y-2 mb-8">
              <li className="text-gray-700">• Professionals seeking better health</li>
              <li className="text-gray-700">• Individuals managing chronic disease risk</li>
              <li className="text-gray-700">• Those optimizing energy and performance wellbeing</li>
            </ul>
            
            <button className="btn-primary px-6 py-3 text-base group inline-flex items-center">
              Book a Health Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;