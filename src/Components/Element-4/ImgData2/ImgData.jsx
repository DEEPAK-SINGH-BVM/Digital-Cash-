//  import React from "react";
// import "";
const ImgData2 = ({
  image,
  title,
  paragraph,
  button,
  titleColor,
  paragraphColor,
  bgColor,
  className
}) => {
  return (
    <div
      className={` flex justify-center pb-20 sm:pt-15 sm:gap-30  flex flex-col md:flex-row  ${bgColor}`}
    >
      <div>
        <img src={image} alt="" className="h-[400px] hidden sm:block" />
      </div>
      <div class="flex flex-col justify-between p-4 leading-normal">
        <div>
          <h5
            className={`sm:pt-20  mb-2 text-4xl font-bold tracking-tight  ${titleColor}`}
          >
            {title}
          </h5>

          <p
            class={`mb-2 sm:w-[340px] font-normal font-semibold ${paragraphColor}`}
          >
            {paragraph}
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
