import React from 'react'

export default function Project({title, projectThumbnail, link1, link2}) {
    const openUrl = (url) => {
        window.open(url, '_blank', 'noreferrer');
      }
    
  return (
    <div className='details-container color-container'>
        <div className='project-article-container'>
            <img src={projectThumbnail} alt="project-1" className="project-img"/>
            <h2 className='h2-subtitle project-title'>{title}</h2>
            <div className='prj-button btn-container'>
                <button className='btn btn-color-2 project-btn' onClick={() => openUrl(link1)}>Details</button>
                <button className='btn btn-color-1 project-btn' onClick={() => openUrl(link2)}>Demo</button>
            </div>
        </div>
    </div>
  )
}
