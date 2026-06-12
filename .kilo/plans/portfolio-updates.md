# Web Portfolio Update Plan

## Overview
A comprehensive review of Edward's web portfolio identified several issues across content accuracy, broken functionality, SEO, code quality, and README accuracy. Below are the recommended updates organized by priority.

---

## 1. CRITICAL — Broken / Placeholder Content

### 1a. Contact Page Has All Placeholder Data
**File:** `src/sections/Contact.jsx:39-44, 169`
- Social links point to generic URLs: `github.com`, `linkedin.com`, `twitter.com`, `your.email@example.com`
- Location says "San Francisco, CA" but Edward is based in **Indonesia**
- Email should be `edwardrenaldi219@gmail.com` (already used in `MediaNavigation.jsx:39`)
- GitHub should be `https://github.com/necromet`
- LinkedIn should be `https://linkedin.com/in/edward-renaldi`

**Action:** Replace all placeholder social links and location with real data. Remove Twitter or update it.

### 1b. Contact Nav Link Is Commented Out
**File:** `src/components/Navigation.jsx:55-62`
- The Contact nav link is commented out, making the Contact page unreachable.

**Action:** Either uncomment it or remove the Contact route from `App.jsx` if it's intentionally hidden.

### 1c. Project Detail Pages Are Empty / Missing Routes
**Files:** `src/pages/ai-doc-translator.jsx` (empty), `src/pages/project-page.css` (empty)
- Project cards link to `/ai-doc-translator`, `/receipt-parser`, `/ai-data-analyzer` but **no routes** exist in `App.jsx`
- `ai-doc-translator.jsx` is a 0-line empty file

**Action:** Either:
- **Option A:** Create actual project detail pages and add routes to `App.jsx`
- **Option B:** Remove the `demoLink` from projects data and remove the empty files, keeping only GitHub links

### 1d. index.html Has Placeholder OG URL
**File:** `index.html:23`
- `og:url` is `https://yourwebsite.com` — should be `https://necromet.github.io/web-portfolio`

**Action:** Update to the real deployed URL.

---

## 2. HIGH PRIORITY — SEO & Metadata

### 2a. Missing Open Graph / Twitter Image
**File:** `index.html`
- No `og:image` or `twitter:image` meta tags — social shares will have no preview image

**Action:** Add a screenshot/preview image and reference it in the meta tags.

### 2b. Google Fonts URL May Be Malformed
**File:** `index.html:11`
- The URL includes `family=Google+Sans+Flex:wght@300;400;500;600;700;800` which is **not a valid Google Fonts family**. `Google Sans Flex` is a proprietary font not available via Google Fonts CDN.
- Also, the `&family=Fredoka` entry is appended after `display=swap` without a proper `&` separator in the correct position.

**Action:** Remove `Google Sans Flex` from the font imports. Verify the Google Fonts URL is well-formed.

### 2c. Missing Canonical Tag
**File:** `index.html`
- No `<link rel="canonical">` tag for SEO.

**Action:** Add canonical URL pointing to the deployed site.

---

## 3. MEDIUM PRIORITY — Code Quality

### 3a. README.md Is Outdated
**File:** `README.md`
- Claims **React 18** — actual version is **React 19.2.0**
- Claims **React Router v6** — actual version is **v7.11.0**
- Project structure is outdated (references `src/pages/` which doesn't match actual `src/sections/` and `src/components/`)
- Author section has placeholders: "Your Name", "yourwebsite.com", "@yourusername"
- Color scheme example shows `#4a90e2` but actual primary is `#745cec`

**Action:** Update README to reflect actual tech stack, project structure, and author info.

### 3b. Inconsistent File Naming
- `src/sections/heroimage.jsx` — lowercase, while all other components use PascalCase (`About.jsx`, `Projects.jsx`, etc.)

**Action:** Rename to `HeroImage.jsx` and update the import in `Home.jsx`.

### 3c. Unused Dependencies
- `prop-types` — no PropTypes usage found anywhere in the codebase
- `@types/react` and `@types/react-dom` — TypeScript types but project is pure JSX

**Action:** Remove unused dependencies.

### 3d. Favicon Path May Break in Production
**File:** `index.html:5`
- `href="../src/assets/erailogo_1color.svg"` — this relative path references `src/` which doesn't exist in the built `dist/` output.

**Action:** Move the favicon to `public/` and reference it as `/web-portfolio/erailogo_1color.svg` or use a proper `public/` path.

### 3e. Duplicate Animation Libraries
- Both `animejs` (^4.3.3) and `gsap` (^3.14.2) are installed. `animejs` is only used in `heroimage.jsx` for SVG path drawing. `gsap` is used in `ExperienceSection.jsx`.

**Action:** Consider consolidating to one library to reduce bundle size, or keep both if both are needed for different effects.

---

## 4. LOW PRIORITY — Enhancements

### 4a. Mobile Navigation / Hamburger Menu
- README claims "Mobile-friendly hamburger menu" but the navigation has no hamburger implementation — nav links just shrink at small breakpoints.

**Action:** Implement a hamburger menu for mobile, or update README to remove the claim.

### 4b. Project Cards — Add More Technologies
**File:** `src/sections/Projects.jsx:8-36`
- "AI Document Translator" only lists `['Python']` — could include specific frameworks/libraries used
- Same for "Receipt Parser" which only lists `['Python']`

**Action:** Add more specific technology tags (e.g., Flask, PaddleOCR, LangChain, etc.)

### 4c. About Section — Expand Tech Stack
**File:** `src/sections/About.jsx:26-35`
- Only 6 tech tags shown (Python, PostgreSQL, React.js, Tableau, Superset, Langflow)

**Action:** Consider adding more recent/relevant tools if applicable.

### 4d. Footer Enhancement
**File:** `src/App.jsx:20-24`
- Footer only has a copyright line. Could add social links, a "back to top" button, or quick nav.

### 4e. Add a Resume/CV Download Button
- No way for visitors to download Edward's resume.

**Action:** Add a "Download Resume" button in the hero or about section.

---

## Summary Table

| # | Issue | Severity | File(s) |
|---|-------|----------|---------|
| 1a | Contact placeholder data | Critical | Contact.jsx |
| 1b | Contact nav commented out | Critical | Navigation.jsx |
| 1c | Empty project detail pages | Critical | ai-doc-translator.jsx, App.jsx |
| 1d | Placeholder OG URL | Critical | index.html |
| 2a | Missing og:image | High | index.html |
| 2b | Invalid Google Font | High | index.html |
| 2c | Missing canonical tag | High | index.html |
| 3a | Outdated README | Medium | README.md |
| 3b | Inconsistent file naming | Medium | heroimage.jsx |
| 3c | Unused dependencies | Medium | package.json |
| 3d | Favicon path broken in prod | Medium | index.html |
| 3e | Duplicate animation libs | Medium | package.json |
| 4a | No hamburger menu | Low | Navigation.jsx |
| 4b | Sparse project tech tags | Low | Projects.jsx |
| 4c | Limited tech stack display | Low | About.jsx |
| 4d | Minimal footer | Low | App.jsx |
| 4e | No resume download | Low | Home.jsx / About.jsx |
