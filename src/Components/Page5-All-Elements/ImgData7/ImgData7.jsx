import React from "react";
import ImageData5 from "../../Element-5/ImgData5/ImgData5";

const ImgData7 = () => {
  return (
    <div className="flex justify-center item-center flex-wrap">
      <ImageData5
        Img={"https://media.dash.org/wp-content/uploads/priority_low.svg"}
        title={"Priority High"}
        subTitle={"30 Points Could cause a loss of funds"}
        paragraph1={"Without a device access"}
        paragraph2={
          "Private key exposure, recovery phrase exposure, pin code attack/bypass"
        }
      />
      <ImageData5
        Img={"https://media.dash.org/wp-content/uploads/priority_medium.svg"}
        title={"Priority Medium"}
        subTitle={"20 Points Prevents the use or receipt of funds"}
        paragraph1={"Without a device access"}
        paragraph2={
          "Cannot sync with the chain, persistent error when trying to send Dash, cannot receive a transaction that was successfully submitted to the network"
        }
      />
      <ImageData5
        Img={"https://media.dash.org/wp-content/uploads/priority_low.svg"}
        title={"Priority Low"}
        subTitle={"30 Points Could cause a loss of funds"}
        paragraph1={"Without a device access"}
        paragraph2={
          "Private key exposure, recovery phrase exposure, pin code attack/bypass"
        }
      />
      <div className="bg-sky-500 pt-0 ">
        <hr className="w-[60%] h-0.5 mx-auto  bg-white  rounded-sm border-0 "></hr>
      </div>
    </div>
  );
};

export default ImgData7;
