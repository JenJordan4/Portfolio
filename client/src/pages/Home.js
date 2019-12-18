import React from 'react'
import '../App.css'

const Home = () => {

  return (
    <>
      <main className="home-main">
        <h1 id="jen-jordan">Jen Jordan</h1>
        <h2>Full Stack Web Developer</h2>
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
      </main>
    </>
  )
}

export default Home