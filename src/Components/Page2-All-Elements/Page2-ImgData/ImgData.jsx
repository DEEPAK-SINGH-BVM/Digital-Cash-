import React from "react";
import Button from "../../Elements-2/Button2/Button";
import DashComponent from "../../Elements-2/ImageData/ImageData";

const ImgData = () => {
  return (
    <div>
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
      <div className="flex justify-center pt-12 pb-12">
        <div className="flex flex-wrap justify-center gap-6">
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
