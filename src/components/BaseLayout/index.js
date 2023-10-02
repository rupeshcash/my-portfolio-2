import React from 'react'
import './index.css'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom';
import { useTheme } from '../ThemeContext/ThemeContext';

export default function BaseLayout() {
  const { theme } = useTheme();

  return (
    <>
      <Navbar/>
      <div>
        <Outlet className={`page ${theme === 'dark' ? 'dark-theme' : ''}`}/>
      </div>
    </>
  )
}
