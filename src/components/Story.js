import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  background-position: bottom 20% center;
  background-size: cover;
  height: 100%;

  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`

const TextBox = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p {
    color: #eeb462;
    font-size: 2rem;
    line-height: 1.6;
  }
`

const Story = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "wave.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <div className="description">
          <p>It is possible to change your life at any time.</p>
          <br />
          <br />
          <p>
            Sometimes we feel like we lack the tools or the hope to see a
            positive change.
          </p>
          <br />
          <br />
          <p>
            Whether you're struggling in the midst of trauma, chronic pain, or
            depression- you are not alone. And you don't have to be strong all
            of the time.
          </p>
          <br />
          <br />
          <p> We want to be with you in the darkness.</p>
          <br />
          <br />
          <p>
            {" "}
            All we ask is that you <em>come as you are.</em>
          </p>
          <Link to="/services" className="btn">
            Find Out More &gt;
          </Link>
        </div>
      </TextBox>
    </ImageBackground>
  )
}

export default Story
