
import React from "react";
import ImageData2 from "../../Element-5/ImgData2/ImgData";

const ImgData2 = () => {
  const points = [
    "Awards will be paid in Dash based on the current USD price at the date/time of the original submission",
    "Dash amounts are based on the volume-weighted average USD price published at messari.io",
    "Payouts will not cover any banking/transfer fees",
    "CG will make any final decisions regarding severity and priority scoring",
  ];
  return (
    <div>
      <ImageData2
        image={"https://media.dash.org/wp-content/uploads/payments4-1.png"}
        bgColor={"bg-gray-50"}
        title={"Bounty Payments"}
        titleColor={"text-sky-500"}
        points={points}
        pointsColor={"text-black"}
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
