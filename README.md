# Personal Portfolio Website

A clean, modern, and professional personal portfolio website built with React and Vite. Designed to be minimal, high-trust, and recruiter-friendly with a strong focus on user experience and accessibility.

## 🌟 Features

- **Clean & Modern Design**: Minimalist aesthetic with strong typography and plenty of whitespace
- **Fully Responsive**: Mobile-first approach ensures perfect display on all devices
- **Smooth Animations**: Subtle, professional animations enhance user experience
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Accessible**: WCAG compliant with proper contrast ratios and keyboard navigation
- **Fast Performance**: Built with Vite for lightning-fast development and production builds

## 📄 Pages

1. **Home/Landing**: Hero section with introduction and call-to-action
2. **Projects**: Showcase of portfolio projects with descriptions and links
3. **About**: Personal bio, technical skills, and professional experience
4. **Contact**: Contact form and social media links

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Pure CSS with CSS Variables
- **Icons**: Unicode Emojis (no external dependencies)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

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
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx       # Main navigation component
│   └── Navigation.css
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Home.css
│   ├── Projects.jsx        # Projects showcase
│   ├── Projects.css
│   ├── About.jsx           # About me page
│   ├── About.css
│   ├── Contact.jsx         # Contact form
│   └── Contact.css
├── App.jsx                 # Main app component with routing
├── App.css
├── index.css               # Global styles
└── main.jsx                # App entry point
```

## 🎨 Customization

### Update Personal Information

1. **Navigation Logo**: Edit [src/components/Navigation.jsx](src/components/Navigation.jsx)
2. **Home Page Content**: Edit [src/pages/Home.jsx](src/pages/Home.jsx)
3. **Projects**: Update `projectsData` array in [src/pages/Projects.jsx](src/pages/Projects.jsx)
4. **About Page**: Edit [src/pages/About.jsx](src/pages/About.jsx)
5. **Contact Info**: Update `socialLinks` in [src/pages/Contact.jsx](src/pages/Contact.jsx)
6. **SEO Meta Tags**: Edit [index.html](index.html)

### Color Scheme

Colors are defined using CSS variables in [src/index.css](src/index.css):

```css
--primary-color: #4a90e2;
--primary-dark: #357abd;
--text-primary: #1a1a1a;
--text-secondary: #666;
```

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 769px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for links and buttons
- Keyboard navigation support
- Focus visible indicators
- Reduced motion support for users with motion sensitivity
- High contrast text for readability

## 🔧 Form Functionality

The contact form is currently frontend-only. To make it functional:

1. **Email Service**: Integrate with EmailJS, Formspree, or similar
2. **Backend API**: Connect to your own backend endpoint
3. **Serverless Function**: Use Netlify/Vercel functions

## 📦 Deployment

### Netlify

```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Vercel

```bash
npm install -g vercel
vercel
```

### GitHub Pages

```bash
npm run build
# Deploy 'dist' folder to gh-pages branch
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Your Name**
- Website: https://yourwebsite.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Built with React and Vite
- Placeholder images from placeholder.com
- Icons using Unicode emoji characters

---

**Note**: Remember to replace all placeholder content (names, links, images) with your actual information before deploying!
