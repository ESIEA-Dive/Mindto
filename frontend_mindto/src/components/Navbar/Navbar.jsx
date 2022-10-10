import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { HiMenuAlt4, HiX} from 'react-icons/hi';
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {

  const [navbar, setNavbar] = useState(false); 
  const [show, setShow] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    
   <nav className={navbar ? 'app__navbar active' : 'app__navbar'}>
    <div className='app__navbar-logo'>
      <img src={images.logo} alt='logo'></img>
    </div>

      <ul className={navbar ? 'app__navbar-links active' : 'app__navbar-links'}>
          {['home', 'purpose','header', 'pillars', 'transformation', 'team', 'contact'].map ((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
              <div />
            </li>
          ))}
      </ul>

      <div className={navbar ? 'app__navbar-menu active' : 'app__navbar-menu'}>
        <HiMenuAlt4 onClick={() => setShow(true)}/>

        {show && (
            <motion.div
              whileInView={{ x: [200, 0] }}
              transition={{ duration : 0.8, ease : 'easeOut' }}
            >
              <HiX onClick={() => setShow(false)} />
              <ul>
              {['home', 'purpose','header', 'pillars', 'transformation', 'team', 'contact'].map ((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setShow(false)}>{item}</a>
                </li>
              ))}
              </ul>
            </motion.div>
          )
        }
      </div>
  </nav>
  );
};

export default Navbar;