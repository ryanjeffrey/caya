import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #eeb462;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h4`
  font-size: 26px;
  color: #138086;
  display: flex;
  margin: 0;
  padding: 0;
  text-decoration: none;
`

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Item = styled.li``

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 2px;
  margin: 5px;
  background-color: black;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`

const Overlay = styled.div`
  position: relative;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: linear-gradient(#eeb462, #dc8665);
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`

const OverlayMenu = styled.ul`
  list-style: none;
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  line-height: .1;

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.3s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`

const NavItem = styled(Link)`
  text-decoration: none;
  color: black;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-family: "Philosopher", sans-serif;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #138086;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #534666;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const Navbar = () => {
  const [toggle, toggleNav] = useState(false)
  return (
    <>
      <Nav>
        <Link to="/">
          <Logo>CAYA</Logo>
        </Link>
        <Menu>
          <Item>
            <NavItem target="#" to="/about">
              About
            </NavItem>
          </Item>
          <Item>
            <NavItem target="#" to="/services">
              Services
            </NavItem>
          </Item>
          <Item>
            <NavItem target="#" to="/contact">
              Contact
            </NavItem>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <NavItem target="#" to="/">
              Home
            </NavItem>
          </Item>
          <Item>
            <NavItem target="#" to="/about">
              About
            </NavItem>
          </Item>
          <Item>
            <NavItem target="#" to="/services">
              Services
            </NavItem>
          </Item>
          <Item>
            <NavItem target="#" to="/contact">
              Contact
            </NavItem>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  )
}

export default Navbar
