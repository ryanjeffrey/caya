import React from 'react'
import { Link } from "gatsby"

const Navbar = () => {
    return (
      <nav>
        <ul id="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Navbar
