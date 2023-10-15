import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import './index.css'

export default function Index({titleText, bodyStrings}) {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: bodyStrings,
            startDelay: 800,
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 700,
            loop: true
          });
        return () => {
        typed.destroy();
        };
    });
    
  return (
    <div className='typed-sentence-div'>
        <h1 className="title">{titleText}</h1>
        <div className="animated-text-container">
            <span className="profile-paragraph-p2" ref={el}></span>
        </div>
    </div>
  )
}
