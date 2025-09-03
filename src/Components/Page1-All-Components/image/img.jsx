import React from "react";

const Image = () => {
  return (
    <div>
      <div className="text-center text-sky-500 pt-20">
        <div className="flex flex-col  justify-between p-4 leading-normal">
          <div>
            <h5 className="sm:pt-20  mb-2 md:text-4xl font-bold tracking-tight  ">
              Dash Ecosystem Overview
            </h5>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://media.dash.org/wp-content/uploads/Dash-Ecosystem-English-Preview-2022-05-11-1024x562.jpg"
            className="h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Image;
