import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import workforce from '../../assets/images/workforce.jpg';

const Hero = () => {
  const images = [
    { id: 1, aspect: 'aspect-[4/3]', src: workforce },
    { id: 2, aspect: 'aspect-[4/3]', src: workforce },
    { id: 3, aspect: 'aspect-[4/3]', src: workforce },
    { id: 4, aspect: 'aspect-[4/3]', src: workforce },
  ];

  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center pt-20 sm:pt-24 md:pt-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 relative w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <span className="inline-flex items-center text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4 mx-auto lg:mx-0">
              <span className="w-6 sm:w-8 h-[2px] bg-secondary mr-2 hidden sm:inline-block"></span>
              Powered by Wellness Hive
            </span>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-display font-semibold tracking-tight text-gray-900 leading-tight md:leading-[1.1] mb-3 sm:mb-4 md:mb-6">
              Build emotionally intelligent,
              <span className="text-primary block sm:inline"> high-performance</span> workforce.
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0">
              Data-driven wellness systems that move beyond activities into measurable organizational performance. Optimizing workforce energy, emotional resilience and reducing burnout.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <button className="btn-primary px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base group w-full sm:w-auto">
                Book an Executive Briefing
                <ArrowRight className="inline-block ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base w-full sm:w-auto">
                Explore Wellness Hive
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 md:pb-6 sm:pb-6 lg:pb-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-8 justify-center lg:justify-start px-4 sm:px-0">
              <div className="flex -space-x-2">
                {images.slice(0, 4).map((i, index) => (
                  <div 
                    key={index} 
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm"
                  >
                    <img 
                      src={i.src} 
                      alt="Trusted company" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs sm:text-sm font-medium text-gray-900">Trusted by 500+ companies</p>
                <p className="text-2xs sm:text-xs text-gray-500">Across East Africa</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative z-10 max-w-md mx-auto lg:max-w-none">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
                <div className="flex items-center justify-center">
                  <img 
                    src={workforce} 
                    alt="Workforce" 
                    className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative elements - responsive sizing */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 sm:w-20 md:w-24 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 bg-secondary/20 rounded-full blur-2xl sm:blur-3xl" />
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 sm:w-24 md:w-32 lg:w-40 h-20 sm:h-24 md:h-32 lg:h-40 bg-primary/20 rounded-full blur-2xl sm:blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Optional: Add a subtle scroll indicator for mobile */}
    </section>
  );
};

export default Hero;