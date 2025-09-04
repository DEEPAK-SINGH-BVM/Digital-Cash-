import React from "react";
import Hero from "../../Components/Page1-All-Components/Hero/Hero";
import Box from "../../Components/Page1-All-Components/Box-Model/Box";
import DesignBox from "../../Components/Page1-All-Components/Design/Design";
import Dash from "../../Components/Page1-All-Components/Dash/Dash";
import Count from "../../Components/Page1-All-Components/Count-Up/Count";
import ImgData from "../../Components/Page1-All-Components/ImgData/ImgData";
import ImgData2 from "../../Components/Page1-All-Components/ImgData2/ImgData2";
import ImgData3 from "../../Components/Page1-All-Components/ImgData3/ImgData3";
import Image from "../../Components/Page1-All-Components/image/img";
const Main = () => {
  return (
    <div>
      <Hero />
      <DesignBox />
      <Box />
      <Dash />
      <Count />
      <ImgData />
      <ImgData2 />
      <ImgData3 />
      <Image />
    </div>
  );
};
export default Main;
// correct