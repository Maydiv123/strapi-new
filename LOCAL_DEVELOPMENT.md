# my-project Local Development Setup

## Quick Start

### 1. Navigate to my-project Directory
```bash
cd my-project
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create Environment File
Create a `.env` file in the `my-project` directory with these variables:

```env
# Local Development Environment Variables
NODE_ENV=development
HOST=localhost
PORT=1337

# App Keys (for local development)
APP_KEYS=defaultKey1,defaultKey2,defaultKey3,defaultKey4

# Admin JWT Secret
ADMIN_JWT_SECRET=defaultAdminJWTSecret

# API Token Salt
API_TOKEN_SALT=defaultApiTokenSalt

# Transfer Token Salt
TRANSFER_TOKEN_SALT=defaultTransferTokenSalt

# Encryption Key (32 characters)
ENCRYPTION_KEY=defaultEncryptionKey123456789012345

# Public URL for local development
PUBLIC_URL=http://localhost:1337

# Disable telemetry for local development
STRAPI_TELEMETRY_DISABLED=true

# CORS Origins (for local development)
CORS_ORIGIN=http://localhost:3000,http://localhost:1337
```

### 4. Start Development Server
```bash
npm run develop
```

### 5. Access Strapi Admin
Open your browser and go to: **http://localhost:1337/admin**

## Available Scripts

- `npm run develop` - Start development server with hot reload
- `npm run dev` - Same as develop
- `npm run start` - Start production server
- `npm run build` - Build for production
- `npm run railway` - Railway-specific development command
- `npm run railway-dev` - Railway development with NODE_ENV=development

## Configuration Changes Made

### Server Configuration (`config/server.ts`)
- ✅ Host changed to `localhost`
- ✅ URL set to `http://localhost:1337`
- ✅ Proxy disabled for local development
- ✅ CORS origins updated for localhost

### Admin Configuration (`config/admin.ts`)
- ✅ URL set to `http://localhost:1337`
- ✅ Default values for all secrets

## Port Conflicts

**Note:** This project uses port 1337, which might conflict with your other Strapi project. If you get a port conflict:

1. **Option 1:** Stop the other Strapi project first
2. **Option 2:** Change the port in `.env` file:
   ```env
   PORT=1338
   ```

## API Endpoints

- **Admin Panel:** http://localhost:1337/admin
- **API Base:** http://localhost:1337/api
- **Health Check:** http://localhost:1337/_health

## Troubleshooting

### If you get "App keys are required"
- Make sure you have the `.env` file with `APP_KEYS`

### If you get "Admin JWT Secret is required"
- Make sure you have the `.env` file with `ADMIN_JWT_SECRET`

### If you can't access localhost:1337
- Check if another process is using port 1337
- Try running `npm run develop` again

### If content type editing is disabled
- Make sure `NODE_ENV=development` in your `.env` file
- Use `npm run develop` instead of `npm run start`

## Next Steps

1. Create your admin account at http://localhost:1337/admin
2. Start creating content types and content
3. Test the API endpoints
4. When ready for production, update Railway environment variables

## Difference from Other Strapi Project

This project has:
- Different UUID and install ID
- Railway-specific scripts
- Cloud plugin enabled
- Different port configuration 