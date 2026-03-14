# Deployment Guide

This document provides step-by-step instructions for deploying the EKO International Trade Expo website to various hosting platforms.

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Build for Production](#build-for-production)
3. [Deployment Platforms](#deployment-platforms)
4. [Post-Deployment](#post-deployment)
5. [Continuous Deployment](#continuous-deployment)
6. [Troubleshooting](#troubleshooting)

---

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All features are tested and working
- [ ] Environment variables are configured
- [ ] Images are optimized
- [ ] API endpoints are updated for production
- [ ] Error tracking is set up (Sentry, etc.)
- [ ] Analytics are configured (Google Analytics, etc.)
- [ ] SSL certificate is ready (or use platform's)
- [ ] Domain name is configured
- [ ] Email templates are tested
- [ ] SEO meta tags are added

---

## Build for Production

### 1. Update Environment Variables

Create `.env.production`:

```env
VITE_API_BASE_URL=https://api.ekointernationaltrade.com
VITE_ENABLE_ANALYTICS=true
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### 2. Build the Application

```bash
pnpm run build
```

This creates an optimized production build in the `dist/` folder.

### 3. Test Production Build Locally

```bash
# Install serve globally
npm install -g serve

# Serve the production build
serve -s dist -p 3000
```

Visit `http://localhost:3000` to test the production build.

---

## Deployment Platforms

### Option 1: Vercel (Recommended)

Vercel provides the easiest deployment for Vite applications.

#### Setup

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

#### Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install`
5. Add environment variables
6. Click "Deploy"

#### Custom Domain

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for DNS propagation (may take up to 48 hours)

#### Environment Variables

Add in Project Settings → Environment Variables:

```
VITE_API_BASE_URL=https://api.ekointernationaltrade.com
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
```

---

### Option 2: Netlify

Netlify is another excellent option for static sites.

#### Setup

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Initialize**:
   ```bash
   netlify init
   ```

4. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

#### Via Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to Git repository
4. Configure build settings:
   - **Build command**: `pnpm run build`
   - **Publish directory**: `dist`
5. Add environment variables
6. Click "Deploy site"

#### netlify.toml Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "pnpm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

### Option 3: AWS S3 + CloudFront

For more control and scalability.

#### Prerequisites

- AWS Account
- AWS CLI installed and configured

#### Steps

1. **Build the application**:
   ```bash
   pnpm run build
   ```

2. **Create S3 Bucket**:
   ```bash
   aws s3 mb s3://eko-trade-expo-website
   ```

3. **Configure bucket for static hosting**:
   ```bash
   aws s3 website s3://eko-trade-expo-website --index-document index.html --error-document index.html
   ```

4. **Upload files**:
   ```bash
   aws s3 sync dist/ s3://eko-trade-expo-website
   ```

5. **Set bucket policy** (make public):
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::eko-trade-expo-website/*"
       }
     ]
   }
   ```

6. **Create CloudFront Distribution** (optional, for CDN):
   - Origin: S3 bucket
   - Default Root Object: index.html
   - Custom error response: redirect 404 to /index.html

7. **Configure custom domain**:
   - Request SSL certificate in ACM
   - Add CNAME record in DNS
   - Update CloudFront distribution

---

### Option 4: GitHub Pages

Free hosting for public repositories.

#### Setup

1. **Install gh-pages**:
   ```bash
   pnpm add -D gh-pages
   ```

2. **Update `package.json`**:
   ```json
   {
     "scripts": {
       "deploy": "pnpm run build && gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/eko-trade-expo"
   }
   ```

3. **Update `vite.config.ts`**:
   ```ts
   export default defineConfig({
     base: '/eko-trade-expo/',
     // ... other config
   });
   ```

4. **Deploy**:
   ```bash
   pnpm run deploy
   ```

5. **Configure in GitHub**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages → /root
   - Save

---

### Option 5: Traditional Web Hosting (cPanel)

For traditional shared hosting.

#### Steps

1. **Build locally**:
   ```bash
   pnpm run build
   ```

2. **Compress dist folder**:
   ```bash
   cd dist
   zip -r dist.zip .
   ```

3. **Upload via cPanel**:
   - Login to cPanel
   - Go to File Manager
   - Navigate to public_html
   - Upload dist.zip
   - Extract files

4. **Configure .htaccess** (for SPA routing):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## Post-Deployment

### 1. Verify Deployment

Test all pages and features:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Forms submit successfully
- [ ] Images load properly
- [ ] Countdown timer works
- [ ] Mobile responsiveness
- [ ] Contact form emails are received

### 2. Performance Testing

Use tools to test performance:

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

Target metrics:
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1

### 3. SEO Setup

1. **Submit sitemap to Google Search Console**:
   ```xml
   <!-- public/sitemap.xml -->
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://ekointernationaltrade.com/</loc>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://ekointernationaltrade.com/about</loc>
       <priority>0.8</priority>
     </url>
     <!-- Add all pages -->
   </urlset>
   ```

2. **Create robots.txt**:
   ```txt
   # public/robots.txt
   User-agent: *
   Allow: /
   Sitemap: https://ekointernationaltrade.com/sitemap.xml
   ```

3. **Add meta tags** in index.html:
   ```html
   <meta name="description" content="EKO International Trade Expo 2026 - West Africa's premier trade and investment expo">
   <meta name="keywords" content="trade expo, Lagos, Nigeria, business, investment">
   
   <!-- Open Graph -->
   <meta property="og:title" content="EKO International Trade Expo 2026">
   <meta property="og:description" content="West Africa's premier trade and investment expo">
   <meta property="og:image" content="https://ekointernationaltrade.com/og-image.png">
   <meta property="og:url" content="https://ekointernationaltrade.com">
   
   <!-- Twitter -->
   <meta name="twitter:card" content="summary_large_image">
   <meta name="twitter:title" content="EKO International Trade Expo 2026">
   <meta name="twitter:description" content="West Africa's premier trade and investment expo">
   <meta name="twitter:image" content="https://ekointernationaltrade.com/og-image.png">
   ```

### 4. Analytics Setup

Add Google Analytics (or alternative):

```tsx
// /src/utils/analytics.ts

export function initAnalytics() {
  const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
  
  if (!GA_ID) return;
  
  // Add Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
  
  // Initialize
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA_ID);
}

// Call in App.tsx
useEffect(() => {
  initAnalytics();
}, []);
```

### 5. Error Tracking

Set up error tracking with Sentry:

```bash
pnpm add @sentry/react
```

```tsx
// /src/main.tsx

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
  tracesSampleRate: 1.0,
});
```

---

## Continuous Deployment

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install pnpm
      uses: pnpm/action-setup@v2
      with:
        version: 8
    
    - name: Install dependencies
      run: pnpm install
    
    - name: Build
      run: pnpm run build
      env:
        VITE_API_BASE_URL: ${{ secrets.VITE_API_BASE_URL }}
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
        vercel-args: '--prod'
```

---

## Troubleshooting

### Issue: 404 on Page Refresh

**Cause**: Server doesn't handle SPA routing

**Solution**: Configure server to redirect all routes to index.html

**Vercel**: Automatic
**Netlify**: Use `netlify.toml` (see above)
**Apache**: Use `.htaccess` (see above)
**Nginx**:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Issue: Environment Variables Not Working

**Cause**: Variables not prefixed with `VITE_`

**Solution**: All environment variables must start with `VITE_`:
```env
VITE_API_URL=https://api.example.com  # ✓ Correct
API_URL=https://api.example.com       # ✗ Won't work
```

### Issue: Images Not Loading

**Cause**: Incorrect base path or missing assets

**Solution**:
1. Check `vite.config.ts` base path
2. Ensure images are in `public/` or imported correctly
3. Use relative paths or `figma:asset` for Figma images

### Issue: Large Bundle Size

**Solution**:
1. Analyze bundle:
   ```bash
   pnpm add -D rollup-plugin-visualizer
   ```

2. Lazy load routes and components
3. Optimize images
4. Remove unused dependencies

---

## Monitoring

### Uptime Monitoring

Use services like:
- [UptimeRobot](https://uptimerobot.com/)
- [Pingdom](https://www.pingdom.com/)
- [StatusCake](https://www.statuscake.com/)

### Performance Monitoring

- Google Analytics (Core Web Vitals)
- [Vercel Analytics](https://vercel.com/analytics)
- [Sentry Performance Monitoring](https://sentry.io/)

---

## Backup Strategy

1. **Code**: Version control with Git
2. **Database**: Regular automated backups (when API is added)
3. **Assets**: S3 bucket with versioning
4. **Environment**: Document all configurations

---

**Last Updated**: March 13, 2026
**Version**: 1.0.0
