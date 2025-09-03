import React from "react";

const DashBox = ({ dashImg, dashText, paragraph }) => {
  return (
    <div className="box-hover duration-500  hover:shadow-2xl flex-col  cursor-pointer">
      <img src={dashImg} alt="" className="h-[150px]" />

      <span className="text-white font-bold">{dashText}</span>
      <span className="text-white font-semibold">{paragraph}</span>
    </div>
  );
};

export default DashBox;
