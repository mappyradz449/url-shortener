/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"],
  },
  basePath: "",
  reactStrictMode: true,
};

module.exports = nextConfig;
