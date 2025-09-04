import React from "react";

const DashButton = ({ button, className }) => {
  return (
    <div>
      <button className={className}>{button}</button>
    </div>
  );
};

export default DashButton;
