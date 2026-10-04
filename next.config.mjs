/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'media.istockphoto.com'
    },
    {
        protocol: 'https',
        hostname: 'cdn.pixabay.com'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      }
  ]
  }
};

export default nextConfig;
