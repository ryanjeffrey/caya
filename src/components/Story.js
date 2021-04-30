import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {Link} from 'gatsby'

const Story = () => {
  return (
    <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        className="story-img"
        style={{
          gridArea: "1/1",
        }}
        layout="fullWidth"
        // This is a presentational image, so the alt should be an empty string
        alt=""
        src={"../assets/images/wave.jpg"}
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
      />
      <div
        className="story-text"
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <p>It is possible to change your life at any time.</p>
        <p>
          Sometimes we feel like we lack the tools or the hope to see a positive
          change.
        </p>
        <p>
          Whether you're struggling in the midst of trauma, chronic pain, or
          depression- you are not alone. And you don't have to be strong all of
          the time.
        </p>
        <p> We want to be with you in the darkness.</p>
        <p>
          All we ask is that you <em>come as you are.</em>
        </p>
        <Link to="/services" className="btn">
          Learn More &gt;
        </Link>
      </div>
    </div>
  )
}

export default Story
