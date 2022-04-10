/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/conversation",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
