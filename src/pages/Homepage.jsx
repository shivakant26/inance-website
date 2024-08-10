import React from "react";
import BannerImage from "../assets/images/slider-img.png";
import ProfessionlImage from "../assets/images/professional-img.png";
import Client1 from "../assets/images/client-1.jpg";
import { GiAutoRepair } from "react-icons/gi";
import { MdSelfImprovement, MdDomainAdd } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Contactus from "./Contactus";
import Service from "./Services";
import About from "./About";
import Button from "../components/common/Button";
import ClientSlider from "../components/ClientSlider";
const Homepage = () => {
  return (
    <>
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
                <Button type="link" className="read-btn link-btn">
                  Read more
                </Button>
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
              <ClientSlider />
              {/* <div className="clients-card">
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
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Contactus />
    </>
  );
};

export default Homepage;
