import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from "react-router"
import resume from "../assets/Jennifer-Jordan-Resume.pdf"

const Footer = () => {

  return (
    <footer>
      <div className="footer-links">
        <NavLink to="/">Home</NavLink>
        <span> | </span>
        <NavLink to="/about">About</NavLink>
        <span> | </span>
        <NavLink to="/projects">Projects</NavLink>
        <span> | </span>
        <NavLink to="/contact">Contact</NavLink>
      </div> 
      <p><a href={resume} id="footer-resume" target="_blank" rel="noopener noreferrer" download>Download resume</a></p>
      <p>Built using React.js</p>
    </footer>
    )
}

export default withRouter(Footer)