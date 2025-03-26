import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Layout() {
  return (
    <>
      <ToastContainer />
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
