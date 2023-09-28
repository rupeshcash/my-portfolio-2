import NavLinks from './NavLinks';
import './index.css'

import React from 'react'

export default function Navbar() {
  return (
    <div className='nav-bar'>
        <div className='nav-logo'>Rupesh Kashyap</div>
        <NavLinks/>
    </div>
  )
}
