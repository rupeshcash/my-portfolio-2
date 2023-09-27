import React from 'react'
import tick from '../../assets/checkmark.png'
import './index.css'

export default function CustomArticle({title, subtitle}) {
  return (
    <>
    <article>
      <img src={tick} alt="checkmark" className='icon'/>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </article>
  </>
  )
}
