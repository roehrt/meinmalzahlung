/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: `/api/auth/callback/${process.env.OIDC_ID}`,
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
