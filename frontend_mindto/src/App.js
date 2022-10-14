import React from 'react';
//ass plus tard , { useState, useEffect }
import { motion } from 'framer-motion';

import { Contact, Footer, Header, Pillars, Purpose, Team, Transformation } from './container';
import { Navbar } from './components';

import './App.scss';

// const svgVariants = {
//   hidden: { rotate : -360},
//   visible: {
//     rotate: 0,
//     transition: { duration: 1}
//   }
// }

// const pathVariants = {
//   hidden: {
//     opacity: 0,
//     pathLenght: 0
//   },
//   visible: {
//     opacity: 1,
//     pathLenght: 1,
//     transition: {
//       duration: 4,
//       ease: "easeInOut"
//     }
//   }
// }

const App = () => {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000 );
  // }, []);

  return (
    <div className='app'>
      {/* {
        loading ?
        
    <div className='app__container app__flex'>
      <motion.svg 
        className="svg"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 250 250"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
          >
          <path  
          d="M227.86,122.77l-22.16-22.76,13.68,.18c13.36,.18,24.33-10.51,24.51-23.87h0c.18-13.36-10.51-24.33-23.87-24.51l-24.19-.32-31.77-.42,9.8-9.55c9.57-9.32,9.78-24.64,.45-34.21h0c-9.32-9.57-24.64-9.78-34.21-.45l-17.33,16.88-22.76,22.16,.18-13.68c.18-13.36-10.51-24.33-23.87-24.51h0c-13.36-.18-24.33,10.51-24.51,23.87l-.32,24.19-.42,31.77-9.55-9.8c-9.32-9.57-24.64-9.78-34.21-.45h0c-9.57,9.32-9.78,24.64-.45,34.21l16.88,17.33,22.16,22.76-13.68-.18c-13.36-.18-24.33,10.51-24.51,23.87h0c-.18,13.36,10.51,24.33,23.87,24.51l24.19,.32,31.77,.42-9.8,9.55c-9.57,9.32-9.78,24.64-.45,34.21h0c9.32,9.57,24.64,9.78,34.21,.45l17.33-16.88,22.76-22.16-.18,13.68c-.18,13.36,10.51,24.33,23.87,24.51h0c13.36,.18,24.33-10.51,24.51-23.87l.32-24.19,.42-31.77,9.55,9.8c9.32,9.57,24.64,9.78,34.21,.45h0c9.57-9.32,9.78-24.64,.45-34.21l-16.88-17.33Zm-102.06,61.7c-32.4,0-58.67-26.27-58.67-58.67,0-32.4,26.27-58.67,58.67-58.67,32.4,0,58.67,26.27,58.67,58.67,0,32.4-26.27,58.67-58.67,58.67Z"
            />
      </motion.svg>
      </div>

        :

        <> */}
          <Navbar />
          <Header />
          <Purpose />
          <Pillars />
          <Transformation />
          <Team />
          <Contact />
          <Footer />
        {/* </>
      } */}
    </div>
  );
}

export default App;