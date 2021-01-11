import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Prism from "prismjs"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  return (
    <Layout title={frontmatter.title}>
      <div className="container">
        <div className="blog">
          <header className="blog__header">
            <p className="blog__date">{frontmatter.date}</p>
            <h1 className="blog__heading">{frontmatter.title}</h1>
          </header>
          <div
            className="blog__content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`