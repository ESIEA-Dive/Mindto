import React, { useState } from 'react';
import OtherClassCard from './OtherClassCard';
import StudentClassCard from './StudentClassCard';
import TeacherClassCard from './TeacherClassCard';
import { AppWrap } from '../../wrapper';

import './Course.scss';
import images from '../../constants/images';
import { motion } from "framer-motion"

const Course = () => {

  const [status, setStatus] = useState(0);

  return (
    <div className='classes-container'>
      <p className='title'>
        Classes
      </p>
      <p className='description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className='carroussel'>
        <motion.div
          initial={{
            scale: 1,
            opacity: 1
          }}
          animate={
            status == 0 ? {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5 }
            } : {
              opacity: 0.6,
              scale: 0.9,
            }
          }
          onClick={() => setStatus(0)}
          onHoverStart={() => setStatus(0)}
        >
          <OtherClassCard
            coach_name="Bruce Woll"
            title="Sport methods"
            date="11 NOV"
            places_left="14"
            image={images.coach_one}
            coach_status="CASTER"
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0.6,
            scale: 0.9,
          }}
          animate={
            status == 1 ? {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5 }
            } : {
              opacity: 0.6,
              scale: 0.9,
            }
          }
          onClick={() => setStatus(1)}
          onHoverStart={() => setStatus(1)}
        >
          <StudentClassCard
            coach_name="Peter Bale"
            title="Mental health"
            date="17 NOV"
            places_left="22"
            image={images.coach_two}
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0.6,
            scale: 0.9,
          }}
          animate={
            status == 2 ? {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5 }
            } : {
              opacity: 0.6,
              scale: 0.9,
            }
          }
          onClick={() => setStatus(2)}
          onHoverStart={() => setStatus(2)}
        >
          <TeacherClassCard
            coach_name="Liz Kayne"
            title="Meditation methods"
            date="9 NOV"
            places_left="8"
            image={images.coach_three}
          />
        </motion.div>
      </div>
      <div className='class-description'>
        {status == 0 && <div className='class-description-type other'>
          PERSONALITY
        </div>}
        {status == 0 && <p className='class-description-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>}
        {status == 1 && <div className='class-description-type student'>
          STUDENT
        </div>}
        {status == 1 && <p className='class-description-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>}
        {status == 2 && <div className='class-description-type teacher'>
          TEACHER
        </div>}
        {status == 2 && <p className='class-description-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>}
      </div>
    </div>

  );
};

export default AppWrap(Course, 'course');