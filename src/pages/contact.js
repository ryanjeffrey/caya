import React from "react"
import Layout from "../components/Layout"
import ContactNew from "../components/ContactNew"
import { StaticImage } from "gatsby-plugin-image"

const Contact = () => {
  return (
    <Layout>
      <StaticImage
        src="https://rscbucket.s3.us-east-2.amazonaws.com/caya/chair.jpg"
        alt="woman in chair"
        formats={["auto", "webp", "avif"]}
      />
      <ContactNew />
    </Layout>
  )
}

export default Contact
