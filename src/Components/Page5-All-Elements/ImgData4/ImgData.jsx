
import React from "react";
import ImageData2 from "../../Element-5/ImgData2/ImgData";
const ImgData2 = () => {
  const points = [
    "Identify a vulnerability that was not previously reported to, or otherwise known by, DCG",
    "Such vulnerability must be reproducible in one of the in-scope products by DCG",
    "Include clear, concise, and reproducible steps, either in writing or in video format",
    "Provide our engineers the information necessary to quickly reproduce, understand, and fix the issue",
  ];
  return (
    <div>
      <ImageData2
        image={"https://media.dash.org/wp-content/uploads/eligible.svg"}
        bgColor={"bg-sky-700"}
        title={"ELIGIBLE"}
        titleColor={"text-white"}
        points={points}
        pointsColor={"text-white"}
        button={"Report a Bug"}
        className={
          "cursor-pointer bg-sky-600 hover:border-sky-400 hover:text-sky-400 mt-5 text-white p-4 border border-1  border-white w-[210px]  rounded-sm font-semibold"
        }
      />
      <div></div>
    </div>
  );
};
export default ImgData2;  
