import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        className="hero-img"
        style={{
          gridArea: "1/1",
        }}
        layout="fullWidth"
        // This is a presentational image, so the alt should be an empty string
        alt=""
        src={"https://rscbucket.s3.us-east-2.amazonaws.com/caya/couch.jpeg"}
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
          paddingBottom: "128px",
        }}
      >
        {/* Any content here will be centered in the component */}
        <h1>World-class therapy from the comfort of your home.</h1>
      </div>
    </div>
  )
}

export default Hero
