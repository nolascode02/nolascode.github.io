# Nolascode Portfolio

Modern, professional portfolio website built with React, TypeScript, Vite, and shadcn/ui.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Beautiful UI components
- **Lucide React** - Icon library

## 📦 Features

- ✅ Modern, professional design
- ✅ Fully responsive layout
- ✅ Type-safe with TypeScript
- ✅ Fast performance with Vite
- ✅ Smooth animations
- ✅ Accessible UI components
- ✅ Automated GitHub Pages deployment

## 🛠️ Development

### Prerequisites

- Node.js 18+
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

## 🚀 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to Pages section
3. Set Source to "GitHub Actions"
4. Push to `main` branch to trigger deployment

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   └── ui/           # shadcn/ui components
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── dist/                 # Build output
└── index.html            # HTML template
```

## 🎨 Customization

### Colors

Edit the CSS variables in `src/index.css` to customize the color scheme:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* ... more colors */
}
```

### Content

Update your personal information in `src/pages/Index.tsx`:

- Skills
- Projects
- Contact information
- Social links

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

- Design inspiration from modern portfolio sites
- UI components by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
