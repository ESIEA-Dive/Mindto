import React, {useEffect, useState} from 'react';
import ClassCard from './ClassCard';
import { AppWrap } from '../../wrapper';

import './Transformation.scss';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Transformation = () => {

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize(){
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize(){
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

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
          slidesPerView={Math.round(windowSize.innerWidth/320)}
          className="mySwiper"
        >
          <SwiperSlide className="mySwiperSlide"><ClassCard /></SwiperSlide>
          <SwiperSlide className="mySwiperSlide"><ClassCard /></SwiperSlide>
          <SwiperSlide className="mySwiperSlide"><ClassCard /></SwiperSlide>
          <SwiperSlide className="mySwiperSlide"><ClassCard /></SwiperSlide>
          <SwiperSlide className="mySwiperSlide"><ClassCard /></SwiperSlide>
          <SwiperSlide className="mySwiperSlide"><ClassCard /></SwiperSlide>
          <SwiperSlide className="mySwiperSlide"><ClassCard /></SwiperSlide>
          <SwiperSlide className="mySwiperSlide"><ClassCard /></SwiperSlide>
          <SwiperSlide className="mySwiperSlide"><ClassCard /></SwiperSlide>
          <SwiperSlide className="mySwiperSlide"><ClassCard /></SwiperSlide>
          <SwiperSlide className="mySwiperSlide"><ClassCard /></SwiperSlide>
          <SwiperSlide className="mySwiperSlide"><ClassCard /></SwiperSlide>
          <SwiperSlide className="mySwiperSlide"><ClassCard /></SwiperSlide>
        </Swiper>
      </div>
    </div>

  );
};

export default AppWrap(Transformation, 'transformation');