import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Box from "../Components/Box-Model/Box";
import DesignBox from "../Components/Design/Design";
import Dash from "../Components/Dash/Dash";
import Count from "../Components/Count-Up/Count";
import ImgData from "../Components/ImgData/ImgData";
import ImgData2 from "../Components/ImgData2/ImgData2";
import ImgData3 from "../Components/ImgData3/ImgData3";
import Image from "../Components/image/img"
import Footer from "../Components/Footer/Footer";
const Main = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <DesignBox />
      <Box />
      <Dash />
      <Count />
      <ImgData />
      <ImgData2 />
      {/* <ImgData3/> */}
      <Image/>
      <Footer/>
    </div>
  );
};

export default Main;
