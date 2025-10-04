import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const sectionRef = useRef(null);
  const [email, setEmail] = useState('');

  const faqData = [
    {
      id: 1,
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies and documentaries across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments."
    },
    {
      id: 2,
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
      id: 3,
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
      id: 4,
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      id: 5,
      question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      id: 6,
      question: "Is Netflix good for kids?",
      answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
    }
  ];

  useEffect(() => {
    // Animate section on scroll
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const toggleFAQ = (id) => {
    if (openFAQ === id) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(id);
    }
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    console.log('Email:', email);
  };

  return (
    <section ref={sectionRef} className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-2 mb-12">
          {faqData.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button
                className="faq-header w-full text-left"
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="text-lg md:text-xl font-medium text-white">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-white transform transition-transform duration-200 ${
                    openFAQ === faq.id ? 'rotate-45' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-6 bg-gray-800">
                  <p className="text-white text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Email Signup Section */}
        <div className="text-center">
          <p className="text-lg sm:text-xl text-white mb-6">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          
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
      </div>
    </section>
  );
};

export default FAQSection;