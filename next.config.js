/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  images: {
    domains: ['picsum.photos', 'res.cloudinary.com', 'img.freepik.com'],
  },
}

module.exports = nextConfig
