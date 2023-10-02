import React from 'react'
import './index.css'
import aboutPic from '../../assets/about-pic.jpg'
import experience from '../../assets/experience.png'
import arrowIcon from '../../assets/arrow.png'
export default function About() {
  return (
    <section id="about-section">
        <p className='section-text-p1'>Get to know more</p>
        <h1 className='title'>About me</h1>
        <div className='section-container'>
          <div className='section-pic-container'>
            <img src={aboutPic} className='about-pic' alt="profile"/>
          </div>
          <div className='about-details'>
            <div className='small-containers'>
              <div className='details-container'>
                <img src= {experience} alt="experience" className='icon'/>
                <h3>Experience</h3>
                <p>4+ years <br/>System Architect</p>
              </div>
              <div className='details-container'>
                <img src= {experience} alt="experience" className='icon'/>
                <h3>Education</h3>
                <p>B.Tech. in Electrical Engineering <br/>IIT Delhi</p>
              </div>
            </div>
            <div className='text-container'>
              <p>
                I started my full time professional career with Samsung electronics, Noida in 2019. Since then, i have worked on multiple projects, with multiple teams and in different companies. My skills and expertise mostly lie 
                in developing system whether it has to be distributed system or a static frontend application in android. 
              </p>
            </div>
          </div>
        </div>
        <img src={arrowIcon} className='icon arrow' alt="arrow"/>
    </section>
  )
}
