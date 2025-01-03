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
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
        {/* Start main area*/}
        {/* <div>{JSON.stringify(markdownRemark.parent)}</div> */}
        <div className="absolute inset-0 px-4 py-6 sm:px-6 lg:px-8">
          {markdownRemark.parent.gitRemote && (
            <EditButton
              webLink={markdownRemark.parent.gitRemote.webLink}
              branch={markdownRemark.parent.gitRemote.ref}
              relativePath={markdownRemark.parent.relativePath}
            />
          )}
          <article
            className="prose prose-slate prose-img:rounded-md dark:prose-invert lg:prose-lg "
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
        </div>
        {/* End main area */}
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
