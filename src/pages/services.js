import React from "react"
import Layout from "../components/Layout"
import {Link} from 'gatsby'
import AccordionMenu from "../components/AccordionMenu"


const Services = () => {
  return (
    <Layout>
        <AccordionMenu />
      <div className="services-wrapper"></div>
      <div className="btn-wrapper">
        <Link to="/contact" className="btn">
          Contact
        </Link>
      </div>
    </Layout>
  )
}

export default Services
