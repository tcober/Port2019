module.exports = {
  siteName: "Gridsome",
  siteDescription: "A WordPress starter for Gridsome",
  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: "https://boxboxboxbox.com", // required
        typeName: "WordPress", // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10,
        routes: {
          post: "work/:id",
          blog: "blog/:id"
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
