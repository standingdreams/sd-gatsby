const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const publishDate = node.frontmatter.date
    const isScheduledPost = !publishDate || new Date(publishDate).getTime() > Date.now()
    createNodeField({
      name: "slug",
      node,
      value: `/writings${node.frontmatter.path}`,
    })
    createNodeField({
      name: "isScheduledPost",
      node,
      value: isScheduledPost,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/writingsTemplate.js`)
  const result = await graphql(`
    query {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: { isScheduledPost: { eq: false } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
  }
  const posts = result.data.allMdx.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: { id: node.id }, // additional data can be passed via context
    })
  })
}
