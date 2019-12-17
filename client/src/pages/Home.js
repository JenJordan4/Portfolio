import React from 'react'
import { Link } from 'react-router-dom'
import selfie from "../images/selfie.jpg"
import '../App.css'

const Home = () => {

  return (
    <>
      <main className="home-main">
        <h1>Hello, World!</h1>
        <h2>I'm Jen Jordan.</h2>
        <img id="profile-pic" src={ selfie } alt="This is me!"/>
        <p>
          I am a full-stack web development grad from 
          <a href="https://www.wyncode.co" target="_blank">
           Wyncode Academy
          </a>!
        </p>
        <div>
          <p>Some of my favorite programming languages are</p>
          <ul id="language-list">
              <li>
                  <h3>CSS</h3>
                  <img src="css.svg" alt="Cascading Style Sheets" id="css"/>
              </li>
              <li>
                  <h3>JavaScript</h3>
                  <img src="js.png" alt="JavaScript" />
              </li>
              <li>
                  <h3>Ruby</h3>
                  <img src="ruby.png" alt="Ruby" />
              </li>
          </ul>
        </div>
        <div>
            <h2></h2>
        </div>
      </main>
    </>
  )
}

export default Home