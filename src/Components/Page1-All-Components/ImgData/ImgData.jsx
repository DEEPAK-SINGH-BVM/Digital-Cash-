import React from "react";
import ImageData from "../../Element/ImgData/ImgData";
import "./imgData.css";
const ImgData = () => {
  return (
    <div>
      {/* */}
      <ImageData
        image={"https://media.dash.org/wp-content/uploads/how-it-works-2.svg"}
        title={"  How it Works "}
        titleColor={"text-sky-500"}
        paragraph={
          "Dash is both a currency and a peer to peer payment network to facilitate its use. The Dash network is operated by its community of  users, and anyone can participate by downloading. Some users can even earn Dash performing"
        }
        paragraphColor={"text-white"}
        button={"Learn More"}
      />
    </div>
  );
};
export default ImgData;
