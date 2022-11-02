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
          <div className='pillars-content-left'>
            <div className='pillars-content-left-column'>
              <div className='pillars-content-left-row'>
                <div className='pillars-content-left-circle intellectual'></div>
                <p className='pillars-content-left-pillar'>Intellectual</p>
              </div>
              <div className='pillars-content-left-row'>
                <div className='pillars-content-left-circle environmental'></div>
                <p className='pillars-content-left-pillar'>Environmental</p>
              </div>
              <div className='pillars-content-left-row'>
                <div className='pillars-content-left-circle financial'></div>
                <p className='pillars-content-left-pillar'>Financial</p>
              </div> 
              <div className='pillars-content-left-row'>
                <div className='pillars-content-left-circle spiritual'></div>
                <p className='pillars-content-left-pillar'>Spiritual</p>
              </div> 
              <div className='pillars-content-left-row'>
                <div className='pillars-content-left-circle physical'></div>
                <p className='pillars-content-left-pillar'>Physical</p>
              </div>  
              <div className='pillars-content-left-row'>
                <div className='pillars-content-left-circle social'></div>
                <p className='pillars-content-left-pillar'>Social</p>
              </div>  
              <div className='pillars-content-left-row'>
                <div className='pillars-content-left-circle occupational'></div>
                <p className='pillars-content-left-pillar'>Occupational</p>
              </div>  
            </div>
          </div>
          <div className='pillars-content-right'>
            <div className='pillars-content-right-box intellectual'>
              <HiLightBulb className='pillars-logo'/>
              <p className='pillars-intellectual-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet vehicula elit a accumsan. 
            Duis at urna ut quam auctor pharetra quis nec tortor. Nunc non eros ut sem aliquet aliquam ac nec magna.</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AppWrap(Pillars, 'pillars');