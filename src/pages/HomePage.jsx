import React from 'react';
import Hero from '../components/Home/Hero';
import PositioningStrip from '../components/Home/PositioningStrip';
import ImageGrid from '../components/Home/ImageGrid';
import WellnessPrograms from '../components/Home/WellnessPrograms';
import PodcastSection from '../components/Home/PodcastSection';

const HomePage = () => {
  return (
    <main className="pt-16 md:pt-20">
      <Hero />
      <PositioningStrip />
      <ImageGrid />
      <WellnessPrograms />
      <PodcastSection />
    </main>
  );
};

export default HomePage;