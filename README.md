# Farm & Equestrian Website

A modern, performant static website built with React Native Web for Cloudflare Workers deployment. This website showcases your equestrian facility, services, pricing, and allows visitors to schedule tours through Calendly.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Performance Optimized**: Code splitting and lazy loading for fast page loads
- **Static Site**: Fully static website ready for Cloudflare Workers deployment
- **Modern Stack**: React Native Web for cross-platform styling consistency
- **SEO Friendly**: Semantic HTML and meta tags for search engine optimization

## Pages

1. **Home** - Hero section with facility overview and key features
2. **Facilities** - Detailed information about covered arena, stalls, pastures, and amenities
3. **Services** - Comprehensive list of boarding options and additional services
4. **Pricing** - Transparent pricing for all services with clear breakdowns
5. **Contact** - Contact information, hours, FAQ, and Calendly scheduling integration

## Tech Stack

- React 18
- React Native Web (for optimized styling)
- React Router DOM (for navigation)
- Webpack 5 (for bundling and optimization)
- Babel (for JavaScript transpilation)
- Cloudflare Workers (deployment target)

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

Build the static site:

```bash
npm run build
```

The optimized static files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Deployment to Cloudflare Workers

This website is configured for deployment to Cloudflare Workers using Wrangler.

### Prerequisites

1. A Cloudflare account
2. Wrangler CLI installed globally: `npm install -g wrangler`

### Deploy Steps

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Deploy to Cloudflare Pages:**
   ```bash
   wrangler pages deploy dist
   ```

   Or use the Cloudflare dashboard to connect your GitHub repository for automatic deployments.

## Customization

### Adding Your Calendly Link

Edit `src/pages/Contact.js` and replace the placeholder Calendly URL:

```javascript
data-url="https://calendly.com/your-username/facility-tour"
```

### Adding Images

Replace the image placeholders throughout the pages with actual images:

1. Add images to `public/images/` directory
2. Update the placeholder `View` components with actual `Image` components from `react-native-web`

Example:
```javascript
import { Image } from 'react-native-web';

<Image 
  source={{ uri: '/images/hero.jpg' }} 
  style={styles.heroImage}
  resizeMode="cover"
/>
```

### Updating Contact Information

Edit `src/components/Footer.js` and `src/pages/Contact.js` to update:
- Phone number
- Email address
- Physical address
- Hours of operation

### Customizing Colors

The main brand color is `#2c5f2d` (dark green). To change it:
1. Search for `#2c5f2d` across all files
2. Replace with your brand color

## Performance Optimizations

- **Code Splitting**: Pages are lazy-loaded to reduce initial bundle size
- **Vendor Splitting**: Third-party libraries are separated into a vendor bundle
- **Minification**: All JavaScript and CSS is minified in production
- **Content Hashing**: File names include content hashes for optimal caching
- **Tree Shaking**: Unused code is eliminated during the build process

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All rights reserved.

## Support

For questions or support, contact: info@farmequestrian.com