import React from "react"
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage 
          src="../assets/images/couch.jpeg" 
          alt="living room"
          layout="fullWidth"
          className="hero-img"
          placeholder="blurred"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>World-class therapy from the comfort of your home.</h1>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}

export default Home