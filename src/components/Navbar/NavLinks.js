import React from 'react'
import { useTheme } from '../ThemeContext/ThemeContext';

export default function NavLinks() {
    const handleClickScroll = (elem) => {
        const element = document.getElementById(elem);
        if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const {theme} = useTheme();
    
    return (
        <>
            <ul className={theme === 'dark' ? 'nav-links dark-theme' : 'nav-links'}>
                <li><a href="#about" onClick={() => handleClickScroll("about-section")}>About</a></li>
                <li><a href="#experience"  onClick={() => handleClickScroll("experience-section")}>Experience</a></li>
                <li><a href="#projects"  onClick={() => handleClickScroll("projects-section")}>Projects</a></li>
                <li><a href="#contact"  onClick={() => handleClickScroll("contact-section")}>Contact</a></li>
            </ul>
        </>
    )
}
