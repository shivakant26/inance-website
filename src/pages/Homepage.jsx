import React from "react";
import BannerImage from "../assets/images/slider-img.png";
import ProfessionlImage from "../assets/images/professional-img.png";
import Contactus from "./Contactus";
import Service from "./Services";
import About from "./About";
import ClientSlider from "../components/ClientSlider";
import { featureCardData } from "../utils/mockData";
import FeatureCard from "../components/common/FeatureCard";
import RightSection from "../components/common/sections/RigthSection";
import LeftSection from "../components/common/sections/LeftSection";
import { weProvideData } from "../utils/mockPage";
const Homepage = () => {
  return (
    <>
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
      <div className="feature-section">
        <div className="center-wr">
          <div className="feature-cards">
            {featureCardData.map((item, index) => {
              return <FeatureCard item={item} index={index} />;
            })}
          </div>
        </div>
      </div>
      <About />
      <div className="we-provide">
        <div className="center-wr">
          <div className="we-provide-content">
            <RightSection
              id="we-provide"
              className="we-image"
              image={ProfessionlImage}
              alt="professional-img"
            />
            <LeftSection
              className="we-provide-text"
              data={weProvideData}
              btnlinkClass="read-btn link-btn"
            />
          </div>
        </div>
      </div>
      <Service />
      <div className="what-say">
        <div className="center-wr">
          <h2>What Our Clients Say</h2>
          <div className="what-say-clinets">
            <ClientSlider />
          </div>
        </div>
      </div>
      <Contactus />
    </>
  );
};

export default Homepage;
