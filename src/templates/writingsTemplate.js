import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Prism from "prismjs"

import Layout from "../components/layout"

// const shortcodes = { Link }
const components = {
  pre: props => <pre {...props} />,
  code: props => <code {...props} />,
}

const options = { year: "numeric", month: "long", day: "numeric" }

export default function Template({ data: { mdx } }) {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  return (
    <Layout title={mdx.frontmatter.title}>
      <div className="container">
        <div className="blog">
          <header className="blog__header">
            <p className="blog__date">{new Date(mdx.frontmatter.date).toLocaleDateString("en-US", options)}</p>
            <h1 className="blog__heading">{mdx.frontmatter.title}</h1>
          </header>
          <div className="blog__content">
            <MDXProvider components={components}>
              <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        path
      }
    }
  }
`
