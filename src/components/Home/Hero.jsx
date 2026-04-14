import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn, Play, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import hero_1 from '../../assets/images/hero/wh1.png';
import hero_3 from '../../assets/images/hero/wh3.png';
import doc1 from '../../assets/images/hero/doc1.jpeg';
import hero_4 from '../../assets/images/hero/wh4.png';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Gallery images data with full details
  const galleryImages = [
    {
      id: 1,
      src: hero_1,
      title: "Doctor-Led Consultation",
      description: "Expert medical guidance from licensed professionals",
      category: "Consultation",
      link: "/contact#book-now",
      gradient: "from-blue-600/80 to-indigo-800/80"
    },
    {
      id: 2,
      src: hero_3,
      title: "Wellness Hive™",
      description: "Comprehensive workplace wellness programs",
      category: "Corporate",
      link: "/wellness-hive",
      gradient: "from-green-600/80 to-emerald-800/80"
    },
    {
      id: 4,
      src: hero_4,
      title: "Health Optimiza™",
      description: "Personalized health optimization strategies",
      category: "Individual",
      link: "/health-optimiza",
      gradient: "from-orange-600/80 to-red-800/80"
    },
    {
      id: 5,
      src: doc1,
      title: "The Catalog Podcast",
      description: "Insights from industry experts",
      category: "Media",
      link: "/podcast",
      gradient: "from-cyan-600/80 to-blue-800/80"
    }
  ];

  // Auto-slide functionality with zoom-fade transition
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % galleryImages.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, galleryImages.length]);

  // Navigation functions
  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % galleryImages.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Zoom-fade transition variants
  const zoomFadeVariants = {
    enter: {
      scale: 1.1,
      opacity: 0,
      transition: {
        duration: 0,
        ease: "easeOut"
      }
    },
    center: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 0.95,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeIn"
      }
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-10 relative w-full z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Enhanced Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className='flex flex-row items-center text-[0.7rem] font-medium mb-6'>
                <span className="w-8 h-[2px] bg-secondary mr-2"/>
                <span>
                  <span className='text-gray-600'>Powered by</span>
                  <span className='text-primary font-semibold ml-1'>Wellness Hive™</span>
                  <span className='text-gray-400 mx-1'>|</span>
                  <span className='text-secondary font-semibold'>Health Optimiza™</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight mb-6">
                Build{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Healthier, Emotionally Intelligent
                </span>
                <br />
                <span className="text-gray-900"> & High-Performing Workforce</span>
              </h1>
              
              <p className="text-md text-gray-600 mb-8 max-w-xl leading-relaxed">
                Data-driven health and wellness strategies that go beyond activities — improving energy, 
                resilience and measurable workplace performance.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { navigate('/wellness-hive'); window.scrollTo(0, 0); }} 
                  className="inline-flex items-center bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-3 rounded-xl font-medium group text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore | Corporate Programs
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { navigate('/contact#book-now'); window.scrollTo(0, 0); }} 
                  className="inline-flex items-center bg-gradient-to-r from-secondary to-secondary/80 text-white px-6 py-3 rounded-xl font-medium group text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book | Health Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
              
              {/* Trust indicators - Enhanced */}
              <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex -space-x-2">
                  {galleryImages.slice(0, 4).map((image, index) => (
                    <motion.div 
                      key={index} 
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                      className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-md cursor-pointer"
                      onClick={() => {
                        setSelectedImage(image);
                        setCurrentIndex(image.id - 1);
                        setCurrent(image.id - 1);
                      }}
                    >
                      <img 
                        src={image.src} 
                        alt={image.title} 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Trusted by 100+ companies</p>
                  <p className="text-xs text-gray-500">Across East Africa & Beyond</p>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Zoom-Fade Image Slider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
              ref={ref}
            >
              <div className="relative h-[500px] md:h-[550px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 z-20 backdrop-blur-sm group"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-700 group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 z-20 backdrop-blur-sm group"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5 text-gray-700 group-hover:scale-110 transition-transform" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrent(index);
                        setTimeout(() => setIsAutoPlaying(true), 10000);
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        current === index
                          ? 'w-8 h-2 bg-white shadow-md'
                          : 'w-2 h-2 bg-white/60 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Auto-play Indicator */}
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 transition-all duration-300 z-20"
                  aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isAutoPlaying ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  )}
                </button>

                {/* Zoom-Fade Image Slider */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    variants={zoomFadeVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => {
                      setSelectedImage(galleryImages[current]);
                      setCurrentIndex(current);
                    }}
                  >
                    <img 
                      src={galleryImages[current].src} 
                      alt={galleryImages[current].title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${galleryImages[current].gradient} opacity-0 hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Content Overlay - Appears on hover */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 hover:translate-y-0 transition-transform duration-500">
                      <div className="transform translate-y-full hover:translate-y-0 transition-transform duration-500 delay-100">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium mb-3">
                          {galleryImages[current].category}
                        </span>
                        <h3 className="text-white text-xl font-bold mb-2">{galleryImages[current].title}</h3>
                        <p className="text-white/90 text-sm mb-4 line-clamp-2">{galleryImages[current].description}</p>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(galleryImages[current].link);
                              window.scrollTo(0, 0);
                            }}
                            className="inline-flex items-center gap-1 text-white text-sm font-medium hover:gap-2 transition-all"
                          >
                            Learn More
                            <ArrowRight className="h-3 w-3" />
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImage(galleryImages[current]);
                              setCurrentIndex(current);
                            }}
                            className="inline-flex items-center gap-1 text-white/80 text-sm hover:text-white transition-colors"
                          >
                            <ZoomIn className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Play Icon for Podcast */}
                    {galleryImages[current].id === 5 && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-primary shadow-lg z-10">
                  {galleryImages[current].id === 1 ? "Doctor-Led" : 
                   galleryImages[current].id === 2 ? "Corporate" : 
                   galleryImages[current].id === 4 ? "Optimiza" : "Podcast"}
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium z-10">
                  {current + 1} / {galleryImages.length}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-5 -right-5 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-5 -left-5 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Full Image View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); setSelectedImage(galleryImages[(current - 1 + galleryImages.length) % galleryImages.length]); setCurrent((current - 1 + galleryImages.length) % galleryImages.length); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); setSelectedImage(galleryImages[(current + 1) % galleryImages.length]); setCurrent((current + 1) % galleryImages.length); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-white/80 mb-4">{selectedImage.description}</p>
                <button
                  onClick={() => {
                    navigate(selectedImage.link);
                    window.scrollTo(0, 0);
                    setSelectedImage(null);
                  }}
                  className="inline-flex items-center gap-2 bg-white text-primary px-6 py-2 rounded-lg font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;