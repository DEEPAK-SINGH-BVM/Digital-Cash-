import React from "react";
import ImageData3 from "../../Element-5/ImgData3/ImgData3";
const ImgData8 = () => {
  return (
    <div className="bg-white ">
      <ImageData3
        image={"https://media.dash.org/wp-content/uploads/payments4-1.png"}
        bgColor={"bg-gray-100"}
        title={"Bounty Payments"}
        titleColor={"text-white"}
        paragraph={
          "The Dash Core Group Bug Bounty Program allows developers to discover and resolve bugs before the general public is aware of such bugs. If you find a security vulnerability on any of the in scope"
        }
        button={"Report a Bug"}
        className={
          "cursor-pointer bg-sky-600 hover:border-sky-400 hover:text-sky-400 mt-5 text-white p-4 border border-1  border-white w-[210px]  rounded-sm font-semibold"
        }
        pointsColor={"text-white"}
      />
    </div>
  );
};

export default ImgData8;