/* eslint-env node */

// https://github.com/vercel/next.js/blob/master/packages/next/next-server/server/config.ts
const nextConfig = {
  webpack: (config, {isServer}) => {
    // Find the existing 'oneOf' rule
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    // Next 12+ has multiple TS loaders, update them
    if (oneOfRule) {
      const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));

      tsRules.forEach(rule => {
        // eslint-disable-next-line no-param-reassign
        rule.include = undefined;
      });
    }

    // Add a new rule for handling PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource', // Treats PDFs as static assets
      generator: {
        filename: 'static/pdfs/[name].[hash][ext]', // Stores PDFs in /public/static/pdfs/
      },
    });

    return config;
  },

  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'], // Removed 'pdf' since PDFs aren't pages
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;