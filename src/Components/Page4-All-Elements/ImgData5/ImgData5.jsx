import React from "react";
import ImgData1 from "../../Element-4/ImgData1/ImgData";

const ImgData3 = () => {
  return (
    <div className="">
      <ImgData1
        bgColor={"bg-blue-900"}
        image={"https://media.dash.org/wp-content/uploads/verifiable.png"}
        title={"Verifiable, Secure,"}
        title2={" Resilient"}
        titleColor={"text-sky-600"}
        paragraph={
          "Unlike centralized platforms, all data on Dash Platform is cryptographically verifiable. Data is distributed across the Dash network, guaranteeing availability."
        }
        paragraphColor={"text-white"}
      />
    </div>
  );
};

export default ImgData3;
