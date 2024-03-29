import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import ContactBlock from "../components/contactBlock"

export default function Colophon({ data }) {
  const { text_above_title, page_title, content } = data.allPrismicColophon.nodes[0].data
  return (
    <Layout title="Colophon">
      <div className="profile-wrapper">
        <div className="profile__aboutContent">
          <div className="container">
            <div className="profile__aboutWrap">
              <h1 className="el-h2">{text_above_title}</h1>
              <h2 className="el-h1">{page_title}</h2>
              <div dangerouslySetInnerHTML={{ __html: content.html }} />
            </div>
          </div>
        </div>
        <ContactBlock />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allPrismicColophon {
      nodes {
        data {
          text_above_title
          page_title
          content {
            html
          }
        }
      }
    }
  }
`

Colophon.propTypes = {
  data: PropTypes.object,
}
