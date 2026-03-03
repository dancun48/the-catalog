import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import workforce from '../../assets/images/workforce.jpg';

const Hero = () => {

  const images = [
    { id: 1, aspect: 'aspect-[4/3]', src: workforce},
    { id: 2, aspect: 'aspect-[4/3]', src: workforce },
    { id: 3, aspect: 'aspect-[4/3]', src: workforce },
    { id: 4, aspect: 'aspect-[4/3]', src: workforce },
  ];
  return (
    <section className="relative max-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center text-sm font-medium text-primary mb-4">
              <span className="w-8 h-[2px] bg-secondary mr-2"></span>
              Powered by Wellness Hive
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Build emotionally intelligent,
              <span className="text-primary"> high-performance</span> workforce.
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Data-driven wellness systems that move beyond activities into measurable organizational performance. Optimizing workforce energy, emotional resilience and reducing burnout.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary px-8 py-4 text-base group">
                Book an Executive Briefing
                <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline px-8 py-4 text-base">
                Explore Wellness Hive
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex -space-x-2">
                {images.map((i, index) => (
                  <div key={index} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white" ><img src={i.src} alt="Trusted company" className="w-full h-full object-cover rounded-full" /></div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Trusted by 500+ companies</p>
                <p className="text-xs text-gray-500">Across East Africa</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex items-center justify-center">
                  <span className="text-gray-500"><img src={workforce} alt="Workforce" className="w-full h-full object-cover rounded-2xl" /></span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;