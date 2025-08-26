import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Box from "../Components/Box-Model/Box";
import DesignBox from "../Components/Design/Design";
import Dash from "../Components/Dash/Dash";
const Main = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <DesignBox />
      <Box />
      <Dash/>
    </div>
  );
};

export default Main;
