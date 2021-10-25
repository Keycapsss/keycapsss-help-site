import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostLink from '../components/post-link'

const TestPage = ({
  data: {
    allSitePage: { edges },
  },
}) => {
  const Pages = edges.map(edge => (
    <PostLink key={edge.node.id} page={edge.node} />
  ))

  return (
    <Layout>
      <div className="prose md:prose-lg xl:prose-xl">Foobar Test</div>
    </Layout>
  )
}

export default TestPage

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
