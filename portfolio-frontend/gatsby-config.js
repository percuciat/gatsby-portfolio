module.exports = {
  siteMetadata: {
    siteUrl: "https://blog.maksim-semenov.ru",
    title: "Maksim Semenov",
    author: "Maksim Semenov",
    description: "Frontend developer personal blog",
    keywords: "Разработка приложений, персональный сайт",
  },
  plugins: [
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
          /* {
            name: `jobs`,
            endpoint: "api/jobs",
          },
          {
            name: `projects`,
            endpoint: "api/projects",
          },
          {
            name: `projects-categories`,
            endpoint: "api/projects-categories",
          },
          {
            name: `blogs`,
            endpoint: "api/blogs",
          },
          {
            name: `blogs-categories`,
            endpoint: "api/blogs-categories",
          },
          {
            name: `services`,
            endpoint: "api/services",
          }, */
          "jobs",
          "projects",
          "projects-categories",
          "blogs",
          "blogs-categories",
          "services",
        ],
        singleTypes: [
          "about",
          "portfolio",
          "blog-page", 
          "contact",
          "global",
        ],
        queryLimit: 1000,
      },
      __key: "pages",
    },
    /* {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "STRAPI",
        // Field for remote schema. You'll use this in your Gatsby query
        fieldName: "strapi",
        url: `${process.env.GATSBY_STRAPI_GRAPHQL_ENDPOINT}/graphql`,
      },
    },*/
  ],
};
