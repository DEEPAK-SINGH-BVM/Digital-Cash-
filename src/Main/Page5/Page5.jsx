import React from "react";
import Navbar from "../../Components/Page1-All-Components/Navbar/Nav";
import ImgData2 from "../../Components/Page1-All-Components/ImgData2/ImgData2";
import ImgData3 from "../../Components/Page1-All-Components/ImgData3/ImgData3";

import Footer from "../../Components/Page1-All-Components/Footer/Footer";
import ImgData1 from "../../Components/Page5-All-Elements/ImgData1/ImgData1";

const Main = () => {
  return (
    <div>
      <Navbar />
      <ImgData1 />
      {/* <ImgData2 /> */}
      {/* <ImgData3 /> */}
      <Footer />
    </div>
  );
};

export default Main;
