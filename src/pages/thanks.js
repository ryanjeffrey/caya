import React from "react"
import Layout from "../components/Layout"
import { BiCheckCircle } from "react-icons/bi"

const Thanks = () => (
  <Layout>
    <div className="thank-you">
      <BiCheckCircle size="50px" />
      <h1>Thank you for getting in touch with us!</h1>
      <p>We will reply to your message within 24-48 hours.</p>
    </div>
  </Layout>
)

export default Thanks
