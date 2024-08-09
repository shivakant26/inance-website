import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="center-wr">
          <div className="contact-info">
            <div>
              <span>
                <FaPhoneAlt />
              </span>
              <a href="">Call : 02020202002</a>
            </div>
            <div>
              <span>
                <FaEnvelope />
              </span>

              <a href="">Mail : mail@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="center-wr">
          <div className="top-header-inner">
            <a href="">Inance</a>
            <div className="menu">
              <ul>
                <li>
                  <Link to="">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/service">Services</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
