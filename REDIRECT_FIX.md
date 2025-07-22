# Fix Redirect Loop Issue

## Problem
You're getting "ERR_TOO_MANY_REDIRECTS" when accessing http://localhost:1337

## Solution Steps

### 1. Stop the Server
Press `Ctrl + C` to stop the current Strapi server

### 2. Clear Browser Cache
- Clear your browser cache and cookies
- Or try opening in an incognito/private window

### 3. Restart the Server
```bash
npm run develop
```

### 4. Access the Correct URL
- **Admin Panel:** http://localhost:1337/admin
- **API Base:** http://localhost:1337/api

## What Was Changed

### Server Configuration (`config/server.ts`)
- ✅ Removed complex URL and proxy settings
- ✅ Simplified to basic configuration
- ✅ Removed CORS settings that might cause issues

### Admin Configuration (`config/admin.ts`)
- ✅ Removed explicit URL setting
- ✅ Let Strapi auto-detect the URL

## Alternative Solutions

### If still having issues:

1. **Try a different port:**
   ```bash
   # Create .env file with:
   PORT=1338
   ```

2. **Check if port is in use:**
   ```bash
   # Windows
   netstat -ano | findstr :1337
   
   # Kill the process if needed
   taskkill /PID <process_id> /F
   ```

3. **Reset the database:**
   ```bash
   # Delete the database file
   rm -rf .tmp/
   # Then restart
   npm run develop
   ```

## Expected Behavior

After the fix:
- ✅ Server starts without errors
- ✅ http://localhost:1337/admin loads properly
- ✅ No redirect loops
- ✅ You can create admin account

## If Still Not Working

1. Check the terminal for any error messages
2. Make sure no other Strapi instance is running
3. Try accessing http://localhost:1337/api to test API
4. Check if firewall is blocking the port 