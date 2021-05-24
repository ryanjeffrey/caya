import React from "react"
import Layout from "../components/Layout"
import ContactNew from "../components/ContactNew"
import { StaticImage } from "gatsby-plugin-image"

const Contact = () => {
  return (
    <Layout>
      <StaticImage
        src="../assets/images/calm.jpg"
        alt=""
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
      />
      <ContactNew />
    </Layout>
  )
}

export default Contact
