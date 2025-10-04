// Navigation links data structure for Netflix clone
// URLs are left empty as requested - to be filled later

export const navigationLinks = {
  // Main navigation dropdown
  browse: {
    title: "Browse",
    items: [
      { title: "Home", url: "" },
      { title: "TV Shows", url: "" },
      { title: "Movies", url: "" },
      { title: "New & Popular", url: "" },
      { title: "My List", url: "" },
      { title: "Browse by Languages", url: "" },
    ]
  }
};

// Footer links structure
export const footerLinks = [
  // Column 1
  [
    { title: "FAQ", url: "" },
    { title: "Investor Relations", url: "" },
    { title: "Privacy", url: "" },
    { title: "Speed Test", url: "" },
  ],
  // Column 2
  [
    { title: "Help Centre", url: "" },
    { title: "Jobs", url: "" },
    { title: "Cookie Preferences", url: "" },
    { title: "Legal Notices", url: "" },
  ],
  // Column 3
  [
    { title: "Account", url: "" },
    { title: "Ways to Watch", url: "" },
    { title: "Corporate Information", url: "" },
    { title: "Only on Netflix", url: "" },
  ],
  // Column 4
  [
    { title: "Media Centre", url: "" },
    { title: "Terms of Use", url: "" },
    { title: "Contact Us", url: "" },
  ],
];

// Language options
export const languageOptions = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
];

// Contact information
export const contactInfo = {
  phone: "000-800-919-1743",
  region: "Netflix India",
  protection: "This page is protected by Google reCAPTCHA to ensure you're not a bot.",
  learnMore: "Learn more."
};

// Account related links (for signed-in users)
export const accountLinks = {
  profile: {
    title: "Manage Profiles",
    url: ""
  },
  account: {
    title: "Account",
    url: ""
  },
  helpCenter: {
    title: "Help Centre",
    url: ""
  },
  signOut: {
    title: "Sign out of Netflix",
    url: ""
  }
};

// Header utility links
export const headerUtilityLinks = {
  signIn: {
    title: "Sign In",
    url: ""
  },
  getStarted: {
    title: "Get Started",
    url: ""
  }
};

// Feature links for "More reasons to join" section
export const featureLinks = [
  {
    title: "Enjoy on your TV",
    description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    url: ""
  },
  {
    title: "Download your shows to watch offline",
    description: "Save your favourites easily and always have something to watch.",
    url: ""
  },
  {
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    url: ""
  },
  {
    title: "Create profiles for kids",
    description: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    url: ""
  }
];

export default {
  navigationLinks,
  footerLinks,
  languageOptions,
  contactInfo,
  accountLinks,
  headerUtilityLinks,
  featureLinks
};