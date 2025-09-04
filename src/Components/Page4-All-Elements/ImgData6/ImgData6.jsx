import React from "react";
import ImageData from "../../Element-3/ImgData2/ImgData";
const ImgData6 = () => {
  return (
    <div>
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
        className={
          "cursor-pointer hover:border-sky-400 hover:text-sky-400 mt-5 text-white p-4 border border-1  border-white w-[210px]  rounded-sm font-semibold"
        }
      />
    </div>
  );
};
export default ImgData6;
