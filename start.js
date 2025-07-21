#!/usr/bin/env node

console.log('🚀 Starting Strapi application...');
console.log('Environment:', process.env.NODE_ENV || 'development');
console.log('Port:', process.env.PORT || 1337);
console.log('Host:', process.env.HOST || '0.0.0.0');

// Set required environment variables if not present
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

if (!process.env.HOST) {
  process.env.HOST = '0.0.0.0';
}

if (!process.env.PORT) {
  process.env.PORT = '1337';
}

// Start Strapi
try {
  require('@strapi/strapi')().start();
} catch (error) {
  console.error('❌ Failed to start Strapi:', error);
  process.exit(1);
} 