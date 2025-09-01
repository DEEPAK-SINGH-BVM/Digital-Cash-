import React from "react";
import ImageData4 from "../../Element-5/ImgData4/ImgData4";
// import "./ImgData2.css"
const ImgData5 = () => {
  return (
    <div>
      <ImageData4
        image={"https://media.dash.org/wp-content/uploads/ineligibile.svg"}
        title={"INELIGIBLE"}
        titleColor={"text-sky-500"}
        paragraph={
          "The Dash Core Group Bug Bounty on any of the in-scope products mentioned below, please let us know right away by reporting it."
        }
        // point1={"point1"}
        paragraphColor={"text-black"}
        button={"Report a Bug"}
        className={
          "cursor-pointer bg-sky-600 hover:border-sky-400 hover:text-sky-400 mt-5 text-white p-4 border border-1  border-white w-[210px]  rounded-sm font-semibold"
        }
        pointsColor={"text-black"}
      />
    </div>
  );
};

export default ImgData5;
