/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  async rewrites() {
    const phase = process.env.PHASE ?? "dev";

    if (phase === "dev") {
      return [
        {
          source: "/__api__/:path*",
          destination: "https://api-alpha.42world.kr/:path*",
        },
      ];
    }
  },
};

module.exports = nextConfig;
