

This app contains many Gatsby configuration files.

## 🚀 Quick start

0.  **Clone repo**

1.  **npm i**

2.  **add strapi server**, 
   
   2.1 first of all clone this repo [strapi](https://strapi.io/starters) and run strapi server with "npm run develop" .
   2.2 change connect in this project's file "gatsby-config.js"
   
   .
   {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`, `blogs`], - add your content-types in strapi admin panel
        singleTypes: [`about`],
      },
    },
   .
   2.3 you need to have account in strapi or to create it in [official page strapi](https://strapi.io/)
3.  **npm run develop** strapi server first and in another terminal at the same time run your gatsby **npm run develop**

   
