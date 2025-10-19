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
- **CSS3**: Modern styling with flexbox, grid, animations, and backdrop filters
- **JavaScript (ES6)**: Interactive components and dynamic content
- **Google Fonts**: Montserrat font family
- **Google Forms**: Embedded business inquiry form

## 📁 File Structure

```
AHS/
├── index.html          # Main HTML file
├── styles.css          # Primary stylesheet (desktop)
├── mobile.css          # Mobile-specific styles
├── tablet.css          # Tablet-specific styles
├── script.js           # JavaScript functionality
├── assets/             # Images and media files
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
- Responsive hamburger menu for mobile

### 2. Hero Section
- Full-width hero image with overlay
- Company name and tagline
- Smooth parallax-style design

### 3. About/History Section
- Company overview and history
- Highlights key value propositions
- Call-to-action button
- Circular image with shadow effects

### 4. Procurement Section
- Detailed procurement services information
- Multi-paragraph description
- Featured image with rounded corners
- "Get In Touch" CTA button

### 5. Services Section
- **6 Service Categories:**
  - Architectural Services
  - Space Planning and Design
  - Purchasing and Procurement
  - Installation Services
  - Hotel Operating Systems
  - Hotel Construction
- Interactive tab interface
- Dynamic content loading
- Service icons and images
- Detailed feature lists

### 6. Portfolio/Partners Section
- Trusted partner logos (Hilton, Marriott, IHG)
- Auto-advancing image carousel
- Manual navigation controls
- Pause on hover functionality

### 7. Contact Section
- Company contact information
- Phone and email links
- Embedded Google Forms for business inquiries
- Styled contact cards with hover effects

### 8. Footer
- Copyright information
- Quick contact links
- Professional dark theme

## 🎨 Customization

### Changing Colors

The main color scheme can be modified in `styles.css`:

```css
/* Primary colors */
--navy-blue: #002A5C;      /* Brand color for accents */
--dark-gray: #2c3e50;      /* Footer and headers */
--light-gray: #e0e0e0;     /* Buttons and backgrounds */
--background: #f8f8f8;     /* Section backgrounds */
```

### Updating Content

1. **Service Content**: Edit the `serviceContent` object in `script.js` (lines 21-88)
2. **Partner Logos**: Replace images in the `images/` folder
3. **Carousel Images**: Update image sources in `index.html` (lines 159-178)
4. **Contact Information**: Modify contact details in `index.html` (lines 203-204)

### Adding New Services

1. Add service data to `serviceContent` object in `script.js`
2. Add a new button in the services menu in `index.html`
3. Add corresponding icon image to `images/` folder

## 📱 Responsive Design

The website is fully responsive with breakpoints at:

- **Desktop**: > 1200px (full layout)
- **Tablet**: 769px - 1200px (adjusted spacing and fonts)
- **Mobile**: ≤ 768px (stacked layout, hamburger menu)

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
