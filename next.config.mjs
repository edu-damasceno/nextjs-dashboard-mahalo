/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: 'incremental',
    serverComponents: true,
  },
};

export default nextConfig;
