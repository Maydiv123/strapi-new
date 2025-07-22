# Alternative Port Configuration

## Port Conflict Issue

Since both Strapi projects (`strapi/` and `my-project/`) use port 1337, you'll need to use different ports.

## Solution: Use Port 1338 for my-project

### Option 1: Environment Variable (Recommended)

Create a `.env` file in `my-project/` with:

```env
# Local Development Environment Variables
NODE_ENV=development
HOST=localhost
PORT=1338  # Changed from 1337 to 1338

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
PUBLIC_URL=http://localhost:1338  # Changed to match port

# Disable telemetry for local development
STRAPI_TELEMETRY_DISABLED=true

# CORS Origins (for local development)
CORS_ORIGIN=http://localhost:3000,http://localhost:1338
```

### Option 2: Update Server Config

Update `config/server.ts`:

```typescript
export default ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 1338), // Changed default to 1338
  url: env('PUBLIC_URL', 'http://localhost:1338'), // Changed to 1338
  // ... rest of config
});
```

## Access URLs

With port 1338:
- **Admin Panel:** http://localhost:1338/admin
- **API Base:** http://localhost:1338/api
- **Health Check:** http://localhost:1338/_health

## Running Both Projects

Now you can run both Strapi projects simultaneously:

1. **First Strapi (strapi/):**
   ```bash
   cd strapi
   npm run develop
   # Access at http://localhost:1337/admin
   ```

2. **Second Strapi (my-project/):**
   ```bash
   cd my-project
   npm run develop
   # Access at http://localhost:1338/admin
   ```

## Frontend Configuration

If your frontend needs to connect to the second Strapi, update the URL:

```javascript
// In your frontend Strapi config
const strapiConfig = {
  url: 'http://localhost:1338', // Point to my-project
  // ... other config
};
``` 