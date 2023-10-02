import HamburgerNav from './HamburgerNav';
import NavLinks from './NavLinks';
import './index.css'
import MediaQuery from 'react-responsive'
import {CiDark} from 'react-icons/ci'
import { useTheme  } from '../ThemeContext/ThemeContext';
import React from 'react'

export default function Navbar() {
  const { toggleTheme } = useTheme();
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'nav-bar dark-theme' : 'nav-bar'}>
        <div className='nav-logo'>Rupesh Kashyap</div>
        <div className='nav-right'>
          <MediaQuery maxWidth={1224}>
            <CiDark className='icon nav-right-icon' size='32px' onClick={toggleTheme}/>
            <HamburgerNav/>
          </MediaQuery>
          <MediaQuery minWidth={1224}>
              <NavLinks/>
              <CiDark size='30px' className='nav-right-icon' onClick={toggleTheme}/>
          </MediaQuery>
        </div>
    </div>
  )
}
