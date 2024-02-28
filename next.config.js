// next.config.js
module.exports = {
    images: {
        domains: ['th.bing.com', 'github.com'], // Specify external domains here
    },
    webpack: (config, { isServer }) => {
        // Example customization: adding a custom rule for webpack
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next/static/images',
                        outputPath: 'static/images/',
                        name: '[name]-[hash].[ext]',
                        esModule: false, // Required for file-loader to work properly with Next.js
                    },
                },
            ],
        });

        // Add more custom Webpack config here as needed

        return config;
    },
};
