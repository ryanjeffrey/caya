import React from 'react'
import Layout from '../components/Layout'
import {Link} from 'gatsby'

const Error = () => {
    return (
        <Layout>
            <h1>Hmm, that doesn't exist.</h1>
            <p>No Worries.</p>
            <Link to="/">Go Home</Link>
        </Layout>
    )
}

export default Error
