/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  async rewrites() {
    const phase = process.env.PHASE ?? "dev";

    if (phase === "dev") {
      return [
        {
          source: "/api/:path*",
          destination: "https://api-alpha.42world.kr/:path*",
        },
      ];
    }

    return [];
  },
};

module.exports = nextConfig;
