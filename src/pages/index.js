import React from "react"

import Layout from "../components/layout"
import { Link, graphql } from 'gatsby';

export default function IndexPage() {
  return (
    <Layout title="Home">
      <div className="profile-wrapper">
        <div className="profile__aboutContent">
          <div className="container">
            <div className="profile__aboutWrap">
              <h1 className="el-h2">About</h1>
              <h2 className="el-h1">Douglas Rogers</h2>
              <p>I am a frontend developer with over 11 years of industry experience building websites, HTML emails and web applications, providing strategy while building and launching high quality, engaging products. I have professional experience working with JavaScript and PHP. Other frameworks and technologies I've worked include NodeJS, React, VueJS, Gatsby, NextJS, Salesforce Storefront Reference Architecture (SFRA) and various headless CMSs.</p>
              <Link className="btn btn3" to="/portfolio">View Portfolio</Link>
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
                <h3 className="el-h4">JavaScript &amp; PHP development</h3>
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
        <div className="profile__block profile__block--last">
          <div className="container">
            <div className="profile__grid">
              <div className="profile__grid-item">
                <h3 className="el-h4">Current Interests</h3>
                <ul className="profile-item__list">
                  <li>Data Structures and Algorithms</li>
                  <li>Filmmaking</li>
                  <li>Blockchain Technology</li>
                  <li>Writing</li>
                  <li>Investing</li>
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
}

export const query = graphql`
  query HomeDetails {
    prismicHome {
        data {
          text_above_name
          intro_paragraph {
            html
          }
          capabilities {
            capability {
              text
            }
            capability_description {
              text
            }
          }
          current_interests_heading {
            text
          }
          current_interests {
            interest
          }
          other_interests_heading {
            text
          }
          other_interests {
            interest
          }
        }
      }
    }
`;

