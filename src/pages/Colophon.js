import React from 'react'
import Layout from "../components/layout"

export default function Colophon() {
  return (
    <Layout title="Colophon">
      <div className="profile-wrapper">
        <div className="profile__aboutContent">
          <div className="container">
            <div className="profile__aboutWrap">
              <h1 className="el-h2">About</h1>
              <h2 className="el-h1">Douglas Rogers</h2>
              <p>This site is forever under constructions. Designed in Sketch. Version controlled with GitKraken and GitHub. Built with VS Code. Powered by Prismic and Gatsby.</p>
              <p>Body copy is Sofia Pro. Images are distributed by Cloudinary. This colophon was stolen from <a href="https://sambrown.me/colophon" target="_blank" rel="noopener noreferrer">Sam Brown</a>.</p>
            </div>
          </div>
        </div>
        <section className="profile__contact">
          <div className="container">
            <h2 className="el-h5">Interested in doing business? Reach at one of the following:</h2>
            <nav className="profile__social">
              <ul>
                <li><a href="https://www.github.com/standingdreams" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="https://www.instagram.com/alwaysbeenwise" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/standingdreams/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://www.twitter.com/codeOvrCoffee" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </Layout>
  )
}