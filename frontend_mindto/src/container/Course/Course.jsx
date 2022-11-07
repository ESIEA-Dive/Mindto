import React, { useState } from 'react';
import ClassCard from './ClassCard';
import { AppWrap } from '../../wrapper';

import './Course.scss';
import images from '../../constants/images';
import { motion } from "framer-motion"

const Course = () => {

  const [status, setStatus] = useState(1);
  const cards = [
    {
      class: <ClassCard
        coach_name="Bruce Woll"
        category="Certified Expert"
        date="11 nov"
        hour="8:00 a.m"
        places_left="14"
        type="expert"
        image={images.coach_one}
        pillar="Pillar"
      />
    },
    {
      class: <ClassCard
        coach_name="Tom Kayne"
        category="Pro World"
        date="9 nov"
        hour="10:00 a.m"
        places_left="8"
        type="pro"
        image={images.coach_three}
        pillar="Pillar"
      />
    },
    {
      class: <ClassCard
        coach_name="Lisa Bale"
        category="Groupwork"
        date="17 nov"
        hour="3:00 p.m"
        places_left="22"
        type="student"
        image={images.coach_two}
        pillar="Pillar"
      />
    },
  ];

  const texts = [
    {
      title: "C. Expert",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      type: "expert",
    },
    {
      title: "P. World",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      type: "pro",
    },
    {
      title: "GroupWork",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      type: "student",
    },
  ];

  return (
    <div className='classes-container'>
      <motion.p
        className='title'
        whileInView={{ opacity: [0, 1], x: [-20, 0], y: [-20, 0], transition: { duration: 0.5 } }}
      >
        Classes
      </motion.p>
      <motion.p
        className='description'
        whileInView={{ opacity: [0, 1], x: [-20, 0], y: [-20, 0], transition: { duration: 0.5 } }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </motion.p>
      <div className='carroussel'>
        {cards.map((card, index) => (
          <motion.div
            whileInView={
              status === index ?
                { opacity: [0.5, 1], scale: [0.9, 1], transition: { duration: 0.5 } }
                :
                { opacity: [1, 0.5], scale: [1, 0.9], transition: { duration: 0.5 } }
            }
            onClick={() => setStatus(index)}
            onHoverStart={() => setStatus(index)}
            key={index}
          >
            {card.class}
          </motion.div>))}
      </div>
      {texts.map((text, index) => (
        <motion.div
          whileInView={
            status === index ?
              { opacity: [0, 1], x: [-60, 0], transition: { duration: 0.8 } }
              :
              { opacity: [1, 0], x: [0, -60], transition: { duration: 0.8 } }
          }
          onClick={() => setStatus(index)}
          onHoverStart={() => setStatus(index)}
          className='class-description'
          key={index}
        >
          {status === index && <div className={`class-description-type ${text.type}`}>
            {text.title}
          </div>}
          {status === index && <p className='class-description-text'>
            {text.description}
          </p>}
        </motion.div>))}
    </div>
  );
};

export default AppWrap(Course, 'course');