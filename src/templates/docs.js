import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Toc from '../components/toc'

const Template = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  return (
    <Layout>
      <main
        id="content-wrapper"
        className="flex-1 flex-grow min-w-0 mb-6 mr-0 lg:mr-12 xl:mr-18">
        <article
          className="prose md:prose-lg xl:prose-xl"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
      <Toc headings={markdownRemark.headings} />
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      headings {
        value
        depth
      }
    }
  }
`
