import React from "react";
import ImageData2 from "../../Element/ImgData2/ImgData";
// import "./ImgData2.css";
const ImgData2 = () => {
  return (
    <div className="pt-80 sm:pt-35">
      <ImageData2
        bgColor={"bg-white"}
        image={"https://media.dash.org/wp-content/uploads/become-voting-1.svg"}
        title={"Advanced Trading"}
        titleColor={"text-sky-600"}
        paragraph={
          "The leading service providers within the digital currency trading ecosystem provide Dash traders with all the tools and services they require for any strategy they want to execute."
        }
        paragraph2={
          "With Dash, it is possible to conduct high volume trades through an OTC desk or hedge trading position with derivatives."
        }
        paragraphColor={"text-black"}
        button={"Learn More "}
        className={
          "cursor-pointer border-sky-600 hover:border-sky-300 hover:text-sky-300 mt-5 text-sky-600 p-4 border border-1  w-[200px]  rounded-sm font-semibold"
        }
      />
    </div>
  );
};
export default ImgData2;
