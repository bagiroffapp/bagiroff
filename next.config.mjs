/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'admin.baghiroff.az',
            port: '',
            pathname: '/storage/**',
        }, ],
    },
    async redirects() {
        return [{
                source: '/:lang(az[^/?]+)/:path*',
                destination: '/az/:path*',
                permanent: true,
            },
            {
                source: '/:lang(en[^/?]+)/:path*',
                destination: '/en/:path*',
                permanent: true,
            },
            {
                source: '/',
                destination: '/az',
                permanent: true,
            },
        ];
    },
    reactStrictMode: false,
};

export default nextConfig;