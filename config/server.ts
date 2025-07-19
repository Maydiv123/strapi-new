export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://strapi-production-4f32.up.railway.app',
  app: {
    keys: env.array('APP_KEYS', [
      'defaultKey1',
      'defaultKey2',
      'defaultKey3',
      'defaultKey4'
    ]),
  },
});
