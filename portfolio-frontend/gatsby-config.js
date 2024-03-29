const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://blog.maksim-semenov.ru",
    title: "Maksim Semenov",
    author: "Maksim Semenov",
    description: "Frontend developer personal blog",
    keywords: "Разработка приложений, персональный сайт",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        root: path.join(__dirname, "src"),
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    /*  {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/about/", "/projects/!*", "/blog/!*", "/contact/"],
      },
    },*/
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        collectionTypes: [
          "jobs",
          "projects",
          "projects-categories",
          "blogs",
          "blogs-categories",
          "services",
        ],
        singleTypes: ["about", "portfolio", "blog-page", "contact", "global"],
        queryLimit: 20,
      },
      __key: "pages",
    }
  ],
};
