import React from 'react'
import { withRouter } from "react-router"
import resume from "../assets/Jennifer-Jordan-Resume.pdf"

const Footer = () => {

  return (
    <footer>
      <p>© Jen Jordan | Built using React.js</p>
      <p><a href={resume} id="footer-resume" target="_blank" rel="noopener noreferrer" download>Download resume</a></p>

    </footer>
    )
}

export default withRouter(Footer)