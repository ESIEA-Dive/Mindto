import React from 'react';

import { GiEcology,GiWallet, GiOilySpiral, GiWeightLiftingUp } from 'react-icons/gi';
import { RiMentalHealthFill, RiTimeFill } from 'react-icons/ri';
import { HiLightBulb } from 'react-icons/hi';
import { FaUserFriends } from 'react-icons/fa';

import { AppWrap } from '../../wrapper';

import './Pillars.scss';

const Pillars = () => {
  return (
    <div className='pillars-container'>
        <p className='pillars-title'>The Pillars</p>
        <p className='pillars-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet vehicula elit a accumsan. 
            Duis at urna ut quam auctor pharetra quis nec tortor. Nunc non eros ut sem aliquet aliquam ac nec magna.</p>
        <div className='pillars-content'>
          <div className='pillars-all-names'>
            <div className='pillars-case'>
              <p className='pillars-name'>Intellectual</p>
            </div>
            <div className='pillars-case'>
              <p className='pillars-name'>Emotional</p>
            </div>
            <div className='pillars-case'>
              <p className='pillars-name'>Environmental</p>
            </div>
            <div className='pillars-case'>
              <p className='pillars-name'>Financial</p>
            </div>
            <div className='pillars-case'>
              <p className='pillars-name'>Spiritual</p>
            </div>
            <div className='pillars-case'>
              <p className='pillars-name'>Physical</p>
            </div>
            <div className='pillars-case'>
              <p className='pillars-name'>Social</p>
            </div>
            <div className='pillars-case'>
              <p className='pillars-name'>Occupational</p>
            </div>
          </div>
          <div className='pillars-info'></div>
        </div>
    </div>
  );
};

export default AppWrap(Pillars, 'pillars');