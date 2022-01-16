import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'

const Header = props => {
  return (
    <>
      <header className="masthead">
        <article className="container">
          {props.landing
            ?
              <div className="header-info">
                <a href="/" className="site-logo">Standing Dreams</a>
              </div>
            :
              <>
                <div className="header-info">
                  <a href="/" className="site-logo">
                    Standing Dreams
                  </a>
                  <span className="author-name">Douglas Rogers</span>
                </div>
                <nav className="main-nav">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/film">Film Lab</Link>
                    </li>
                    <li>
                      <Link to="/writings">
                        Writings
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div
                  id="burger"
                  role="button"
                  tabIndex="0"
                  onClick={() => {
                    props.hamburgerState()
                  }}
                  onKeyDown={event => {
                    if (event.keyCode === 32) {
                      props.hamburgerState()
                    }
                  }}
                >
                  <div className="bars">
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                    <div className="bar bar3"></div>
                  </div>
                </div>
              </>
          }
        </article>
      </header>
      {props.landing !== true &&
        <nav className="mobile-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/writings">
                Writings
              </Link>
            </li>
          </ul>
          <ul className="mobile-social">
            <li>
              <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="http://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="http://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="http://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="http://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="http://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      }
    </>
  )
}

Header.propTypes = {
  landing: PropTypes.bool,
}

Header.defaultProps = {
  landing: false,
}

export default Header
