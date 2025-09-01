import React from "react";
import ImageData from "../../Element-3/ImgData2/ImgData";
// import "./imgData.css";
const ImgData3 = () => {
  return (
    <div>
      {/* */}
      <ImageData
        image={"https://media.dash.org/wp-content/uploads/developers.svg"}
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
        className={
          "cursor-pointer hover:border-sky-400 hover:text-sky-400 mt-5 text-white p-4 border border-1  border-white w-[210px]  rounded-sm font-semibold"
        }
        button={"Regulatory Information"}
      />
    </div>
  );
};
export default ImgData3;