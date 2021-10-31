import React from "react"
import Layout from "../components/layout"

const Contact = () => (
  <Layout title="Contact" pageClass="contact">
    <section className="profile__about section-padding">
      <article className="container">
        <div className="profile__aboutContent">
          <h1 className="el-h2">Lets Talk</h1>
          <h2 className="el-h1">Contact</h2>
          <p>
            I am open to discuss any services listed on this portfolio site and beyond. Feel free to reach out for
            consultation, pitch a project or to talk sneaker releases and camera gear with me.
          </p>
        </div>
        <form className="profile__form" action="#">
          <div className="profile__formInput">
            <label htmlFor="fname">First Name</label>
            <input id="fname" name="fname" type="text" />
          </div>
          <div className="profile__formInput">
            <label htmlFor="lname">Last Name</label>
            <input id="lname" name="lname" type="text" />
          </div>
          <div className="profile__formInput">
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="text" />
          </div>
          <div className="profile__formInput">
            <label htmlFor="source">How did you find me?</label>
            <input id="source" name="source" type="text" />
          </div>
          <div className="profile__formTextarea">
            <label htmlFor="fname">Message</label>
            <textarea name="message" id="message" />
          </div>
        </form>
      </article>
    </section>
  </Layout>
)

export default Contact
