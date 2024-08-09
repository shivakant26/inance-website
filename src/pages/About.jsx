import React from "react";
import AboutImage from "../assets/images/about-img.jpg";

const About = () =>{
    return(
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
    )
}

export default About;