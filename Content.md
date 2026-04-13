# Portfolio Content Documentation

This document provides a comprehensive overview of all content, sections, and features included in this portfolio website.

## 📋 Table of Contents

1. [Overview](#overview)
2. [Main Sections](#main-sections)
3. [Personal Information](#personal-information)
4. [Projects](#projects)
5. [Skills & Technologies](#skills--technologies)
6. [Experience](#experience)
7. [UI Components](#ui-components)
8. [Features & Functionality](#features--functionality)
9. [Assets & Resources](#assets--resources)

---

## Overview

This is a modern, glassmorphism-themed portfolio website built with React, Vite, and TailwindCSS. It showcases the work, skills, and experience of **Ahmad Syukri Sazali**, a Software Developer based in Shah Alam, Malaysia.

---

## Main Sections

The portfolio consists of 6 main sections, each accessible via smooth scrolling navigation:

### 1. **Hero Section** (`#home`)
- **Purpose**: First impression and introduction
- **Content**:
  - Greeting message: "Hi, my name is"
  - Full name display with gradient text effect
  - Professional title: "Software Developer"
  - Animated typing taglines (4 rotating messages)
  - Call-to-action buttons:
    - "View My Work" (scrolls to projects)
    - "Download CV" (opens resume PDF)
  - Social media links (GitHub, LinkedIn, Email)
  - Scroll indicator with animated chevron
- **Visual Elements**:
  - Animated gradient background
  - Floating orbs with blur effects
  - Glassmorphism design elements

### 2. **About Section** (`#about`)
- **Purpose**: Personal introduction and background
- **Content**:
  - Profile avatar image
  - Three-part biography:
    - **Who I Am**: Introduction and experience overview
    - **What I Do**: Focus on coding practices and approach
    - **My Journey**: Learning and growth mindset
  - Download CV button
  - Statistics cards displaying:
    - Experience: 1 Years
    - Personal Projects Completed: 5+
    - Technologies: 15+
    - GitHub Repos (Private/Public): 25+
- **Visual Elements**:
  - Glassmorphism card design
  - Animated decorative elements
  - Responsive grid layout

### 3. **Skills Section** (`#skills`)
- **Purpose**: Showcase technical expertise
- **Content**:
  - **Programming Languages** (7 skills):
    - HTML (color: #E34F26)
    - CSS (color: #1572B6)
    - JavaScript (color: #F7DF1E)
    - PHP (color: #777BB4)
    - C# (color: #239120)
    - Python (color: #3776AB)
    - Dart (color: #0175C2)
    - CI/CD (color: #E34F26)
  - **Frameworks & Technologies** (4 skills):
    - Laravel (color: #FF2D20)
    - .NET (color: #512BD4)
    - Flutter (color: #02569B)
    - React (color: #61DAFB)
- **Visual Elements**:
  - Skill cards with icons and color coding
  - Hover effects and animations
  - Grid layout

### 4. **Projects Section** (`#projects`)
- **Purpose**: Showcase completed projects
- **Content**: 5 featured projects (3 featured, 2 additional)

#### Featured Projects:

1. **LifeBalance Tracker**
   - Type: Flutter mobile application
   - Description: Personal wellness and finance management app
   - Features: Meal tracking, water intake monitoring, expense logging, budget allocation
   - Technologies: Flutter, SQLite, Provider, Material Design
   - Gradient: Purple to Pink
   - GitHub: https://github.com/anonyname5/lifebalance

2. **Crime Prediction**
   - Type: Machine learning application
   - Description: Data-driven crime analysis and prediction system
   - Features: Analyzes crime patterns, provides predictive insights
   - Technologies: Python, Machine Learning, Data Analysis, Pandas
   - Gradient: Red to Orange
   - GitHub: https://github.com/anonyname5/crime-prediction

3. **FoodieHub**
   - Type: Web application
   - Description: Restaurant and food review platform
   - Features: Restaurant discovery, reviews, ratings, location-based search
   - Technologies: React, Node.js, MongoDB, Express
   - Gradient: Yellow to Amber
   - GitHub: https://github.com/anonyname5/food-review

#### Additional Projects:

4. **E-Commerce Platform**
   - Type: Full-stack web application
   - Description: Complete online shopping solution
   - Features: User authentication, product catalog, shopping cart, payment integration
   - Technologies: React, Node.js, MongoDB, Stripe
   - Gradient: Blue to Cyan
   - GitHub: https://github.com/anonyname5/ecommerce

5. **TapNWear - QR-Based Shopping System**
   - Type: Blueprint project
   - Description: QR code-based shopping system
   - Features: QR code scanning, automatic cart addition, online checkout, exit gate scanning
   - Technologies: QR Code, E-Commerce, Payment Gateway
   - Gradient: Indigo to Purple
   - GitHub: https://github.com/anonyname5/TapNWear

- **Visual Elements**:
  - Project cards with images
  - Gradient overlays
  - Hover effects
  - Image modal for detailed view
  - Links to GitHub repositories

### 5. **Experience Section** (`#experience`)
- **Purpose**: Display work experience and education
- **Content**:

  **Work Experience:**
  - **Junior Software Developer (Full Stack)** at HPCS Sdn Bhd
    - Location: Alam Budiman, Malaysia
    - Period: March 2025 - Present
    - Description: Working on IWK Billing System using .NET (Backend) and React (Frontend)
    - Achievements:
      - Built Comparison Tools: Report 15 - Excel report comparison tool
      - Reduced page load time by 30%
      - Mentored 2 interns

  **Education:**
  - **Bachelor of Computer Science (Netcentric)** at Universiti Teknologi MARA
    - Location: Shah Alam, Malaysia
    - Period: 2023 - 2025
    - Status: Currently working full-time while awaiting graduation ceremony

- **Visual Elements**:
  - Timeline-style layout
  - Different styling for work vs. education
  - Achievement badges

### 6. **Contact Section** (`#contact`)
- **Purpose**: Enable visitors to reach out
- **Content**:
  - Contact form with fields:
    - Name (required)
    - Email (required, validated)
    - Message (required, minimum 10 characters)
  - Form validation and error handling
  - Success/error status messages
  - Alternative contact methods:
    - Direct email: ahmdsyukri09@gmail.com
    - LinkedIn profile link
    - GitHub profile link
- **Functionality**:
  - Integrated with EmailJS for form submission
  - No backend required
  - Real-time validation
  - Loading states

---

## Personal Information

### Basic Details
- **Name**: Ahmad Syukri Sazali
- **Title**: Software Developer
- **Email**: ahmdsyukri09@gmail.com
- **Location**: Shah Alam, Malaysia
- **Avatar**: `/public/avatar.jpg`
- **Resume**: `/public/resume.pdf`

### Social Links
- **GitHub**: https://github.com/anonyname5
- **LinkedIn**: https://www.linkedin.com/in/ahmad-syukri-sazali-427890319/
- **Email**: mailto:ahmdsyukri09@gmail.com

### Taglines (Rotating Animation)
1. "Building elegant solutions to complex problems"
2. "Crafting digital experiences that matter"
3. "Code that's clean, scalable, and maintainable"
4. "Turning ideas into reality, one line at a time"

---

## Projects

### Project Images
All project images are stored in the `/public/` directory:
- `LifeBalance.png` - LifeBalance Tracker project
- `crime.png` - Crime Prediction project
- `FoodieHub.png` - FoodieHub project
- `Ecommerce.png` - E-Commerce Platform project
- `TapNWear.png` - TapNWear project

### Project Details
Each project includes:
- Title and subtitle
- Detailed description
- Technology tags
- Gradient color scheme
- GitHub repository link
- Featured status (for prominent display)

---

## Skills & Technologies

### Programming Languages
1. HTML - Web markup
2. CSS - Styling
3. JavaScript - Programming language
4. PHP - Server-side scripting
5. C# - Object-oriented programming
6. Python - General-purpose programming
7. Dart - Mobile app development

### Frameworks & Technologies
1. Laravel - PHP framework
2. .NET - Microsoft framework
3. Flutter - Mobile app framework
4. React - JavaScript UI library

Each skill is displayed with:
- Icon (from icon library)
- Color-coded styling
- Hover animations

---

## Experience

### Work Experience
- **Current Position**: Junior Software Developer at HPCS Sdn Bhd
- **Focus Areas**: Full-stack development, .NET backend, React frontend
- **Key Projects**: IWK Billing System, Report 15 Comparison Tool

### Education
- **Degree**: Bachelor of Computer Science (Netcentric)
- **Institution**: Universiti Teknologi MARA
- **Status**: Completed, awaiting graduation ceremony

---

## UI Components

### Layout Components
1. **Layout.jsx** - Main layout wrapper with navigation and footer
2. **Navigation.jsx** - Responsive navigation bar with:
   - Logo/brand
   - Navigation links (Home, About, Skills, Projects, Experience, Contact)
   - Theme toggle button
   - Mobile menu
3. **Footer.jsx** - Footer with:
   - Copyright information
   - Social media links
   - Additional navigation

### Section Components
1. **Hero.jsx** - Landing section
2. **About.jsx** - About section
3. **Skills.jsx** - Skills showcase
4. **Projects.jsx** - Projects gallery
5. **Experience.jsx** - Work and education timeline
6. **Contact.jsx** - Contact form and information

### UI Elements
1. **Button.jsx** - Reusable button component with variants:
   - Primary
   - Secondary
   - Different sizes (sm, md, lg)
   - Loading states
   - Icon support

2. **Card.jsx** - Glassmorphism card component with variants:
   - Default
   - Strong (more prominent)

3. **ProjectCard.jsx** - Specialized card for project display

4. **SkillCard.jsx** - Specialized card for skill display

5. **ImageModal.jsx** - Modal for viewing project images in detail

6. **ThemeToggle.jsx** - Dark/light mode toggle button

7. **ScrollToTop.jsx** - Floating button to scroll back to top

### Animation Components
1. **FadeIn.jsx** - Fade-in animation wrapper with direction options

---

## Features & Functionality

### Design Features
- **Glassmorphism Design**: Modern glass-effect UI throughout
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: Powered by Framer Motion
- **Gradient Effects**: Custom gradient text and backgrounds
- **Floating Elements**: Animated background orbs

### Interactive Features
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Scroll-to-Top Button**: Appears when scrolling down
- **Image Modal**: Click project images to view in full-screen modal
- **Form Validation**: Real-time contact form validation
- **Email Integration**: Contact form sends emails via EmailJS
- **Theme Persistence**: Theme preference saved in localStorage

### Performance Features
- **Lazy Loading**: Images load on demand
- **Optimized Assets**: Efficient image and resource loading
- **Fast Build**: Vite for lightning-fast development and builds

---

## Assets & Resources

### Images
- `avatar.jpg` - Profile picture
- `LifeBalance.png` - LifeBalance project screenshot
- `crime.png` - Crime Prediction project screenshot
- `FoodieHub.png` - FoodieHub project screenshot
- `Ecommerce.png` - E-Commerce project screenshot
- `TapNWear.png` - TapNWear project screenshot
- `icon.png` - Site icon/favicon
- `vite.svg` - Vite logo

### Documents
- `resume.pdf` - Downloadable CV/resume

### Configuration Files
- `constants.js` - All content data and configuration
- `emailService.js` - EmailJS integration
- `smoothScroll.js` - Smooth scrolling utility
- `ThemeContext.jsx` - Theme management context

### Custom Hooks
- `useInView.js` - Intersection Observer hook for animations
- `useScrollPosition.js` - Scroll position tracking hook

---

## Navigation Structure

The portfolio uses a single-page application structure with anchor-based navigation:

1. **Home** (`#home`) - Hero section
2. **About** (`#about`) - About section
3. **Skills** (`#skills`) - Skills section
4. **Projects** (`#projects`) - Projects section
5. **Experience** (`#experience`) - Experience section
6. **Contact** (`#contact`) - Contact section

All navigation uses smooth scrolling for a seamless user experience.

---

## Technology Stack

### Core Technologies
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework

### Libraries & Tools
- **Framer Motion** - Animation library
- **EmailJS** - Email service integration
- **Lucide React** - Icon library
- **react-type-animation** - Typing animation effect

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## Customization Points

All content can be customized by editing `src/utils/constants.js`, which contains:
- Personal information
- Social links
- Skills list
- Projects data
- Experience entries
- Navigation links
- Statistics
- Taglines

---

## Color Scheme

The portfolio uses a customizable color palette defined in `tailwind.config.js`:
- **Primary Colors**: Indigo tones
- **Secondary Colors**: Purple tones
- **Accent Colors**: Cyan tones
- **Grayscale**: For text and backgrounds
- **Theme-aware**: Adapts to light/dark mode

---

## Browser Support

The portfolio is designed to work on:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive breakpoints for all screen sizes

---

## Deployment

The portfolio is configured for deployment on:
- **GitHub Pages** (with base path configuration)
- **Vercel**
- **Netlify**
- **Cloudflare Pages**

---

*Last Updated: Based on current codebase structure*
*Portfolio Owner: Ahmad Syukri Sazali*
