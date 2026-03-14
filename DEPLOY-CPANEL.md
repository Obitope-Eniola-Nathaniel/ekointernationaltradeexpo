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

## 5. CSS / styles not loading on live

- **Re-upload `.htaccess`**  
  The `.htaccess` in this project tells the server not to rewrite `/assets/*` requests to `index.html`. If the server rewrites those requests, the browser gets HTML instead of CSS/JS and styles break. Upload the latest `public/.htaccess` (or the one from `dist` after build) to your web root.

- **Confirm the `assets` folder is on the server**  
  In File Manager, ensure you have an `assets` folder in the same directory as `index.html`, with files like `index-xxxxx.css` and `index-xxxxx.js` inside it.

- **Check in the browser**  
  Open DevTools (F12) → **Network** tab, reload the page. Click the request for the `.css` file. If it returns **404** or the response is **HTML** (e.g. your index page) instead of CSS, the server is still rewriting asset URLs; re-upload `.htaccess` and ensure the host allows `.htaccess` overrides.

## 6. Optional: point a domain

In cPanel, use **Domains** or **Addon Domains** to point your domain to the folder where you uploaded the files.
