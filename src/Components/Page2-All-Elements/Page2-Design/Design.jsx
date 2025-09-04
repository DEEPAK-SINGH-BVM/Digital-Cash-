import React, { useState } from "react";
import CountUp from "react-countup";

const Design = () => {
  return (
    <div>
      <div className="flex justify-center pt-30 md:pt-20 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col grid grid:col-2 lg:flex-row  justify-center sm:pt-35  pt-35 ">
          <div className=" bg-white  text-center p-10 font-semibold">
            <img
              src="https://media.dash.org/wp-content/uploads/instant-11.svg"
              alt=""
              className="h-[100px]"
            />
            <p className="pt-5 sm:text-[37px] text-sky-600 font-bold  italic">
              Instant
            </p>
          </div>
        </div>
        <div className="flex flex-col grid grid:col-2 lg:flex-row  justify-center sm:pt-35  pt-5">
          <div className=" bg-white  text-center p-10 font-semibold ">
            <img
              src="https://media.dash.org/wp-content/uploads/secure-11.svg"
              alt=""
              className="h-[100px]"
            />
            <p className="pt-5 sm:text-[37px] text-sky-600 font-bold  italic">
              Secure
            </p>
          </div>
        </div>
        <div className="flex flex-col grid grid:col-2 lg:flex-row  justify-center sm:pt-35 pt-5">
          <div className=" bg-white  text-center p-10 font-semibold  ">
            <img
              src="https://media.dash.org/wp-content/uploads/microfees-11.svg"
              alt=""
              className="h-[100px] lg:pl-10"
            />
            <div className="flex gap-3">
              <p className="pt-5 sm:text-[37px] text-sky-600 font-bold  italic">
                Micro
              </p>
              <p className="pt-5 sm:text-[37px] text-sky-600 font-bold  italic">
                Fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
