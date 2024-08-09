import React from "react";
const Button = ({ children, type ,className }) => {
  return (
    <>
      {type === "link" ? (
        <>
          <a href="" className={className}>{children}</a>
        </>
      ) : (
        <>
          <button className={className}>{children}</button>
        </>
      )}
    </>
  );
};

export default Button;
