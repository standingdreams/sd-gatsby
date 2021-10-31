import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../scss/styles.scss"

import SEO from "./seo"
import Header from "./header"

const Layout = ({ title, children, pageClass, landing }) => {
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

  useEffect(() => {
    window.onload = () => {
      document.body.classList.remove("preload")
    }
  }, [])

  return (
    <>
      <SEO title={title} bodyClasses={`preload ${navOpen ? `show-nav ${pageClass}` : pageClass}`} />
      <section className="site-wrapper">
        <Header
          siteTitle={data.site.siteMetadata.title}
          landing={landing}
          hamburgerState={() => {
            setNavOpen(!navOpen)
          }}
        />
        <main className="main-wrapper">{children}</main>
      </section>
      <footer className="mastfoot">
        <article className="container">
          <nav className="social-info">
            <ul>
              <li>
                <a
                  className="social-icon"
                  href="https://www.github.com/standingdreams"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/github.png" alt="logo of Github" />
                </a>
              </li>
              <li>
                <a
                  className="social-icon"
                  href="https://www.instagram.com/alwaysbeenwise"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/instagram.png" alt="logo of Instagram" />
                </a>
              </li>
              <li>
                <a
                  className="social-icon"
                  href="https://www.linkedin.com/in/standingdreams/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/linkedin.png" alt="logo of LinkedIn" />
                </a>
              </li>
              <li>
                <a
                  className="social-icon"
                  href="https://www.twitter.com/codeOvrCoffee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/twitter.png" alt="logo of Twitter" />
                </a>
              </li>
              <li>
                <a
                  className="social-icon"
                  href="https://www.youtube.com/channel/UCfK2oy4Yqq0A4YbTZGiz-3g"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/youtube.png" alt="logo of YouTube" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer-info">
            <span>
              {new Date().getFullYear()} Standing Dreams, Inc. All&nbsp;Rights&nbsp;Reserved. |{" "}
              <Link to="/colophon">Colophon</Link>
            </span>
          </div>
        </article>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  pageClass: PropTypes.string,
  landing: PropTypes.string,
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  hamburgerState: PropTypes.func,
}

export default Layout
