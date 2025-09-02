// import React from "react";
// import ImageData3 from "../../Element-5/ImgData3/ImgData3";
// // import "./ImgData2.css"
// const ImgData2 = () => {
//   return (
//     <div>
//       <ImageData3
//         image={"https://media.dash.org/wp-content/uploads/checklist-2.svg"}
//         bgColor={"bg-sky-500 from-cyan-800 to-blue-100"}
//         title={"Eligibility Requirements for Individuals"}
//         titleColor={"text-white"}
//         paragraph={
//           "The Dash Core Group Bug Bounty Program allows developers to discover and resolve bugs before the general public is aware of such bugs. If you find a security vulnerability on any of the in-scope products mentioned below, please let us know right away by reporting it."
//         }
//         // point1={"point1"}
//         paragraphColor={"text-white"}
//         button={"Report a Bug"}
//         className={
//           "cursor-pointer bg-sky-600 hover:border-sky-400 hover:text-sky-400 mt-5 text-white p-4 border border-1  border-white w-[210px]  rounded-sm font-semibold"
//         }
//         pointsColor={"text-white"}
//       />
//     </div>
//   );
// };

// export default ImgData2;
import React from "react";
import ImageData2 from "../../Element-5/ImgData2/ImgData";
import Paragraph from "../../Element-4/Paragraph/Paragraph";
// import "./imgData.css";
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
