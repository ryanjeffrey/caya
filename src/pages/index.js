import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { StaticImage } from "gatsby-plugin-image"


const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className="description">
        <h4>CAYA</h4>
        <h5>come as you are</h5>
        <br/>
        <p>You don't have to be strong all of the time.</p>
      </div>
      <div className="wrapper">
        <StaticImage
        src="../assets/images/painting.jpeg"
        alt="painting of black woman"
        placeholder="blurred"
        />
      </div>
    </Layout>
  )
}

export default Home
