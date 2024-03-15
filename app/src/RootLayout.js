import React from 'react'
import Header from './Components/Header-Footer/Header'
import Footer from './Components/Header-Footer/Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        <Header/>
        <div style={{minHeight:"100vh",height:"fit-content"}}>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout