import React from "react";
// import "";
const ImgData1 = ({
  image,
  title,
  paragraph,
  button,
  titleColor,
  paragraphColor,
  bgColor,
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
      className={`flex justify-center sm:pt-13 pb-13 sm:gap-30  flex flex-col md:flex-row  ${bgColor}`}
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
            <li key={name} className={points}>
              {name}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ImgData1;
/*
  
import React from "react";
// import "";
const ImgData1 = ({
}) => {
  return (
    <div
      id="HowItWork"
      className={`flex justify-center sm:pt-13 pb-13 sm:gap-30  flex flex-col md:flex-row bg-white`}
    >
      <div className="pt-20">
        <img
          src="https://media.dash.org/wp-content/uploads/bugbounty.svg"
          alt=""
          className="h-[400px]"
        />
      </div>
      <div class="flex flex-col justify-between p-4 leading-normal">
        <div>
          <h5 className={`sm:pt-20  mb-2 text-5xl font-bold tracking-tight`}>
            Bug
          </h5>
          <p class={` mb-3 w-[300px] text-md font-semibold `}>
            Lorem ipsum dolor sit
          </p>
          <li>point1</li>
          <li>point2</li>
          <li>point3</li>
          <li>point4</li>
          <li>point5</li>
          <div>
            <button className="text-center text-sky-500 pt-75 md:pt-10">
              Click
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImgData1;

*/
