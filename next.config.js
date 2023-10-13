/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: false,
	},
	async redirects() {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/categories/:id",
				destination: "/categories/:id/1",
				permanent: true,
			},
			{
				source: "/",
				destination: "/products",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
