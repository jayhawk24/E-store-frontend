module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: process.env.API_URL + ':path*'
            }
        ];
    },
    env: {
        API_URL: process.env.API_URL
    }
};
