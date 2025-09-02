import React from "react";
import "./ImgData3.css";
const ImgData3 = ({
  image,
  title,
  paragraph,
  button,
  titleColor,
  paragraphColor,
  bgColor,
  pointsColor,
}) => {
  const points = [
    { name: "Mainnet" },
    { name: "Dash Core Desktop Wallet" },
    { name: "DashPay Android" },
    { name: "DashPay iOS" },
  ];
  return (
    <div
      id="HowItWork"
      className={`bg-ColorComponents1 flex justify-center sm:pt-13 pb-13 sm:gap-30  flex flex-col md:flex-row ${bgColor}`}
    >
      <div class="flex flex-col justify-between p-4 leading-normal">
        <div>
          <h5
            className={`sm:pt-20  mb-2 text-4xl font-bold tracking-tight ${titleColor}`}
          >
            {title}
          </h5>
          <p class={` mb-3 w-[300px] text-md font-semibold ${paragraphColor}`}>
            {paragraph}
          </p>
          {points.map(({ name }) => (
            <li key={name} className={pointsColor}>
              {name}
            </li>
          ))}
        </div>
      </div>
      <div className="pt-20">
        <img src={image} alt="" className="h-[400px] hidden sm:block" />
      </div>
    </div>
  );
};
export default ImgData3;