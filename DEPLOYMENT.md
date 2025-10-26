# Deployment Guide

This guide explains how to deploy your Farm & Equestrian website to Cloudflare Workers/Pages.

## Option 1: Deploy via Cloudflare Dashboard (Recommended)

This is the easiest method and enables automatic deployments from GitHub.

### Steps:

1. **Login to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Navigate to Pages section

2. **Create a New Project**
   - Click "Create a project"
   - Select "Connect to Git"
   - Authorize Cloudflare to access your GitHub repository
   - Select the `KdogDevs/farm-web` repository

3. **Configure Build Settings**
   - Framework preset: None
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: (leave blank)

4. **Environment Variables**
   - No environment variables are required for the basic setup

5. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will build and deploy your site
   - Future commits to your main branch will automatically trigger deployments

## Option 2: Deploy via Wrangler CLI

### Prerequisites:
- Install Wrangler globally: `npm install -g wrangler`
- Login to Cloudflare: `wrangler login`

### Steps:

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare Pages:**
   ```bash
   wrangler pages deploy dist
   ```

3. **Follow the prompts:**
   - Enter a project name (e.g., "farm-web")
   - Select your production branch (e.g., "main")

4. **Your site will be live at:**
   ```
   https://farm-web.pages.dev
   ```

## Post-Deployment Customization

### 1. Custom Domain
- In Cloudflare Pages dashboard, go to your project
- Navigate to "Custom domains"
- Add your domain and follow DNS setup instructions

### 2. Add Calendly Link
- Edit `src/pages/Contact.js`
- Replace the placeholder URL with your Calendly link:
  ```javascript
  data-url="https://calendly.com/your-username/facility-tour"
  ```
- Rebuild and redeploy: `npm run build && wrangler pages deploy dist`

### 3. Add Images
- Add your images to the `public/images/` directory
- Update the image placeholders in the page components
- Supported formats: JPG, PNG, WebP
- Recommended: Optimize images before adding (use tools like TinyPNG)

### 4. Update Contact Information
- Edit `src/components/Footer.js` and `src/pages/Contact.js`
- Update phone, email, address, and hours
- Rebuild and redeploy

### 5. Add Google Maps
- Get an embed code from Google Maps
- Add it to the map placeholder in `src/pages/Contact.js`

## Monitoring and Analytics

### Cloudflare Web Analytics (Free)
1. Go to your Cloudflare dashboard
2. Navigate to Web Analytics
3. Add your site
4. Copy the analytics snippet
5. Add it to `public/index.html` in the `<head>` section

### Google Analytics
1. Create a Google Analytics 4 property
2. Get your measurement ID
3. Add the GA4 script to `public/index.html`

## Performance Tips

- **Images**: Use WebP format for smaller file sizes
- **CDN**: Cloudflare automatically provides CDN and caching
- **Compression**: Enable Brotli compression in Cloudflare settings
- **Minification**: Already configured in webpack

## Troubleshooting

### Build Fails
- Check that all dependencies are installed: `npm install`
- Clear cache: `rm -rf node_modules dist && npm install`
- Check Node.js version (requires 16+)

### Pages Don't Load After Deployment
- Verify build output directory is set to `dist`
- Check browser console for errors
- Ensure all routes are configured correctly in webpack

### Images Not Loading
- Verify images are in `public/` directory
- Check image paths are correct (should start with `/`)
- Ensure images are committed to git

## Support

For deployment issues:
- Cloudflare Docs: https://developers.cloudflare.com/pages/
- Community Forum: https://community.cloudflare.com/

For code issues:
- Check the README.md for development setup
- Review webpack.config.js for build configuration