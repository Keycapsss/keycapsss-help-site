import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import PostLink from '../components/post-link'
import Iframe from '../components/iframe'
import Comments from '../components/comments'

const IndexPage = ({
  data: {
    allSitePage: { edges },
  },
}) => {
  const Pages = edges.map(edge => (
    <PostLink key={edge.node.id} page={edge.node} />
  ))

  return (
    <Layout>
      <Seo title="Build-Guides, FAQ, Product Restock" />
      <main className="w-full prose max-w-none md:prose-lg xl:prose-xl">
        <Iframe
          src="https://trello.com/b/99fbRrEe.html"
          width="100%"
          height="600px"
        />
        <Comments id="home" />
        {/* {Pages} */}
      </main>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allSitePage {
      edges {
        node {
          id
          path
        }
      }
    }
  }
`
