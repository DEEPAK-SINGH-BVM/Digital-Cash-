import React from "react";
import ImageData from "../../Element-3/ImgData2/ImgData";
// import "./imgData.css";
const ImgData2 = () => {
  return (
    <div>
      {/* */}
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
      />
    </div>
  );
};
export default ImgData2;
