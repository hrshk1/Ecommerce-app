import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <main style={{minHeight:'80vh'}}>
        {children}
        {/* here first layout will run then props.children that contains <h1> Ecommerce App </h1> will run */}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout