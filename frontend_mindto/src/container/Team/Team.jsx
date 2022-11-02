import React from 'react';

import { AppWrap } from '../../wrapper';
import images from '../../constants/images';

import './Team.scss';

const Team = () => {
  return (
    <div className='team-container'>
      <p className='title'>
        Team
      </p>
      <div className='team-group'>
        <div className='team-person'>
          <div className='person-picture'>
            <img className='person-picture-img' src={images.member} alt='member'></img>
          </div>
          <div className='person-bio'>
            <p className='person-name'>Guillaume Dive</p>
            <p className='person-status'>Founder</p>
          </div>
        </div>
        <div className='team-person'>
          <div className='person-picture'>
            <img className='person-picture-img' src={images.member} alt='member'></img>
          </div>
          <div className='person-bio'>
            <p className='person-name'>Guillaume Dive</p>
            <p className='person-status'>Founder</p>
          </div>
        </div><div className='team-person'>
          <div className='person-picture'>
            <img className='person-picture-img' src={images.member} alt='member'></img>
          </div>
          <div className='person-bio'>
            <p className='person-name'>Guillaume Dive</p>
            <p className='person-status'>Founder</p>
          </div>
        </div><div className='team-person'>
          <div className='person-picture'>
            <img className='person-picture-img' src={images.member} alt='member'></img>
          </div>
          <div className='person-bio'>
            <p className='person-name'>Guillaume Dive</p>
            <p className='person-status'>Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Team, 'team');