// Images data structure for Netflix clone
// src values are left empty as requested - to be filled later

export const trendingMovies = [
  {
    id: 1,
    title: "The Ba***ds of Bollywood",
    rank: 1,
    src: "https://imgs.search.brave.com/yB9nnHxYRA6Jb--dUXS-7ptlgW8TR17qrsFWLZxdu7w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YTUuYm9sbHl3b29k/aHVuZ2FtYS5pbi93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/OC9UaGUtQmFkcy1P/Zi1Cb2xseXdvb2Qt/UHJldmlldy1Cb2Ji/eS1EZW9sLUxha3No/eWEtUmFnaGF2LVNh/aGhlci1OZXRmbGl4/LUluZGlhLTMyMngz/MjIuanBn", // Image source to be filled later
    alt: "The Great Indian Family movie poster"
  },
  {
    id: 2,
    title: "Mahavatar Narsimha",
    rank: 2,
    src: "https://imgs.search.brave.com/DZOIyXUlULtQLb6SP6CQZRTQJWQ7jqj47jaGEtbPbBw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudm94Y2luZW1h/cy5jb20vcG9zdGVy/cy9QX0hPMDAwMTIz/NzNfMTc1Mzg3NTM1/NjgyNC5qcGc", // Image source to be filled later
    alt: "Baahubali movie poster"
  },
  {
    id: 3,
    title: "Jawan",
    rank: 3,
    src: "https://imgs.search.brave.com/ob5qdNVyNVGdpCZLDJAGPnsXP3JgeK0hjbqONzx4Bns/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZ2FkZ2V0czM2/MGNkbi5jb20vcHJp/Y2VlL2Fzc2V0cy9w/cm9kdWN0LzIwMjIw/Ni9KYXdhbi1wb3N0/ZXJfMTY1NTkxMjM4/Ni5qcGc_ZG93bnNp/emU9MjIwOjMwOA", // Image source to be filled later
    alt: "Jawan movie poster"
  },
  {
    id: 4,
    title: "Wednesday",
    rank: 4,
    src: "https://imgs.search.brave.com/RY_bxImCfrFXstjZScONF9yeR0JCEIOw_f3yY7eZo5o/rs:fit:500:0:1:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/L3R2L3Bvc3RlcnMv/d2VkbmVzZGF5X3Zl/cjEzLmpwZw", // Image source to be filled later
    alt: "Wednesday series poster"
  },
  {
    id: 5,
    title: "Saiyara",
    rank: 5,
    src: " https://imgs.search.brave.com/bsWdZba3d4a9z90La9m-PWSzKNtKxWj9akOIfo16jHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWdh/bGNkbi5henVyZWVk/Z2UubmV0L0NXL1Nh/aXlhYXJhSGluZGkv/SE8wMDAxMzIzNi9U/Vl9TbWFsbFBvc3Rl/ckltYWdlLzIwMjUw/NzE1LTA0NDQxNzg4/Ni5qcGc", // Image source to be filled later
    alt: "The Great Indian Kitchen movie poster"
  }
];

// Netflix logo image
export const logoImage = {
  src: "", // Netflix logo source to be filled later
  alt: "Netflix Logo",
  width: 148,
  height: 40
};

// Hero background image (already provided in request)
export const heroBackground = {
  src: "https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg",
  alt: "Netflix hero background"
};

// Feature section images
export const featureImages = {
  tv: {
    src: "", // TV feature image to be filled later
    alt: "Enjoy on your TV"
  },
  download: {
    src: "", // Download feature image to be filled later
    alt: "Download your shows to watch offline"
  },
  watchEverywhere: {
    src: "", // Watch everywhere feature image to be filled later
    alt: "Watch everywhere"
  },
  kidsProfiles: {
    src: "", // Kids profiles feature image to be filled later
    alt: "Create profiles for kids"
  }
};

// Device icons for the features section
export const deviceIcons = {
  tv: {
    src: "", // TV icon to be filled later
    alt: "TV icon"
  },
  mobile: {
    src: "", // Mobile icon to be filled later
    alt: "Mobile icon"
  },
  laptop: {
    src: "", // Laptop icon to be filled later
    alt: "Laptop icon"
  },
  tablet: {
    src: "", // Tablet icon to be filled later
    alt: "Tablet icon"
  }
};

// Arrow icons for carousel navigation
export const carouselIcons = {
  leftArrow: {
    src: "", // Left arrow icon to be filled later
    alt: "Previous"
  },
  rightArrow: {
    src: "", // Right arrow icon to be filled later
    alt: "Next"
  }
};

// Plus/minus icons for FAQ
export const faqIcons = {
  plus: {
    src: "", // Plus icon to be filled later
    alt: "Expand"
  },
  minus: {
    src: "", // Minus icon to be filled later
    alt: "Collapse"
  }
};

export default {
  trendingMovies,
  logoImage,
  heroBackground,
  featureImages,
  deviceIcons,
  carouselIcons,
  faqIcons
};