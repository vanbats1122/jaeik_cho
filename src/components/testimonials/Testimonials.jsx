import React from 'react'
import './testimonial.css';
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


//import required modules
import { Navigation, Pagination } from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Testimonials = () => {
    
  return (
    <section id="projects" className="testimonial container section">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Summary of my Work</span>

        <div className="swiper-button swiper-button-next">
                <IoIosArrowForward />
        </div>
        <div className="swiper-button swiper-button-prev">
                <IoIosArrowBack />
        </div>
      

        <Swiper className="testimonial__container"
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        fadeEffect={true}
        spaceBetween={24}
        pagination={{
            clickable: true,
            dynamicBullets: true
        }}
        breakpoints={{
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
        }}
        modules={[Pagination, Navigation]}
        navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            disabledClass: "swiper-button-disabled"
          }}
        >
        
            {Data.map(({id, image, title, description, link}) => {
                return (
                    
                    <SwiperSlide className="testimonial__card" key={id}>
                        <img src={image} alt=""
                        className='testimonial__img' />

                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial__description">{description}</p>
                        <button className='testimonial__link'>
                            <a href={link}>Source Code</a>
                        </button>
                    </SwiperSlide>
                );
            })}

           
        </Swiper>
        
    </section>
  )
}

export default Testimonials