import React, { useRef, useState } from 'react';
import images from "../../constants/images";
import { motion } from "framer-motion"

import { GiInspiration, GiEcology, GiReceiveMoney, GiOilySpiral, GiMuscleUp, GiThreeFriends } from 'react-icons/gi';
import { RiMentalHealthFill } from 'react-icons/ri';
import { IoPlayOutline, IoTimerOutline, IoPauseOutline } from 'react-icons/io5';

import { AppWrap } from '../../wrapper';

import './Pillars.scss';

const Pillars = () => {

  const [status, setStatus] = useState(true);
  const [pillar_number, setPillarNumber] = useState(0);

  const videoRef = useRef();

  const handlePlay = () => {
    setStatus(false);
    videoRef.current.play();
  };

  const handlePause = () => {
    setStatus(true);
    videoRef.current.pause();
  };

  const pillars = [
    {
      title: "Intellectual",
      video: images.intellectual_video,
      logo: <GiInspiration className='pillars-reference-logo' />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet vehicula elit a accumsan. Duis at urna ut quam auctor pharetra quis nec tortor. Nunc non eros ut sem aliquet aliquam ac nec magna."
    },
    {
      title: "Emotional",
      video: images.emotional_video,
      logo: <RiMentalHealthFill className='pillars-reference-logo' />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet vehicula elit a accumsan. Duis at urna ut quam auctor pharetra quis nec tortor. Nunc non eros ut sem aliquet aliquam ac nec magna. "
    },
    {
      title: "Environmental",
      video: images.environmental_video,
      logo: <GiEcology className='pillars-reference-logo' />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet vehicula elit a accumsan.Duis at urna ut quam auctor pharetra quis nec tortor. Nunc non eros ut sem aliquet aliquam ac nec magna. "
    },
    {
      title: "Financial",
      video: images.financial_video,
      logo: <GiReceiveMoney className='pillars-reference-logo' />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet vehicula elit a accumsan. Duis at urna ut quam auctor pharetra quis nec tortor. Nunc non eros ut sem aliquet aliquam ac nec magna. "
    },
    {
      title: "Spiritual",
      video: images.spiritual_video,
      logo: <GiOilySpiral className='pillars-reference-logo' />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet vehicula elit a accumsan. Duis at urna ut quam auctor pharetra quis nec tortor. Nunc non eros ut sem aliquet aliquam ac nec magna. "
    },
    {
      title: "Physical",
      video: images.physical_video,
      logo: <GiMuscleUp className='pillars-reference-logo' />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet vehicula elit a accumsan. Duis at urna ut quam auctor pharetra quis nec tortor. Nunc non eros ut sem aliquet aliquam ac nec magna. "
    },
    {
      title: "Social",
      video: images.social_video,
      logo: <GiThreeFriends className='pillars-reference-logo' />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet vehicula elit a accumsan. Duis at urna ut quam auctor pharetra quis nec tortor. Nunc non eros ut sem aliquet aliquam ac nec magna. "
    },
    {
      title: "Occupational",
      video: images.occupational_video,
      logo: <IoTimerOutline className='pillars-reference-logo' />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet vehicula elit a accumsan. Duis at urna ut quam auctor pharetra quis nec tortor. Nunc non eros ut sem aliquet aliquam ac nec magna. "
    },

  ];


  return (
    <div className='pillars-container'>
      <p className='pillars-title'>The Pillars</p>
      <p className='pillars-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet vehicula elit a accumsan.
        Duis at urna ut quam auctor pharetra quis nec tortor. Nunc non eros ut sem aliquet aliquam ac nec magna.</p>
      <div className='pillars-content'>
        <div className='pillars-all-names'>
          {pillars.map((pillar, index) => (<motion.div
            onClick={() => {
              setPillarNumber(index);
              handlePause();
            }}
            //onHoverStart={() => setPillarNumber(index)}
            key={index}
          >
            {pillar_number !== index && <p className='pillars-name'>{pillar.title}</p>}
            {pillar_number === index && <p className='pillars-name selected'>{pillar.title}</p>}
          </motion.div>
          ))}
        </div>
        {pillars.map((pillar, index) => {
          if (pillar_number === index)
            return <div className='pillars-info'>
              {!status && (<div className='pillars-logo-background'></div>)}
              {pillar.logo}
              {status && (<p className='pillars-reference-text'>{pillar.description}</p>)}
              {status && (<IoPlayOutline className='pillars-button pillars-button-play' onClick={handlePlay} />)}
              {!status && (<IoPauseOutline className='pillars-button' onClick={handlePause} />)}
              {status && (<div className='pillars-gradient-video' onClick={handlePlay}></div>)}
              <video src={pillar.video} muted onClick={handlePause} ref={videoRef} className='pillars-video'></video>
            </div>
          else
            return null;
        })}
      </div>
    </div>
  );
};

export default AppWrap(Pillars, 'pillars');