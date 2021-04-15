import React from "react"
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  return (
    <Layout>
      <article>
        <StaticImage 
        src="../assets/images/couch.jpeg" 
        alt="living room"
        layout="fullWidth"
         />
        <h1>World-class therapy from the comfort of your home.</h1>
      </article>
    </Layout>
  )
}

export default Home