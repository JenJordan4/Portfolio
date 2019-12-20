import React from 'react'
import '../App.css'
import selfie from "../images/selfie.jpg"

const Home = () => {

  return (
    <>
      <main className="home-main">
        <div className="home-about bkg-div right-div">
          <h1>Hi, I'm Jen Jordan!</h1>
          <img id="profile-pic" src={ selfie } alt="This is me!"/>
          <p>I'm a full-stack web developer and recent graduate of Wyncode Academy.</p>
        </div>
        <div className="home-projects bkg-div left-div">
          <h2>Here are some of my projects:</h2>
        </div>
        <div className="home-contact bkg-div right-div">
          <h2>Let's keep in touch!</h2>
          <div className="social-icons">
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
 {/*       
        <h1 id="jen-jordan">Jen Jordan</h1>
        <h2>Full Stack Web Developer</h2>
        </div> */}
    </>
  )
}

export default Home