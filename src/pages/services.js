import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const Services = () => {
  return (
    <Layout>
      <h1>Services</h1>
      <StaticImage
        src="../assets/images/painting.jpeg"
        alt="painting of black woman"
        placeholder="blurred"
      />
    </Layout>
  )
}

export default Services
