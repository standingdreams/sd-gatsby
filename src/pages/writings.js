import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Writings = ({
  data: {
    allMdx: { edges },
  },
}) => {
  console.log(edges)
  return (
    <Layout title="Writings">
      <section className="listings-wrapper">
        <div className="container">
          <div className="listings-item__wrapper">
            {edges.map(post => {
              const { frontmatter, fields, id } = post.node
              return (
                <Link key={id} to={fields.slug} className="listings-item__name">
                  {frontmatter.title}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query writingsIndex {
    allMdx {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Writings

Writings.propTypes = {
  data: PropTypes.object,
}
