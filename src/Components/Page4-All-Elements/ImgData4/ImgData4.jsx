import React from "react";
import ImgData2 from "../../Element-4/ImgData2/ImgData";
import Button from "../../Elements-2/Button2/Button";
const ImgData4 = () => {
  return (
    <div className="pt-0">
      <ImgData2
        bgColor={"bg-gray-50"}
        title={"Developer Friendly SDKs"}
        titleColor={"text-sky-600"}
        paragraph={
          "Access Dash Platform using one of the easy to use SDKs available in Javascript, Objective-C, or Java. Spend less time learning blockchain and more time developing."
        }
        image={"https://media.dash.org/wp-content/uploads/sdk.png"}
        paragraphColor={"text-black"}
      />
      <div className="flex justify-center gap-20 flex-wrap mb-15">
        <Button
          btnImg={"https://media.dash.org/wp-content/uploads/coding.svg"}
          btnTitle={"Quick Start"}
          btnSub={"karken.com"}
        />
        <Button
          btnImg={"https://media.dash.org/wp-content/uploads/js-1.svg"}
          btnTitle={"JavaScript"}
          btnSub={"karken.com"}
        />
        <Button
          btnImg={"https://media.dash.org/wp-content/uploads/apple-1.svg"}
          btnTitle={"Objective - C"}
          btnSub={"karken.com"}
        />
        <Button
          btnImg={"https://media.dash.org/wp-content/uploads/android-1.svg"}
          btnTitle={"Java"}
          btnSub={"karken.com"}
        />
      </div>
    </div>
  );
};

export default ImgData4;
