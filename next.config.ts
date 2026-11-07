import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },

  cacheComponents: true,
  partialPrefetching: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  // Redirect the non-www domain to the canonical www domain.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ninety4film.com",
          },
        ],
        destination: "https://www.ninety4film.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
