import React from 'react'
import './index.css'
import profilePicture from '../../assets/profile-pic.png'
import linkedInPicture from '../../assets/linkedin.png'
import githubPicture from '../../assets/github.png'


import { useNavigate } from "react-router-dom";
export default function Profile() {

  const downloadResume = () => {
    const pdfPath = '/resume.pdf';
    window.open(pdfPath, '_blank');
  };

  const navigate = useNavigate();
  const navigateTo = (path) => {
    console.log(path)
    navigate(path);
  }

  const openUrl = (url) => {
    window.open(url, '_blank', 'noreferrer');
  }

  return (
    <section className='home'>
      <div className='section-pic-container'>
        <img src = {profilePicture} alt="Profile"/>
      </div>
      <div className='section-text'>
        <p className='profile-pargraph-p1'>Hello, I'm</p>
        <h1 className='title'>Rupesh K.</h1>
        <p className='profile-pargraph-p2'>
          Fullstack Developer
        </p>
        <div className='btn-container'>
            <button className='btn btn-color-2' onClick={downloadResume}>Download Resume</button>
            <button className='btn btn-color-1' onClick={() => navigateTo('/contact')}>Contact</button>
        </div>
        <div class = 'social-container'>
          <img src={linkedInPicture} alt="linkedin profile" class="icon" onClick={()=> openUrl('https://www.linkedin.com/in/rupesh-kashyap-94a724113/')}/>
          <img src={githubPicture} alt="github profile" class="icon" onClick={()=> openUrl('https://www.github.com/rupeshcash')}/>
        </div>
      </div>
    </section>
  )
}
