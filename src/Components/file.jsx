// //
// import React from "react";
// import ImageData4 from "../../Element-5/ImgData4/ImgData4";

// const ImgData5 = () => {
  const points = [
    "Mainnet",
    "Dash Core Desktop Wallet",
    "DashPay Android",
    "DashPay iOS",
  ];

//   return (
//     <div>
//       <ImageData4
//         image={"https://media.dash.org/wp-content/uploads/ineligibile.svg"}
//         title={"INELIGIBLE"}
//         titleColor={"text-sky-500"}
//         paragraph={
//           "The Dash Core Group Bug Bounty on any of the in-scope products mentioned below, please let us know right away by reporting it."
//         }
//         paragraphColor={"text-black"}
//         button={"Report a Bug"}
//         className={
//           "cursor-pointer bg-sky-600 hover:border-sky-400 hover:text-sky-400 mt-5 text-white p-4 border border-1 border-white w-[210px] rounded-sm font-semibold"
//         }
//         points={points}
//         pointsColor={"text-black"}
//       />
//     </div>
//   );
// };

// export default ImgData5;

import React from "react";

const ImageData1 = ({
  image,
  title,
  titleColor,
  paragraph,
  paragraphColor,
  button,
  className,
  points,
  pointsColor,
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
      <img src={image} alt={title} className="w-20 h-20 mb-4" />

      <h2 className={`text-xl font-bold mb-2 ${titleColor}`}>{title}</h2>

      <p className={`mb-4 ${paragraphColor}`}>{paragraph}</p>

      <ul className="mb-4 list-disc text-left pl-5">
        {points &&
          points.map((point, index) => (
            <li key={index} className={`${pointsColor}`}>
              {point}
            </li>
          ))}
      </ul>

      <button className={className}>{button}</button>
    </div>
  );
};

export default ImageData1;
