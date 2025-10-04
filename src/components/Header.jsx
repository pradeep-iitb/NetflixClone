import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { navigationLinks, languageOptions, headerUtilityLinks } from '../data/links';
import { logoImage } from '../data/images';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBrowseDropdown, setShowBrowseDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

  const browseDropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showBrowseDropdown && browseDropdownRef.current) {
      gsap.fromTo(browseDropdownRef.current, 
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }
      );
    }
  }, [showBrowseDropdown]);

  useEffect(() => {
    if (showLanguageDropdown && languageDropdownRef.current) {
      gsap.fromTo(languageDropdownRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }
      );
    }
  }, [showLanguageDropdown]);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowLanguageDropdown(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/70 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-netflix-red text-2xl lg:text-3xl font-bold">
              NETFLIX
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button
                className="text-white hover:text-gray-300 transition-colors duration-200 flex items-center space-x-1"
                onMouseEnter={() => setShowBrowseDropdown(true)}
                onMouseLeave={() => setShowBrowseDropdown(false)}
              >
                <span>{navigationLinks.browse.title}</span>
                <svg 
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    showBrowseDropdown ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Browse Dropdown */}
              {showBrowseDropdown && (
                <div
                  ref={browseDropdownRef}
                  className="dropdown"
                  onMouseEnter={() => setShowBrowseDropdown(true)}
                  onMouseLeave={() => setShowBrowseDropdown(false)}
                >
                  {navigationLinks.browse.items.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      className="dropdown-item"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Side - Language Selector and Sign In */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-white border border-gray-400 rounded px-3 py-1 hover:border-white transition-colors duration-200"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="text-sm">{selectedLanguage.label}</span>
                <svg 
                  className={`w-3 h-3 transform transition-transform duration-200 ${
                    showLanguageDropdown ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Dropdown */}
              {showLanguageDropdown && (
                <div
                  ref={languageDropdownRef}
                  className="dropdown right-0"
                >
                  {languageOptions.map((language, index) => (
                    <button
                      key={index}
                      className="dropdown-item w-full text-left"
                      onClick={() => handleLanguageSelect(language)}
                    >
                      <span className="mr-2">{language.flag}</span>
                      {language.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sign In Button */}
            <a
              href="https://www.netflix.com/in/login"
              className="netflix-button text-sm px-4 py-2"
            >
              {headerUtilityLinks.signIn.title}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center justify-between px-4 py-2 border-t border-gray-800">
        <button className="text-white hover:text-gray-300 transition-colors duration-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;