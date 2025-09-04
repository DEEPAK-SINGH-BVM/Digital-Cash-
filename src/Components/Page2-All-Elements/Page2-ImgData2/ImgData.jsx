import React from "react";
import Button from "../../Elements-2/Button2/Button";
import "./ImgData2.css";
import DashBox from "../../Elements-2/DashBox/DashBox";
// import "";
const ImgData2 = () => {
  return (
    <div>
      <div
        className={` flex justify-center sm:pt-20 sm:gap-14  flex flex-col md:flex-row bg-sky-500`}
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div>
            <h5
              className={`sm:pt-20  mb-2 text-3xl font-bold tracking-tight  text-white`}
            >
              Get Going!
            </h5>

            <p
              className={`mb-2 sm:w-[340px] font-normal font-semibold text-white`}
            >
              Grab a coffee, buy a plane ticket, or pay your phone bill. Dash is
              growing and is accepted by new businesses every day.
            </p>

            <div>
              <button className="cursor-pointer hover:border-sky-300 hover:text-sky-300 mt-5 text-white p-4 border border-1  border-white w-[200px]  rounded-sm font-semibold">
                Use Your Dash
              </button>
            </div>
          </div>
        </div>
        <div className="">
          {/*  */}
          <DashBox
            dashImg={
              "https://media.dash.org/wp-content/uploads/use-peers-1.svg"
            }
            dashText={"Pay Your Friends "}
            paragraph={""}
          />
          <DashBox
            dashImg={"https://media.dash.org/wp-content/uploads/use-shop-1.svg"}
            dashText={"Pay Your Friends "}
            paragraph={""}
          />
        </div>
        <div className=" ">
          {/*  */}
          <DashBox
            dashImg={
              "https://media.dash.org/wp-content/uploads/use-airfares-1.svg"
            }
            dashText={"Pay Your Friends "}
            paragraph={""}
          />
          <DashBox
            dashImg={
              "https://media.dash.org/wp-content/uploads/use-hotels-1.svg"
            }
            dashText={"Pay Your Friends "}
            paragraph={""}
          />
        </div>
        <div className=" ">
          {/*  */}
          <DashBox
            dashImg={
              "https://media.dash.org/wp-content/uploads/use-business-1.svg"
            }
            dashText={"Pay Your Friends "}
            paragraph={""}
          />
          <DashBox
            dashImg={
              "https://media.dash.org/wp-content/uploads/use-airfares-1.svg"
            }
            dashText={"Pay Your Friends "}
            paragraph={""}
          />
        </div>
        <div></div>
      </div>

      <div className="bg-sky-500 pt-20">
        <hr className="w-[60%] h-0.5 mx-auto  bg-white  rounded-sm border-0 "></hr>
      </div>
      <div className="flex justify-center pt-12 pb-12 bg-sky-500 ">
        <div className="flex flex-wrap justify-center gap-6 ">
          <Button
            btnImg={
              "https://media.dash.org/wp-content/uploads/Travala-Logo_Icon-Tight.png"
            }
            btnTitle={"Karken"}
            btnSub={"karken.com"}
          />
          <Button
            btnImg={"	https://media.dash.org/wp-content/uploads/bitrefill-1.svg"}
            btnTitle={"Karken"}
            btnSub={"karken.com"}
          />
          <Button
            btnImg={"https://media.dash.org/wp-content/uploads/mobiletopup.png"}
            btnTitle={"Karken"}
            btnSub={"karken.com"}
          />
        </div>
      </div>
    </div>
  );
};
export default ImgData2;
