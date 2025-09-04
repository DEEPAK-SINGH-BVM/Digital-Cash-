import React from "react";
import "./Dash.css";
import DashBox from "../../Elements-2/DashBox/DashBox";
import DashButton from "../../Elements-2/Button/Button";
const Dash = () => {
  return (
    <div
      className={`  DashBody flex justify-center items-center sm:gap-30  flex flex-col md:flex-row`}
    >
      <div className="hidden sm:block">
        <h1 className="text-white text-4xl font-bold pb-5">Get the App</h1>
        <div className="flex ">
          <div className="flex  flex-row gap-10  justify-center text-center p-4 leading-normal">
            <DashBox
              dashImg={
                "https://media.dash.org/wp-content/uploads/appicon-desktop-2.svg"
              }
              dashText={"Download"}
              paragraph={"Download App"}
            />
            <DashBox
              dashImg={
                "https://media.dash.org/wp-content/uploads/appicon-android-2.svg"
              }
              dashText={"Download"}
              paragraph={"Android  App"}
            />
            <DashBox
              dashImg={
                "https://media.dash.org/wp-content/uploads/appicon-ios-2.svg"
              }
              dashText={"Download"}
              paragraph={"iOS  App"}
            />
          </div>
        </div>
        <DashButton
          button={"View all app"}
          className={
            "cursor-pointer hover:border-sky-300 hover:text-sky-300 mt-5 text-white p-4 border border-1  border-white w-[200px]  rounded-sm font-semibold"
          }
        />
      </div>
      {/* IMAGE   dashBox, dashText, paragraph */}
      <div>
        <img
          src={"https://www.dash.org/wp-content/uploads/home-phone-hires.png"}
          alt=""
          className="h-[450px]"
        />
      </div>
    </div>
  );
};
export default Dash;
