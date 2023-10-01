import HamburgerNav from './HamburgerNav';
import NavLinks from './NavLinks';
import './index.css'
import MediaQuery from 'react-responsive'

import React from 'react'

export default function Navbar() {
  return (
    <div className='nav-bar'>
        <div className='nav-logo'>Rupesh Kashyap</div>
        <MediaQuery maxWidth={1224}>
          <HamburgerNav/>
        </MediaQuery>
        <MediaQuery minWidth={1224}>
            <NavLinks/>
        </MediaQuery>
    </div>
  )
}
