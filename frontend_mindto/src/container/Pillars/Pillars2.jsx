import React from 'react';
import { motion } from 'framer-motion';

import { GiEcology,GiWallet, GiOilySpiral, GiWeightLiftingUp } from 'react-icons/gi';
import { RiMentalHealthFill, RiTimeFill } from 'react-icons/ri';
import { HiLightBulb } from 'react-icons/hi';
import { FaUserFriends } from 'react-icons/fa';

import { AppWrap } from '../../wrapper';

import './Pillars2.scss';

const abouts = [
    { title: 'Intellectual', description: 'I am a good webDev', icon: <HiLightBulb/> },
    { title: 'Emotional', description: 'I am a good webDev', icon: <RiMentalHealthFill/> },
    { title: 'Environmental', description: 'I am a good webDev', icon: <GiEcology/> },
    { title: 'Financial', description: 'I am a good webDev', icon: <GiWallet/> },
    { title: 'Spiritual', description: 'I am a good webDev', icon: < GiOilySpiral/> },
    { title: 'Physical', description: 'I am a good webDev', icon: <GiWeightLiftingUp/> },
    { title: 'Social', description: 'I am a good webDev', icon: <FaUserFriends/>  },
    { title: 'Occupational', description: 'I am a good webDev', icon: <RiTimeFill/>  }
];

const Pillars2 = () => {
  return (
    <div className='app__wrapper app__flex'>
      <motion.h1 
      className='title-text center'
      whileInView={{ opacity:[0,1] }}
      transition={{ duration: 1 }}
      >
      Understand & choose the right pillars in order <br/> to become an <span>all around player</span>
      </motion.h1>
      <div className='app__card-position'>
      {abouts.map((about, index) => (
        <motion.div
        whileInView={{ opacity: [0,1 ]}}
        transition={{ duration: 1 }}
        >
          <motion.div className="app__card"
          key={index}
          whileInView={{ opacity:[0, 0, 1], x:[-40,-20, 0], y:[-40,-20, 0] }}
          transition={{ duration: 1, delay: index * 0.1 }}
          >
            <div className="app__card-content">
              <h3 className="app__card-title">{about.title}</h3>
              <h4 className="app__card-subtitle">{about.description}</h4>
            </div>

            <i className="card-icon">{about.icon}</i>
          </motion.div>
        </motion.div>
      ))};

      </div>
    </div>
  );
};

export default AppWrap(Pillars2,'pillars2');