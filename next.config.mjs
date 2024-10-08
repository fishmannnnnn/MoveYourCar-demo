/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'myc.fractal-web.com',
                port: '',
                pathname: '/uploads/**',
            },
            //   {
            //     protocol: "https",
            //     hostname: "megavolt.fractal-web.comundefined",
            //     port: "",
            //     // pathname: "/uploads/**",
            //   },
            //   {
            //     protocol: "https",
            //     hostname: "res.cloudinary.com",
            //     port: "",
            //     // pathname: "/uploads/**",
            //   },
        ],
    },
}

if (process.env.NODE_ENV === "production") {
	nextConfig.output = "standalone";
}

export default nextConfig
