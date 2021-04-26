import React, { useState } from "react"
import styled from "styled-components"


const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #dc8665;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h4`
  font-size: 30px;
  color: #138086;
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

const Link = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

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
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

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

const Header = () => {
  const [toggle, toggleNav] = useState(false)
  return (
    <>
      <Nav className="sticky">
        <Link to ="/">
            <Logo>CAYA</Logo>
        </Link>
        <Menu>
          <Item>
            <Link to="/">
              Home
            </Link>
          </Item>
          <Item>
            <Link target="#" to="/about">
              About
            </Link>
          </Item>
          <Item>
            <Link target="#" to ="/services">
              Services
            </Link>
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
            <Link target="#" to="/">
              Home
            </Link>
          </Item>
          <Item>
            <Link target="#" to="/about">
              About
            </Link>
          </Item>
          <Item>
            <Link target="#" to="Services">
              Services
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  )
}

export default Header
