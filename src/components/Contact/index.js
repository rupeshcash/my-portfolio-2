import React from 'react'
import './index.css'
import email from '../../assets/email.png'
import linkedInIcon from '../../assets/linkedin.png'

export default function Contact() {
  return (
    <section id="contact-section" className='hidden'>
    <p className="section-text-p1">Get in Touch</p>
    <h1 className="title">Contact Me</h1>
    <div className="contact-info-upper-container">
      <div className="contact-info-container">
        <img
          src={email}
          alt="Email icon"
          className="icon contact-icon email-icon"
        />
        <p><a href="mailto:rupesh21kash@gmail.com">rupesh21kash@gmail.com</a></p>
      </div>
      <div className="contact-info-container">
        <img
          src= {linkedInIcon}
          alt="LinkedIn icon"
          className="icon contact-icon"
        />
        <p><a href="https://www.linkedin.com/in/rupesh-kashyap-94a724113/">LinkedIn</a></p>
      </div>
    </div>
  </section>
  )
}
