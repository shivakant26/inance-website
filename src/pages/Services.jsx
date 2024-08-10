import React from "react";
import Button from "../components/common/Button";
import ServiceCards from "../components/common/ServiceCards";
import { ServiceCardData } from "../utils/mockData";
const Service = () => {
  return (
    <section>
      <div className="our-services">
        <div className="center-wr">
          <h2>Our Services</h2>
          <div className="our-service-cards d-flex">
            {ServiceCardData.map((item, index) => {
              return <ServiceCards item={item} index={index} />;
            })}
            <Button type="link" className="link-btn">
              View More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
