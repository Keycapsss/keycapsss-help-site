import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Toc from '../components/toc'
import EditButton from '../components/buttonEdit'
import Comments from '../components/comments'

const Docs = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark

  const getTitle = function getTitle() {
    if (markdownRemark.parent.gitRemote) {
      return `${markdownRemark.parent.gitRemote.sourceInstanceName.toUpperCase()} Build-Guide`
    } else {
      return markdownRemark.fields.title
    }
  }

  return (
    <Layout>
      <Seo
        title={getTitle()}
        description={markdownRemark.excerpt}
        pathname={markdownRemark.fields.slug}
      />
      <main
        id="content-wrapper"
        className="flex-1 flex-grow min-w-0 mb-6 mr-0 lg:mr-12 xl:mr-18">
        {/* <div>{JSON.stringify(markdownRemark.parent)}</div> */}
        <article
          className="prose lg:prose-lg xl:prose-xl"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {markdownRemark.parent.gitRemote && (
          <EditButton
            webLink={markdownRemark.parent.gitRemote.webLink}
            branch={markdownRemark.parent.gitRemote.ref}
            relativePath={markdownRemark.parent.relativePath}
          />
        )}
        <Comments commentsId={markdownRemark.fields.slug} />
      </main>
      <Toc headings={markdownRemark.headings} />
    </Layout>
  )
}

Docs.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
        title
      }
      excerpt
      headings {
        id
        depth
        value
      }
      parent {
        ... on File {
          relativePath
          gitRemote {
            sourceInstanceName
            ref
            webLink
          }
        }
      }
    }
  }
`

export default Docs
