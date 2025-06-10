/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify removed as it's no longer recognized in Next.js 15.3.2
  // Ensure case sensitivity is properly handled
  poweredByHeader: false,
  // Add any rewrites or redirects needed
  async rewrites() {
    return [
      {
        source: '/register',
        destination: '/signup',
      },
    ];
  },
}

module.exports = nextConfig
