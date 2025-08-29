import React from "react";
import ImageData2 from "../../Element/ImgData2/ImgData";
import "./ImgData2.css";
const ImgData2 = () => {
  return (
    <div>
      <ImageData2
        bgColor={"bg-sky-500"}
        image={"https://media.dash.org/wp-content/uploads/how-mining-1.svg"}
        title={"Help Secure the Dash Network"}
        titleColor={"text-white "}
        paragraph={
          "Dash is a highly secure payment system thanks to the compute-intensive cryptography that underpins the network. Anyone can contribute processing power to help secure the Dash network and be compensated for their contributions."
        }
        paragraph2={
          "Because of the competitive nature of this process (called “mining”), we only recommend doing it with specialty hardware named ASICs, that use chips specially designed to efficiently perform the calculations that secure Dash."
        }
        className={
          "cursor-pointer border-sky-600 hover:border-sky-300 hover:text-sky-300 mt-5 text-white p-4 border border-1  border-white w-[200px]  rounded-sm font-semibold"
        }
        paragraphColor={"text-white"}
        button={"Learn More"}
      />
    </div>
  );
};
export default ImgData2;
