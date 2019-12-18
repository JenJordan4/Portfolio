import React from 'react'
import '../App.css'
import selfie from "../images/selfie.jpg"
import css from "../images/css.svg"
import js from "../images/js.png"
import ruby from "../images/ruby.png"

const About = () => {
  return (
    <main className="about-main">
      <h1>Hi, I'm Jen Jordan</h1>
      <img id="profile-pic" src={ selfie } alt="This is me!"/>
      <p>Helping others and challenging myself has always been the core values of who I am. 
          These values has brought me everywhere from teaching customers how to use their new 
          iPhones, to insipiring the next generation to love literature, and now leaving my mark on the world as a full-stack web developer.
      </p>
        <p>I am very grateful to <a href="https://www.wyncode.co" target="_blank" rel="noopener noreferrer">Wyncode Academy</a> for giving me the opportunity and inspiration to completely change my life. I love what I do, and I can't wait to take the South Florida tech industry by storm.
        </p>
        <div>
          <p>My favorite programming languages include:</p>
          <ul className="language-list">
              <li>
                  <h3>CSS</h3>
                  <img src={ css } alt="Cascading Style Sheets" className="language-logo" id="css-logo"/>
              </li>
              <li>
                  <h3>JavaScript</h3>
                  <img src={ js } alt="JavaScript" className="language-logo"/>
              </li>
              <li>
                  <h3>Ruby</h3>
                  <img src={ ruby } alt="Ruby" className="language-logo"/>
              </li>
          </ul>
        </div>
    </main>
  )
}
    
export default About