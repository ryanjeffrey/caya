import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Story from "../components/Story"
import Mid from "../components/Mid"


const Home = () => {
  return (
    <Layout>
      <Hero />
      <Mid />
      <Story />
    </Layout>
  )
}

export default Home
