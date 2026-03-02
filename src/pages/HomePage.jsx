import React from 'react';
import Hero from '../components/Home/Hero';
import PositioningStrip from '../components/Home/PositioningStrip';
import ImageGrid from '../components/Home/ImageGrid';
import WellnessPrograms from '../components/Home/WellnessPrograms';
import PodcastSection from '../components/Home/PodcastSection';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <>
    <Helmet>
      <title>The Catalog - Home</title>
      <meta name="description" content="Discover The Catalog, your go-to resource for curated wellness solutions designed to optimize performance and enhance wellbeing. Explore our expert insights, product reviews, and transformative programs to elevate your health and productivity." />
    </Helmet>
    <main className="pt-16 md:pt-20">
      <Hero />
      <PositioningStrip />
      <ImageGrid />
      <WellnessPrograms />
      <PodcastSection />
    </main>
    </>
  );
};

export default HomePage;