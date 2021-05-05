import React from "react"
import Layout from "../components/Layout"
import {Link} from 'gatsby'
import AccordionMenu from "../components/AccordionMenu"


const Services = () => {
  return (
    <Layout>
      <AccordionMenu />
      <div className="services-wrapper">
        <div className="btn-wrapper">
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </div>
        <span>
          <p>
            <strong>Regarding Insurance: </strong>We are an out-of-network provider and
            currently do not accept insurance. However, some insurance plans
            offer out-of-network coverage, which may provide reimbursement for
            mental health services. If your insurance provider allows for
            out-of-network coverage, documentation and statements will be
            provided for submission to your insurance company, upon request.
          </p>
        </span>
      </div>
    </Layout>
  )
}

export default Services
