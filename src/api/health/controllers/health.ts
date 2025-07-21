export default {
  check: async (ctx) => {
    try {
      // Check if Strapi is ready
      if (strapi && strapi.isLoaded) {
        ctx.status = 200;
        ctx.body = {
          status: 'ok',
          timestamp: new Date().toISOString(),
          uptime: process.uptime(),
        };
      } else {
        ctx.status = 503;
        ctx.body = {
          status: 'service unavailable',
          message: 'Strapi is not ready',
        };
      }
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        status: 'error',
        message: error.message,
      };
    }
  },
}; 