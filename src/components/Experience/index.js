import React from 'react'
import './index.css'
import CustomArticle from './CustomArticle'
import NextPageArrow from '../NextPageArrow'

export default function Experience() {
  return (
    <section id="experience-section" className='hidden'>
        <p className='section-text-p1'>Explore my</p>
        <h1 className='title'>Experience</h1>
        <div className='experience-details-container'>
          <div className='small-containers'>
            <div className='hidden details-container'>
              <h2 className='h2-subtitle'>Language Skills</h2>
                <div className='article-container'>
                  <CustomArticle title="Java" subtitle="Experienced"/>
                  <CustomArticle title="C++" subtitle="Experienced"/>
                  <CustomArticle title="Python" subtitle="Experienced"/>
                  <CustomArticle title="SQL" subtitle="Experienced"/>
                  <CustomArticle title="Javascript" subtitle="Experienced"/>
                  <CustomArticle title="CSS" subtitle="Intermediate"/>
                </div>
            </div>
            <div className='hidden details-container'>
              <h2 className='h2-subtitle'>Frameworks & Development</h2>
              <div className='article-container'>
                  <CustomArticle title="Spring" subtitle="Experienced"/>
                  <CustomArticle title="Hibernate" subtitle="Experienced"/>
                  <CustomArticle title="Oauth2" subtitle="Experienced"/>
                  <CustomArticle title="AWS" subtitle="Experienced"/>
                  <CustomArticle title="React" subtitle="Intermediate"/>
                  <CustomArticle title="Kubernetes" subtitle="Intermediate"/>
                  <CustomArticle title="Flask" subtitle="Intermediate"/>
                  <CustomArticle title="Firebase" subtitle="Intermediate"/>
                  <CustomArticle title="Android" subtitle="Intermediate"/>
                </div>
            </div>
          </div>
        </div>
        <NextPageArrow scrollTo={"projects-section"}/>
    </section>
  )
}
