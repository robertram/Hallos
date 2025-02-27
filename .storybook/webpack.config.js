module.exports = async ({ config }) => {
    // Add MDX loader
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {},
        },
      ],
    });
  
    return config;
  };