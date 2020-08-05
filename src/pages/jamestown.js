import React from 'react'
import Layout from "../components/layout"

const Jamestown = () => {
  return (
    <Layout
      title="Jamestown"
      pageClass="jamestown"
      landing={true}
    >
      <section className="jamestown__about section-padding">
        <article className="container">
          <div className="jamestown__aboutContent">
            <h1 className="el-h2">About</h1>
            <h2 className="el-h1">Douglas Rogers</h2>
            <p>I am a frontend developer with over 11 years of industry experience building websites, HTML emails and web applications, providing strategy while building and launching high quality, engaging products. I have professional experience working with JavaScript and PHP. Other frameworks and technologies I've worked include NodeJS, React, VueJS, Gatsby, NextJS, Salesforce Storefront Reference Architecture (SFRA) and various headless CMSs.</p>
            <a href="/" className="btn btn3">View Portfolio</a>
          </div>
          <div className="jamestown__capabilities">
            <h2 className="el-h3">Capabilities</h2>
            <div className="jamestown__grid">
              <div className="jamestown__grid-item">
                <h3 className="el-h4">Frontend web development</h3>
                <p>Implementing visual elements that users see and interact within a web application</p>
              </div>
              <div className="jamestown__grid-item">
                <h3 className="el-h4">JavaScript and PHP backend development</h3>
                <p>Executing development that connects with databases using NodeJS (NextJS) and PHP (Laravel)</p>
              </div>
              <div className="jamestown__grid-item">
                <h3 className="el-h4">HTML e-mail development</h3>
                <p>Building responsive HTML emails for a variety of email clients and devices</p>
              </div>
              <div className="jamestown__grid-item">
                <h3 className="el-h4">WordPress/CMS development</h3>
                <p>Building templates, layouts and providing editable areas for CMS driven sites</p>
              </div>
              <div className="jamestown__grid-item">
                <h3 className="el-h4">Digital creative direction</h3>
                <p>Consulting design team to provide engaging experience for all digital creative work</p>
              </div>
            </div>
          </div>
          <div className="jamestown__proposal">
            <h2 className="el-h2">Proposal</h2>
            <h2 className="el-h1">HTML Email Development</h2>
            <p>Development of HTML emails includes a responsive HTML email. One key goal is to ensure that the email works in the most prominently used email clients and devices of your clients/customers. Insight into your email analytics should help identify those email clients.</p>
          </div>
          <div className="jamestown__proposal">
            <h2 className="el-h1">Rates</h2>
            <p>For all services provided, my hourly rate is <strong>$125/hour</strong>.</p>
            <p>Basic HTML emails should take 6-10 hours to develop, depending on the amount of content, complexity of the design, the email client stack of your customers/clients and functionality required.</p>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default Jamestown
