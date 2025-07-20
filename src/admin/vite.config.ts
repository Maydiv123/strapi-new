import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },

    server: {
      // 1. Bind to all interfaces so Railway’s load‑balancer can reach it
      host: '0.0.0.0',
      // 2. Use the same port that Railway exposes (1337 by default)
      port: Number(process.env.PORT) || 1337,
      // 3. Allow HMR to connect back over wss:// on standard HTTPS port
      hmr: {
        protocol: 'wss',
        host: 'strapi-production-4f32.up.railway.app',
        port: 443,
      },
      // 4. Skip host‑header blocking
      allowedHosts: true,
    },
  });
};
