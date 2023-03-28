import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Allen</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href='https://www.linkedin.com/in/jaeik-cho-981458a9/' className='footer__social-link' target="_blank" rel="noreferrer">
                    <i class="bx bxl-linkedin"></i>
                </a>
                <a href='https://dribbble.com/allenchu1356' className='footer__social-link' target="_blank" rel="noreferrer">
                    <i class="bx bxl-dribbble"></i>
                </a>
                <a href='https://github.com/vanbats1122?tab=repositories' className='footer__social-link' target="_blank" rel="noreferrer">
                    <i class="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Allen Cho. All Rights Reserved</span>
        </div>
    </footer>
  )
}

export default Footer