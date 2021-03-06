import React from "react"
import {Link} from 'react-router-dom'
import "../App.css"
import resume from "../assets/Jennifer-Jordan-Resume.pdf"
import selfie from "../images/selfie.jpg"
import museum from "../images/museum-of-candy.png"
import wynstore from "../images/wynstore.png"
import videojueGO from "../images/videojuego.png"
import chatroom from "../images/lonliest-chatroom.png"

const Home = () => {

  return (
    <>
      <main className="home-main">
        <div className="home-about bkg-div right-div">
          <img id="profile-pic" src={ selfie } alt="This is me!"/>
          <div className="profile-info">          
            <h2>I'm a full-stack web developer and graduate of Wyncode Academy.</h2>
            <a href={resume} target="_blank" rel="noopener noreferrer" download>
              <button className="resume-button">Download Resume</button><br />
            </a>
            <p><Link to="/about">More about me.</Link></p>
          </div>
        </div>
        <div className="home-projects bkg-div left-div">
          <h2>Recent Projects:</h2>
          <div className="project-thumbnails">
            <a href="https://github.com/JenJordan4/Wynstore">
              <img src={ wynstore } className="project-thumbnail" alt="Wyncode final project"/>
            </a>
            <a href="https://github.com/JenJordan4/videojueGO">
              <img src={ videojueGO } className="project-thumbnail" alt="Wyncode midterm project"/>
            </a> 
            <a href="https://github.com/JenJordan4/Chatroom">
              <img src={ chatroom } className="project-thumbnail" alt="Wyncode weekend project"/>
            </a>
            <a href="https://github.com/JenJordan4/MuseumOfCandy">
              <img src={ museum } className="project-thumbnail" alt="My portfolio site"/>
            </a>
          </div>
          <p>
            <Link to="/projects">More of my projects list.</Link>
          </p>
        </div>
        <div className="home-contact bkg-div right-div">
          <h2>Let's keep in touch!</h2>
          <div className="social-icons">
            <a href="mailto:jenmjordan4@gmail.com">
              <i class="fas fa-envelope-open-text"></i>
            </a>
            <a href="https://www.linkedin.com/in/jenmjordan4/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/JenJordan4" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/Jen_Jordan4" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </main>

    </>
  )
}

export default Home