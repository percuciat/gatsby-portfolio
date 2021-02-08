const path = require("path");

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const  result   = await graphql(`
    {
      blog: allStrapiBlogs {
        nodes {
          slug
        }
      }

      projects: allStrapiProjects {
        nodes {
           slug
        }
      }
    }
  `);

  result.data.blog.nodes.forEach(blog => {
    createPage({
      path: `/blog/${blog.slug}`,
      component: path.resolve(`src/templates/blogs-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  });
  result.data.projects.nodes.forEach(project => {
    createPage({
      path: `/projects/${project.slug}`,
      component: path.resolve(`src/templates/projects-template.js`),
      context: {
        slug: project.slug,
      },
    })
  });

};
