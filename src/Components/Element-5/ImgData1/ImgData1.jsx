import React from "react";
const ImgData1 = ({
  image,
  title,
  paragraph,
  titleColor,
  paragraphColor,
  bgColor,
  points,
  pointsColor,
  button,
}) => {
  return (
    <div
      id="HowItWork"
      className={`flex justify-center sm:pt-13 pb-13 sm:gap-30  flex flex-col md:flex-row  ${bgColor}`}
    >
      <div className="pt-20">
        <img src={image} alt="" className="h-[400px] hidden sm:block" />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div>
          <h5
            className={`sm:pt-20 w-[300px] mb-2 text-4xl font-bold tracking-tight ${titleColor}`}
          >
            {title}
          </h5>
          <p
            className={` mb-3 w-[300px] text-md font-semibold ${paragraphColor}`}
          >
            {paragraph}
          </p>
          <ul className="mb-4 list-disc text-left pl-5">
            {points.map((point, index) => (
              <li
                key={index}
                className={`sm:w-[400px] w-[280px] ${pointsColor}`}
              >
                {point}
              </li>
            ))}
          </ul>

          <div>
            <button className="mt-15 cursor-pointer border-sky-600 text-white hover:border-sky-700 hover:bg-sky-600 mt-5 p-3 border border-1  w-[200px] bg-sky-500  rounded-sm font-semibold">
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImgData1;
