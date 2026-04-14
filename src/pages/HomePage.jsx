import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Home/Hero';
import PositioningStrip from '../components/Home/PositioningStrip';
import CoreServices from '../components/Home/CoreServices';
import DoctorSection from '../components/Home/DoctorSection';
import BusinessCase from '../components/Home/BusinessCase';
import JourneySection from '../components/Home/JourneySection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>The Catalog - Home</title>
        <meta name="description" content="Data-driven health and wellness strategies that go beyond activities — improving energy, resilience and measurable workplace performance. Doctor-led preventive health and workplace performance optimization in East Africa." />
      </Helmet>
      <main>
        <Hero />
        <PositioningStrip />
        <CoreServices />
        <DoctorSection />
        <BusinessCase />
        <JourneySection />
      </main>
    </>
  );
};

export default HomePage;