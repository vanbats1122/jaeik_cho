import React from 'react'
import "./about.css";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
            <h3 className='about__title'>Experience</h3>
            <span className='about__subtitle'>2 Years Working</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon' ></i>
            <h3 className='about__title'>Completed</h3>
            <span className='about__subtitle'>8+ Projects</span>
        </div>

        <div className="about__box">
            <i className='bx bx-support about__icon'></i>
            <h3 className='about__title'>Soft Skills</h3>
            <span className='about__subtitle'>Avid Learner</span>
        </div>
    </div>
  )
}

export default Info