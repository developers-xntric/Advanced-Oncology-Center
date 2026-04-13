# Hero Section Implementation - Setup Instructions

## ✅ What's Been Created

1. **Hero Section Component** - `src/components/HeroSection.tsx`
   - Background image with dark overlay
   - Welcome badge at the top
   - Main heading
   - Subtitle and description text
   - "Get in Touch" CTA button with arrow icon
   - Scroll indicator at the bottom

2. **Updated Files**:
   - `src/app/page.tsx` - Integrated the HeroSection component
   - `src/app/globals.css` - Fixed font paths to use `/fonts/` format

## ⚠️ Required Actions

### 1. Add Font Files
Download the Raleway font family from [Google Fonts](https://fonts.google.com/specimen/Raleway) and add these files to `/public/fonts/`:

- `Raleway-Regular.ttf` (400 weight)
- `Raleway-Medium.ttf` (500 weight)
- `Raleway-SemiBold.ttf` (600 weight)
- `Raleway-Bold.ttf` (700 weight)

Current placeholder files will be replaced.

### 2. Add Hero Background Image
Add a background image named `hero-bg.jpg` to the `/public` directory.

**Recommended specs**:
- Dimensions: 1920x1080px or larger
- Format: JPG or WebP
- Content: Medical/healthcare themed (doctor with patient)

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see the hero section in action!

## 📝 Notes

- The hero section is fully responsive (mobile, tablet, desktop)
- The background image uses `object-cover` to maintain aspect ratio
- Dark overlay (30% opacity) ensures text readability
- All text is white with proper contrast
- Button has hover effects (background turns white)
- Scroll indicator has a bounce animation
- Placeholder font files allow the build to succeed, but you should add real fonts for proper rendering
