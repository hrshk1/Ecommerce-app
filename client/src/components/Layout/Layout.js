import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast';
const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <main style={{minHeight:'80vh'}}>
          <Toaster />
        {children}
        {/* here first layout will run then props.children that contains <h1> Ecommerce App </h1> will run */}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout