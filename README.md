# Modern 3D Developer Portfolio

A stunning, responsive developer portfolio website built with React, Tailwind CSS, Three.js (React Three Fiber), and Framer Motion. Features a futuristic dark theme with glowing accents, smooth animations, and glassmorphism UI.

## 🚀 Features

- **3D Animated Background** - Interactive Three.js background with floating geometric shapes and particles
- **Hero Section** - Animated typing effect, social links, and resume download button
- **About Section** - Skills cards with hover animations and education timeline
- **Projects Section** - Interactive project cards with hover effects, tech stack, and links
- **Skills Section** - Animated progress bars and 3D rotating tech icons
- **Experience Section** - Timeline design with animated entry effects
- **Contact Section** - Beautiful contact form with toast notifications
- **Extra Features**:
  - Smooth scrolling
  - Glassmorphism UI
  - Cursor glow effect
  - Framer Motion animations
  - SEO optimized
  - Fully responsive (mobile, tablet, desktop)
  - Clean folder structure
  - Reusable components

## 🛠️ Tech Stack

- **React** - UI library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Helpers for React Three Fiber
- **React Scroll** - Smooth scrolling
- **React Hot Toast** - Toast notifications
- **Lucide React** - Icons
- **Vite** - Build tool

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Background3D.jsx    # 3D background with Three.js
│   │   ├── CursorGlow.jsx       # Cursor glow effect
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── Hero.jsx             # Hero section
│   │   ├── About.jsx            # About section
│   │   ├── Projects.jsx         # Projects section
│   │   ├── Skills.jsx           # Skills section
│   │   ├── Experience.jsx       # Experience section
│   │   └── Contact.jsx          # Contact section
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
├── vite.config.js               # Vite configuration
└── postcss.config.js            # PostCSS configuration
```

## 🎨 Customization

### Personalize Content

1. **Update your name and info** in `src/components/Hero.jsx`
2. **Add your projects** in `src/components/Projects.jsx`
3. **Update skills** in `src/components/Skills.jsx`
4. **Add your experience** in `src/components/Experience.jsx`
5. **Update contact info** in `src/components/Contact.jsx`

### Customize Colors

Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: '#6366f1',    // Primary color
  secondary: '#8b5cf6',  // Secondary color
  accent: '#06b6d4',     // Accent color
  dark: '#0a0a0f',       // Dark background
  darker: '#050508',     // Darker background
}
```

### Add Resume

Place your resume PDF in the `public` folder and update the download button in `src/components/Hero.jsx`.

## 🌐 Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy!

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Feel free to reach out if you have any questions or suggestions.

---

Built with ❤️ using React, Tailwind CSS, and Three.js
