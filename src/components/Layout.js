import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Helmet} from "react-helmet"

import "normalize.css"
import "../assets/css/main.css"

const Layout = ({children}) => {
    return (
        <div className="layout-wrapper">
            <Helmet htmlAttributes={{ lang: "en" }}>
                <meta charSet="utf-8"
                description="Caya Wellness offers telehealth sessions for therapy, assessments, and coaching" />
                <title>CAYA Wellness</title>
            </Helmet>
            <div>
                <Navbar /> 
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout
