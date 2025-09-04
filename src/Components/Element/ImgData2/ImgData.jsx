import React from "react";
const ImgData2 = ({
  image,
  title,
  paragraph,
  button,
  titleColor,
  paragraphColor,
  bgColor,
  paragraph2,
  className,
}) => {
  return (
    <div
      className={` flex justify-center pb-20 sm:pt-15 sm:gap-30  flex flex-col md:flex-row  ${bgColor}`}
    >
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div>
          <h5
            className={`sm:pt-20  mb-2 text-3xl font-bold tracking-tight  ${titleColor}`}
          >
            {title}
          </h5>
          <p
            className={`mb-2 sm:w-[340px] font-normal font-semibold ${paragraphColor}`}
          >
            {paragraph}
          </p>
          <p
            className={`mb-2 sm:w-[340px] font-normal font-semibold ${paragraphColor}`}
          >
            {paragraph2}
          </p>
          <div>
            <button className={className}>{button}</button>
          </div>
        </div>
      </div>
      <div>
        <img src={image} alt="" className="h-[450px]  hidden md:block" />
      </div>
    </div>
  );
};
export default ImgData2;
