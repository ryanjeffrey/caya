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
        <p>It is possible to change your life at any time.</p>
        <p>Sometimes we feel like we lack the tools or the hope to see a positive change.</p>
          <p>Whether you're struggling in the midst of trauma, chronic pain, or depression- you are not alone. And you don't have to be strong all of the time.</p><p> We want to be with you in the darkness.</p><p> All you must do is come as you are.</p>
      </div>
      <button>Find Out More</button>
    </Layout>
  )
}

export default Home
