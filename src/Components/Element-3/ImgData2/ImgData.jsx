import React from "react";
// import "";
const ImgData2 = ({
  image,
  title,
  paragraph,
  paragraph2,
  button,
  titleColor,
  paragraphColor,
  paragraphColor2,
  bgColor,
  className,
}) => {
  return (
    <div
      id="HowItWork"
      className={` flex justify-center sm:pt-13 pb-13 sm:gap-30  flex flex-col md:flex-row  ${bgColor}`}
    >
      <div>
        <img src={image} alt="" className="h-[450px]" />
      </div>
      <div class="flex flex-col justify-between p-4 leading-normal">
        <div>
          <h5
            className={`sm:pt-20  mb-2 text-5xl font-bold tracking-tight  ${titleColor}`}
          >
            {title}
          </h5>
          <p class={`mb-3 w-[300px] text-md font-semibold ${paragraphColor}`}>
            {paragraph}
          </p>
          <p class={`mb-3 w-[300px] text-md font-semibold ${paragraphColor2}`}>
            {paragraph2}
          </p>
          <div>
            <button className={className}>{button}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImgData2;
