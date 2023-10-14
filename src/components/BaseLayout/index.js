import React, { useEffect, useRef } from 'react'
import './index.css'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom';
export default function BaseLayout() {

  const containerRef = useRef(null);
  useEffect( () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add("show");
        }
        else {
          entry.target.classList.remove("show");
        }
      })
    }, {
      rootMargin: '0px 0px -300px 0px'
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(el => observer.observe(el));

    return () => {
      const hiddenElements = document.querySelectorAll(".hidden");
      hiddenElements.forEach(el => observer.unobserve(el));
    }
  }, [containerRef]);


  return (
    <div className='top-Page' ref={containerRef}>
      <Navbar className='nav-bar'/>
      <div className='page'>
        <Outlet/>
      </div>
    </div>
  )
}
