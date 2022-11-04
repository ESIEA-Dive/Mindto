import React, { useState } from 'react';
import OtherClassCard from './OtherClassCard';
import StudentClassCard from './StudentClassCard';
import TeacherClassCard from './TeacherClassCard';
import { AppWrap } from '../../wrapper';

import './Course.scss';
import images from '../../constants/images';
import { motion } from "framer-motion"

const Course = () => {

  const [status, setStatus] = useState(1);
  const cards = [
    {
      class: <OtherClassCard
        coach_name="Bruce Woll"
        title="Sport methods"
        date="11 NOV"
        places_left="14"
        image={images.coach_one}
        coach_status="CASTER"
      />
    },
    {
      class: <StudentClassCard
        coach_name="Peter Bale"
        title="Mental health"
        date="17 NOV"
        places_left="22"
        image={images.coach_two}
      />
    },
    {
      class: <TeacherClassCard
        coach_name="Liz Kayne"
        title="Meditation methods"
        date="9 NOV"
        places_left="8"
        image={images.coach_three}
      />
    },
  ];

  const texts = [
    {
      title: "PERSONALITY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      type: "other",
    },
    {
      title: "STUDENT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      type: "student",
    },
    {
      title: "TEACHER",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      type: "teacher",
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
              status == index ?
                { opacity: [0.6, 1], scale: [0.9, 1], transition: { duration: 0.5 } }
                :
                { opacity: [1, 0.6], scale: [1, 0.9], transition: { duration: 0.5 } }
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
            status == index ?
              { opacity: [0, 1], x: [-60, 0], transition: { duration: 0.8 } }
              :
              { opacity: [1, 0], x: [0, -60], transition: { duration: 0.8 } }
          }
          onClick={() => setStatus(index)}
          onHoverStart={() => setStatus(index)}
          className='class-description'
          key={index}
        >
          {status == index && <div className={`class-description-type ${text.type}`}>
            {text.title}
          </div>}
          {status == index && <p className='class-description-text'>
            {text.description}
          </p>}
        </motion.div>))}
    </div>
  );
};

export default AppWrap(Course, 'course');