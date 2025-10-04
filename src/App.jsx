import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrendingSection from './components/TrendingSection';
import FeatureSection from './components/FeatureSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <TrendingSection />
        <FeatureSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
