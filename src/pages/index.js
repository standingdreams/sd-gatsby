import React from "react"
import { Link, graphql,useStaticQuery } from 'gatsby';

import Layout from "../components/layout"
import ProfileInterests from '../components/ProfileInterests';

export default function IndexPage() {
  const {allPrismicHome} = useStaticQuery(graphql`
    {
      allPrismicHome {
        nodes {
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
    }
  `)
  const {text_above_name, intro_paragraph, capabilities, current_interests_heading, current_interests, other_interests_heading,
    other_interests} = allPrismicHome.nodes[0].data
  return (
    <Layout title="Home">
      <div className="profile-wrapper">
        <div className="profile__aboutContent">
          <div className="container">
            <div className="profile__aboutWrap">
              <h1 className="el-h2">{text_above_name}</h1>
              <h2 className="el-h1">Douglas Rogers</h2>
              <div dangerouslySetInnerHTML={{__html: intro_paragraph.html}}></div>
              <Link className="btn btn3" to="/portfolio">View Portfolio</Link>
            </div>
          </div>
        </div>
        <div className="profile__capabilities">
          <div className="container">
            <h2 className="el-h3">Capabilities</h2>
            <div className="profile__grid">
              {capabilities.map((item, index) => (
                <div key={`item-${index}`} className="profile__grid-item">
                  <h3 className="el-h4">{item.capability.text}</h3>
                  <p>{item.capability_description.text}</p>
                </div>
              ))}
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
              <ProfileInterests
                heading="Current Interests"
                items={current_interests}
               />
              <ProfileInterests
                heading="Other Interests"
                items={other_interests}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

