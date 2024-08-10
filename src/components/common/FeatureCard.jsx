import React from "react";
const FeatureCard = ({ item, index }) => {
  return (
    <div className="feature-card" key={index}>
      <item.icon />
      <h3>{item.title}</h3>
    </div>
  );
};
export default FeatureCard;
