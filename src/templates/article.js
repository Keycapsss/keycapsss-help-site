import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"

const Article = ({data}) => {
    const { html } = data.markdownRemark
    const { title, tag } = data.markdownRemark.frontmatter
    return(
      <Layout>
        <div className="w-4/5 mx-auto mt-9 article">

            <section className="py-10">
                <span className="px-2 py-1 font-semibold bg-gray-200">{tag}</span>
                <h2 className="py-4 text-xl font-semibold capitalize md:text-3xl">{title}</h2>

                <div dangerouslySetInnerHTML={{ __html: html }}></div>


                <p className="pt-8">Published in the {tag} category</p>
            </section>
        </div>
        </Layout>
    )
}

export default Article

export const query = graphql`
  query ArticleQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
            tag
      }
    }
  }
`