import React, { useState } from 'react';

import { AppWrap } from '../../wrapper';
import images from '../../constants/images';
import { motion } from "framer-motion"

import './Team.scss';

const Team = () => {

  const [status, setStatus] = useState(0);
  const members = [
    {
      name: "Member ONE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      job: "job one",
      picture: images.testimonial_one,
    },
    {
      name: "Member TWO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      job: "job two",
      picture: images.testimonial_two,
    },
    {
      name: "Member THREE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      job: "job three",
      picture: images.testimonial_three,
    },
    {
      name: "Member FOUR",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      job: "job four",
      picture: images.testimonial_four,
    },

  ];

  return (
    <div className='team-container'>
      <p className='title'>
        Team
      </p>
      <div className='team-group'>
        {members.map((member, index) => (<motion.div
          className='team-person'
          whileInView={
            status === index ?
              { width: '46%', opacity: 1, transition: { duration: 0.5 } }
              :
              { width: '18%', opacity: 0.3, transition: { duration: 0.5 }, fontSize: 0.7 }
          }
          onClick={() => setStatus(index)}
          onHoverStart={() => setStatus(index)}
        >
          <img className='person-picture-img' src={member.picture} alt='member'></img>
          <div className='person-bio'>
            <motion.div
              whileInView={{
                opacity: [0, 1],
                transition: { duration: 1 }
              }}
              onClick={() => setStatus(index)}
              onHoverStart={() => setStatus(index)}
            >
              <p className='person-name'>{member.name}</p>
              <p className='person-status'>{member.job}</p>
            </motion.div>
            {status == index && (<motion.div
              whileInView={{
                opacity: [0, 1],
                transition: { duration: 2 }
              }}
              onClick={() => setStatus(index)}
              onHoverStart={() => setStatus(index)}
            >
              <p className='person-description'>{member.description}</p>
            </motion.div>
            )}
          </div>
        </motion.div>))}
      </div>
    </div>
  );
};

export default AppWrap(Team, 'team');