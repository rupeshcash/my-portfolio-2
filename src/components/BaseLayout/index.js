import React from 'react'
import './index.css'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom';

export default function BaseLayout() {
  return (
    <>
      <Navbar/>
      <div className='page'>
          <Outlet/>
      </div>
    </>
  )
}
