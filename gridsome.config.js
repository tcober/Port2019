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
        concurrent: 10, // How many requests to run simultaneously (Optional)
        routes: {
          post: "/work/:id", //adds route for "post" post type (Optional)
          post_tag: "/tag/:slug" // adds route for "post_tag" post type (Optional)
        }
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
