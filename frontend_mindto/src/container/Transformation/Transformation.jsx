import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';
import ClassCardBis from './ClassCardBis';
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

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  return (
    <div className='fulldiv'>
      <div className='bottom-color'></div>
      <>
        <Swiper
          slidesPerView={windowSize.innerWidth < 1600 ? windowSize.innerWidth < 1200 ? windowSize.innerWidth < 800 ? 1 : 2 : 3 : 4}
          slidesPerGroup={windowSize.innerWidth < 1600 ? windowSize.innerWidth < 1200 ? windowSize.innerWidth < 800 ? 1 : 2 : 3 : 4}
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
          <SwiperSlide><ClassCardBis /></SwiperSlide>
          <SwiperSlide><ClassCard /></SwiperSlide>
          <SwiperSlide><ClassCardBis /></SwiperSlide>
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