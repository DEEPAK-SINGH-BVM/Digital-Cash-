import React from "react";
import Button from "../../Elements-2/Button2/Button";
import DashComponent from "../../Elements-2/ImageData/ImageData"; 
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
    <div>
      {/* <div
        id="HowItWork"
        className={`bg-white  flex justify-center sm:pt-20 sm:gap-30  flex flex-col md:flex-row`}
      >
        <div>
          <img
            src={"https://media.dash.org/wp-content/uploads/home-connect.svg"}
            alt=""
            className="h-[400px]"
          />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div>
            <h5
              className={`text-sky-600 text-5xl font-bold sm:pt-20  mb-2 text-3xl font-bold tracking-tight `}
            >
              Get Dash
            </h5>
            <p className={`mb-3 w-[300px] font-normal font-semibold`}>
              Dash is easy to buy or receive online, from friends, or at an ATM
              near you.
            </p>
    

            <div className="flex gap-3">
              <button className="cursor-pointer hover:bg-sky-600 mt-5 text-white p-4 border border-1 bg-sky-500  border-white w-[200px]  rounded-sm font-semibold">
                Buy Online
              </button>
              <button className="cursor-pointer hover:bg-sky-600 mt-5 text-white p-4 border border-1 bg-sky-500  border-white w-[200px]  rounded-sm font-semibold">
                Find an ATM
              </button>
            </div>
          </div>
        </div>
    
      </div>
      
       */}
      <DashComponent
        DashImage={"https://media.dash.org/wp-content/uploads/home-connect.svg"}
        DashText={"Get Dash"}
        DashParagraph={
          "Dash is easy to buy or receive online, from friends, or at an ATM near you."
        }
        btn1={"Buy Online "}
        btn2={"Find an ATM"}
      />
      <div className="bg-white pt-20">
        <hr className="w-[60%] h-0.5 mx-auto  bg-sky-500  rounded-sm border-0 "></hr>
      </div>
      {/* <hr /> */}
      <div className="flex justify-center pt-12 pb-12">
        <div className="flex flex-wrap justify-center gap-6">
          {/* <h1>Popular Retailers to Spend Dash </h1> */}
          <Button
            btnImg="https://media.dash.org/wp-content/uploads/kraken-1.svg"
            btnTitle="Kraken"
            btnSub="karken.com"
          />
          <Button
            btnImg="https://media.dash.org/wp-content/uploads/coinbase.svg"
            btnTitle="Coinbase"
            btnSub="www.coinbase"
          />
          <Button
            btnImg="https://media.dash.org/wp-content/uploads/uphold-1.svg"
            btnTitle="Uphold"
            btnSub="www.uphold"
          />
          <Button
            btnImg="https://media.dash.org/wp-content/uploads/binance.svg"
            btnTitle="Binance"
            btnSub="www.binance"
          />
          <Button
            btnImg="https://media.dash.org/wp-content/uploads/Edge_Primary_Logo_MintNavy-1.png"
            btnTitle="Edge"
            btnSub="www.edge"
          />
        </div>
      </div>
    </div>
  );
};
export default ImgData;
