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
                Labore ullamco Lorem adipisicing ea cupidatat culpa elit aliquip nulla sint est. Enim magna consequat incididunt ea minim. Ad sint anim incididunt officia anim consectetur. Est veniam aute irure exercitation elit ad ullamco sit sint incididunt velit labore. Dolore laborum deserunt anim duis veniam ad.
              </p>
            </div>
          </div>
        </div>
        <img src={arrowIcon} className='icon arrow' alt="arrow"/>
    </section>
  )
}
