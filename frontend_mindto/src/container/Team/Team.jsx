import React from 'react';

import { AppWrap } from '../../wrapper';

import './Team.scss';

const Team = () => {
  return (
    <div className='team-container'>
      <p className='title'>
        Team
      </p>
      <div className='team-group'>
        <div className='team-person'>
          <div className='person-picture'></div>
          <div className='person-bio'>
            <p>Guillaume Dive</p>
            <p>Founder</p>
          </div>
        </div>
        <div className='team-person'>
          <div className='person-picture'></div>
          <div className='person-bio'>
            <p>Guillaume Dive</p>
            <p>Founder</p>
          </div>
        </div>
        <div className='team-person'>
          <div className='person-picture'></div>
          <div className='person-bio'>
            <p>Guillaume Dive</p>
            <p>Founder</p>
          </div>
        </div>
        <div className='team-person'>
          <div className='person-picture'></div>
          <div className='person-bio'>
            <p>Guillaume Dive</p>
            <p>Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Team, 'team');