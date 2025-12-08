# Modern Glassmorphism Portfolio - Complete Development Plan

## 📋 Project Overview

### Project Name
**Personal Developer Portfolio v1.0**

### Target Audience
- Recruiters and hiring managers
- Potential clients
- Fellow developers
- LinkedIn visitors

### Core Purpose
A modern, professional portfolio website that showcases your skills, projects, and experience as a developer with 9 months of experience. The site will demonstrate both your technical abilities and design sensibility.

### Success Criteria
- Loads in under 2 seconds
- Works flawlessly on all devices
- Gets positive feedback from 80%+ of viewers
- Generates interview opportunities
- Easy to update with new projects

---

## 🎯 Project Goals & Objectives

### Primary Goals
1. **Showcase Technical Skills**: Demonstrate proficiency in modern web development
2. **Display Projects**: Present your best work with live demos and source code
3. **Build Credibility**: Establish professional presence online
4. **Generate Opportunities**: Convert visitors into interview calls or project inquiries
5. **Express Personality**: Show who you are beyond the resume

### What Makes This Portfolio Stand Out
- ✨ Modern glassmorphism design (trending in 2024-2025)
- 🌓 Seamless dark/light mode switching
- 📱 Perfect mobile experience
- ⚡ Lightning-fast performance
- 🎭 Smooth, professional animations
- 💎 Clean, maintainable code
- 🔍 SEO optimized for discoverability

---

## 👤 Target User Profile

### Who Will Visit Your Portfolio?

#### 1. Recruiters (40% of traffic)
**Behavior:**
- Spend 30-60 seconds on site
- Look for: Skills, experience, projects
- Check mobile version
- Want quick access to contact info

**What They Need:**
- Clear, scannable content
- Professional presentation
- Easy navigation
- Quick load time
- Download CV option

#### 2. Hiring Managers (30% of traffic)
**Behavior:**
- Spend 2-5 minutes
- Deep dive into projects
- Check code quality on GitHub
- Assess cultural fit

**What They Need:**
- Detailed project descriptions
- Live demos that work
- Clean, readable code
- Evidence of problem-solving

#### 3. Fellow Developers (20% of traffic)
**Behavior:**
- Inspect your code
- Check tech stack choices
- May connect on LinkedIn/GitHub
- Critical eye for best practices

**What They Need:**
- Technical accuracy
- Modern patterns
- Clean architecture
- Open source contributions

#### 4. Potential Clients (10% of traffic)
**Behavior:**
- Need someone to build something
- Budget conscious
- Want reliability

**What They Need:**
- Portfolio of completed work
- Clear contact method
- Testimonials (if available)
- Professionalism

---

## 🏗️ Technical Architecture

### Tech Stack Deep Dive

#### Frontend Framework: React 18+ with Vite
**Why React?**
- Most popular framework (good for job prospects)
- Component-based (easy to maintain)
- Rich ecosystem
- You can showcase React skills

**Why Vite?**
- 10x faster than Create React App
- Hot Module Replacement (instant updates while coding)
- Optimized production builds
- Modern, future-proof

**Alternatives Considered:**
- Next.js: Overkill for static portfolio
- Vue: Less common in job market
- Plain HTML/CSS: Doesn't showcase modern skills

#### Styling: TailwindCSS 3.x
**Why Tailwind?**
- Utility-first (write less CSS)
- Glassmorphism effects are easier
- Responsive design is simple
- Dark mode built-in
- Purges unused CSS (smaller bundle)

**Tailwind Config for This Project:**
```javascript
// Customizations we'll add
colors: {
  primary: {
    50: '#EEF2FF',
    100: '#E0E7FF',
    // ... full indigo scale
    900: '#312E81',
  },
  secondary: {
    // Purple scale
  }
},
backdropBlur: {
  xs: '2px',
  sm: '4px',
  // Glass effects
},
animation: {
  'float': 'float 3s ease-in-out infinite',
  'glow': 'glow 2s ease-in-out infinite',
  'gradient': 'gradient 15s ease infinite',
}
```

#### Animation: Framer Motion
**Why Framer Motion?**
- Production-ready animations
- Physics-based motion
- Scroll-triggered animations
- Gesture support
- TypeScript support

**Key Animations We'll Use:**
1. **Initial Page Load**: Fade in + slide up
2. **Scroll Animations**: Elements appear as you scroll
3. **Hover Effects**: Cards lift, scale, glow
4. **Page Transitions**: Smooth section scrolling
5. **Theme Toggle**: Color fade transition

#### State Management: React Context API
**Why Context API?**
- Built into React (no extra dependency)
- Perfect for theme management
- Simple for this use case
- No need for Redux/Zustand

**State We'll Manage:**
- Theme (dark/light)
- Active section (navigation)
- Contact form status
- Scroll position (for animations)

#### Form Handling: EmailJS (Free Tier)
**Why EmailJS?**
- No backend needed
- Free tier: 200 emails/month
- Easy setup
- Reliable delivery

**Alternative Options:**
- Formspree: Also good, different UI
- Netlify Forms: If hosting on Netlify
- Custom backend: Overkill for portfolio

### Project Structure (Detailed)

```
portfolio/
│
├── public/
│   ├── favicon.ico
│   ├── avatar.jpg (your photo)
│   ├── projects/
│   │   ├── project1-screenshot.png
│   │   ├── project2-screenshot.png
│   │   └── project3-screenshot.png
│   ├── resume.pdf (downloadable CV)
│   └── robots.txt
│
├── src/
│   │
│   ├── assets/
│   │   ├── icons/
│   │   │   ├── react.svg
│   │   │   ├── nodejs.svg
│   │   │   └── ... (tech stack icons)
│   │   └── images/
│   │       └── background-pattern.svg
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── Navigation.jsx
│   │   │   │   # Sticky glass navbar
│   │   │   │   # Sections: Home, About, Projects, Skills, Contact
│   │   │   │   # Theme toggle button
│   │   │   │   # Mobile hamburger menu
│   │   │   │   # Active section highlighting
│   │   │   │
│   │   │   ├── Footer.jsx
│   │   │   │   # Social links
│   │   │   │   # Copyright
│   │   │   │   # Built with React badge
│   │   │   │
│   │   │   └── Layout.jsx
│   │   │       # Wraps all pages
│   │   │       # Contains Navigation + Footer
│   │   │
│   │   ├── sections/
│   │   │   │
│   │   │   ├── Hero.jsx
│   │   │   │   # Full viewport height
│   │   │   │   # Animated gradient background
│   │   │   │   # Your name with gradient text effect
│   │   │   │   # Typing animation tagline
│   │   │   │   # CTA buttons (View Projects, Download CV)
│   │   │   │   # Floating social icons
│   │   │   │   # Scroll down indicator
│   │   │   │
│   │   │   ├── About.jsx
│   │   │   │   # Glass card container
│   │   │   │   # Avatar/photo (left side)
│   │   │   │   # Bio text (right side)
│   │   │   │   # Quick stats cards
│   │   │   │   #   - 9+ months experience
│   │   │   │   #   - X projects completed
│   │   │   │   #   - Y technologies mastered
│   │   │   │   # Download CV button
│   │   │   │
│   │   │   ├── Skills.jsx
│   │   │   │   # Section title
│   │   │   │   # Three categories:
│   │   │   │   #   1. Proficient (main skills)
│   │   │   │   #   2. Experienced (used in projects)
│   │   │   │   #   3. Currently Learning
│   │   │   │   # Tech icons with hover tooltips
│   │   │   │   # Animated skill bars (optional)
│   │   │   │   # Glass card backgrounds
│   │   │   │
│   │   │   ├── Projects.jsx
│   │   │   │   # Section title + subtitle
│   │   │   │   # Grid layout (1/2/3 columns responsive)
│   │   │   │   # Each project uses ProjectCard component
│   │   │   │   # "View All on GitHub" button at bottom
│   │   │   │
│   │   │   ├── Experience.jsx
│   │   │   │   # Timeline layout (vertical line)
│   │   │   │   # Work experience entries
│   │   │   │   # Education entries
│   │   │   │   # Certifications (if any)
│   │   │   │   # Each entry: date, title, description
│   │   │   │
│   │   │   └── Contact.jsx
│   │   │       # Section title
│   │   │       # Large glass card container
│   │   │       # Contact form (name, email, message)
│   │   │       # Form validation
│   │   │       # Submit button with loading state
│   │   │       # Success/error messages
│   │   │       # Alternative contact methods below form
│   │   │
│   │   ├── ui/
│   │   │   │
│   │   │   ├── Button.jsx
│   │   │   │   # Primary button (gradient)
│   │   │   │   # Secondary button (glass)
│   │   │   │   # Icon button
│   │   │   │   # Hover effects
│   │   │   │   # Loading state
│   │   │   │
│   │   │   ├── Card.jsx
│   │   │   │   # Glass card component
│   │   │   │   # Reusable across sections
│   │   │   │   # Props: variant, hover effect, padding
│   │   │   │
│   │   │   ├── ProjectCard.jsx
│   │   │   │   # Project image/thumbnail
│   │   │   │   # Title + description
│   │   │   │   # Tech stack badges
│   │   │   │   # Live Demo + GitHub buttons
│   │   │   │   # Hover effects (lift + glow)
│   │   │   │   # Responsive layout
│   │   │   │
│   │   │   ├── SkillCard.jsx
│   │   │   │   # Tech icon
│   │   │   │   # Skill name
│   │   │   │   # Proficiency level (optional)
│   │   │   │   # Hover tooltip
│   │   │   │   # Glass background
│   │   │   │
│   │   │   ├── ThemeToggle.jsx
│   │   │   │   # Sun/Moon icon toggle
│   │   │   │   # Smooth animation between states
│   │   │   │   # Updates theme context
│   │   │   │   # Saves preference to localStorage
│   │   │   │
│   │   │   └── SocialLinks.jsx
│   │   │       # GitHub, LinkedIn, Email icons
│   │   │       # Glass icon buttons
│   │   │       # Hover animations
│   │   │       # Open in new tab
│   │   │
│   │   └── animations/
│   │       ├── FadeIn.jsx
│   │       │   # Framer Motion wrapper
│   │       │   # Fade in from bottom
│   │       │   # Used for scroll animations
│   │       │
│   │       ├── FloatingElement.jsx
│   │       │   # Continuous floating animation
│   │       │   # Used for decorative elements
│   │       │
│   │       └── GradientBackground.jsx
│   │           # Animated gradient orbs
│   │           # Blur + blend modes
│   │           # Subtle movement
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │       # Theme state (dark/light)
│   │       # Toggle function
│   │       # Persist to localStorage
│   │       # Apply to document root
│   │       # Provide to all components
│   │
│   ├── hooks/
│   │   ├── useScrollPosition.js
│   │   │   # Track scroll Y position
│   │   │   # Determine active section
│   │   │   # Used for navbar highlighting
│   │   │
│   │   ├── useInView.js
│   │   │   # Detect if element is in viewport
│   │   │   # Trigger scroll animations
│   │   │   # Uses Intersection Observer
│   │   │
│   │   └── useMediaQuery.js
│   │       # Detect screen size
│   │       # Responsive behavior
│   │       # Mobile/tablet/desktop
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   │   # All text content
│   │   │   # Project data
│   │   │   # Skills list
│   │   │   # Social links
│   │   │   # Easy to update!
│   │   │
│   │   ├── smoothScroll.js
│   │   │   # Smooth scroll to section
│   │   │   # Used by navigation
│   │   │
│   │   └── emailService.js
│   │       # EmailJS integration
│   │       # Send contact form
│   │       # Error handling
│   │
│   ├── styles/
│   │   ├── index.css
│   │   │   # Tailwind imports
│   │   │   # Custom CSS animations
│   │   │   # Global styles
│   │   │   # Font imports
│   │   │
│   │   └── animations.css
│   │       # Custom keyframe animations
│   │       # Gradient animation
│   │       # Glow effect
│   │       # Float effect
│   │
│   ├── App.jsx
│   │   # Main app component
│   │   # Theme provider wrapper
│   │   # Layout component
│   │   # All sections in order
│   │   # Smooth scroll container
│   │
│   └── main.jsx
│       # React app entry point
│       # Render to DOM
│       # StrictMode wrapper
│
├── .gitignore
├── .env
│   # EmailJS credentials
│   # Any API keys
│
├── index.html
│   # App entry HTML
│   # Meta tags for SEO
│   # Open Graph tags
│   # Favicon links
│
├── package.json
│   # Dependencies list
│   # Scripts
│   # Project metadata
│
├── vite.config.js
│   # Vite configuration
│   # Build settings
│   # Alias paths
│
├── tailwind.config.js
│   # Custom colors
│   # Custom animations
│   # Dark mode config
│   # Plugin settings
│
├── postcss.config.js
│   # PostCSS plugins
│   # Tailwind integration
│
└── README.md
    # Portfolio documentation
    # Setup instructions
    # Customization guide
```

---

## 🎨 Design System Specification

### Color Palette (Detailed)

#### Primary Colors: Blue-Purple Gradient
```css
/* Indigo (Primary) */
--primary-50:  #EEF2FF;  /* Lightest - for light mode backgrounds */
--primary-100: #E0E7FF;  /* Very light - hover states */
--primary-200: #C7D2FE;  /* Light - borders, subtle elements */
--primary-300: #A5B4FC;  /* Medium light - disabled states */
--primary-400: #818CF8;  /* Medium - secondary buttons */
--primary-500: #6366F1;  /* Base - primary brand color */
--primary-600: #4F46E5;  /* Medium dark - hover on primary */
--primary-700: #4338CA;  /* Dark - active states */
--primary-800: #3730A3;  /* Very dark - headings */
--primary-900: #312E81;  /* Darkest - text on light bg */

/* Purple (Secondary) */
--secondary-50:  #FAF5FF;
--secondary-100: #F3E8FF;
--secondary-200: #E9D5FF;
--secondary-300: #D8B4FE;
--secondary-400: #C084FC;
--secondary-500: #A855F7;  /* Base secondary color */
--secondary-600: #9333EA;
--secondary-700: #7E22CE;
--secondary-800: #6B21A8;
--secondary-900: #581C87;

/* Cyan (Accent) */
--accent-400: #22D3EE;
--accent-500: #06B6D4;  /* Base accent color */
--accent-600: #0891B2;
```

#### Semantic Colors
```css
/* Success - Green */
--success-400: #34D399;
--success-500: #10B981;  /* Forms, success messages */
--success-600: #059669;

/* Warning - Amber */
--warning-400: #FBBF24;
--warning-500: #F59E0B;  /* Alerts, important info */
--warning-600: #D97706;

/* Error - Red */
--error-400: #F87171;
--error-500: #EF4444;  /* Form errors, alerts */
--error-600: #DC2626;

/* Info - Blue */
--info-400: #60A5FA;
--info-500: #3B82F6;  /* Informational messages */
--info-600: #2563EB;
```

#### Neutral Colors (Gray Scale)
```css
/* Light Mode */
--gray-50:  #F9FAFB;  /* Backgrounds */
--gray-100: #F3F4F6;  /* Subtle backgrounds */
--gray-200: #E5E7EB;  /* Borders */
--gray-300: #D1D5DB;  /* Disabled text */
--gray-400: #9CA3AF;  /* Placeholder text */
--gray-500: #6B7280;  /* Secondary text */
--gray-600: #4B5563;  /* Body text */
--gray-700: #374151;  /* Headings */
--gray-800: #1F2937;  /* Dark headings */
--gray-900: #111827;  /* Darkest text */

/* Dark Mode */
--dark-50:  #18181B;  /* Darkest - main bg */
--dark-100: #27272A;  /* Very dark - card bg */
--dark-200: #3F3F46;  /* Dark - borders */
--dark-300: #52525B;  /* Medium dark - disabled */
--dark-400: #71717A;  /* Medium - secondary text */
--dark-500: #A1A1AA;  /* Medium light - body text */
--dark-600: #D4D4D8;  /* Light - headings */
--dark-700: #E4E4E7;  /* Very light - emphasis */
--dark-800: #F4F4F5;  /* Lightest - highest contrast */
--dark-900: #FAFAFA;  /* Pure white equivalent */
```

#### Special Effects Colors
```css
/* Glass Effect (used with backdrop-blur) */
--glass-light: rgba(255, 255, 255, 0.1);  /* Light mode glass */
--glass-dark:  rgba(255, 255, 255, 0.05); /* Dark mode glass */

/* Gradient Backgrounds */
--gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

/* Glow Effects (for shadows) */
--glow-primary: 0 0 20px rgba(99, 102, 241, 0.5);
--glow-secondary: 0 0 20px rgba(168, 85, 247, 0.5);
--glow-accent: 0 0 20px rgba(6, 182, 212, 0.5);
```

### Typography System

#### Font Families
```css
/* Primary Font */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;

/* Code/Monospace (if showing code) */
--font-mono: 'Fira Code', 'Consolas', 'Monaco', monospace;

/* Optional: Display Font for headings */
--font-display: 'Cal Sans', 'Inter', sans-serif;
```

#### Font Sizes & Line Heights
```css
/* Mobile First (Base 16px) */
--text-xs:   0.75rem;   /* 12px - small labels */
--text-sm:   0.875rem;  /* 14px - captions, badges */
--text-base: 1rem;      /* 16px - body text */
--text-lg:   1.125rem;  /* 18px - large body */
--text-xl:   1.25rem;   /* 20px - small headings */
--text-2xl:  1.5rem;    /* 24px - h3 */
--text-3xl:  1.875rem;  /* 30px - h2 */
--text-4xl:  2.25rem;   /* 36px - h1 mobile */
--text-5xl:  3rem;      /* 48px - h1 tablet */
--text-6xl:  3.75rem;   /* 60px - h1 desktop */
--text-7xl:  4.5rem;    /* 72px - hero title desktop */
--text-8xl:  6rem;      /* 96px - ultra large (optional) */

/* Line Heights */
--leading-none:    1;      /* Tight headings */
--leading-tight:   1.25;   /* Headings */
--leading-snug:    1.375;  /* Large text */
--leading-normal:  1.5;    /* Body text */
--leading-relaxed: 1.625;  /* Comfortable reading */
--leading-loose:   2;      /* Very spacious */
```

#### Font Weights
```css
--font-light:     300;  /* Subtle text */
--font-normal:    400;  /* Body text */
--font-medium:    500;  /* Emphasized text */
--font-semibold:  600;  /* Subheadings */
--font-bold:      700;  /* Headings */
--font-extrabold: 800;  /* Hero title */
--font-black:     900;  /* Maximum emphasis */
```

### Spacing System (8px Grid)

```css
/* Base unit: 0.25rem = 4px */
--space-0:   0;
--space-px:  1px;
--space-0.5: 0.125rem;  /* 2px */
--space-1:   0.25rem;   /* 4px */
--space-1.5: 0.375rem;  /* 6px */
--space-2:   0.5rem;    /* 8px */
--space-2.5: 0.625rem;  /* 10px */
--space-3:   0.75rem;   /* 12px */
--space-3.5: 0.875rem;  /* 14px */
--space-4:   1rem;      /* 16px - base unit */
--space-5:   1.25rem;   /* 20px */
--space-6:   1.5rem;    /* 24px */
--space-7:   1.75rem;   /* 28px */
--space-8:   2rem;      /* 32px */
--space-9:   2.25rem;   /* 36px */
--space-10:  2.5rem;    /* 40px */
--space-11:  2.75rem;   /* 44px */
--space-12:  3rem;      /* 48px */
--space-14:  3.5rem;    /* 56px */
--space-16:  4rem;      /* 64px */
--space-20:  5rem;      /* 80px */
--space-24:  6rem;      /* 96px */
--space-28:  7rem;      /* 112px */
--space-32:  8rem;      /* 128px */
--space-36:  9rem;      /* 144px */
--space-40:  10rem;     /* 160px */
--space-44:  11rem;     /* 176px */
--space-48:  12rem;     /* 192px */
--space-52:  13rem;     /* 208px */
--space-56:  14rem;     /* 224px */
--space-60:  15rem;     /* 240px */
--space-64:  16rem;     /* 256px */
--space-72:  18rem;     /* 288px */
--space-80:  20rem;     /* 320px */
--space-96:  24rem;     /* 384px */
```

### Border Radius
```css
--rounded-none: 0;
--rounded-sm:   0.125rem;  /* 2px */
--rounded:      0.25rem;   /* 4px */
--rounded-md:   0.375rem;  /* 6px */
--rounded-lg:   0.5rem;    /* 8px - cards */
--rounded-xl:   0.75rem;   /* 12px - large cards */
--rounded-2xl:  1rem;      /* 16px - hero elements */
--rounded-3xl:  1.5rem;    /* 24px - special cards */
--rounded-full: 9999px;    /* Fully rounded - buttons, pills */
```

### Shadows & Elevation

```css
/* Soft Shadows (for cards) */
--shadow-sm:  0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow:     0 1px 3px 0 rgb(0 0 0 / 0.1), 
              0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md:  0 4px 6px -1px rgb(0 0 0 / 0.1), 
              0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg:  0 10px 15px -3px rgb(0 0 0 / 0.1), 
              0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl:  0 20px 25px -5px rgb(0 0 0 / 0.1), 
              0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

/* Colored Glow Shadows (for hover effects) */
--shadow-primary: 0 10px 40px -10px rgba(99, 102, 241, 0.5);
--shadow-secondary: 0 10px 40px -10px rgba(168, 85, 247, 0.5);
--shadow-accent: 0 10px 40px -10px rgba(6, 182, 212, 0.5);

/* Inner Shadows (for inputs) */
--shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
```

### Glass Effect Specification

```css
/* Glass Card (Light Mode) */
.glass-light {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
}

/* Glass Card (Dark Mode) */
.glass-dark {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

/* Stronger Glass (for navigation) */
.glass-strong {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px) saturate(200%);
  -webkit-backdrop-filter: blur(20px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
/* Base: 0-639px (Mobile) */

/* sm: 640px+ (Large Mobile / Small Tablet) */
@media (min-width: 640px) {
  /* Adjust text sizes */
  /* 2-column layouts start */
}

/* md: 768px+ (Tablet) */
@media (min-width: 768px) {
  /* Navigation becomes horizontal */
  /* 2-column grids */
  /* Larger padding */
}

/* lg: 1024px+ (Desktop) */
@media (min-width: 1024px) {
  /* 3-column grids */
  /* Larger hero text */
  /* Full animations enabled */
}

/* xl: 1280px+ (Large Desktop) */
@media (min-width: 1280px) {
  /* Max width containers */
  /* Optimal reading width */
}

/* 2xl: 1536px+ (Extra Large Desktop) */
@media (min-width: 1536px) {
  /* Maximum scale */
  /* More whitespace */
}
```

---

## 🎬 Animation System

### Animation Principles

1. **Purpose**: Every animation serves a purpose (feedback, hierarchy, delight)
2. **Performance**: Use GPU-accelerated properties (transform, opacity)
3. **Duration**: Quick interactions (0.2-0.3s), Page loads (0.5-1s)
4. **Easing**: Natural motion (ease-out for entrances, ease-in for exits)
5. **Reduce Motion**: Respect user preferences for accessibility

### Core Animations

#### 1. Fade In (Page Load)
```javascript
// Framer Motion variant
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] // Custom easing
    }
  }
};

// Usage
<motion.div variants={fadeInUp} initial="initial" animate="animate">
  Content here
</motion.div>
```

#### 2. Stagger Children (List Items)
```javascript
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Each child delays by 0.1s
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Usage
<motion.div variants={container} initial="hidden" animate="show">
  {items.map(item => (
    <motion.div key={item.id} variants={item}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

#### 3. Scroll-Triggered Animations
```javascript
// Using Framer Motion + Intersection Observer
const { ref, inView } = useInView({
  threshold: 0.3, // Trigger when 30% visible
  triggerOnce: true // Only animate once
});

<motion.div
  ref={ref}
  initial={{ opacity: 0, x: -50 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8 }}
>
  Content appears from left
</motion.div>
```

#### 4. Hover Effects (Cards)
```javascript
const cardHover = {
  rest: { 
    scale: 1, 
    y: 0,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
  },
  hover: { 
    scale: 1.05, 
    y: -10,
    boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Usage
<motion.div 
  variants={cardHover}
  initial="rest"
  whileHover="hover"
>
  Card content
</motion.div>
```

#### 5. Button Press Animation
```javascript
<motion.button
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  Click Me
</motion.button>
```

#### 6. Gradient Background Animation
```css
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animated-gradient {
  background: linear-gradient(
    -45deg, 
    #667eea, #764ba2, #f093fb, #4facfe
  );
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}
```

#### 7. Floating Animation (Decorative Elements)
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-20px) translateX(10px);
  }
  66% {
    transform: translateY(-10px) translateX(-10px);
  }
}

.floating-element {
  animation: float 6s ease-in-out infinite;
}
```

#### 8. Glow Pulse (Accent Elements)
```css
@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(99, 102, 241, 0.8);
  }
}

.glow-element {
  animation: glow-pulse 2s ease-in-out infinite;
}
```

#### 9. Theme Transition (Dark/Light Toggle)
```css
/* Apply to root or main container */
.theme-transition {
  transition: 
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}
```

#### 10. Typing Effect (Hero Tagline)
```javascript
// Using react-type-animation library
import { TypeAnimation } from 'react-type-animation';

<TypeAnimation
  sequence={[
    'Building beautiful interfaces',
    2000,
    'Creating seamless experiences',
    2000,
    'Solving complex problems',
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>
```

### Animation Performance Best Practices

1. **Use transform and opacity** - GPU accelerated
2. **Avoid animating width/height** - Causes reflow
3. **Use will-change sparingly** - Only for active animations
4. **Reduce motion media query** - Respect user preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📐 Layout Specifications

### Container Widths
```css
.container-sm  { max-width: 640px; }   /* Small content */
.container-md  { max-width: 768px; }   /* Medium content */
.container-lg  { max-width: 1024px; }  /* Large content */
.container-xl  { max-width: 1280px; }  /* Full width */
.container-2xl { max-width: 1536px; }  /* Extra large */

/* Default container: responsive with padding */
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem; /* 16px on mobile */
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem; /* 32px on tablet */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 4rem; /* 64px on desktop */
  }
}
```

### Section Spacing
```css
/* Vertical spacing between sections */
.section {
  padding-top: 4rem;    /* 64px on mobile */
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .section {
    padding-top: 6rem;    /* 96px on tablet */
    padding-bottom: 6rem;
  }
}

@media (min-width: 1024px) {
  .section {
    padding-top: 8rem;    /* 128px on desktop */
    padding-bottom: 8rem;
  }
}
```

### Grid Layouts

#### Projects Grid
```css
/* Mobile: 1 column */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem; /* 32px */
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem; /* 40px */
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem; /* 48px */
  }
}
```

#### Skills Grid
```css
/* Mobile: 2 columns */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

/* Tablet: 3 columns */
@media (min-width: 640px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

/* Desktop: 5 columns */
@media (min-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
  }
}
```

---

## 📄 Content Strategy

### Copywriting Guidelines

#### Hero Section
```
Name: Your Full Name (clear, readable)
Title: Software Developer | Full Stack Developer | [Your Specialty]
Tagline (rotating):
  - "Building elegant solutions to complex problems"
  - "Crafting digital experiences that matter"
  - "Code that's clean, scalable, and maintainable"
  - "Turning ideas into reality, one line at a time"
```

#### About Section
```markdown
**Structure: 3 paragraphs**

Paragraph 1: Who you are
"Hi! I'm [Name], a software developer with 9 months of hands-on experience 
building [web applications / mobile apps / full-stack solutions]. I specialize 
in [React, Node.js, Flutter] and love creating products that solve real problems."

Paragraph 2: What you do
"I focus on writing clean, maintainable code and building user-friendly interfaces. 
Whether it's a complex web application or a simple landing page, I approach every 
project with attention to detail and a commitment to quality."

Paragraph 3: What you're about
"When I'm not coding, you'll find me [learning new technologies / contributing to 
open source / writing technical blogs]. I'm always looking to grow as a developer 
and collaborate on interesting projects."

**Tone:** Professional but friendly. Confident but humble.
**Length:** 150-200 words total
**Avoid:** Clichés like "passionate coder" or "tech enthusiast"
```

#### Project Descriptions
```markdown
**Template for each project:**

Title: [Project Name]
Subtitle (1 line): What it does in simple terms
Description (2-3 sentences):
  - What problem does it solve?
  - Who is it for?
  - What makes it special?

Example:
---
Title: LifeBalance Tracker
Subtitle: Personal wellness and finance management app

Description: A Flutter mobile application that helps users build better eating 
habits, stay hydrated, and manage their monthly budget effectively. Features 
include meal tracking, water intake monitoring, expense logging, and budget 
allocation with visual insights.

Tech Stack: Flutter, SQLite, Provider, Material Design

Links: [Live Demo] [GitHub] [Case Study - optional]
---
```

#### Skills Section
```markdown
**Organization:**

Proficient (Main Skills - You're comfortable with these):
- React.js
- JavaScript/TypeScript
- HTML/CSS
- Git/GitHub

Experienced (Used in Projects):
- Node.js
- Flutter
- TailwindCSS
- RESTful APIs
- MongoDB/SQL

Currently Learning:
- Next.js
- Docker
- AWS
```

#### Contact Section
```markdown
**Heading:** "Let's Build Something Together"

**Subheading:** 
"Have a project in mind? Looking for a developer? 
Let's chat about how we can work together."

**Call-to-Action Button:** "Send Message"

**Alternative Contact:**
"Prefer email? Reach me at hello@yourname.com
Or connect with me on LinkedIn and GitHub"
```

### SEO Content

#### Meta Tags (in index.html)
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary Meta Tags -->
  <title>Your Name - Software Developer Portfolio</title>
  <meta name="title" content="Your Name - Software Developer Portfolio" />
  <meta name="description" content="Software Developer specializing in React, Node.js, and Flutter. View my projects and get in touch for collaboration." />
  <meta name="keywords" content="software developer, web developer, React, Node.js, Flutter, portfolio" />
  <meta name="author" content="Your Name" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourportfolio.com/" />
  <meta property="og:title" content="Your Name - Software Developer Portfolio" />
  <meta property="og:description" content="Software Developer specializing in React, Node.js, and Flutter." />
  <meta property="og:image" content="https://yourportfolio.com/preview-image.jpg" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://yourportfolio.com/" />
  <meta property="twitter:title" content="Your Name - Software Developer Portfolio" />
  <meta property="twitter:description" content="Software Developer specializing in React, Node.js, and Flutter." />
  <meta property="twitter:image" content="https://yourportfolio.com/preview-image.jpg" />
</head>
```

---

## 🔧 Development Phases

### Phase 1: Setup & Foundation (Days 1-2)

#### Day 1: Project Setup
**Tasks:**
- [ ] Install Node.js (v18+ recommended)
- [ ] Create Vite React project: `npm create vite@latest portfolio -- --template react`
- [ ] Install dependencies:
```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion
npm install lucide-react
npm install @emailjs/browser
```
- [ ] Configure Tailwind in `tailwind.config.js`
- [ ] Set up project structure (all folders)
- [ ] Initialize Git repository
- [ ] Create GitHub repository
- [ ] First commit

**Deliverables:**
- ✅ Working development environment
- ✅ All dependencies installed
- ✅ Project structure created
- ✅ Git initialized

#### Day 2: Design System & Theme
**Tasks:**
- [ ] Create color variables in `tailwind.config.js`
- [ ] Set up custom animations
- [ ] Create ThemeContext with dark/light mode
- [ ] Build ThemeToggle component
- [ ] Test theme switching
- [ ] Create base UI components:
  - Button (primary, secondary variants)
  - Card (glass effect)
  - Container (responsive wrapper)
- [ ] Set up global styles in `index.css`
- [ ] Import fonts (Google Fonts: Inter)

**Deliverables:**
- ✅ Theme system working
- ✅ Base components ready
- ✅ Design tokens defined

### Phase 2: Core Sections (Days 3-5)

#### Day 3: Navigation & Hero
**Tasks:**
- [ ] Build Navigation component
  - Sticky glass navbar
  - Logo/name
  - Nav links (Home, About, Projects, Skills, Contact)
  - Theme toggle button
  - Mobile hamburger menu
  - Active section highlighting
- [ ] Build Hero section
  - Full viewport height
  - Animated gradient background
  - Name with gradient text
  - Rotating tagline with typing effect
  - CTA buttons (View Projects, Download CV)
  - Social links (GitHub, LinkedIn, Email)
  - Scroll down indicator
- [ ] Implement smooth scroll to sections
- [ ] Test responsive behavior

**Deliverables:**
- ✅ Working navigation
- ✅ Complete hero section
- ✅ Smooth scrolling

#### Day 4: About & Skills
**Tasks:**
- [ ] Build About section
  - Section title with animation
  - Grid layout (image + text)
  - Avatar/photo placeholder
  - Bio text (3 paragraphs)
  - Quick stats cards
  - Download CV button
- [ ] Build Skills section
  - Section title
  - Three skill categories
  - Skill icons with tooltips
  - Glass card backgrounds
  - Hover animations
- [ ] Add scroll-triggered animations
- [ ] Test on mobile

**Deliverables:**
- ✅ About section complete
- ✅ Skills section complete
- ✅ Animations working

#### Day 5: Projects Section
**Tasks:**
- [ ] Create projects data in `utils/constants.js`
  - At least 3 projects
  - Title, description, tech stack, links
- [ ] Build ProjectCard component
  - Image/thumbnail
  - Title + description
  - Tech stack badges
  - Live Demo + GitHub buttons
  - Hover effects (lift + glow)
- [ ] Build Projects section
  - Section title
  - Grid layout (responsive)
  - Map through projects
  - "View All" link to GitHub
- [ ] Add stagger animations for cards
- [ ] Test all project links

**Deliverables:**
- ✅ Projects section complete
- ✅ All cards interactive
- ✅ Responsive grid working

### Phase 3: Finishing Touches (Days 6-8)

#### Day 6: Contact & Footer
**Tasks:**
- [ ] Set up EmailJS account (free tier)
- [ ] Get API keys, create email template
- [ ] Build Contact section
  - Section title
  - Glass card form container
  - Form fields (name, email, message)
  - Client-side validation
  - Submit button with loading state
  - Success/error messages
  - Alternative contact methods
- [ ] Integrate EmailJS
- [ ] Test form submissions
- [ ] Build Footer component
  - Social links
  - Copyright notice
  - "Built with React" badge
- [ ] Add scroll-to-top button (optional)

**Deliverables:**
- ✅ Working contact form
- ✅ Email integration functional
- ✅ Footer complete

#### Day 7: Experience & Polish
**Tasks:**
- [ ] Build Experience section (optional but recommended)
  - Timeline layout
  - Work experience entries
  - Education entries
  - Certifications
- [ ] Final responsive testing
  - Test on mobile (375px, 414px)
  - Test on tablet (768px, 1024px)
  - Test on desktop (1440px, 1920px)
- [ ] Cross-browser testing
  - Chrome
  - Firefox
  - Safari
  - Edge
- [ ] Performance optimization
  - Optimize images
  - Lazy load off-screen images
  - Minimize bundle size
- [ ] Accessibility check
  - Keyboard navigation
  - ARIA labels
  - Color contrast
  - Screen reader testing

**Deliverables:**
- ✅ Experience section complete
- ✅ Responsive on all devices
- ✅ Cross-browser compatible
- ✅ Performance optimized

#### Day 8: Deployment & Launch
**Tasks:**
- [ ] Create production build: `npm run build`
- [ ] Test production build locally
- [ ] Set up GitHub Pages
  - Install gh-pages: `npm install -D gh-pages`
  - Add deploy scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
  - Update `vite.config.js` with base URL
  - Deploy: `npm run deploy`
- [ ] Configure custom domain (optional)
  - Buy domain (Namecheap, GoDaddy: ~$10/year)
  - Add CNAME file to public folder
  - Configure DNS records
- [ ] Final testing on live site
- [ ] Add to resume/LinkedIn
- [ ] Share with network

**Deliverables:**
- ✅ Live portfolio website
- ✅ Custom domain configured (optional)
- ✅ Portfolio live and accessible

### Phase 4: Content Population (Ongoing)

**After Launch:**
- [ ] Replace placeholder images with real screenshots
- [ ] Add your actual projects
- [ ] Write detailed project descriptions
- [ ] Add your real photo/avatar
- [ ] Update bio with your story
- [ ] Add your resume PDF
- [ ] Test all links
- [ ] Get feedback from peers
- [ ] Iterate based on feedback

---

## 📊 Project Data Structure

### constants.js File Structure

```javascript
// src/utils/constants.js

export const personalInfo = {
  name: "Your Full Name",
  title: "Software Developer",
  email: "hello@yourname.com",
  location: "Petaling Jaya, Malaysia",
  avatar: "/avatar.jpg",
  resume: "/resume.pdf",
  bio: {
    para1: "Hi! I'm [Name], a software developer with 9 months of hands-on experience...",
    para2: "I focus on writing clean, maintainable code...",
    para3: "When I'm not coding, you'll find me..."
  },
  taglines: [
    "Building elegant solutions to complex problems",
    "Crafting digital experiences that matter",
    "Code that's clean, scalable, and maintainable",
    "Turning ideas into reality, one line at a time"
  ],
  stats: [
    { label: "Experience", value: "9+ Months" },
    { label: "Projects Completed", value: "12+" },
    { label: "Technologies", value: "15+" },
    { label: "GitHub Repos", value: "25+" }
  ]
};

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "mailto:hello@yourname.com",
  twitter: "https://twitter.com/yourusername" // optional
};

export const skills = {
  proficient: [
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    { name: "HTML/CSS", icon: "html5", color: "#E34F26" },
    { name: "Git", icon: "git", color: "#F05032" }
  ],
  experienced: [
    { name: "Node.js", icon: "nodejs", color: "#339933" },
    { name: "Flutter", icon: "flutter", color: "#02569B" },
    { name: "TailwindCSS", icon: "tailwindcss", color: "#06B6D4" },
    { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    { name: "SQL", icon: "mysql", color: "#4479A1" }
  ],
  learning: [
    { name: "Next.js", icon: "nextjs", color: "#000000" },
    { name: "TypeScript", icon: "typescript", color: "#3178C6" },
    { name: "Docker", icon: "docker", color: "#2496ED" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "LifeBalance Tracker",
    subtitle: "Personal wellness and finance management app",
    description: "A Flutter mobile application that helps users build better eating habits, stay hydrated, and manage their monthly budget effectively. Features include meal tracking, water intake monitoring, expense logging, and budget allocation with visual insights.",
    image: "/projects/lifebalance.png",
    tags: ["Flutter", "SQLite", "Provider", "Material Design"],
    liveUrl: "https://play.google.com/store/apps/details?id=your.app",
    githubUrl: "https://github.com/yourusername/lifebalance",
    featured: true,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    subtitle: "Full-stack online shopping experience",
    description: "A complete e-commerce solution with user authentication, product catalog, shopping cart, and payment integration. Built with React frontend and Node.js backend with MongoDB database.",
    image: "/projects/ecommerce.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://your-ecommerce-demo.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    subtitle: "Kanban-style project management tool",
    description: "A drag-and-drop task management application inspired by Trello. Features include board creation, task cards, labels, due dates, and team collaboration tools.",
    image: "/projects/taskmanager.png",
    tags: ["React", "Redux", "Firebase", "DnD"],
    liveUrl: "https://your-taskmanager-demo.com",
    githubUrl: "https://github.com/yourusername/taskmanager",
    featured: false,
    gradient: "from-green-500 to-emerald-500"
  },
  // Add more projects...
];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "Junior Software Developer",
    company: "Tech Company Name",
    location: "Kuala Lumpur, Malaysia",
    period: "March 2024 - Present",
    description: "Developing web applications using React and Node.js. Collaborated with senior developers on feature implementation and bug fixes. Participated in code reviews and sprint planning meetings.",
    achievements: [
      "Built 5+ features for main product",
      "Reduced page load time by 30%",
      "Mentored 2 interns"
    ]
  },
  {
    id: 2,
    type: "education",
    title: "Bachelor of Computer Science",
    company: "University Name",
    location: "Malaysia",
    period: "2020 - 2024",
    description: "Graduated with First Class Honours. Specialized in Software Engineering and Web Technologies.",
    achievements: [
      "GPA: 3.8/4.0",
      "Dean's List (3 semesters)",
      "Final Year Project: Award Winner"
    ]
  },
  // Add more experience...
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];
```

---

## 🔌 Third-Party Integrations

### EmailJS Setup (Contact Form)

**Step 1: Create Account**
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up (free tier: 200 emails/month)
3. Verify your email

**Step 2: Add Email Service**
1. Go to Email Services
2. Add Service (Gmail recommended)
3. Connect your Gmail account
4. Note the Service ID

**Step 3: Create Email Template**
1. Go to Email Templates
2. Create New Template
3. Template content:
```
Subject: New Portfolio Contact from {{from_name}}

Message:
From: {{from_name}}
Email: {{from_email}}
Message: {{message}}

---
Sent from your portfolio website
```
4. Note the Template ID

**Step 4: Get Public Key**
1. Go to Account > General
2. Copy your Public Key

**Step 5: Add to Project**
Create `.env` file:
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Step 6: Implement in Code**
```javascript
// src/utils/emailService.js
import emailjs from '@emailjs/browser';

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
};
```

### Google Fonts Integration

Add to `index.html` (in `<head>`):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

Or import in `index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
```

### Lucide React Icons

Already installed. Usage:
```javascript
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

<Github size={24} />
<Linkedin size={24} color="#0077B5" />
<Mail size={24} className="text-primary-500" />
```

---