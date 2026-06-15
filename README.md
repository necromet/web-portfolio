# Personal Portfolio Website

A clean, modern, and professional personal portfolio website built with React and Vite. Designed to be minimal, high-trust, and recruiter-friendly with a strong focus on user experience and accessibility.

## Features

- **Clean & Modern Design**: Minimalist aesthetic with strong typography and plenty of whitespace
- **Fully Responsive**: Mobile-first approach ensures display on all devices
- **Smooth Animations**: Professional SVG path animations (animejs) and scroll-triggered effects (GSAP)
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and semantic HTML
- **Accessible**: WCAG compliant with proper contrast ratios and keyboard navigation
- **Dark Mode**: Theme toggle with localStorage persistence and system preference detection
- **Fast Performance**: Built with Vite (rolldown-vite) for fast development and production builds

## Pages

1. **Home/Landing**: Hero section with SVG animation, introduction, about, experience, and projects
2. **Contact**: Contact form and social media links

## Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: rolldown-vite 7.2.5
- **Routing**: React Router v7.11.0
- **Styling**: Pure CSS with CSS Variables
- **Animations**: animejs 4.3.3 (SVG path drawing), GSAP 3.14.2 (ScrollTrigger)
- **Icons**: Unicode Emojis and react-icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
src/
├── assets/                  # Images, SVGs, and static assets
├── components/
│   ├── ExperienceSection.jsx  # Work experience timeline
│   ├── MediaNavigation.jsx    # Social media links (GitHub, LinkedIn, Email)
│   ├── Navigation.jsx         # Main navigation bar
│   ├── ProjectTag.jsx         # Technology tag component
│   ├── TechTag.jsx            # Tech stack tag component
│   └── ThemeToggle.jsx        # Dark/light mode toggle
├── context/
│   └── ThemeContext.jsx      # Theme state management
├── pages/
│   └── ai-doc-translator.jsx # Project detail page (WIP)
├── sections/
│   ├── About.jsx             # About me section
│   ├── Contact.jsx           # Contact form and info
│   ├── HeroImage.jsx         # SVG path animation
│   ├── Home.jsx              # Landing page (composes all sections)
│   ├── Projects.jsx          # Project showcase
│   └── *.css                 # Section-specific styles
├── App.jsx                   # Router and layout
├── index.css                 # Global styles and CSS variables
└── main.jsx                  # App entry point
```

## Customization

### Update Personal Information

1. **Navigation Logo**: Edit `src/components/Navigation.jsx`
2. **Home Page Content**: Edit `src/sections/Home.jsx`
3. **Projects**: Update `projectsData` array in `src/sections/Projects.jsx`
4. **About Page**: Edit `src/sections/About.jsx`
5. **Contact Info**: Update `socialLinks` in `src/sections/Contact.jsx`
6. **SEO Meta Tags**: Edit `index.html`

### Color Scheme

Colors are defined using CSS variables in `src/index.css`:

```css
--primary-color: #745cec;
--primary-dark: #654aeb;
--text-primary: #1a1a1a;
--text-secondary: #666;
```

## Responsive Breakpoints

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 769px

## Accessibility Features

- Semantic HTML structure
- ARIA labels for links and buttons
- Keyboard navigation support
- Focus visible indicators
- Reduced motion support for users with motion sensitivity
- High contrast text for readability

## Deployment

This project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

The site is deployed to: https://necromet.github.io/web-portfolio

## License

This project is open source and available under the MIT License.

## Author

**Edward Renaldi**
- GitHub: [@necromet](https://github.com/necromet)
- LinkedIn: [Edward Renaldi](https://linkedin.com/in/edward-renaldi)
- Email: edwardrenaldi219@gmail.com
