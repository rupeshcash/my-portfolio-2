import React from 'react'
import './index.css'
import profilePicture from '../../assets/profile-pic.png'
import linkedInPicture from '../../assets/linkedin.png'
import githubPicture from '../../assets/github.png'
import NextPageArrow from '../NextPageArrow'
import TypedSentence from '../TypedSentence/index.js'

export default function Profile() {

  const downloadResume = () => {
    const pdfPath = '/resume.pdf';
    window.open(pdfPath, '_blank');
  };

  const navigateTo = (path) => {
    const element = window.document.getElementById("contact-section");
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
  }

  const openUrl = (url) => {
    window.open(url, '_blank', 'noreferrer');
  }

  return (
    <section id='profile-section' className='hidden'>
      <div className='section-pic-container'>
        <img src = {profilePicture} alt="Profile"/>
      </div>
      <div className='section-text'>
        <div className='profile-section-text'>
          <TypedSentence titleText="Hi," bodyStrings={["I am Rupesh", "I'm a writer...", "I write codes!"]}/>
        </div>
        <div className='btn-container'>
            <button className='btn btn-color-2' onClick={downloadResume}>Download Resume</button>
            <button className='btn btn-color-1' onClick={() => navigateTo('#contact')}>Contact</button>
        </div>
        <div className = 'social-container'>
          <img src={linkedInPicture} alt="linkedin profile" className="icon" onClick={()=> openUrl('https://www.linkedin.com/in/rupesh-kashyap-94a724113/')}/>
          <img src={githubPicture} alt="github profile" className="icon" onClick={()=> openUrl('https://www.github.com/rupeshcash')}/>
        </div>
      </div>
      <NextPageArrow scrollTo={"about-section"}/>
    </section>
  )
}
