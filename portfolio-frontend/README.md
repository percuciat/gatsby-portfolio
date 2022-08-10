## 🚀 Quick start

1.  **Launch backend**

    Use the Strapi for loading admin panel, then sign up and login. Add roles and permisions for your account:

    ![Strapi Admin panel](./src/images/readme.jpg?raw=true "Title")

    Also, you can check your working API from Admin panel. For this actions, you should add correct `collection` with name - `About` for example.
    
    ![Strapi Admin panel](./src/images/readme2.jpg?raw=true "Title")

     Then try to load your data, URL will be like this: `http://localhost:1337/about`

    ```shell
    # cd portfolio-backend
    npm run develop
    ```

2.  **Launch frontend**

    Before starting - correctly fill config in `gatsby-config.js`.
    You should write your data from Strapi admin into `gatsby-source-strapi`.

    ```shell
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
      }
    ```
    `collectionTypes` - type of multi (posts) Data.
    `singleTypes` - type of single (single post) Data.

    ```shell
    npm run develop
    ```

    **Gatsby Documentation**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
