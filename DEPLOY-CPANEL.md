# Deploying to cPanel (shared hosting)

This app is a static single-page application (SPA). Follow these steps to deploy on cPanel.

## 1. Build the site locally

```bash
npm install
npm run build
```

This creates a `dist` folder with all files ready to upload.

## 2. Upload to cPanel

1. Log in to **cPanel** and open **File Manager**.
2. Go to your web root (usually `public_html` for the main domain, or the folder for your subdomain).
3. Upload **everything inside** the `dist` folder (not the `dist` folder itself):
   - `index.html` (at the root)
   - `favicon.png`
   - `robots.txt`
   - `sitemap.xml`
   - `.htaccess` (required for routes like /about, /register to work)
   - The `assets` folder (JS and CSS files)

So after upload, your root should contain: `index.html`, `.htaccess`, `favicon.png`, `robots.txt`, `sitemap.xml`, and an `assets` folder.

## 3. Subfolder deployment (e.g. example.com/expo/)

If the site will live in a subfolder (e.g. `https://yoursite.com/expo/`):

1. Before building, set the base in `vite.config.ts`:
   ```ts
   base: '/expo/',
   ```
2. Run `npm run build` again.
3. Upload the contents of `dist` into the subfolder (e.g. `public_html/expo/`).
4. Update `public/.htaccess` and set `RewriteBase /expo/` instead of `RewriteBase /`, then rebuild.

## 4. Check

- Open your domain: the home page should load.
- Click **About**, **Register**, etc.: they should load without 404.
- If you get 404 on those links, confirm `.htaccess` was uploaded and that your host has `mod_rewrite` enabled (it usually is on cPanel).

## 5. Optional: point a domain

In cPanel, use **Domains** or **Addon Domains** to point your domain to the folder where you uploaded the files.
