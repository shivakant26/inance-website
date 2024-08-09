import React from "react";
import ServiceOne from "../assets/images/s1.png";
import Servicetwo from "../assets/images/s2.png";
import Servicethree from "../assets/images/s3.png";
const Service = () =>{
    return(
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
    )
}

export default Service;