# GermanGenie — SEO-Optimized Landing Page
 
A fully SEO-optimized marketing landing page for **GermanGenie**, a (concept) gamified German-learning app. Built from scratch with semantic HTML, CSS, and vanilla JavaScript, with a strong focus on on-page SEO, structured data, and Core Web Vitals.
 
🔗 **Live demo:** https://arturbui.github.io/GermanGenieSEO/
 
 
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222222?style=flat&logo=github)
 
## About
 
This was a university project at **SRH Berlin University of Applied Sciences**, built to demonstrate modern search-engine-optimization techniques on a real, responsive landing page. The page markets an in-development product, *GermanGenie* — an app that teaches German sentence structure through interactive puzzle challenges — and was used as a vehicle to apply SEO best practices end to end.
 
## SEO Highlights
 
This is the core of the project. The page implements:
 
**Structured data (Schema.org / JSON-LD)**
- `SoftwareApplication` schema with offers and aggregate rating — eligible for rich results with star ratings
- `FAQPage` schema — eligible for expandable FAQ snippets directly in search results
**On-page metadata**
- Descriptive, keyword-targeted `<title>` and meta description
- Canonical URL to avoid duplicate-content issues
- `robots` directives (`index, follow`)
- Keyword meta targeting CEFR levels (A1–C2) and core search terms
**Social / sharing**
- Open Graph tags for rich previews on Facebook, LinkedIn, etc.
- Twitter Card tags (`summary_large_image`)
**Semantic & accessible HTML**
- Proper document outline: single `<h1>`, logical `<h2>` hierarchy, `<nav>`, `<section>`, `<footer>`
- `lang` attribute set on the document
- Descriptive `alt` text on imagery
**Performance & Core Web Vitals**
- WebP image format (~7.8 KB vs. ~115 KB for the PNG source)
- `loading="lazy"` for offscreen images
- Explicit `width`/`height` to prevent Cumulative Layout Shift (CLS)
- `preconnect` to the font provider to speed up font loading
## Features
 
- 📱 Responsive landing page layout
- ✨ Scroll-reveal animations via the `IntersectionObserver` API (no libraries)
- 📊 Animated proficiency-level progress bar
- 🪶 Zero dependencies — plain HTML, CSS, and JavaScript
## Tech Stack
 
- **HTML5** (semantic markup + JSON-LD structured data)
- **CSS3**
- **Vanilla JavaScript** (IntersectionObserver)
- **GitHub Pages** for hosting
## Run Locally
 
No build step or dependencies required:
 
```bash
git clone https://github.com/arturbui/GermanGenieSEO.git
cd GermanGenieSEO
```
```bash
Then open `index.html` in your browser. Or simply view the live version on GitHub Pages
(https://arturbui.github.io/GermanGenieSEO/).
```
 
## Author
 
**Artur Buivydis** — Web Development student at SRH Berlin University of Applied Sciences
