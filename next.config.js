/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/demo/login/authcode',
        destination: '/api/auth/signin/oidc-ausweis-ident',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
