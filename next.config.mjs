/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "https",
        hostname: "fruitful-power-f5942f95f8.media.strapiapp.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "fruitful-power-f5942f95f8.strapiapp.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
