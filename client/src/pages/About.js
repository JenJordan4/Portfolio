import React from 'react'
import '../App.css'
import group from "../images/final-proj-group.jpg"

const About = () => {
  return (
    <main className="about-main">
      <div className="bkg-div center-div">
        <h1>More About Me</h1>
        <img src={ group } alt="I'm on the left!" id="about-pic" />
        <p>Helping others and challenging myself have always been the core values of who I am. 
            These values have brought me everywhere from teaching customers how to use their new 
            iPhones, to insipiring the next generation to love literature, and now leaving my mark on the world as a full-stack web developer.
        </p>
          <p>I am very grateful to <a href="https://www.wyncode.co" target="_blank" rel="noopener noreferrer">Wyncode Academy</a> for giving me the opportunity and inspiration to completely change my life. I love what I do, and I can't wait to take the South Florida tech industry by storm.
          </p>
          <div>
            <h2>My tech skills include:</h2>
            <tr>
              <td>HTML</td>
              <td>CSS</td>
              <td>JavaScript</td>
              <td>Ruby</td>
              <td>Ruby on Rails</td>
            </tr>
            <tr>
              <td>React</td>
              <td>Node.js</td>
              <td>Express.js</td>
              <td>JSON</td>
              <td>SQL</td>
            </tr>
            <tr>
              <td>Object-Oriented Programming</td>
              <td>Command Line</td>
              <td>Git/GitHub</td>
              <td>Axios</td>
              <td>Agile Methodology</td>
            </tr>
            <tr>
              <td>Test-Driven Development</td>
              <td>Invision</td>
              <td>Heroku</td>
              <td>Microsoft Office</td>
              <td>Public Speaking</td>
            </tr>

          </div>
      </div>
    </main>
  )
}
    
export default About