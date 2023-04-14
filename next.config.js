/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: '/',
                destination: `/api/auth/callback/${process.env.OIDC_ID}`,
                permanent: false,
                // only redirect if query param is present
                has: [
                    {
                        type: 'query',
                        key: 'code',
                    },
                ],
            },
            {
                source: '/',
                destination: '/de',
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig
