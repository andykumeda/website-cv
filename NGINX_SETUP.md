# Nginx Configuration Guide

## Overview
This guide will help you configure nginx to serve your landing page and CV on separate domains:
- **kumeda.com** → Landing page (root `/`)
- **cv.kumeda.com** → CV section (`/cv` route)

## Configuration Files Created

I've created two nginx configuration files in your project directory:
- `nginx-kumeda.com.conf` - For the main domain
- `nginx-cv.kumeda.com.conf` - For the CV subdomain (updated version)

## Step-by-Step Setup

### 1. Update cv.kumeda.com Configuration

The existing `cv.kumeda.com` config is already mostly correct. Update it with the new version:

```bash
sudo cp /home/andy/Dev/CV/nginx-cv.kumeda.com.conf /etc/nginx/sites-available/cv.kumeda.com
```

### 2. Create kumeda.com Configuration

**Note:** You'll need to set up SSL certificates for kumeda.com first using Certbot.

#### Option A: If you already have SSL certificates for kumeda.com

```bash
sudo cp /home/andy/Dev/CV/nginx-kumeda.com.conf /etc/nginx/sites-available/kumeda.com
sudo ln -s /etc/nginx/sites-available/kumeda.com /etc/nginx/sites-enabled/
```

#### Option B: If you need to set up SSL certificates first

1. Create a temporary HTTP-only config:

```bash
sudo tee /etc/nginx/sites-available/kumeda.com > /dev/null <<'EOF'
server {
    server_name kumeda.com www.kumeda.com;
    
    root /var/www/cv;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    listen 80;
}
EOF
```

2. Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/kumeda.com /etc/nginx/sites-enabled/
```

3. Test and reload nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

4. Get SSL certificates with Certbot:

```bash
sudo certbot --nginx -d kumeda.com -d www.kumeda.com
```

5. Certbot will automatically update the config with SSL settings.

### 3. Test Nginx Configuration

Before reloading, always test the configuration:

```bash
sudo nginx -t
```

If the test passes, you'll see:
```
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### 4. Reload Nginx

Apply the changes:

```bash
sudo systemctl reload nginx
```

## How It Works

### For kumeda.com (Landing Page)
- Visitors go to `https://kumeda.com`
- Nginx serves `/var/www/cv/index.html`
- React app detects path is `/` and shows landing page

### For cv.kumeda.com (CV Section)
- Visitors go to `https://cv.kumeda.com`
- Nginx serves `/var/www/cv/index.html`
- React app detects path and shows CV page
- **OR** visitors can go directly to `https://kumeda.com/cv`

Both domains serve the same files from `/var/www/cv`, but the React app's routing logic determines which page to display based on the URL path.

## Verification

After setup, test both domains:

1. **Landing Page:**
   ```bash
   curl -I https://kumeda.com
   ```

2. **CV Page:**
   ```bash
   curl -I https://cv.kumeda.com
   ```

3. **Direct CV route:**
   ```bash
   curl -I https://kumeda.com/cv
   ```

All should return `200 OK`.

## Troubleshooting

### If you get 404 errors:
- Check that `/var/www/cv` contains the built files
- Verify the deployment ran successfully
- Check nginx error logs: `sudo tail -f /var/log/nginx/error.log`

### If SSL doesn't work:
- Make sure DNS is pointing to your server
- Run certbot again: `sudo certbot --nginx -d kumeda.com -d www.kumeda.com`
- Check certificate status: `sudo certbot certificates`

### If the wrong page shows:
- Clear your browser cache
- Check the React app is reading the URL correctly
- Open browser DevTools and check the console for errors

## Quick Commands Reference

```bash
# Test nginx config
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx

# Restart nginx (if reload doesn't work)
sudo systemctl restart nginx

# Check nginx status
sudo systemctl status nginx

# View error logs
sudo tail -f /var/log/nginx/error.log

# View access logs
sudo tail -f /var/log/nginx/access.log
```

## Current Status

✅ Files deployed to `/var/www/cv`
✅ `cv.kumeda.com` nginx config exists
⏳ `kumeda.com` nginx config needs to be created
⏳ SSL certificates for `kumeda.com` may need to be obtained

Follow the steps above to complete the setup!
