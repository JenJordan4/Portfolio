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
      <a href="https://github.com/JenJordan4" target="_blank" rel="noopener noreferrer">Github</a>
      <a href="https://www.linkedin.com/in/jenmjordan4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="#" target="_blank" rel="noopener noreferrer">Resume</a>
      <img id="profile-pic" src={ selfie } alt="This is me!"/>
      <p>Helping others and challenging myself has always been the core values of who I am. 
          These values has brought me everywhere from teaching customers how to use their new 
          iPhones, insipiring the next generation to love literature, and now as a full-stack web developer.
      </p>
        <p>
          I am a full-stack web development grad from 
          <a href="https://www.wyncode.co" target="_blank" rel="noopener noreferrer">
           Wyncode Academy
          </a>!
        </p>
        <div>
          <p>Some of my favorite programming languages are:</p>
          <ul className="language-list">
              <li>
                  <h3>CSS</h3>
                  <img src={ css } alt="Cascading Style Sheets" className="language-img"/>
              </li>
              <li>
                  <h3>JavaScript</h3>
                  <img src={ js } alt="JavaScript" className="language-img"/>
              </li>
              <li>
                  <h3>Ruby</h3>
                  <img src={ ruby } alt="Ruby" className="language-img"/>
              </li>
          </ul>
        </div>
    </main>
  )
}
    
export default About