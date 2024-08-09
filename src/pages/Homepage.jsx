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
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaMailBulk, FaPhone, FaStar, FaTwitter, FaYoutube } from "react-icons/fa";
const Homepage = () => {
  return (
    <>
      <header>
        <div className="header-top">
          <div className="center-wr">
            <div className="contact-info">
              <a href="">Call : 02020202002</a>
              <a href="">Mail : mail@gmail.com</a>
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
      </header>
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
      <section>
        <div className="about-us">
          <div className="center-wr">
            <div className="about-us-content">
              <div className="about-text">
                <h2>About us</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomisedThere are many
                  variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected
                  humour, or randomised
                </p>
                <a href="">Read more</a>
              </div>
              <div className="about-image">
                <img src={AboutImage} alt="about-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section>
        <div className="our-services">
          <div className="center-wr">
            <h2>Our Services</h2>
            <div className="our-service-cards">
              <div className="service-card">
                <img src={ServiceOne} alt="image" />
                <h3>Maintinance</h3>
                <p>
                  when looking at its layout. The point of using Lorem Ipsum
                  isthat it has a more-or-less normal
                </p>
              </div>
              <div className="service-card">
                <img src={Servicetwo} alt="image" />
                <h3>Electrical</h3>
                <p>
                  when looking at its layout. The point of using Lorem Ipsum
                  isthat it has a more-or-less normal
                </p>
              </div>
              <div className="service-card">
                <img src={Servicethree} alt="image" />
                <h3>Plumbing</h3>
                <p>
                  when looking at its layout. The point of using Lorem Ipsum
                  isthat it has a more-or-less normal
                </p>
              </div>
              <a href="">View More</a>
            </div>
          </div>
        </div>
      </section>
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
      <section>
        <div className="contact-us">
          <div className="center-wr">
            <h2>Contact us</h2>
            <div className="contact-us-inner">
              <div className="contact-form">
                <form>
                  <div className="form-field">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="form-field">
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div className="form-field">
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="form-field">
                    <textarea rows={5} placeholder="message"></textarea>
                  </div>
                  <button className="send-btn">send</button>
                </form>
              </div>
              <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14723.756985404874!2d75.91148249999998!3d22.69330545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723195603281!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{border:0}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
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
      </section>
    </>
  );
};

export default Homepage;
