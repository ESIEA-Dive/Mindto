import React from 'react';

import { AppWrap } from '../../wrapper';

import './Testimonial.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Testimonial = () => {
  return (
    <div className='testimonial-container'>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="testimonial-swiper"
      >
        <SwiperSlide className="testimonial-swiper-slide">
        <div className='testimonial-quote'>
            <p className='one'>
              <span className='quote-symbol'>"</span>
              <br></br>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              <br></br>
              <br></br>
              <span className='quote-author'>Guillaume Dive, MindTo Founder</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-swiper-slide">
          <div className='testimonial-quote'>
            <p className='two'>
              <span className='quote-symbol'>"</span>
              <br></br>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              <br></br>
              <br></br>
              <span className='quote-author'>Guillaume Dive, MindTo Founder</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-swiper-slide">
          <div className='testimonial-quote'>
            <p className='three'>
              <span className='quote-symbol'>"</span>
              <br></br>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              <br></br>
              <br></br>
              <span className='quote-author'>Guillaume Dive, MindTo Founder</span>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AppWrap(Testimonial, 'testimonial');