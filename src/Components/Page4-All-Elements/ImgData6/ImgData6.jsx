import React from "react";
import ImageData from "../../Element-3/ImgData2/ImgData";
// import "./imgData.css";
const ImgData6 = () => {
  return (
    <div>
      {/* */}
      <ImageData
        image={
          "https://media.dash.org/wp-content/uploads/homepageimage-3-1.png"
        }
        bgColor={"bg-sky-600"}
        title={"DashPay Wallet"}
        titleColor={"text-white"}
        paragraph={
          "The first application built using Dash Platform is the DashPay wallet for Android and iOS. Learn more about the most user-friendly crypto wallet!"
        }
        paragraphColor={"text-white"}
        paragraphColor2={"text-white"}
        button={"Learn More"}
      />
    </div>
  );
};
export default ImgData6;
