/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NOTION_TOKEN: 'secret_1BAPdEBEqDMt08PJ8bGy3lilqFiS8HF9BxPHWDAJUbz',
    NOTION_DATABASE_ID: '5fe4b225595942bba15603be1a07bb90',
  },
};

module.exports = nextConfig;
