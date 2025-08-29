import React from "react";
import ImageData from "../../Element-3/ImgData2/ImgData";
// import "./imgData.css";
const ImgData3 = () => {
  return (
    <div>
      {/* */}
      <ImageData
        image={"https://media.dash.org/wp-content/uploads/community-1.svg"}
        bgColor={"bg-sky-600"}
        title={"Regulation and Compliance"}
        titleColor={"text-white"}
        paragraph={
          "Dash is not a security and offers greater transparency and less risk than Bitcoin with regards to privacy."
        }
        paragraph2={
          "Access a unified source of accurate information on Dash compliance and learn how the increasing number of regulations that affect cryptocurrencies around the world apply to Dash."
        }
        paragraphColor={"text-white"}
        paragraphColor2={"text-white"}
        button={"Regulatory Information"}
      />
    </div>
  );
};
export default ImgData3;
