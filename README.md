# 🎬 Netflix Clone

A stunning, fully responsive Netflix homepage clone built with React, Vite, and Tailwind CSS. This project demonstrates modern front-end development techniques by recreating Netflix's iconic dark theme interface with smooth animations and interactive components.

![Netflix Clone Preview](./src/assets/screenshot.png)

## ✨ Features

- **🎯 Pixel-Perfect UI**: Authentic Netflix design recreation with dark theme
- **📱 Fully Responsive**: Seamless experience across all devices and screen sizes
- **⚡ Lightning Fast**: Built with Vite for optimal performance and development experience
- **🎭 Smooth Animations**: GSAP-powered animations for enhanced user interactions
- **🌟 Interactive Components**: Dynamic FAQ section, trending content, and feature highlights
- **🎨 Modern Styling**: Tailwind CSS with custom Netflix red color scheme
- **🔍 Clean Architecture**: Well-organized component structure with reusable elements

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Frontend Framework | 19.1.1 |
| **Vite** | Build Tool & Dev Server | 7.1.7 |
| **Tailwind CSS** | Utility-First CSS Framework | 3.4.18 |
| **GSAP** | Animation Library | 3.13.0 |
| **PostCSS** | CSS Post-Processing | 8.5.6 |
| **Autoprefixer** | CSS Vendor Prefixes | 10.4.21 |
| **ESLint** | Code Quality & Linting | 9.36.0 |

## 📁 Project Structure

```
NetflixClone/
├── public/
│   └── vite.svg              # Vite logo
├── src/
│   ├── assets/               # Static assets
│   │   └── react.svg
│   ├── components/           # Reusable React components
│   │   ├── FAQSection.jsx    # Frequently asked questions
│   │   ├── FeatureSection.jsx # Netflix features showcase
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Hero.jsx          # Main hero section
│   │   └── TrendingSection.jsx # Trending content
│   ├── data/                 # Application data
│   │   ├── images.js         # Image imports and data
│   │   └── links.js          # Navigation and footer links
│   ├── hooks/                # Custom React hooks
│   ├── App.css              # Main application styles
│   ├── App.jsx              # Root application component
│   ├── index.css            # Global styles and Tailwind
│   └── main.jsx             # Application entry point
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite configuration
└── README.md               # Project documentation
```

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot module replacement |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🎨 Component Architecture

### 🏠 Header Component
- **Location**: `src/components/Header.jsx`
- **Features**: Netflix logo, navigation menu, responsive hamburger menu
- **Styling**: Fixed position with Netflix red branding

### 🎬 Hero Component
- **Location**: `src/components/Hero.jsx`
- **Features**: Main banner with email signup form and call-to-action
- **Animation**: GSAP entrance animations with convex button effects
- **Background**: Dynamic gradient overlays with Netflix imagery

### 📈 TrendingSection Component
- **Location**: `src/components/TrendingSection.jsx`
- **Features**: Showcase of trending movies and TV shows
- **Layout**: Responsive card grid with hover effects

### ⭐ FeatureSection Component
- **Location**: `src/components/FeatureSection.jsx`
- **Features**: Highlights Netflix's key features and benefits
- **Design**: Alternating layout with images and descriptions

### ❓ FAQSection Component
- **Location**: `src/components/FAQSection.jsx`
- **Features**: Interactive accordion-style FAQ with smooth animations
- **Functionality**: Expandable/collapsible questions with GSAP transitions

### 🦶 Footer Component
- **Location**: `src/components/Footer.jsx`
- **Features**: Multi-column footer with links, language selector, and company info
- **Responsive**: Adapts layout for mobile and desktop views

## 🎯 Key Features Implementation

### Responsive Design
```jsx
// Tailwind responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-gray-900 rounded-lg p-6 hover:scale-105 transition-transform">
    <!-- Responsive card content -->
  </div>
</div>
```

### GSAP Animations
```javascript
// Smooth entrance animations in Hero component
useEffect(() => {
  const tl = gsap.timeline();
  tl.fromTo(heroRef.current,
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: "power2.out" }
  ).fromTo(contentRef.current,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 0.3
  );
}, []);
```

### Interactive FAQ
```javascript
// Accordion functionality with smooth animations
const toggleFAQ = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
  // GSAP animation for smooth expand/collapse
};
```

## 🎨 Design System

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Netflix Red | `#E50914` | Primary brand color, buttons, accents |
| Dark Black | `#000000` | Main background |
| Dark Gray | `#141414` | Secondary backgrounds |
| Light Gray | `#808080` | Text, borders |
| White | `#FFFFFF` | Primary text, highlights |

### Typography
- **Primary Font**: Netflix Sans (system fallback)
- **Headings**: Bold, large scales for impact
- **Body Text**: Clean, readable font stack

### Spacing & Layout
- **Grid System**: CSS Grid and Flexbox with Tailwind utilities
- **Breakpoints**: Mobile-first responsive design
- **Spacing**: Consistent 8px grid system

## 🔧 Configuration Files

### Tailwind Configuration
```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#E50914',
        'netflix-dark': '#141414',
      }
    },
  },
  plugins: [],
}
```

### Vite Configuration
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
})
```

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic component-level code splitting
- **Tree Shaking**: Dead code elimination in production builds
- **Asset Optimization**: Image and CSS optimization
- **Modern JavaScript**: ES6+ features for better performance
- **Lazy Loading**: Deferred loading for non-critical resources

## 🎯 Features Showcase

### Email Signup Form
- Input validation
- Responsive design
- Call-to-action button with hover effects

### Interactive Elements
- Smooth hover animations
- Click interactions
- Responsive navigation menu

### Video Demo Integration
- Convex button implementation
- White-blue shadow effects
- Professional presentation layout

## 📱 Responsive Design

| Device Type | Breakpoint | Key Features |
|-------------|------------|--------------|
| **Mobile** | 0-768px | Stacked layout, hamburger menu |
| **Tablet** | 768px-1024px | Grid layout, condensed navigation |
| **Desktop** | 1024px+ | Full feature layout, hover effects |
| **Large Desktop** | 1280px+ | Maximum width constraints |

## 🎬 Demo & Screenshots

The application includes:
- Netflix-style hero banner
- Trending content grid
- Feature comparison sections
- Interactive FAQ accordion
- Professional footer with links

## 🔮 Future Enhancements

- [ ] **User Authentication**: Login/signup functionality
- [ ] **Content Management**: Dynamic movie/show data
- [ ] **Video Player**: Custom video streaming interface
- [ ] **Search Functionality**: Content search and filtering
- [ ] **User Profiles**: Multiple user profile management
- [ ] **Watchlist**: Save and manage favorite content
- [ ] **Recommendations**: AI-powered content suggestions
- [ ] **Dark/Light Mode**: Theme switching capability

## 📦 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure redirects for SPA routing

### Deploy to GitHub Pages
```bash
npm run build
# Configure GitHub Pages to serve from dist folder
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Add comments for complex functionality
- Ensure responsive design
- Test across different browsers
- Update documentation as needed

## 📄 License

This project is for educational purposes only. Netflix and all related trademarks are property of Netflix, Inc.

## 🙏 Acknowledgments

- **Netflix** for design inspiration and brand assets
- **React Team** for the powerful framework
- **Tailwind CSS** for utility-first styling approach
- **Vite Team** for the lightning-fast build tool
- **GSAP** for smooth, professional animations
- **Open Source Community** for tools and libraries

## 📞 Contact & Support

**Developer**: Pradeep Kumawat

- **Email**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your Profile](https://linkedin.com/in/yourprofile)
- **Portfolio**: [Your Website](https://yourwebsite.com)

### Issues & Questions
If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/yourusername/netflix-clone/issues) page
2. Create a new issue with detailed description
3. Include screenshots and error messages
4. Provide your environment details

---

⭐ **If this project helped you, please give it a star!**

🎬 **Experience Netflix-style UI development at its finest!**

Made with ❤️ and ☕ by [Pradeep Kumawat](https://github.com/yourusername)
