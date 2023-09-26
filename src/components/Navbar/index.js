import './index.css'

import React from 'react'

export default function Navbar() {
  return (
    <div className='nav-bar'>
        <div className='nav-logo'>Rupesh Kashyap</div>
        <ul className='nav-links'>
          <li><a href="about">About</a></li>
          <li><a href="contact">Contact</a></li>
          <li><a href="experience">Experience</a></li>
          <li><a href="projects">Project</a></li>
        </ul>
    </div>
  )
}
