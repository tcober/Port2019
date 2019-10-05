module.exports = {
  siteName: "Thomas Cober",
  siteDescription:
    "The design, programming, and musical work of Thomas Charles Cober",
  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: "https://boxboxboxbox.com", // required
        typeName: "WordPress", // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10,
        routes: {
          post: "work/:slug",
          blog: "blog/:slug"
        } // How many requests to run simultaneously (Optional)
      }
    },
    {
      use: "gridsome-plugin-sass-resources-loader",
      options: {
        resources: "@/assets/_globals.scss"
      }
    }
  ]
};
