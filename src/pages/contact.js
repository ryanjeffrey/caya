import React from "react"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
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
      <ContactForm />
    </Layout>
  )
}

export default Contact
