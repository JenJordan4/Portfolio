import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from "react-router"


const Navbar = props => {
  return(
    <nav>
      <NavLink to="/">Jen Jordan</NavLink>
      <NavLink className={props.location.pathname === "/About" ? "active" : null} to="/about">About</NavLink>
      <NavLink className={props.location.pathname === "/Contact" ? "active" : null} to="/contact">Contact</NavLink>
    </nav>
  )
}

export default withRouter(Navbar)