import React from 'react';
import ClassCard from './ClassCard';
import { AppWrap } from '../../wrapper';

import './Course.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Course = () => {

  return (
    <div className='classes-container'>
      <div class="right"></div>
      <p className='title'>
        Soon...
      </p>
      <p className='description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className='carroussel'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesOffsetAfter={50}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            520: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1080: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1360: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="swiper-carroussel"
        >
          <SwiperSlide className="swiper-slide-carroussel"><ClassCard /></SwiperSlide>
          <SwiperSlide className="swiper-slide-carroussel"><ClassCard /></SwiperSlide>
          <SwiperSlide className="swiper-slide-carroussel"><ClassCard /></SwiperSlide>
          <SwiperSlide className="swiper-slide-carroussel"><ClassCard /></SwiperSlide>
          <SwiperSlide className="swiper-slide-carroussel"><ClassCard /></SwiperSlide>
          <SwiperSlide className="swiper-slide-carroussel"><ClassCard /></SwiperSlide>
          <SwiperSlide className="swiper-slide-carroussel"><ClassCard /></SwiperSlide>
          <SwiperSlide className="swiper-slide-carroussel"><ClassCard /></SwiperSlide>
          <SwiperSlide className="swiper-slide-carroussel"><ClassCard /></SwiperSlide>
          <SwiperSlide className="swiper-slide-carroussel"><ClassCard /></SwiperSlide>
          <SwiperSlide className="swiper-slide-carroussel"><ClassCard /></SwiperSlide>
          <SwiperSlide className="swiper-slide-carroussel"><ClassCard /></SwiperSlide>
          <SwiperSlide className="swiper-slide-carroussel"><ClassCard /></SwiperSlide>
        </Swiper>
      </div>
    </div>

  );
};

export default AppWrap(Course, 'course');