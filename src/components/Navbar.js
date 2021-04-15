import React,{useState} from 'react'
import { Link } from "gatsby"
import { FiAlignJustify } from 'react-icons/fi'
import {StaticImage} from 'gatsby-plugin-image'

const Navbar = () => {
  const [show,setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <StaticImage src="../assets/images/logo-gradient.png" alt="caya logo" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>

        <div className={show ? "nav-links show-links" : "nav-links"}
        >
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link">
            About
          </Link>
          <Link to="/services" className="nav-link" activeClassName="active-link">
            Services
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
