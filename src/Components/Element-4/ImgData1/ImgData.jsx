import React from "react";

const ImgData1 = ({
  image,
  title,
  title2,
  paragraph,
  button,
  titleColor,
  paragraphColor,
  bgColor,
  className,
}) => {
  return (
    <div
      className={` flex justify-center pb-20 sm:pt-15 sm:gap-30  flex flex-col md:flex-row  ${bgColor}`}
    >
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div>
          <h5
            className={`sm:pt-20  mb-2 text-4xl font-bold tracking-tight  ${titleColor}`}
          >
            {title}
            <br />
            {title2}
          </h5>

          <p
            className={`mb-2 sm:w-[340px] font-normal font-semibold ${paragraphColor}`}
          >
            {paragraph}
          </p>
          <div>
            <button className={className}>{button}</button>
          </div>
        </div>
      </div>
      <div>
        <img src={image} alt="" className="h-[380px] hidden sm:block" />
      </div>
    </div>
  );
};
export default ImgData1;
