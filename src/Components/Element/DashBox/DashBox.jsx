import React from "react";

const DashBox = ({ image, text }) => {
  return (
    <div className="box-hover">
      <a href="">
        <div className="image">
          <img src={image} alt="" className="image" />
        </div>
        <span className="text-gray-300">{text}</span>
      </a>
    </div>
  );
};

export default DashBox;
