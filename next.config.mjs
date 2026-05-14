/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // STRICT TypeScript - no bypassing
    typescript: {
        ignoreBuildErrors: false,
    },
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    productionBrowserSourceMaps: true,
    
    images: {
        unoptimized: true, // Required for static export
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.apexenterprises.net',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },

    trailingSlash: true,
    
    experimental: {
        optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    },
};

export default nextConfig;
