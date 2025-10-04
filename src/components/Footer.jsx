import React, { useState } from 'react';
import { footerLinks, languageOptions, contactInfo } from '../data/links';

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowLanguageDropdown(false);
  };

  return (
    <footer className="bg-black py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Information */}
        <div className="mb-8">
          <p className="text-gray-400 text-sm mb-2">
            Questions? Call{' '}
            <a 
              href={`tel:${contactInfo.phone}`} 
              className="underline hover:text-white transition-colors duration-200"
            >
              {contactInfo.phone}
            </a>
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-3">
              {column.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  className="block text-gray-400 text-sm hover:text-white transition-colors duration-200 underline"
                >
                  {link.title}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Language Selector */}
        <div className="mb-8">
          <div className="relative inline-block">
            <button
              className="flex items-center space-x-2 text-white border border-gray-400 rounded px-3 py-2 hover:border-white transition-colors duration-200 bg-black"
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
              <div className="absolute bottom-full left-0 mb-2 bg-black border border-gray-700 rounded-lg shadow-lg py-2 z-50 min-w-max">
                {languageOptions.map((language, index) => (
                  <button
                    key={index}
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors duration-150 cursor-pointer w-full text-left"
                    onClick={() => handleLanguageSelect(language)}
                  >
                    <span className="mr-2">{language.flag}</span>
                    {language.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Company Information */}
        <div className="text-gray-400 text-sm">
          <p className="mb-2">{contactInfo.region}</p>
          <p className="text-xs">
            {contactInfo.protection}{' '}
            <a 
              href="#" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              {contactInfo.learnMore}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;