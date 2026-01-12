# Nginx Troubleshooting & Fix Guide

## Issues Identified

### ✅ Issue 1: cv.kumeda.com shows Landing Page instead of CV
**Problem**: When visiting `https://cv.kumeda.com`, the landing page is displayed instead of the CV.  
**Cause**: The React app sees the path as `/` and defaults to the landing page.  
**Solution**: Configure nginx to redirect `cv.kumeda.com/` → `cv.kumeda.com/cv`

### ⚠️ Issue 2: kumeda.com DNS Not Resolving
**Problem**: `https://kumeda.com` returns `ERR_NAME_NOT_RESOLVED`  
**Cause**: DNS A record for `kumeda.com` is missing or not propagated  
**Solution**: Add DNS A record pointing to your server IP

## Quick Fix for cv.kumeda.com

Apply the updated nginx configuration:

```bash
# Copy the updated config
sudo cp /home/andy/Dev/CV/nginx-cv.kumeda.com.conf /etc/nginx/sites-available/cv.kumeda.com

# Test nginx config
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

**What this does:**
- Visitors to `https://cv.kumeda.com` are automatically redirected to `https://cv.kumeda.com/cv`
- The CV page displays immediately
- All other paths continue to work normally

## Fix for kumeda.com DNS

Check your DNS records and ensure you have an A record:

```bash
# Check current DNS resolution
dig kumeda.com A
dig kumeda.com AAAA

# Check what cv.kumeda.com resolves to (this one works)
dig cv.kumeda.com A
```

**Expected DNS records:**
```
kumeda.com.         A       <YOUR_SERVER_IP>
www.kumeda.com.     A       <YOUR_SERVER_IP>
cv.kumeda.com.      A       <YOUR_SERVER_IP>
```

If the A record is missing, add it in your DNS provider's control panel (e.g., Cloudflare, Route53, etc.).

## Verification Steps

After applying the nginx fix:

1. **Test cv.kumeda.com redirect:**
   ```bash
   curl -I https://cv.kumeda.com
   ```
   Should return `301 Moved Permanently` with `Location: /cv`

2. **Test cv.kumeda.com/cv:**
   ```bash
   curl -I https://cv.kumeda.com/cv
   ```
   Should return `200 OK`

3. **Test in browser:**
   - Visit `https://cv.kumeda.com` → Should show CV immediately
   - URL bar should show `https://cv.kumeda.com/cv`

## Current Status

| Domain | Status | Issue | Fix |
|--------|--------|-------|-----|
| `cv.kumeda.com` | ⚠️ Shows wrong page | Landing page instead of CV | ✅ Config updated - apply fix above |
| `cv.kumeda.com/cv` | ✅ Working | None | No action needed |
| `kumeda.com` | ❌ Not resolving | DNS A record missing | Add DNS A record |
| `kumeda.com/cv` | ❌ Not resolving | DNS A record missing | Add DNS A record |

## Next Steps

1. **Apply the nginx fix** (commands above)
2. **Fix DNS for kumeda.com** (add A record in your DNS provider)
3. **Wait for DNS propagation** (can take 5 minutes to 48 hours)
4. **Test both domains** once DNS is working

Once both fixes are applied, you'll have:
- `kumeda.com` → Landing page
- `cv.kumeda.com` → CV page (automatically)
