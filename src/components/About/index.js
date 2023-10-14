import React from 'react'
import './index.css'
import aboutPic from '../../assets/about-pic.jpg'
import experience from '../../assets/experience.png'
import NextPageArrow from '../NextPageArrow'

export default function About() {
  return (
    <section id="about-section" className='hidden'>
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
                <p>4+ years <br/>Software Engineer</p>
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
                in developing and designing systems. I like to have fun optimizing my work with constraints like time and resources i am given to play with. 
              </p>
            </div>
          </div>
        </div>
        <NextPageArrow scrollTo={"experience-section"}/>
    </section>
  )
}
