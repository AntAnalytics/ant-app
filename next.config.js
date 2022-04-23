/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer');
const withPWA = require('next-pwa');

const nextConfig = {
  // Your existing module.exports
  reactStrictMode: true,
  swcMinify: true,
  ignoreBuildErrors: false,
  images: {
    domains: ['avatars.dicebear.com', 'lh3.googleusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/youtube',
        destination:
          'https://www.youtube.com/channel/UCffxL7-tAwSCUh-1oSvhLNQs',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/eleqtrasoft/',
        permanent: true,
      },
      {
        source: '/facebook',
        destination: 'https://www.facebook.com/eleqtrasoft/',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://in.linkedin.com/company/eleqtrasoft',
        permanent: true,
      },
      {
        source: '/jobs',
        destination: 'https://angel.co/company/eleqtrasoft/jobs',
        permanent: true,
      },
      {
        source: '/chat',
        destination: 'https://discord.com/invite/b5aFmcY9kK',
        permanent: true,
      },
      {
        source: '/discuss',
        destination: 'https://discuss.skillabit.in',
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer()(
  withPWA({
    // other next config
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development',
    },
    ...nextConfig,
  })
);

// module.exports = withContentlayer()(nextConfig);
// module.exports = withPWA({
//   // other next config
//   pwa: {
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === 'development',
//   },
//   ...nextConfig,
// });
