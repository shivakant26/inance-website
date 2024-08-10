import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Hamburger from 'hamburger-react'
import Menu from "./common/Menu";
const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const handleMenuItemClick = () => {
    setOpen(false); 
  };
  return (
    <header>
      <div className="header-top">
        <div className="center-wr">
          <div className="contact-info d-flex">
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
          <div className="top-header-inner d-flex">
            <a href="">Inance</a>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            {
              isOpen && <Menu type="mobile" onMenuItemClick={handleMenuItemClick}/>
            }
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
