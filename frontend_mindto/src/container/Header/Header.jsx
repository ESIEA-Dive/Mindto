import React from 'react';
import images from '../../constants/images';

import { AppWrap } from '../../wrapper';

import './Header.scss';

const Header = () => {
  return (
    <div className='main'>
      <div className="overlay"></div>
      <video src={images.header_video} autoPlay loop muted />
      <div className="content">
        <h1>An innovative educational platform <br/> to engage <span className='green'>student athletes</span> on <br/> mental development and well being</h1>
      </div>
    </div>
  );
};

export default AppWrap(Header,'home');