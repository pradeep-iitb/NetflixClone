import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { heroBackground } from '../data/images';
import { headerUtilityLinks } from '../data/links';

const Hero = () => {
  const [email, setEmail] = useState('');
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Hero entrance animation
    const tl = gsap.timeline();
    
    tl.fromTo(heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    ).fromTo(contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      0.3
    );
  }, []);

  const handleGetStarted = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', email);
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
          Unlimited movies, TV shows and more
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-2 font-medium">
          Starts at ₹149. Cancel at any time.
        </p>
        
        {/* Call to action text */}
        <p className="text-lg sm:text-xl text-white mb-8 font-normal">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        
        {/* Email Form */}
        <form onSubmit={handleGetStarted} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <div className="flex-1 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 sm:py-4 text-white bg-black bg-opacity-70 border border-gray-500 rounded-md text-base sm:text-lg placeholder-gray-400 focus:outline-none focus:border-white focus:bg-opacity-80 transition-all duration-200"
              required
            />
          </div>
          <button
            type="submit"
            className="netflix-button text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 font-medium flex items-center space-x-2 hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
          >
            <span>Get Started</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    </section>
  );
};

export default Hero;