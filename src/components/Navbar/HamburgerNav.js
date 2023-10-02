import React from 'react'
import { useTheme } from '../ThemeContext/ThemeContext';

export default function HamburgerNav() {
    const { theme } = useTheme();

    const toggleMenu = (elem) => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");

        menu.classList.toggle("open");
        icon.classList.toggle("open");

        const element = document.getElementById(elem);
        if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }

  return (
    <>
      <div className='hamburger-menu'>
        <div className='hamburger-icon' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className='menu-links'>
            <li><a href="#about" onClick={() => toggleMenu("about-section")}>About</a></li>
            <li><a href="#experience"  onClick={() => toggleMenu("experience-section")}>Experience</a></li>
            <li><a href="#projects"  onClick={() => toggleMenu("projects-section")}>Projects</a></li>
            <li><a href="#contact"  onClick={() => toggleMenu("contact-section")}>Contact</a></li>
        </div>
      </div>
    </>
  )
}
