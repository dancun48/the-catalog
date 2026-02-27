import React from 'react';
import { motion } from 'framer-motion';

const ImageGrid = () => {
  const images = [
    { id: 1, aspect: 'aspect-[4/3]' },
    { id: 2, aspect: 'aspect-[4/3]' },
    { id: 3, aspect: 'aspect-[4/3]' },
    { id: 4, aspect: 'aspect-[4/3]' },
    { id: 5, aspect: 'aspect-[4/3]' },
    { id: 6, aspect: 'aspect-[4/3]' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Impact in Action</h2>
          <p className="section-subtitle mt-4">
            Real results from organizations that have transformed their workforce
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-gray-100 rounded-2xl overflow-hidden card-hover">
                <div className={`${image.aspect} flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200`}>
                  <span className="text-gray-400 text-sm">Image {image.id}</span>
                </div>
                <div className="p-4">
                  <div className="w-12 h-1 bg-secondary rounded-full group-hover:w-16 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;