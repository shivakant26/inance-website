import React from "react";
import AboutImage from "../assets/images/about-img.jpg";
import LeftSection from "../components/common/sections/LeftSection";
import { AboutLeftData } from "../utils/mockPage";
import RightSection from "../components/common/sections/RigthSection";
const About = () => {
  return (
    <section>
      <div className="about-us">
        <div className="center-wr">
          <div className="about-us-content">
            <LeftSection
              className="about-text"
              data={AboutLeftData}
              btnlinkClass="link-btn"
            />
            <RightSection
              className="about-image"
              image={AboutImage}
              alt="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
