import React from "react";

const DashComponent = ({ DashImage, DashText, DashParagraph, btn1, btn2 }) => {
  return (
    <div>
      <div
        id="HowItWork"
        className={`bg-white  flex justify-center sm:pt-20 sm:gap-30  flex flex-col md:flex-row pt-10`}
      >
        <div>
          <img src={DashImage} alt="" className="h-[400px]  hidden sm:block" />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div>
            <h5
              className={`text-sky-600 text-5xl font-bold sm:pt-20  mb-2 text-3xl font-bold tracking-tight `}
            >
              {DashText}
            </h5>
            <p className={`mb-3  w-[300px] font-normal font-semibold`}>
              {DashParagraph}
            </p>
            {/*  */}

            <div className="flex gap-3">
              <button className="cursor-pointer hover:bg-sky-600 mt-5 text-white p-4 border border-1 bg-sky-500  border-white w-[200px]  rounded-sm font-semibold">
                {btn1}
              </button>
              <button className="cursor-pointer hover:bg-sky-600 mt-5 text-white p-4 border border-1 bg-sky-500  border-white w-[200px]  rounded-sm font-semibold">
                {btn2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashComponent;
