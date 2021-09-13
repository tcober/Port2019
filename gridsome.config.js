const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/_globals.sass'),
        // or if you use scss
        path.resolve(__dirname, './src/assets/_globals.scss'),
        // you can also use a glob if you'd prefer
        path.resolve(__dirname, './src/assets/*.sass'),
        // or scss
        path.resolve(__dirname, './src/assets/*.scss'),
      ],
    })
}

module.exports = {
  siteName: "Thomas Cober",
  siteUrl: "https://thomascober.com",
  siteDescription:
    "The design, programming, and musical work of Thomas Charles Cober",
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://boxboxboxbox.com', // required
        apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10,
        routes: {
          post: "work/:slug",
          blog: "blog/:slug"
        }
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000
      }
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-43614936-1"
      }
    }
  ],
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
};
