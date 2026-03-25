# DRV Events - Premium Wedding & Event Management Website

A stunning, ultra-premium 3D website for DRV Events, a leading wedding and event planning company in Dewas, Madhya Pradesh.

## 🌟 Project Features

### Design & Aesthetics
- **Elegant, Luxurious Design**: Deep black, champagne gold, ivory white, and soft blush color palette
- **Premium Typography**: Elegant serif fonts (Cormorant Garamond) for headings and clean sans-serif (Poppins) for body text
- **3D Elements & Animations**: 
  - Floating 3D wedding elements (rings, floral arches)
  - Interactive hero section with particle effects
  - Smooth parallax scrolling effects
  - Glassmorphism effects
  - Hover animations and transitions
- **Cinematic Lighting**: Professional gradient backgrounds and subtle gold highlights

### Responsive & Mobile-Friendly
- Fully responsive design for desktop, tablet, and mobile devices
- Touch-friendly navigation
- Optimized mobile menu with hamburger toggle
- Fast loading times
- SEO-friendly structure

### Features Included
✅ **Hero Section** - Automatic image slider with 3D effects  
✅ **About Us** - Comprehensive company story with 13+ years experience badge  
✅ **Events Showcase** - 6 event categories with beautiful cards  
✅ **Premium Services** - 12 detailed service offerings with icons  
✅ **Why Choose Us** - Statistics and benefits display  
✅ **Testimonials** - Animated carousel with client reviews  
✅ **Blog** - 6 featured blog posts  
✅ **Contact Form** - With WhatsApp integration  
✅ **Google Maps** - Location display  
✅ **Careers** - Job application form  
✅ **Social Media Integration** - WhatsApp, Instagram, Facebook, Email  
✅ **WhatsApp Chat** - Floating button for direct messaging  

## 📁 Project Structure

```
DRV-Events/
├── index.html                 # Main homepage
├── css/
│   ├── styles.css            # Main stylesheet
│   └── responsive.css        # Mobile responsive styles
├── js/
│   ├── main.js               # Core JavaScript functionality
│   └── 3d-elements.js        # 3D animations and effects
├── pages/
│   ├── about.html            # About Us page
│   ├── services.html         # Services page
│   ├── blog.html             # Blog page
│   ├── contact.html          # Contact Us page
│   └── careers.html          # Careers/Join Us page
└── images/                   # Image assets folder
```

## 🚀 Getting Started

### Basic Setup
1. Extract the project files to your desired location
2. Open `index.html` in a web browser
3. All pages are linked through the navigation menu

### Customization

#### Change Company Details
- Phone Number: Search for `8319111085` and replace with your number
- Email: Search for `inbox2drv@gmail.com` and update
- Address: Update address in footer and contact page
- Social Media Links: Update Instagram, Facebook, WhatsApp links

#### Update Colors
Edit `:root` variables in `css/styles.css`:
```css
:root {
    --primary-dark: #0a0a0a;
    --accent-gold: #d4af37;
    --ivory-white: #f5f1f0;
    --blush-pink: #e8d5d0;
}
```

#### Replace Images
- Hero section: Update image URLs in the slider
- About page: Replace team image
- Events section: Update event category images
- Blog: Replace blog post featured images

## 🎨 Color Palette

| Purpose | Color | Code |
|---------|-------|------|
| Primary Dark | Deep Black | #0a0a0a |
| Background | Secondary Dark | #1a1a1a |
| Accent | Champagne Gold | #d4af37 |
| Light Text | Ivory White | #f5f1f0 |
| Secondary | Blush Pink | #e8d5d0 |

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 480px to 767px
- **Extra Small**: Below 480px

## 🔧 JavaScript Functionality

### Main Features
- **Navigation**: Active link highlighting, mobile menu toggle
- **Hero Slider**: Auto-play image rotation every 5 seconds
- **Testimonials**: Carousel with keyboard support (arrow keys)
- **Form Submission**: WhatsApp integration for contact and career forms
- **Smooth Scrolling**: Anchor link navigation
- **Scroll Animations**: Fade-in effects on elements
- **Mobile Menu**: Toggle hamburger menu

### Key Functions
- `initializeNavigation()` - Setup navigation menu
- `initializeSlider()` - Setup image slider
- `initializeTestimonials()` - Setup testimonial carousel
- `handleFormSubmit()` - Process form submissions
- `showNotification()` - Display success/error messages

## 📞 Contact Integration

### WhatsApp Integration
- Floating WhatsApp button in bottom right
- Contact form sends data via WhatsApp
- Career application form also uses WhatsApp

### Links Used
- WhatsApp: `https://wa.me/8319111085`
- Email: `inbox2drv@gmail.com`
- Instagram: `@drvevents`
- Phone: `8319111085`, `088711 94663`

## 🎯 SEO Optimization

- Semantic HTML5 structure
- Meta descriptions and keywords
- Responsive design for mobile indexing
- Fast loading optimization
- Proper heading hierarchy
- Image alt text
- Open Graph meta tags ready

## 📊 Performance Tips

1. **Image Optimization**: Compress images before uploading
2. **Caching**: Enable browser caching in server settings
3. **Minification**: Minify CSS and JS for production
4. **CDN**: Use CDN for external resources (fonts, icons)
5. **Lazy Loading**: Already implemented for images

## 🛠️ Customization Guide

### Add New Blog Post
1. Open `pages/blog.html`
2. Duplicate a blog card HTML block
3. Update image, title, description, and link

### Add New Service
1. Open `index.html`
2. Find services-grid section
3. Add new service-card with icon and description

### Modify Testimonials
1. Edit testimonial-item blocks in `index.html`
2. Update client name, company, and review text

### Change Fonts
Edit font imports in HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;700&display=swap" rel="stylesheet">
```

## 🌐 Hosting Recommendations

1. **Netlify** - Free, easy deployment
2. **Vercel** - Fast, optimized for web
3. **GitHub Pages** - Free static hosting
4. **Shared Hosting** - Traditional web hosting
5. **AWS S3** - Scalable cloud hosting

## ✨ Special Features Explained

### Glassmorphism Effect
- Creates a frosted glass look with:
  - `backdrop-filter: blur(10px)`
  - Semi-transparent backgrounds
  - Border with reduced opacity

### 3D Card Flip
- Hover effect with CSS transforms
- Creates depth using perspective
- Smooth transitions

### Particle Animation
- CSS-based particle effects
- No external libraries needed
- Lightweight performance

### Auto-Playing Slider
- Changes image every 5 seconds
- Manual dot controls available
- Responsive design

## 📱 Mobile Navigation

- Hamburger menu on mobile
- Touch-friendly buttons
- Full-width menu overlay
- Auto-close on link click

## 🔐 Security Notes

- Contact forms don't store data on server (WhatsApp solution)
- No sensitive information is stored
- All external links are legitimate
- HTTPS recommended for production

## 📝 Maintenance Checklist

- [ ] Update copyright year annually
- [ ] Test all links and forms
- [ ] Check mobile responsiveness
- [ ] Verify WhatsApp links are active
- [ ] Update testimonials regularly
- [ ] Refresh blog content
- [ ] Check social media links
- [ ] Test form submissions

## 🎯 Best Practices

1. **Regular Updates**: Keep content fresh and relevant
2. **Mobile Testing**: Always test on actual devices
3. **Performance**: Monitor page load times
4. **Analytics**: Add Google Analytics for insights
5. **SSL Certificate**: Use HTTPS for security
6. **Backups**: Regular backup of website files

## 📧 Support & Contact

For DRV Events inquiries:
- **Phone**: 8319111085 or 088711 94663
- **Email**: inbox2drv@gmail.com
- **WhatsApp**: Available through floating button
- **Location**: Dewas, Madhya Pradesh, India

## 📄 License

This website template is created specifically for DRV Events. All rights reserved.

## 🙏 Credits

- **Design**: Premium, modern event management website
- **Framework**: HTML5, CSS3, JavaScript ES6+
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Cormorant Garamond, Poppins)
- **Images**: Client-provided wedding and event photos

---

**Last Updated**: March 24, 2026  
**Version**: 1.0 - Complete Premium Website

Enjoy your stunning new website! For any modifications or updates, contact your web developer.
