import React from "react";
import ImageData2 from "../../Element-5/ImgData2/ImgData";
import Paragraph from "../../Element-4/Paragraph/Paragraph";

const ImgData2 = () => {
  const points = [
    "You cannot have any contractual engagement with DCG",
    "You cannot have any contractual engagement with the DIF",
    "You cannot be an active Trust Protector",
    "You cannot receive a bounty from the incubator for the same bug",
    "You must provide basic KYC information (passport, local ID, etc.)",
    "Recipients must provide a USD bank account or a Dash address at a major exchange",
    "Residents / Citizens of OFAC restricted countries can report bugs but will not be eligible for a payout",
  ];
  return (
    <div>
      <ImageData2
        image={"https://media.dash.org/wp-content/uploads/checklist-2.svg"}
        bgColor={"bg-sky-700"}
        title={"Eligibility Requirements for Individuals"}
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
