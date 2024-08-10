import React from "react";
const ServiceCards = ({item,index}) => {
  return (
    <div className="service-card" key={index}>
      <img src={item.image} alt="image" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default ServiceCards;
