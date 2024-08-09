import React from "react";
import BannerImage from "../assets/images/slider-img.png";
import AboutImage from "../assets/images/about-img.jpg";
import ProfessionlImage from "../assets/images/professional-img.png";
import ServiceOne from "../assets/images/s1.png";
import Servicetwo from "../assets/images/s2.png";
import Servicethree from "../assets/images/s3.png";
import Client1 from "../assets/images/client-1.jpg";
import { GiAutoRepair } from "react-icons/gi";
import { MdSelfImprovement, MdDomainAdd } from "react-icons/md";
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaMailBulk, FaPhone, FaPhoneAlt, FaStar, FaTwitter, FaYoutube } from "react-icons/fa";
import Contactus from "./Contactus";
import Service from "./Services";
import About from "./About";
const Homepage = () => {
  return (
    <>
      {/* <header>
        <div className="header-top">
          <div className="center-wr">
            <div className="contact-info">
                <div>
                <span><FaPhoneAlt /></span>
              <a href="">Call : 02020202002</a>

                </div>
                <div>
                <span><FaEnvelope /></span>

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
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      <section>
        <div className="banner">
          <div className="center-wr">
            <div className="banner-content">
              <div className="benner-text">
                <h2>
                  Repair and
                  <br /> Maintenance
                  <br /> Services
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  harum voluptatem adipisci. Quos molestiae saepe dicta nobis
                  pariatur, tempora iusto, ad possimus soluta hic praesentium
                  mollitia consequatur beatae, aspernatur culpa.
                </p>
                <a href="">Contact us</a>
              </div>
              <img src={BannerImage} alt="banner-image" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="feature-section">
          <div className="center-wr">
            <div className="feature-cards">
              <div className="feature-card">
                <GiAutoRepair />
                <h3>Repaier</h3>
              </div>
              <div className="feature-card">
                <MdSelfImprovement />
                <h3>Improve</h3>
              </div>
              <div className="feature-card">
                <MdDomainAdd />
                <h3>Maintain</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <section>
        <div className="we-provide">
          <div className="center-wr">
            <div className="we-provide-content">
              <div className="we-image">
                <img src={ProfessionlImage} alt="professional-img" />
              </div>
              <div className="we-provide-text">
                <h2>We Provide Professional Home Services.</h2>
                <p>
                  randomised words which don't look even slightly believable. If
                  you are going to use a passage of Lorem Ipsum, you need to be
                  sure there isn't anything embarrassing hidden in the middle of
                  text. All randomised words which don't look even slightly
                </p>
                <a href="">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Service />
      <section>
        <div className="what-say">
          <div className="center-wr">
            <h2>What Our Clients Say</h2>
            <div className="what-say-clinets">
              <div className="clients-card">
                <div className="profile">
                  <img src={Client1} alt="profile-img" />
                  <div className="name-rating">
                    <p>jorck morik</p>
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p>
                  chunks as necessary, making this the first true generator on
                  the Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum
                </p>
              </div>
              <div className="clients-card">
                <div className="profile">
                  <img src={Client1} alt="profile-img" />
                  <div className="name-rating">
                    <p>jorck morik</p>
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p>
                  chunks as necessary, making this the first true generator on
                  the Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contactus />
      {/* <section>
        <div className="get-in-touch">
            <div className="center-wr">
                <h2>Get in touch</h2>
                <div className="touch-contact">
                    <div className="location">
                        <span><FaLocationArrow /></span>
                        <p>123 , Maxico city London</p>
                    </div>
                    <div className="call">
                       <span><FaPhone /></span> 
                        <p>0123456789</p>
                    </div>
                    <div className="mail">
                        <span><FaEnvelope /></span>
                        <p>domain@gmail.com</p>
                    </div>
                </div>
                <div className="follow-us">
                    <h3>Follow Us</h3>
                    <ul>
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
      </section> */}
    </>
  );
};

export default Homepage;
