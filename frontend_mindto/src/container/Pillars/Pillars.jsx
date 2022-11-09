import React, { useRef, useState } from 'react';
import images from "../../constants/images";

import { GiBrain } from 'react-icons/gi';
import { IoPlayOutline } from 'react-icons/io5';
import { AppWrap } from '../../wrapper';

import './Pillars.scss';

const Pillars = () => {

  const [status, setStatus] = useState(true);

  const videoRef = useRef();

  const handlePlay = () => {
    setStatus(false);
    videoRef.current.play();
  };

  const handlePause = () => {
    setStatus(true);
    videoRef.current.pause();
  };

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
          <div className='pillars-info'>
          {status &&(<div className='pillars-gradient-video'></div>)}
            <video src={images.intellectual_video} muted onClick={handlePause} ref={videoRef} className='pillars-video'></video>
            {status &&(<IoPlayOutline className='pillars-button' onClick={handlePlay}/>)}
            <div className='pillars-reference'>
              <GiBrain className='pillars-reference-logo'/>
              <p className='pillars-reference-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet velit ac lectus malesuada imperdiet. Pellentesque efficitur urna ac felis porttitor blandit. </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AppWrap(Pillars, 'pillars');