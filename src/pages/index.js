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
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
        {/* Start main area*/}
        <div className="absolute inset-0 px-4 py-6 sm:px-6 lg:px-8">
          <Iframe
            src="https://trello.com/b/99fbRrEe.html"
            width="100%"
            height="600px"
          />
          <br/>
          <Comments commentsId="home" />
          {/* {Pages} */}
        </div>
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
