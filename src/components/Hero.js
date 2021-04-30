import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 100vh;

  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`

const TextBox = styled("div")`
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: flex-end;
  width: 100%;

  p,
  a {
    color: black;
    font-size: 2rem;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "couch.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground 
      style={{zIndex:'10'}}
      Tag="section" 
      fluid={image.sharp.fluid} 
      fadeIn="soft">
      <TextBox>
        <h1>World-class therapy from the comfort of your home.</h1>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
