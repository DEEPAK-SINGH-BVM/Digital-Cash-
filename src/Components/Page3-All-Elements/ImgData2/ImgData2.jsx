import React from "react";
import ImageData from "../../Element-3/ImgData2/ImgData";
// import "./imgData.css";
const ImgData2 = () => {
  return (
    <div>
      <ImageData
        image={"https://media.dash.org/wp-content/uploads/community-1.svg"}
        bgColor={"bg-blue-900"}
        title={"Comprehensive Services"}
        titleColor={"text-sky-500"}
        paragraph={
          "Financial services in cryptocurrency are a critical component to increase flexibility, efficiency, security, and visibility through reporting."
        }
        paragraph2={
          "Financial services in cryptocurrency are a critical component to increase flexibility, efficiency, security, and visibility through reporting."
        }
        paragraphColor={"text-white"}
        paragraphColor2={"text-white"}
        button={"Financial Service"}
        className={
          "cursor-pointer hover:border-sky-400 hover:text-sky-400 mt-5 text-white p-4 border border-1  border-white w-[210px]  rounded-sm font-semibold"
        }
      />
    </div>
  );
};
export default ImgData2;
