/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      remotePatterns: [
         {
            hostname: "creativecommons.org",
         },
      ],
   },
};

export default nextConfig;
