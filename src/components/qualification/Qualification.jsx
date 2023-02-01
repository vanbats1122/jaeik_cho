import React, { useState } from 'react'
import "./qualification.css";

const Qualification = () => {

    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index);
    }

  return (
    <section id="qualification" className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={
                        toggle === 1 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__butoon button--flex"
                    }
                    onClick={() => toggleTab(1)}
                    >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div 
                    className={
                        toggle === 2 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__butoon button--flex"
                    }
                    onClick={() => toggleTab(2)}

                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> 
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div 
                    className= {
                        toggle === 1 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                    }
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">
                                Udemy Online Bootcamp
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2021 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Real Estate Saleperson</h3>
                            <span className="qualification__subtitle">Humber College
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Software Engineering</h3>
                            <span className="qualification__subtitle">Centennial College</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2020 - 2021
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>

                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Rotman Commerce</h3>
                            <span className="qualification__subtitle">University of Toronto</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2015 - 2020
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    className={
                        toggle === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Real Estate Salesperson</h3>
                            <span className="qualification__subtitle">Strata Real Estate</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Military Armed forces</h3>
                            <span className="qualification__subtitle">ROKA - South Korea</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2017 - 2019
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"> Administrative associate</h3>
                            <span className="qualification__subtitle">ICN - Korea</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2014
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification