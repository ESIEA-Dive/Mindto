import React from 'react';
import ClassCard from './ClassCard';
import { AppWrap } from '../../wrapper';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Transformation.scss';

// import required modules
import { Pagination, Navigation } from "swiper";

const Transformation = () => {
  return (
    <div className='fulldiv'>
      <div className='bottom-color'></div>
      <>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          style={{
            "--swiper-pagination-color": "#00C674",
            "--swiper-navigation-color": "#00C674",
            "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
          }}     
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><ClassCard /></SwiperSlide>
          <SwiperSlide><ClassCard /></SwiperSlide>
          <SwiperSlide><ClassCard /></SwiperSlide>
          <SwiperSlide><ClassCard /></SwiperSlide>
          <SwiperSlide><ClassCard /></SwiperSlide>
          <SwiperSlide><ClassCard /></SwiperSlide>
          <SwiperSlide><ClassCard /></SwiperSlide>
          <SwiperSlide><ClassCard /></SwiperSlide>
          <SwiperSlide><ClassCard /></SwiperSlide>
        </Swiper>
      </>
    </div>

  );
};

export default AppWrap(Transformation, 'transformation');