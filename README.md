# Modern Glassmorphism Portfolio

A beautiful, modern portfolio website built with React, Vite, and TailwindCSS featuring glassmorphism design, dark/light mode, and smooth animations.

## ✨ Features

- 🎨 **Modern Glassmorphism Design** - Beautiful glass-effect UI components
- 🌓 **Dark/Light Mode** - Seamless theme switching with system preference detection
- 📱 **Fully Responsive** - Perfect experience on all devices
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 📧 **Contact Form** - Integrated with EmailJS (no backend needed)
- 🔍 **SEO Optimized** - Meta tags and Open Graph support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommended: 20.19+ or 22.12+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy .env.example to .env
# Then add your EmailJS credentials:
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── projects/          # Project screenshots
│   └── resume.pdf         # Your CV
├── src/
│   ├── components/
│   │   ├── layout/        # Navigation, Footer, Layout
│   │   ├── sections/      # Hero, About, Skills, Projects, Contact
│   │   ├── ui/            # Reusable UI components
│   │   └── animations/    # Animation wrappers
│   ├── context/           # Theme context
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utilities and constants
│   └── styles/            # Global styles
└── ...
```

## 🎨 Customization

### Update Personal Information

Edit `src/utils/constants.js` to update:
- Personal info (name, title, bio, email)
- Social links (GitHub, LinkedIn, etc.)
- Skills list
- Projects data
- Experience entries

### Change Colors

Modify `tailwind.config.js` to customize the color palette:
- Primary colors (indigo)
- Secondary colors (purple)
- Accent colors (cyan)

### Add Your Content

1. **Avatar**: Replace `/public/avatar.jpg` with your photo
2. **Resume**: Add your CV to `/public/resume.pdf`
3. **Project Images**: Add screenshots to `/public/projects/`
4. **SEO**: Update meta tags in `index.html`

## 📧 EmailJS Setup

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Add an email service (Gmail recommended)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **EmailJS** - Contact form
- **Lucide React** - Icons
- **react-type-animation** - Typing effect

## 🚢 Deployment

### GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

4. Deploy:
```bash
npm run deploy
```

### Other Platforms

- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder
- **Cloudflare Pages**: Connect your repo

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern glassmorphism trends
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

Built with ❤️ using React and Vite
