import React, { FC } from 'react'
import { FaAlignRight } from 'react-icons/fa'
import logo from '../assets/images/logo.svg'
import PageLinks from '../constants/links'

const Navbar: FC = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button type='button' className='toggle-btn'>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass='nav-links'></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
