const path = require("path");

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const  result   = await graphql(`
    {
      blogs: allStrapiBlogs {
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

  result.data.blogs.nodes.forEach(blog => {
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

// add polifill for markdown react
exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        assert: require.resolve('assert/'),
        path: require.resolve('path-browserify'),
      },
    }
  })
};