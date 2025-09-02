
//
import React from "react";
import ImageData4 from "../../Element-5/ImgData4/ImgData4";

const ImgData5 = () => {
  const points = [
    "Mainnet",
    "Dash Core Desktop Wallet",
    "DashPay Android",
    "DashPay iOS",
  ];

  return (
    <div>
      <ImageData4
        image={"https://media.dash.org/wp-content/uploads/ineligibile.svg"}
        title={"INELIGIBLE"}
        titleColor={"text-sky-500"}
        paragraph={
          "The Dash Core Group Bug Bounty on any of the in-scope products mentioned below, please let us know right away by reporting it."
        }
        paragraphColor={"text-black"}
        button={"Report a Bug"}
        className={
          "cursor-pointer bg-sky-600 hover:border-sky-400 hover:text-sky-400 mt-5 text-white p-4 border border-1 border-white w-[210px] rounded-sm font-semibold"
        }
        points={points}
        pointsColor={"text-black"}
      />
    </div>
  );
};

export default ImgData5;

