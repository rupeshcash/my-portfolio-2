import React from 'react'
import Profile from '../Profile/index'
import About from '../About/index'
import Experience from '../Experience'
import Projects from '../Projects/index'
import Contact from '../Contact/index'
import NavLinks from '../Navbar/NavLinks'
import './index.css'

export default function index() {
  return (
    <>
        <Profile/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <div className='footer-div'>
          <NavLinks/>
          <p>Copyright © 2023 Rupesh Kashyap. All Rights Reserved.</p>
        </div>
    </>
  )
}
