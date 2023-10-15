import React from 'react'
import './index.css'
import projectThumbnail from '../../assets/project-1.png'
import projectThumbnail2 from '../../assets/project-2.png'
import projectThumbnail3 from '../../assets/project-3.png'
import NextPageArrow from '../NextPageArrow'
import Project from './Project'
export default function Projects() {

  return (
    <section id="projects-section" className='hidden'>
        <p className="section-text-p1">Browse my recent</p>
        <h1 className='title'>Projects</h1>
        <div className='project-details-container'>
          <div className='small-containers'> 
            <Project 
              title='My portfolio website' 
              projectThumbnail={projectThumbnail2} 
              link1='https://github.com/rupeshcash/my-portfolio-2' 
              link2='https://rupesh-kashyap.web.app/'/>
            <Project 
              title='JSE - Java search Engine' 
              projectThumbnail={projectThumbnail3} 
              link1='https://theabsurdrebel.wordpress.com/2017/04/26/journey-of-the-bike-display-pov/' 
              link2='https://newchat-x.web.app/'/>
            <Project 
              title='POV Bike Display' 
              projectThumbnail={projectThumbnail} 
              link1='https://github.com/rupeshcash/POV_BIKE' 
              link2='https://theabsurdrebel.wordpress.com/2017/04/26/journey-of-the-bike-display-pov/'/>
          </div>
        </div>
        <NextPageArrow scrollTo={"contact-section"}/>
    </section>
  )
}
