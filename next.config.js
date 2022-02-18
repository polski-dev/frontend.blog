/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.eu-central-1.amazonaws.com"],
    formats: ["image/avif", "image/webp"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
  },
};

module.exports = nextConfig;
