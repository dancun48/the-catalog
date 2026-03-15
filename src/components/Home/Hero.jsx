import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import workforce from '../../assets/images/workforce.jpg';
// import doctorConsultation from '../../assets/images/doctor-consultation.jpg';
// import corporateWellness from '../../assets/images/corporate-wellness.jpg';
// import catalogPodcast from '../../assets/images/catalog-podcast.jpg';
// import wellnessHive from '../../assets/images/wellness-hive.jpg';
// import healthOptimization from '../../assets/images/health-optimization.jpg';

// Image components with your actual images
const ImageComponent1 = () => (
  <div className="w-full h-full relative overflow-hidden group">
    <img 
      src={workforce} 
      alt="Doctor Consultation" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-[100px] left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <p className="text-white font-medium text-sm">Doctor-Led Consultation</p>
    </div>
  </div>
);

const ImageComponent2 = () => (
  <div className="w-full h-full relative overflow-hidden group">
    <img 
      src={workforce} 
      alt="Corporate Wellness" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-[100px] left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <p className="text-white font-medium text-sm">Corporate Wellness Programs</p>
    </div>
  </div>
);

const ImageComponent3 = () => (
  <div className="w-full h-full relative overflow-hidden group">
    <img 
      src={workforce} 
      alt="The Catalog Podcast" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-[100px] left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <p className="text-white font-medium text-sm">The Catalog Podcast</p>
    </div>
  </div>
);

const ImageComponent4 = () => (
  <div className="w-full h-full relative overflow-hidden group">
    <img 
      src={workforce} 
      alt="Wellness Hive" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-[100px] left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <p className="text-white font-medium text-sm">Wellness Hive™</p>
    </div>
  </div>
);

const ImageComponent5 = () => (
  <div className="w-full h-full relative overflow-hidden group">
    <img 
      src={workforce} 
      alt="Health Optimization" 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-[100px] left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <p className="text-white font-medium text-sm">Health Optimiza™</p>
    </div>
  </div>
);

const Hero = () => {

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  const navigate = useNavigate();

  // Carousel images array with your actual image components
  const carouselImages = [
    { id: 1, component: ImageComponent1 },
    { id: 2, component: ImageComponent2 },
    { id: 3, component: ImageComponent3 },
    { id: 4, component: ImageComponent4 },
    { id: 5, component: ImageComponent5 },
    { id: 6, component: ImageComponent1 },
  ];

  // trust indicators images
  const images = [
    { id: 1, aspect: 'aspect-[4/3]', src: workforce },
    { id: 2, aspect: 'aspect-[4/3]', src: workforce },
    { id: 3, aspect: 'aspect-[4/3]', src: workforce },
    { id: 4, aspect: 'aspect-[4/3]', src: workforce },
  ];
  
  // Duplicate images for seamless infinite scroll
  const allImages = [...carouselImages, ...carouselImages];

  useEffect(() => {
    if (inView) {
      controls.start({
        x: [0, -1920],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, inView]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className='flex flex-row items-center text-[0.7rem] text-secondary font-medium mb-6'>
              <span className="w-8 h-[2px] bg-secondary mr-2"/>
              <span><span className='text-gray-900'>Powered by</span> Wellness Hive™ | <span className='text-primary'>Health Optimiza™</span></span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-display font-bold tracking-tight text-gray-900 leading-tight mb-6">
              Build <span className="text-primary">Healthier, Emotionally Intelligent & High-Performing</span> Workforce.
            </h1>
            
            <p className="text-md text-gray-600 mb-8 max-w-xl">
              Data-driven health and wellness strategies that go beyond activities — improving energy, resilience and measurable workplace performance.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={() => { navigate('/wellness-hive'); scrollTo(0, 0); }} 
                className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-xl font-medium group text-sm hover:bg-primary/90 transition-colors"
              >
                Explore | Corporate Programs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => { navigate('/contact#book-now'); scrollTo(0, 0); }} 
                className="inline-flex items-center bg-secondary text-white px-4 py-2 rounded-xl font-medium group text-sm hover:bg-secondary/90 transition-colors"
              >
                Book | Health Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="text-primary rounded-full text-[0.6rem] font-medium">
                Doctor-Led Preventive Health | Science-Based Wellness Strategies | Workplace Performance Optimization
              </span>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-8 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {images.slice(0, 4).map((image, index) => (
                  <div 
                    key={index} 
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm"
                  >
                    <img 
                      src={image.src} 
                      alt="Trusted company" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs font-medium text-gray-900">Trusted by 100+ companies</p>
                <p className="text-[0.5rem] text-gray-500">Across East Africa</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Infinite Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 h-[500px] md:h-[550px] lg:h-[550px] overflow-hidden rounded-2xl"
            ref={ref}
          >
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />
            
            {/* Carousel container */}
            <motion.div
              animate={controls}
              className="flex gap-4 absolute"
              style={{ width: `${allImages.length * 300}px` }}
            >
              {allImages.map((image, index) => (
                <motion.div
                  key={`${image.id}-${index}`}
                  className="w-[280px] md:w-[300px] h-[450px] md:h-[500px] lg:h-[550px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  onClick={() => {
                    if (image.id === 1) navigate('/services#consultation');
                    else if (image.id === 2) navigate('/corporate');
                    else if (image.id === 3) navigate('/podcast');
                    else if (image.id === 4) navigate('/wellness-hive');
                    else if (image.id === 5) navigate('/services#optimization');
                  }}
                >
                  <image.component />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-3 -left-3 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;