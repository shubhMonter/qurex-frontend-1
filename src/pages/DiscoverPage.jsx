import React from 'react';
import Footer from '../components/Footer';
import DiscoverHero from '../components/discoverComponents/DiscoverHero';
import DiscoverArticles from '../components/discoverComponents/DiscoverArticles';
import DiscoverQuestion from '../components/discoverComponents/DiscoverQuestion';
import FAQ from '../components/homecomponents/FAQ';

const DiscoverPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <DiscoverHero />
        <DiscoverArticles />
        <DiscoverQuestion />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default DiscoverPage;
