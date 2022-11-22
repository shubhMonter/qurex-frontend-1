import React from 'react';
import HowItWorks from '../components/homecomponents/HowItWorks';
import FeedBack from '../components/homecomponents/FeedBack';
import CSatisfaction from '../components/treatmentComponents/CSatisfaction';
import TCounter from '../components/treatmentComponents/TCounter';
import Footer from '../components/Footer';
import LearnMore from '../components/treatmentComponents/LearnMore';
import TreatmentHero from '../components/treatmentComponents/TreatmentHero';
import FAQ from '../components/homecomponents/FAQ';
import TreatmentDocSlider from '../components/treatmentComponents/TreatmentDocSlider';

const TreatmentPage = () => {
  return (
    <>
    <div className="overflow-hidden">
      <TreatmentHero />
      <TCounter />
      <LearnMore />
      <CSatisfaction />
      <TreatmentDocSlider/>
      <HowItWorks />
      <div className="my-5"></div>
      <FeedBack />
      <FAQ />
      <Footer />
      </div>
    </>
  );
};

export default TreatmentPage;
