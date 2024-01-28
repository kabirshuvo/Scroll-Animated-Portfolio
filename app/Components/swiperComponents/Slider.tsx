import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'; 

import '../../styles.css';

import { testimonials } from '@/app/utils/testimonials';

// import required modules
import { Pagination } from 'swiper/modules';
const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id}>
            <img src={testimonial.imageUrl} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.country}</p>
            <p>{testimonial.date}</p>
            <p>Stars: {testimonial.stars}</p>
            <p>{testimonial.review}</p>
          </SwiperSlide>
        ))}
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Slider
