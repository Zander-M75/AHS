# Associated Hospitality Services Inc. - Website

A modern, responsive website for Associated Hospitality Services Inc. (AHS), a premier hospitality design and procurement firm serving the Northeast and Mid-Atlantic regions since 1998.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Installation & Setup](#installation--setup)
- [Sections](#sections)
- [Customization](#customization)
- [Responsive Design](#responsive-design)
- [Browser Support](#browser-support)
- [Contact](#contact)

## 🎯 Overview

This website showcases AHS's comprehensive suite of hospitality services, including architectural design, space planning, procurement, installation, hotel operating systems, and construction management. The site features a clean, modern design with smooth animations, interactive elements, and mobile responsiveness.

## ✨ Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Smooth scroll behavior with fixed navigation bar
- **Interactive Service Tabs**: Dynamic service showcase with tab-based content switching
- **Image Carousel**: Auto-advancing carousel displaying portfolio projects
- **Animated Elements**: Hover effects, transitions, and fade-in animations
- **Partner Showcase**: Display of trusted industry partners (Hilton, Marriott, IHG)
- **Contact Integration**: Direct phone/email links and embedded Google Form
- **Modern UI/UX**: Clean, professional design with geometric background pattern
- **Hamburger Menu**: Mobile-friendly collapsible navigation

## 🛠 Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Custom properties (light and dark themes), grid, scroll-snap, and motion that respects `prefers-reduced-motion`
- **JavaScript (ES6)**: Interactive components and dynamic content
- **Archivo** (variable, self-hosted in `assets/fonts/`): single typeface; headings use its wider widths
- **Google Forms**: Embedded business inquiry form

## 📁 File Structure

```
AHS/
├── index.html          # Main HTML file
├── styles.css          # Tokens, base styles, and desktop layout
├── tablet.css          # Overrides at <= 1024px
├── mobile.css          # Overrides at <= 768px
├── script.js           # JavaScript functionality
├── assets/             # Images, fonts, and media files
│   ├── fonts/          # Archivo variable font (woff2)
│   └── images/
│       ├── AHS-Logo-only.png
│       ├── hotel-hero.png
│       ├── simple-room.png
│       ├── hotel-lobby-1.png
│       ├── services/   # Service section images
│       │   ├── architectural-services.jpg
│       │   ├── Space-Planning-Design.jpg
│       │   ├── Procurement.jpg
│       │   ├── Installation.jpg
│       │   ├── Operating-System.jpg
│       │   └── Construction.jpg
│       └── [partner logos and portfolio images]
└── README.md           # This file
```

## 🚀 Installation & Setup

1. **Clone or download the repository**
   ```bash
   git clone [repository-url]
   cd AHS
   ```

2. **No build process required!** This is a static website using vanilla HTML, CSS, and JavaScript.

3. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended for development):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

4. **Access the website**
   - Open `http://localhost:8000` in your browser (if using local server)
   - Or directly open the `index.html` file

## 📄 Sections

### 1. Navigation Bar
- Company logo
- Navigation links (Home, History, Procurement, Services, Partners, Contact)
- "Contact Us" CTA button
- Transparent over the hero, turns solid once you scroll past it
- Full-screen menu behind a toggle at tablet and mobile sizes

### 2. Hero Section
- Full-bleed hero image with a gradient scrim
- Company name set large, revealed line by line on load
- Subtle scroll drift on the photo (browsers that support scroll-driven animations)

### 3. About/History Section
- Company overview and history
- Highlights key value propositions
- Call-to-action button
- Photo that overlaps the bottom edge of the hero

### 4. Procurement Section
- Detailed procurement services information
- Multi-paragraph description
- Edge-to-edge image beside the copy
- "Get In Touch" CTA button

### 5. Services Section
- **6 Service Categories:**
  - Architectural Services
  - Space Planning and Design
  - Purchasing and Procurement
  - Installation Services
  - Hotel Operating Systems
  - Hotel Construction
- Accessible tab interface (click or arrow keys) with a sliding indicator
- Tabs scroll horizontally on smaller screens
- Dynamic content loading
- Service icons and images
- Detailed feature lists

### 6. Portfolio/Partners Section
- Trusted partner logos (Hilton, Marriott, IHG)
- Scroll-snap image gallery that auto-advances while on screen
- Previous / next controls, swipe on touch devices
- Pauses on hover, focus, or touch

### 7. Contact Section
- Company contact information
- Phone and email links
- Embedded Google Forms for business inquiries
- Navy closing band with a contact card

### 8. Footer
- Copyright information
- Quick contact links
- Continues the navy closing band

## 🎨 Customization

### Changing Colors

Colors are CSS custom properties at the top of `styles.css`, with a second set for dark mode under `@media (prefers-color-scheme: dark)`:

```css
--brand: #002a5c;     /* AHS logo navy: buttons, indicators, accents */
--ink: #0b1a2e;       /* Headings */
--ink-2: #3a4658;     /* Body text */
--bg: #f6f7f9;        /* Page background */
--bg-tint: #eceff4;   /* Alternate section background */
--band: #002a5c;      /* Contact + footer band */
```

### Updating Content

1. **Service Content**: Edit the `serviceContent` object in `script.js`
2. **Partner Logos**: Replace images in `assets/images/hotel-logos/`
3. **Gallery Images**: Update the `.gallery-slide` images in `index.html`
4. **Contact Information**: Modify the contact card and footer in `index.html`

### Adding New Services

1. Add service data to `serviceContent` object in `script.js`
2. Add a matching `.service-tab` button in `index.html` (its `data-service`, `id="tab-<key>"` and `aria-controls="service-<key>"` must use the same key)
3. Add the icon image to `assets/images/icons/`

## 📱 Responsive Design

The website is fully responsive with breakpoints at:

- **Desktop**: > 1024px (full layout, `styles.css`)
- **Tablet**: ≤ 1024px (menu toggle, scrolling service tabs, `tablet.css`)
- **Mobile**: ≤ 768px (single-column layout, `mobile.css`)

Responsive features include:
- Flexible grid and flexbox layouts
- Adjustable font sizes
- Collapsible navigation menu
- Touch-friendly buttons and links
- Optimized image sizes

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact

**Associated Hospitality Services, Inc.**

- **Phone**: [845.919.9990](tel:845.919.9990)
- **Email**: [joel@ahs-connect.com](mailto:joel@ahs-connect.com)
- **Inquiry Form**: [New Business Inquiry Form](https://docs.google.com/forms/d/e/1FAIpQLSeRFXB92Fyner7mYSSgQJ2AGvgM4rrp-P1ewjf4d7DqowCgOA/viewform)

---

## 📝 Development Notes

### JavaScript Features

- **DOM Manipulation**: Dynamic service content generation
- **Event Handling**: Click, hover, scroll events
- **Carousel Logic**: Auto-advance with manual controls
- **Smooth Scrolling**: Enhanced navigation experience
- **Hamburger Menu**: Mobile navigation toggle

### CSS Highlights

- **Geometric Background Pattern**: Custom linear gradients for visual interest
- **Backdrop Filter**: Modern blur effects on hero section
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Animations**: Smooth transitions and keyframe animations
- **Media Queries**: Comprehensive responsive design

### Best Practices Implemented

- ✅ Semantic HTML5 elements
- ✅ Mobile-first approach
- ✅ Accessibility considerations
- ✅ Performance optimization
- ✅ Clean, maintainable code structure
- ✅ Cross-browser compatibility
- ✅ SEO-friendly markup

---

**© 2024 Associated Hospitality Services, Inc. All rights reserved.**
