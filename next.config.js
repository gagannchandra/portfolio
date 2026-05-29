/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/projects", destination: "/#projects", permanent: false },
      { source: "/blog", destination: "/#projects", permanent: false },
      { source: "/photos", destination: "/", permanent: false },
    ];
  },
};

module.exports = {
  ...nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      { hostname: "icons.duckduckgo.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "www.google.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "github-readme-stats.vercel.app" },
      { hostname: "streak-stats.demolab.com" },
      { hostname: "cdn.simpleicons.org" },
    ],
  },
};
