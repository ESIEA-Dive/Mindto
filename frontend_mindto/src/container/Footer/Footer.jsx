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
            <h4>Download App</h4>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <a href="#" target="_blank" className="app-btn google-btn" role="button">
              <span className="app-button-subtitle">Download on</span>
              <span className="app-button-title">Google Play</span>
            </a>

            <a href="#" target="_blank" className="app-btn apple-btn" role="button">
              <span className="app-button-subtitle">Download on</span>
              <span className="app-button-title">App Store</span>
            </a>

            <h4>Follow us</h4>
            <div className="social-links">
              <a href="#"><BsFacebook className="logo" /></a>
              <a href="#"><BsTwitter className="logo" /></a>
              <a href="#"><BsInstagram className="logo" /></a>
              <a href="#"><RiLinkedinFill className="logo" /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Adress</h4>
            <div>
              <p className="text">Siège social<br />
                New York, Etats-Unis<br />
                Adresse<br />
                x xxxx x x , 12523 x xx</p>
            </div>
            <h4>Newsletter</h4>
            <div>
              <form>
                <label className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</label>
                <div className="newsletter">
                  <input
                    placeholder='email...'
                    type="email"
                    id="email"
                    name="email" />
                  <div>
                    <button className="btnsend">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-col">
            <div className="sections">
              <div>
                <h4>Section 1</h4>
                <ul>
                  <li><a href="#">titre 1</a></li>
                  <li><a href="#">titre 2</a></li>
                  <li><a href="#">titre 3</a></li>
                  <li><a href="#">titre 4</a></li>
                  <li><a href="#">titre 5</a></li>
                </ul>
              </div>
              <div>
                <h4>Section 2</h4>
                <ul>
                  <li><a href="#">titre 1</a></li>
                  <li><a href="#">titre 2</a></li>
                  <li><a href="#">titre 3</a></li>
                  <li><a href="#">titre 4</a></li>
                  <li><a href="#">titre 5</a></li>
                  <li><a href="#">titre 6</a></li>
                  <li><a href="#">titre 7</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn-arrow-up"><RiArrowUpCircleFill size={50} /></button>
      <div className="subfooter">
        © 2022 Mindto, Inc. All rights reserved.
      </div>
    </footer>

  );
};

export default Footer;