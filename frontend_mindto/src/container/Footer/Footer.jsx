import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { RiLinkedinFill, RiArrowUpCircleFill } from "react-icons/ri";

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Follow us</h4>
            <p className='separation'></p>
            <div className="social-links">
              <a href="#"><BsFacebook className="logo" /></a>
              <a href="#"><BsTwitter className="logo" /></a>
              <a href="#"><BsInstagram className="logo" /></a>
              <a href="#"><RiLinkedinFill className="logo" /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p className='separation'></p>
            <div>
              <form>
                <label className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                <div className="newsletter">
                  <input placeholder='email...' type="email" id="email" name="email" />
                  <div>
                    <button className="btnsend">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-col">
            <h4>Adress</h4>
            <p className='separation'></p>
            <div>
              <p className="text">Siège social<br />
                New York, Etats-Unis<br />
                Adresse<br />
                x xxxx x x , 12523 x xx</p>
            </div>
          </div>
        </div>
      </div>
      <button className="btn-arrow-up"><RiArrowUpCircleFill size={50} /></button>
      <div className="subfooter">
        © 2022 Mindto, Inc. All rights reserved · <span className='mentions-legales'>Mentions légales</span>
      </div>
    </footer>

  );
};

export default Footer;