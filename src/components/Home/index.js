import React, {useState, useEffect} from 'react'
import Profile from '../Profile/index'
import About from '../About/index'
import Experience from '../Experience'
import Projects from '../Projects/index'
import Contact from '../Contact/index'
import NavLinks from '../Navbar/NavLinks'
import './index.css'
import { useTheme } from '../ThemeContext/ThemeContext'

export default function Index() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  useEffect(() => {
    window.addEventListener('resize', function(event){
      setIsMobile(window.innerWidth < 1200)
    })
  }, [isMobile]);
  const {theme}  = useTheme();

  return (
    <div className= {theme === 'dark' ? 'dark-theme home' : 'home'}>
        <Profile/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <div className='footer-div'>
          <NavLinks/>
          <p>Copyright © 2023 Rupesh Kashyap. All Rights Reserved.</p>
        </div>
    </div>
  )
}
