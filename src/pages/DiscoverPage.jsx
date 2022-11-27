import React from 'react';
import HowItWorks from '../components/homecomponents/HowItWorks';
import FeedBack from '../components/homecomponents/FeedBack';
import CSatisfaction from '../components/treatmentComponents/CSatisfaction';
import TCounter from '../components/treatmentComponents/TCounter';
import Footer from '../components/Footer';
import LearnMore from '../components/treatmentComponents/LearnMore';
import DiscoverHero from '../components/discoverComponents/DiscoverHero';
import FAQ from '../components/homecomponents/FAQ';
import TreatmentDocSlider from '../components/treatmentComponents/TreatmentDocSlider';

const DiscoverPage = () => {
  return (
    <>
    <div className="overflow-hidden">
      <DiscoverHero />
      <Footer />
      </div>
    </>
  );
};

export default DiscoverPage;
