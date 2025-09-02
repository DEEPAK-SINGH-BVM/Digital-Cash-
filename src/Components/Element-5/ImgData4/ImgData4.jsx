import React from "react";
// import "./ImgData3.css";
const ImgData4 = ({
  image,
  title,
  paragraph,
  button,
  titleColor,
  paragraphColor,
  bgColor,
  pointsColor,
  className,
  point1,
  point2,
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
      className={`bg-white flex justify-center sm:pt-13 pb-13 sm:gap-30  flex flex-col md:flex-row ${bgColor}`}
    >
      <div className="pt-20">
        <img src={image} alt="" className="h-[400px] hidden sm:block" />
      </div>
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
    </div>
  );
};
export default ImgData4;
