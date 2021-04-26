import React from "react"
import styled from "styled-components"
import { GoThreeBars } from 'react-icons/go'
import { Link } from 'gatsby'
import logo from "../assets/images/caya-logo.svg"
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button className="toggle-btn">
            <GoThreeBars />
          </button>
        </div>
        <ul className="nav-links">ul</ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: fixed;
`

export default Navbar