import React from 'react';

import { GiEcology,GiWallet, GiOilySpiral, GiWeightLiftingUp } from 'react-icons/gi';
import { RiMentalHealthFill, RiTimeFill } from 'react-icons/ri';
import { HiLightBulb } from 'react-icons/hi';
import { FaUserFriends } from 'react-icons/fa';

import { AppWrap } from '../../wrapper';

import './Pillars.scss';

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

const Pillars = () => {
  return (
    <div className='app__wrapper app__flex'>
      <div className='app__card-position'>
      {abouts.map((about, index) => (
        <div className="app__card"
        key= {index}>
          <div className="app__card-content">
            <h3 className="app__card-title">{about.title}</h3>
            <h4 className="app__card-subtitle">{about.description}</h4>
          </div>

          <i className="card-icon">{about.icon}</i>
        </div>
      ))};

      </div>
    </div>
  );
};

export default AppWrap(Pillars,'pillars');