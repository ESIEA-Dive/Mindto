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
      <p className='title'>
        Classes
      </p>
      <p className='description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className='carroussel'>
        {cards.map((card, index) => (
          <motion.div
            initial={{
              scale: 1,
              opacity: 1
            }}
            animate={
              status == index ? {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 }
              } : {
                opacity: 0.6,
                scale: 0.9,
                transition: { duration: 0.5 }
              }
            }
            onClick={() => setStatus(index)}
            onHoverStart={() => setStatus(index)}
          >
            {card.class}
          </motion.div>))}
      </div>
      {texts.map((text, index) => (
        <motion.div
          initial={{
            x: -500,
            opacity: 0.5
          }}
          animate={
            status == index ? {
              opacity: 1,
              x: 0,
              transition: { duration: 1 }
            } : {
              opacity: 0.5,
              x: -500,
              transition: { duration: 1 }
            }
          }
          onClick={() => setStatus(index)}
          onHoverStart={() => setStatus(index)}
        >
          <div className='class-description'>
            {status == index && <div className={`class-description-type ${text.type}`}>
              {text.title}
            </div>}
            {status == index && <p className='class-description-text'>
              {text.description}
            </p>}
          </div>
        </motion.div>))}
    </div>
  );
};

export default AppWrap(Course, 'course');