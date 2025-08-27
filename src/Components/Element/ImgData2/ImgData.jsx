import React from "react";
// import "";
const ImgData2 = ({
  image,
  title,
  paragraph,
  button,
  titleColor,
  paragraphColor,
  bgColor,
  paragraph2
}) => {
  return (
    <div
      className={` flex justify-center sm:pt-20 sm:gap-30  flex flex-col md:flex-row  ${bgColor}`}
    >
      <div class="flex flex-col justify-between p-4 leading-normal">
        <div>
          <h5
            className={`sm:pt-20  mb-2 text-3xl font-bold tracking-tight  ${titleColor}`}
          >
            {title}
          </h5>

          <p
            class={`mb-2 sm:w-[340px] font-normal font-semibold ${paragraphColor}`}
          >
            {paragraph}
          </p>
          <p
            class={`mb-2 sm:w-[340px] font-normal font-semibold ${paragraphColor}`}
          >
            {paragraph2}
          </p>
          <div>
            <button className="cursor-pointer hover:border-sky-300 hover:text-sky-300 mt-5 text-white p-4 border border-1  border-white w-[200px]  rounded-sm font-semibold">
              {button}
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={image} alt="" className="h-[550px]" />
      </div>
    </div>
  );
};
export default ImgData2;
