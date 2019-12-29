import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout title="Home">
    <div className="profile-wrapper">
      <div className="container">
        <div className="profile-item">
          <h1>I am a</h1>
          <ul className="profile-item__list">
            <li>Full Stack Developer</li>
            <li>Marketing Technologist</li>
            <li>Filmmaker</li>
            <li>Writer</li>
            <li>Motivator</li>
          </ul>
        </div>
        <div className="profile-item">
          <h1>I am also a</h1>
          <ul className="profile-item__list">
            <li>Father/Husband</li>
            <li>Sneakerhead</li>
            <li>Techie</li>
            <li>Cereal connoisseur</li>
            <li>Ex-aspiring rapper</li>
            <li>Car enthusiast</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
