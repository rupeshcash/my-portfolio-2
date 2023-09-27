import NavLinks from './NavLinks';
import './index.css'

import React from 'react'

export default function Navbar() {

  const handleClickScroll = (elem) => {
    const element = document.getElementById(elem);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='nav-bar'>
        <div className='nav-logo'>Rupesh Kashyap</div>
        <NavLinks/>
    </div>
  )
}
