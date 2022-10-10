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
        <h1>An innovative <br></br>technology, to engage <br></br><span className="green">young athletes</span> on <br></br>mental development</h1>
        <div className="signin">
          <button className="btn">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Header,'home');