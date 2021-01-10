/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./../scss/styles.scss"

import SEO from '../components/seo'
import Header from "./header"

const Layout = props => {
  const [navOpen, setNavOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const children = props.children
  const title = props.title

  return (
    <>
      <SEO
        title={title}
        bodyClasses={`${navOpen ? `show-nav ${props.pageClass}` : props.pageClass}`}
      />
      <section className="site-wrapper">
        <Header
          siteTitle={data.site.siteMetadata.title}
          landing={props.landing}
          hamburgerState={() => {
            setNavOpen(!navOpen)
          }}
        />
        <main className="main-wrapper">
          {children}
        </main>
      </section>
      <footer className="mastfoot">
        <article className="container">
          <nav className="social-info">
            <ul>
              <li>
                <a className="social-icon" href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/facebook.png" alt="" />
                </a>
              </li>
              <li>
                <a className="social-icon" href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/instagram.png" alt=""/>
                </a>
              </li>
              <li>
                <a className="social-icon" href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/linkedin.png" alt=""/>
                </a>
              </li>
              <li>
                <a className="social-icon" href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/twitter.png" alt=""/>
                </a>
              </li>
              <li>
                <a className="social-icon" href="http://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/youtube.png" alt=""/>
                </a>
              </li>
              <li>
                <a className="social-icon" href="http://www.github.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/github.png" alt=""/>
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer-info">
            <span>{new Date().getFullYear()} Standing Dreams, Inc. All&nbsp;Rights&nbsp;Reserved.</span>
          </div>
        </article>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Header.propTypes ={
  siteTitle: PropTypes.string,
  hamburgerState: PropTypes.func
}

export default Layout
