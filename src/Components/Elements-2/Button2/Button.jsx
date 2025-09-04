import React from "react";

const Button = ({ btnImg, btnTitle, btnSub }) => {
  return (
    <div>
      <button className="shadow-sky-500/50 cursor-pointer hover:shadow-2xl duration-300 text-sky-600 p-2 border border-1 bg-gray-50  border-white w-[200px]  rounded-sm font-semibold">
        <div className="flex">
          <div className="pt-3">
            <img src={btnImg} alt="" className="h-[40px]" />
          </div>
          <div className="pl-5 pt-2">
            <p className="text-sky-500 text-xl">{btnTitle}</p>
            <p className="text-gray-400">{btnSub}</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Button;
