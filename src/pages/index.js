import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Story from "../components/Story"


const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className="description">
        <h4>CAYA</h4>
        <h5>come as you are</h5>
      </div>
      <Story />
    </Layout>
  )
}

export default Home
