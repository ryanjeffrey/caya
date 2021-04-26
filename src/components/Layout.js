import React from 'react'
import Header from './Header'
import Footer from './Footer'

import "normalize.css"
import "../assets/css/main.css"

const Layout = ({children}) => {
    return (
        <div>
            <Header /> 
            {children}
            <Footer />
        </div>
    )
}

export default Layout
