import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <section>
      <div className="get-in-touch">
        <div className="center-wr">
          <h2>Get in touch</h2>
          <div className="touch-contact d-flex">
            <div className="location">
              <span>
                <FaLocationArrow />
              </span>
              <p>123 , Maxico city London</p>
            </div>
            <div className="call">
              <span>
                <FaPhone />
              </span>
              <p>0123456789</p>
            </div>
            <div className="mail">
              <span>
                <FaEnvelope />
              </span>
              <p>domain@gmail.com</p>
            </div>
          </div>
          <div className="follow-us">
            <h3>Follow Us</h3>
            <ul className="d-flex">
              <li>
                <a href="">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
