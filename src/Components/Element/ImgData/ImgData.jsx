import React from "react";
// import "";
const ImgData = ({
  image,
  title,
  paragraph,
  button,
  titleColor,
  paragraphColor,
  bgColor,
}) => {
  return (
    <div
      className={`BoxModel flex justify-center sm:pt-20 sm:gap-30  flex flex-col md:flex-row   ${bgColor}`}
    >
      <div>
        <img src={image} alt="" className="h-[550px]" />
      </div>
      <div class="flex flex-col justify-between p-4 leading-normal">
        <div>
          <h5
            className={`sm:pt-20  mb-2 text-3xl font-bold tracking-tight  ${titleColor}`}
          >
            {title}
          </h5>
          <p
            class={`mb-3 w-[300px] font-normal font-semibold ${paragraphColor}`}
          >
            {paragraph}
          </p>
          {/* */}
          <p className="text-white pt-2 ">
            <i class="fa-solid fa-right-to-bracket"></i> How Mining Works
          </p>
          <p className="text-white pt-2">
            <i class="fa-solid fa-right-to-bracket"></i> How the network Works
          </p>
          <p className="text-white pt-2">
            <i class="fa-solid fa-right-to-bracket"></i> Resource and Support
            documentation
          </p>
          <div>
            <button className="cursor-pointer hover:border-sky-400 hover:text-sky-400 mt-5 text-white p-4 border border-1  border-white w-[200px]  rounded-sm font-semibold">
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImgData;
