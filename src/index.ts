// path: ./src/index.js  (or wherever your main bootstrap file lives)

export default {
  register(/* { strapi } */) {},

  bootstrap({ strapi }) {
    // add a lightweight health endpoint
    strapi.server.router.get('/health', (ctx) => {
      ctx.status = 200;
      ctx.body = 'OK';
    });
  },
};
