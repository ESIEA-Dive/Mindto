import React from 'react';
import image from '../../constants/images';

import './Contact.scss';

const Contact = () => {
    return (
      <div className='ContactSectionStyle'>
      <h1>
        Contact Us
      </h1>
      <h2>
        Leave your message and we'll get back to you soon.
      </h2>
      <div className='contactSection__wrapper'>
        <div className='left'>
          <img className='image' src={image.contact} width={500} height={500} ></img>
          <p className='quote'>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
        </div>
        <div className='right'>
          <form>
            <div className="form-group">
            <label htmlFor="name">
              <input
                placeholder='Your name'
                type="text"
                id="name"
                name="name"
              />
            </label>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <input
                  placeholder='Your email'
                  type="email"
                  id="email"
                  name="email"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="subject">
                <input
                  placeholder='Subject'
                  type="text"
                  id="subject"
                  name="subject"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="message">
                <textarea
                  placeholder='Your message'
                  type="text"
                  id="message"
                  name="message"
                />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
   
  )
}

export default Contact;