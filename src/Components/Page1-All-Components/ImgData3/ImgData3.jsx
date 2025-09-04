import React from "react";
import ImageData3 from "../../Element/ImgData3/ImgData3";

const ImgData3 = () => {
  return (
    <div>
      <ImageData3
        bgColor={"bg-white"}
        image={"https://media.dash.org/wp-content/uploads/how-mining-1.svg"}
        title={"The Network Funds"}
        titleColor={"text-sky-600 "}
        paragraph={
          "Dash is a highly secure payment system thanks to the compute-intensive cryptography that underpins the network. Anyone can contribute processing power to help secure the Dash network and be compensated for their contributions."
        }
        paragraph2={
          "Because of the competitive nature of this process (called “mining”), we only recommend doing it with specialty hardware named ASICs, that use chips specially designed to efficiently perform the calculations that secure Dash."
        }
        paragraphColor={"text-black"}
        button={"Check Out all proposals"}
      />
    </div>
  );
};
export default ImgData3;
