import React from 'react'

export default function ContactBlock() {
  return (
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
  )
}