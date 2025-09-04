import React from "react";
import ImgData1 from "../../Element-4/ImgData1/ImgData";

const ImgData = () => {
  return (
    <div className="pt-30">
      <ImgData1
        bgColor={"bg-gray-100"}
        image={"https://media.dash.org/wp-content/uploads/payments.png"}
        title={"Payments Infrastructure"}
        titleColor={"text-sky-600"}
        paragraph={
          "Enable your application with the financial power of the Dash cryptocurrency borderless, instantly transferrable, and supported by a decentralized cloud providing robust payments infrastructure"
        }
      />
    </div>
  );
};

export default ImgData;
