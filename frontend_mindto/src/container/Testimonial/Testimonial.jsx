import React from 'react';

import { AppWrap } from '../../wrapper';
import images from '../../constants/images';

import './Testimonial.scss';
import { BsArrowBarDown } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { motion } from "framer-motion"

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
            <div className='testimonial-left-column'>
              <motion.div
                whileInView={{
                  y: [40, 0],
                  x: [-100, -40],
                  opacity: [0, 1],
                  transition: { duration: 1 }
                }}
              >
                <div className="line1"></div>
              </motion.div>
              <motion.div
                whileInView={{
                  y: [-40, 0],
                  x: [100, 60],
                  opacity: [0, 1],
                  transition: { duration: 1 }
                }}
              >
                <div className="line2"></div>
              </motion.div>
              <motion.div
                className='above-lines'
                whileInView={{
                  opacity: [0, 1],
                  x: [-20, 0],
                  y: [-20, 0],
                  transition: { duration: 1 }
                }}
              >
                <img className='testimonial-picture' src={images.testimonial_one} alt='logo'></img>
                <p className='testimonial-name'>User One</p>
                <p className='testimonial-job'>ESIEA Student</p>
              </motion.div>
            </div>
            <div className='testimonial-right-column'>
              <motion.div
                className='testimonial-quote-scroll-container'
                whileInView={{
                  opacity: [0, 1],
                  x: [-20, 0],
                  y: [-20, 0],
                  transition: { duration: 1 }
                }}
              >
                <p className='testimonial-quote-symbol'>"</p>
                <p className='testimonial-quote-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies vulputate orci non rhoncus. Donec pellentesque venenatis nunc, ac blandit ex vestibulum ut. Praesent eleifend accumsan tortor in ultricies. Mauris a tortor vitae metus tempus interdum sit amet ut turpis. Integer a egestas massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies vulputate orci non rhoncus. Donec pellentesque venenatis nunc, ac blandit ex vestibulum ut. Praesent eleifend accumsan tortor in ultricies. Mauris a tortor vitae metus tempus interdum sit amet ut turpis. Integer a egestas massa.</p>
              </motion.div>
              <div className='testimonial-scroll-and-deco-container'>
                <motion.div
                whileInView={{
                  opacity: [0, 1],
                  transition: { duration: 2.5 }
                }}
                >
                  <motion.div
                    className='testimonial-quote-scroll-down-container'
                    whileInView={{
                      y: [-6, 6, -6],
                      transition: { duration: 1.8, repeat: Infinity }
                    }}
                  >
                    <p className='testimonial-quote-scroll-down-text'>Scroll down</p>
                    <BsArrowBarDown className='scroll-down-icon' />
                  </motion.div>
                </motion.div>

                <div className='line3-to-5'>
                  <motion.div
                    whileInView={{
                      y: [-20, 0],
                      x: [20, 0],
                      opacity: [0, 1],
                      transition: { duration: 1 }
                    }}
                  >
                    <div className="line3"></div>
                  </motion.div>

                  <motion.div
                    whileInView={{
                      y: [20, 0],
                      x: [-20, 0],
                      opacity: [0, 1],
                      transition: { duration: 1 }
                    }}
                  >
                    <div className="line4"></div>
                  </motion.div>
                  <motion.div
                    whileInView={{
                      y: [-20, 0],
                      x: [20, 0],
                      opacity: [0, 1],
                      transition: { duration: 1 }
                    }}
                  >
                    <div className="line5"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-swiper-slide">
          <div className='testimonial-quote'>
            <div className='testimonial-left-column'>
              <motion.div
                whileInView={{
                  y: [40, 0],
                  x: [-100, -40],
                  opacity: [0, 1],
                  transition: { duration: 1 }
                }}
              >
                <div className="line1"></div>
              </motion.div>
              <motion.div
                whileInView={{
                  y: [-40, 0],
                  x: [100, 60],
                  opacity: [0, 1],
                  transition: { duration: 1 }
                }}
              >
                <div className="line2"></div>
              </motion.div>
              <motion.div
                className='above-lines'
                whileInView={{
                  opacity: [0, 1],
                  x: [-20, 0],
                  y: [-20, 0],
                  transition: { duration: 1 }
                }}
              >
                <img className='testimonial-picture' src={images.testimonial_two} alt='logo'></img>
                <p className='testimonial-name'>User Two</p>
                <p className='testimonial-job'>IUT Student</p>
              </motion.div>
            </div>
            <div className='testimonial-right-column'>
              <motion.div
                className='testimonial-quote-scroll-container'
                whileInView={{
                  opacity: [0, 1],
                  x: [-20, 0],
                  y: [-20, 0],
                  transition: { duration: 1 }
                }}
              >
                <p className='testimonial-quote-symbol'>"</p>
                <p className='testimonial-quote-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies vulputate orci non rhoncus. Donec pellentesque venenatis nunc, ac blandit ex vestibulum ut. Praesent eleifend accumsan tortor in ultricies. Mauris a tortor vitae metus tempus interdum sit amet ut turpis. Integer a egestas massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies vulputate orci non rhoncus. Donec pellentesque venenatis nunc, ac blandit ex vestibulum ut. Praesent eleifend accumsan tortor in ultricies. Mauris a tortor vitae metus tempus interdum sit amet ut turpis. Integer a egestas massa.</p>
              </motion.div>
              <div className='testimonial-scroll-and-deco-container'>
                <motion.div
                whileInView={{
                  opacity: [0, 1],
                  transition: { duration: 2.5 }
                }}
                >
                  <motion.div
                    className='testimonial-quote-scroll-down-container'
                    whileInView={{
                      y: [-6, 6, -6],
                      transition: { duration: 1.8, repeat: Infinity }
                    }}
                  >
                    <p className='testimonial-quote-scroll-down-text'>Scroll down</p>
                    <BsArrowBarDown className='scroll-down-icon' />
                  </motion.div>
                </motion.div>

                <div className='line3-to-5'>
                  <motion.div
                    whileInView={{
                      y: [-20, 0],
                      x: [20, 0],
                      opacity: [0, 1],
                      transition: { duration: 1 }
                    }}
                  >
                    <div className="line3"></div>
                  </motion.div>

                  <motion.div
                    whileInView={{
                      y: [20, 0],
                      x: [-20, 0],
                      opacity: [0, 1],
                      transition: { duration: 1 }
                    }}
                  >
                    <div className="line4"></div>
                  </motion.div>
                  <motion.div
                    whileInView={{
                      y: [-20, 0],
                      x: [20, 0],
                      opacity: [0, 1],
                      transition: { duration: 1 }
                    }}
                  >
                    <div className="line5"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-swiper-slide">
          <div className='testimonial-quote'>
            <div className='testimonial-left-column'>
              <motion.div
                whileInView={{
                  y: [40, 0],
                  x: [-100, -40],
                  opacity: [0, 1],
                  transition: { duration: 1 }
                }}
              >
                <div className="line1"></div>
              </motion.div>
              <motion.div
                whileInView={{
                  y: [-40, 0],
                  x: [100, 60],
                  opacity: [0, 1],
                  transition: { duration: 1 }
                }}
              >
                <div className="line2"></div>
              </motion.div>
              <motion.div
                className='above-lines'
                whileInView={{
                  opacity: [0, 1],
                  x: [-20, 0],
                  y: [-20, 0],
                  transition: { duration: 1 }
                }}
              >
                <img className='testimonial-picture' src={images.testimonial_three} alt='logo'></img>
                <p className='testimonial-name'>User Three</p>
                <p className='testimonial-job'>ESTACA Student</p>
              </motion.div>
            </div>
            <div className='testimonial-right-column'>
              <motion.div
                className='testimonial-quote-scroll-container'
                whileInView={{
                  opacity: [0, 1],
                  x: [-20, 0],
                  y: [-20, 0],
                  transition: { duration: 1 }
                }}
              >
                <p className='testimonial-quote-symbol'>"</p>
                <p className='testimonial-quote-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies vulputate orci non rhoncus. Donec pellentesque venenatis nunc, ac blandit ex vestibulum ut. Praesent eleifend accumsan tortor in ultricies. Mauris a tortor vitae metus tempus interdum sit amet ut turpis. Integer a egestas massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies vulputate orci non rhoncus. Donec pellentesque venenatis nunc, ac blandit ex vestibulum ut. Praesent eleifend accumsan tortor in ultricies. Mauris a tortor vitae metus tempus interdum sit amet ut turpis. Integer a egestas massa.</p>
              </motion.div>
              <div className='testimonial-scroll-and-deco-container'>
                <motion.div
                whileInView={{
                  opacity: [0, 1],
                  transition: { duration: 2.5 }
                }}
                >
                  <motion.div
                    className='testimonial-quote-scroll-down-container'
                    whileInView={{
                      y: [-6, 6, -6],
                      transition: { duration: 1.8, repeat: Infinity }
                    }}
                  >
                    <p className='testimonial-quote-scroll-down-text'>Scroll down</p>
                    <BsArrowBarDown className='scroll-down-icon' />
                  </motion.div>
                </motion.div>

                <div className='line3-to-5'>
                  <motion.div
                    whileInView={{
                      y: [-20, 0],
                      x: [20, 0],
                      opacity: [0, 1],
                      transition: { duration: 1 }
                    }}
                  >
                    <div className="line3"></div>
                  </motion.div>

                  <motion.div
                    whileInView={{
                      y: [20, 0],
                      x: [-20, 0],
                      opacity: [0, 1],
                      transition: { duration: 1 }
                    }}
                  >
                    <div className="line4"></div>
                  </motion.div>
                  <motion.div
                    whileInView={{
                      y: [-20, 0],
                      x: [20, 0],
                      opacity: [0, 1],
                      transition: { duration: 1 }
                    }}
                  >
                    <div className="line5"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-swiper-slide">
          <div className='testimonial-quote'>
            <div className='testimonial-left-column'>
              <motion.div
                whileInView={{
                  y: [40, 0],
                  x: [-100, -40],
                  opacity: [0, 1],
                  transition: { duration: 1 }
                }}
              >
                <div className="line1"></div>
              </motion.div>
              <motion.div
                whileInView={{
                  y: [-40, 0],
                  x: [100, 60],
                  opacity: [0, 1],
                  transition: { duration: 1 }
                }}
              >
                <div className="line2"></div>
              </motion.div>
              <motion.div
                className='above-lines'
                whileInView={{
                  opacity: [0, 1],
                  x: [-20, 0],
                  y: [-20, 0],
                  transition: { duration: 1 }
                }}
              >
                <img className='testimonial-picture' src={images.testimonial_four} alt='logo'></img>
                <p className='testimonial-name'>User Four</p>
                <p className='testimonial-job'>RU Student</p>
              </motion.div>
            </div>
            <div className='testimonial-right-column'>
              <motion.div
                className='testimonial-quote-scroll-container'
                whileInView={{
                  opacity: [0, 1],
                  x: [-20, 0],
                  y: [-20, 0],
                  transition: { duration: 1 }
                }}
              >
                <p className='testimonial-quote-symbol'>"</p>
                <p className='testimonial-quote-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies vulputate orci non rhoncus. Donec pellentesque venenatis nunc, ac blandit ex vestibulum ut. Praesent eleifend accumsan tortor in ultricies. Mauris a tortor vitae metus tempus interdum sit amet ut turpis. Integer a egestas massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies vulputate orci non rhoncus. Donec pellentesque venenatis nunc, ac blandit ex vestibulum ut. Praesent eleifend accumsan tortor in ultricies. Mauris a tortor vitae metus tempus interdum sit amet ut turpis. Integer a egestas massa.</p>
              </motion.div>
              <div className='testimonial-scroll-and-deco-container'>
                <motion.div
                whileInView={{
                  opacity: [0, 1],
                  transition: { duration: 2.5 }
                }}
                >
                  <motion.div
                    className='testimonial-quote-scroll-down-container'
                    whileInView={{
                      y: [-6, 6, -6],
                      transition: { duration: 1.8, repeat: Infinity }
                    }}
                  >
                    <p className='testimonial-quote-scroll-down-text'>Scroll down</p>
                    <BsArrowBarDown className='scroll-down-icon' />
                  </motion.div>
                </motion.div>

                <div className='line3-to-5'>
                  <motion.div
                    whileInView={{
                      y: [-20, 0],
                      x: [20, 0],
                      opacity: [0, 1],
                      transition: { duration: 1 }
                    }}
                  >
                    <div className="line3"></div>
                  </motion.div>

                  <motion.div
                    whileInView={{
                      y: [20, 0],
                      x: [-20, 0],
                      opacity: [0, 1],
                      transition: { duration: 1 }
                    }}
                  >
                    <div className="line4"></div>
                  </motion.div>
                  <motion.div
                    whileInView={{
                      y: [-20, 0],
                      x: [20, 0],
                      opacity: [0, 1],
                      transition: { duration: 1 }
                    }}
                  >
                    <div className="line5"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div >
  );
};

export default AppWrap(Testimonial, 'testimonial');