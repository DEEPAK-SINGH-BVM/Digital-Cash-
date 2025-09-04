import React from "react";

const ImgData5 = ({
  Img,
  title,
  subTitle,
  paragraph1,
  paragraph2,
  subTitle2,
  paragraph3,
  paragraph4,
}) => {
  return (
    <div>
      <div className="">
        <div className="flex flex-col grid grid:col-2 lg:flex-row  justify-center sm:pt-35  pt-35 flex-wrap">
          <div className=" bg-white  text-center p-0 sm:p-10 font-semibold item-center  text-center justify-items-center ">
            <img src={Img} alt="" className="h-[110px]" />
            <p className="pt-5 sm:text-[35px] text-sky-600 font-bold  italic">
              {title}
            </p>

            <p className="font-bold">{subTitle}</p>
            <p className="font-normal italic">{paragraph1}</p>
            <br />
            <p className=" w-[300px]  font-semibold text-gray-700">
              {paragraph2}
            </p>

            <p className="font-bold pt-3">{subTitle2}</p>
            <p className="font-normal italic">{paragraph3}</p>
            <br />
            <p className=" w-[300px] font-semibold text-gray-700">
              {paragraph4}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgData5;
