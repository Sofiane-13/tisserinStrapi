module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a3ecf0a3d038012b2283c9e1446a960b'),
  },
});
