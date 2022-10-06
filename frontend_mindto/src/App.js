import React from 'react';

import { Contact, Footer, Header, Pillars, Purpose, Team, Transformation } from './container';
import { Navbar } from './components';

import './App.scss';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Purpose />
      <Pillars />
      <Transformation />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;