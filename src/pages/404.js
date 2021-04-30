import React from 'react'
import Layout from '../components/Layout'
import {Link} from 'gatsby'

const Error = () => {
    return (
      <Layout>
        <h1>Hmm, that doesn't exist.</h1>
        <h2>No Worries.</h2>
        <Link to="/" className="btn">
          Home &gt;
        </Link>
      </Layout>
    )
}

export default Error
