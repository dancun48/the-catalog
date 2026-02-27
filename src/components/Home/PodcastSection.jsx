import React from 'react';
import { motion } from 'framer-motion';
import { Play, Mic, Headphones, ArrowRight } from 'lucide-react';

const PodcastSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl overflow-hidden"
        >
          <div className="px-8 py-16 md:py-20 text-center text-white relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>
            
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                  <Mic className="h-8 w-8" />
                </div>
                <div className="mx-2 text-white/40">/</div>
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                  <Headphones className="h-8 w-8" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-semibold mb-2">
                The Catalog
              </h2>
              <p className="text-2xl text-white/90 mb-2">Podcast</p>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Insights and conversations about workplace wellness, performance, and emotional intelligence. 
                Join us weekly for deep dives with industry leaders.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2 group">
                  <Play className="h-4 w-4 fill-primary group-hover:scale-110 transition-transform" />
                  Listen to Latest Episode
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                  Subscribe on YouTube
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              
              {/* Episode stats */}
              <div className="flex items-center justify-center space-x-8 mt-12">
                <div>
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-sm text-white/70">Episodes</p>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div>
                  <p className="text-2xl font-bold">100K+</p>
                  <p className="text-sm text-white/70">Listeners</p>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div>
                  <p className="text-2xl font-bold">Weekly</p>
                  <p className="text-sm text-white/70">New Episodes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PodcastSection;