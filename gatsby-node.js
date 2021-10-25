const path = require('path')
const mainTemplate = path.resolve('src/templates/docs.js')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const parentNode = getNode(node.parent)
    let slug, date, title
    // handle markdown files from gatsby-source-git
    // create fields.slug from git data, because there are no frontmatter data
    if (parentNode.gitRemote___NODE) {
      if (parentNode.relativeDirectory == '') {
        slug = `${parentNode.sourceInstanceName}/${parentNode.name}`
      } else {
        slug = `${parentNode.sourceInstanceName}/${parentNode.relativeDirectory}/${parentNode.name}`
      }

      date = '-'
      title = parentNode.name
    }
    // handle markdown files from gatsby-source-filesystem
    // create fields.slug from frontmatter, to unify metadata like slug
    else if (node.frontmatter) {
      if (node.frontmatter.slug) {
        slug = node.frontmatter.slug
      }
      if (node.frontmatter.date) {
        date = node.frontmatter.date
      }
      if (node.frontmatter.title) {
        title = node.frontmatter.title
      }
    }
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
    createNodeField({
      node,
      name: 'date',
      value: date,
    })
    createNodeField({
      node,
      name: 'title',
      value: title,
    })
  }
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const queryResults = await graphql(`
    query {
      allMarkdownRemark(filter: { fields: { slug: { ne: null } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (queryResults.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  // Create pages for each markdown file.
  queryResults.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.fields.slug
    createPage({
      path,
      component: mainTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: path,
        pagePath: path,
      },
    })
  })
}
