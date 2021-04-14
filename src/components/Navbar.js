import React from 'react'
import { Link } from "gatsby"
import { FaAlignJustify } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">Home</Link>
          <button className="nav-btn">
            <FaAlignJustify />
          </button>
        </div>

        <div className="nav-links show-links">
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
