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
            <h2>About CAYA</h2>
            <p></p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage 
          src="../assets/images/couch.jpeg" 
          alt="couch" 
          placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
