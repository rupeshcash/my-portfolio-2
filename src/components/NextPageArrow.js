import React from 'react'
import arrowIcon from '../assets/arrow.png'

export default function NextPageArrow({scrollTo}) {
    const scroll = () => {
        const element = window.document.getElementById(scrollTo);
        element.scrollIntoView({ behavior: 'smooth', block: 'end'});
        console.log(scrollTo);
    }
  return (
    <>
        <img src={arrowIcon} className='icon arrow' alt="arrow" onClick={() => scroll()}/>
    </>
  )
}
