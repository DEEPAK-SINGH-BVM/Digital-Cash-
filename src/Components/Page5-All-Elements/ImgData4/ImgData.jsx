import React from "react";
import ImageData3 from "../../Element-5/ImgData3/ImgData3";
// import "./ImgData2.css"
const ImgData4 = () => {
  return (
    <div>
      <ImageData3
        image={"https://media.dash.org/wp-content/uploads/eligible.svg"}
        title={"ELIGIBLE"}
        titleColor={"text-white"}
        paragraph={
          "The Dash Core Group Bug Bounty on any of the in-scope products mentioned below, please let us know right away by reporting it."
        }
        // point1={"point1"}
        paragraphColor={"text-white"}
        button={"Report a Bug"}
        className={
          "cursor-pointer bg-sky-600 hover:border-sky-400 hover:text-sky-400 mt-5 text-white p-4 border border-1  border-white w-[210px]  rounded-sm font-semibold"
        }
        pointsColor={"text-white"}
      />
    </div>
  );
};

export default ImgData4;
