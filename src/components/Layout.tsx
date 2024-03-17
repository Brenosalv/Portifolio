import React, { ReactNode } from 'react'
import Navbar from './Navbar'

import '../assets/css/main.css'
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
