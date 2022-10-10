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
          <h3>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </h3>
        </div>
        <div className='right'>
          <form>
            <div className="form-group">
            <label htmlFor="name">
              Your Name
              <input
                type="text"
                id="name"
                name="name"
              />
            </label>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Your Email
                <input
                  type="email"
                  id="email"
                  name="email"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="subject">
                Subject
                <input
                  type="text"
                  id="subject"
                  name="subject"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="message">
                Your message
                <textarea
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