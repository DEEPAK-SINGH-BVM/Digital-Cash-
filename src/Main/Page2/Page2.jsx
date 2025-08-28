import React from "react";
import Navbar from "../../Components/Page1-All-Components/Navbar/Navbar";
import Hero from "../../Components/Page2-All-Elements/Page2-Hero/Hero";
import DesignBox from "../../Components/Page1-All-Components/Design/Design";
import Dash from "../../ComponentS/Page2-All-Elements/Page2-Dash/Dash";
import Design from "../../Components/Page2-All-Elements/Page2-Design/Design";
import Count from "../../Components/Page2-All-Elements/Page2-Count/Count";
import ImgData from "../../Components/Page2-All-Elements/Page2-ImgData/ImgData";
import ImgData2 from "../../Components/Page2-All-Elements/Page2-ImgData2/ImgData";
const Main = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <DesignBox />
      <Design />
      <Dash />
      <Count />
      <ImgData />
      <ImgData2/>
    </div>
  );
};

export default Main;

//
