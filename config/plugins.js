const crypto = require('crypto');

module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
    },
  },
'content-export-import': {
    enabled: true,
    resolve: './src/plugins/content-export-import' // path to plugin folder
  },
});
