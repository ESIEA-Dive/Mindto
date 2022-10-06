import React, {  } from 'react';
//useState
import { } from 'react-icons/';

//import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  return (
   <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.logo} alt='logo'></img>
    </div>

      <ul className='app__navbar-links'>
          {['home', 'purpose', 'pillars', 'transformation', 'team', 'contact'].map ((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
              <div />
            </li>
          ))}
      </ul>
  </nav>
  );
};

export default Navbar;