import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout title="Home">
    <div className="profile-wrapper">
      <div className="profile__aboutContent">
        <div className="container">
          <div className="profile__aboutWrap">
            <h1 className="el-h2">About</h1>
            <h2 className="el-h1">Douglas Rogers</h2>
            <p>I am a frontend developer with over 11 years of industry experience building websites, HTML emails and web applications, providing strategy while building and launching high quality, engaging products. I have professional experience working with JavaScript and PHP. Other frameworks and technologies I've worked include NodeJS, React, VueJS, Gatsby, NextJS, Salesforce Storefront Reference Architecture (SFRA) and various headless CMSs.</p>
            <a href="/" className="btn btn3">View Portfolio</a>
          </div>
        </div>
      </div>
      <div className="profile__capabilities">
        <div className="container">
          <h2 className="el-h3">Capabilities</h2>
          <div className="profile__grid">
            <div className="profile__grid-item">
              <h3 className="el-h4">Frontend web development</h3>
              <p>Implementing visual elements that users see and interact within a web application</p>
            </div>
            <div className="profile__grid-item">
              <h3 className="el-h4">JavaScript and PHP backend development</h3>
              <p>Executing development that connects with databases using NodeJS (NextJS) and PHP (Laravel)</p>
            </div>
            <div className="profile__grid-item">
              <h3 className="el-h4">Marketing technology</h3>
              <p>Connecting multiple marketing platforms and tools to help generate and nurture leads</p>
            </div>
            <div className="profile__grid-item">
              <h3 className="el-h4">WordPress/CMS development</h3>
              <p>Building templates, layouts and providing editable areas for CMS driven sites</p>
            </div>
            <div className="profile__grid-item">
              <h3 className="el-h4">Digital creative direction</h3>
              <p>Consulting design team to provide engaging experience for all digital creative work</p>
            </div>
          </div>
        </div>
      </div>
      <section className="profile__contact">
        <div className="container">
          <h2 className="el-h5">Interested in doing business?</h2>
          <button className="el-btn--solid-white">Contact Me</button>
          <a className="link" href="/">Or just talk to me.</a>
        </div>
      </section>
      <div className="profile__block profile__block--last">
        <div className="container">
          <div className="profile__grid">
            <div className="profile__grid-item">
              <h3 className="el-h4">Current Interests</h3>
              <ul className="profile-item__list">
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Filmmaking</li>
                <li>Writing</li>
                <li>Public Speaking</li>
              </ul>
            </div>
            <div className="profile__grid-item">
              <h3 className="el-h4">Other Interests</h3>
              <ul className="profile-item__list">
                <li>Father/Husband</li>
                <li>Sneakerhead</li>
                <li>Car enthusiast</li>
                <li>Techie</li>
                <li>Cereal connoisseur</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
