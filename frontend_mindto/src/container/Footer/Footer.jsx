import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { images } from '../../constants';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-col">
        <div className='footer-mindto-logo'>
          <img src={images.mindto_logo_green} alt='mindto-logo' />
        </div>
        <p className="copyright">© 2022 by Mindto - All rights reserved</p>
        <p className="mentionslegales"><a>Terms and conditions</a></p>
      </div>
      <div className="footer-col">
        <h4>Follow us</h4>
        <p className='separation'></p>
        <div className="social-links">
          <a href="#"><BsInstagram className="logo" /></a>
          <a href="#"><RiLinkedinFill className="logo" /></a>
          <a href="#"><BsFacebook className="logo" /></a>
          <a href="#"><BsTwitter className="logo" /></a>
        </div>
      </div>
      <div className="footer-col">
        <h4>Newsletter</h4>
        <p className='separation'></p>
        <form>
          <label>Sign up to receive MindTo news and updates.</label>
          <div className="newsletter">
            <input placeholder='Email...' type="email" id="email" name="email" />
            <button className="btnsend">Subscribe</button>
          </div>
        </form>
      </div>
    </footer>

  );
};

export default Footer;