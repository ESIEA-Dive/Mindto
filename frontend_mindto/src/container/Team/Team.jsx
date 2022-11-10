import React, { useState } from 'react';

import { AppWrap } from '../../wrapper';
import images from '../../constants/images';
import { motion } from "framer-motion"
import { BsInstagram, BsLinkedin } from "react-icons/bs";

import './Team.scss';

const Team = () => {

  const [status, setStatus] = useState(0);
  const members = [
    {
      name: "Member ONE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      job: "job one",
      picture: images.testimonial_one,
    },
    {
      name: "Member TWO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      job: "job two",
      picture: images.testimonial_two,
    },
    {
      name: "Member THREE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      job: "job three",
      picture: images.testimonial_three,
    },
    {
      name: "Member FOUR",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      job: "job four",
      picture: images.testimonial_four,
    },

  ];

  return (
    <div className='team-container'>
      <motion.p
        className='title'
        whileInView={{ opacity: [0, 1], x: [-20, 0], y: [-20, 0], transition: { duration: 0.5 } }}
      >
        Team
      </motion.p>
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
              <div className='person-socials'>
                <BsInstagram className='person-social-logo'/>
              <BsLinkedin className='person-social-logo'/>
              </div>
              
            </motion.div>
            )}
          </div>
        </motion.div>))}
      </div>
    </div>
  );
};

export default AppWrap(Team, 'team');