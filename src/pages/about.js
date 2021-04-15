import React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h1>About</h1>
            <p></p>
            
          </article>
          <StaticImage 
          src="../assets/images/painting.jpeg" 
          alt="couch" 
          placeholder="blurred"
          />
          <Link to="/contact" className="btn">
              Contact
          </Link>
        </section>
      </main>
    </Layout>
  )
}

export default About
