import React from "react";
import Navbar from "../../Components/Page1-All-Components/Navbar/Navbar";
import Hero from "../../Components/Page3-All-Elements/Hero/Hero";
import DesignBox from "../../Components/Page1-All-Components/Design/Design";
import Dash from "../../ComponentS/Page2-All-Elements/Page2-Dash/Dash";
import Design from "../../Components/Page2-All-Elements/Page2-Design/Design";
import Count from "../../Components/Page2-All-Elements/Page2-Count/Count";
import ImgData from "../../Components/Page2-All-Elements/Page2-ImgData/ImgData";
import ImgData1 from "../../Components/Page3-All-Elements/ImgData1/imgData1";
import ImgData3 from "../../Components/Page3-All-Elements/ImgData3/ImgData";
import Footer from "../../Components/Page1-All-Components/Footer/Footer";
import ImgData2 from "../../Components/Page3-All-Elements/ImgData2/ImgData2";
const Main = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <DesignBox />
      <ImgData1 />
      <ImgData2 />
      <ImgData3 />
      <Footer />
    </div>
  );
};

export default Main;

//
