import React, { useState } from "react";
import CountUp from "react-countup";

const Count = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-center">
      <div className=" bg-white   text-center p-18 font-semibold ">
        <p>Merchants & Services</p>
        <p className="text-[60px] font-thin text-sky-600">
          {<CountUp start={0} end={159000} duration={3} delay={0} />} +{" "}
        </p>
      </div>
      <div className=" bg-white   text-center p-18 font-semibold ">
        <p>Exchanges and Brokers</p>
        <p className="text-[60px] font-thin text-sky-600">
          {<CountUp start={0} end={265} duration={2} delay={0} />} +{" "}
        </p>
      </div>
      <div className=" bg-white   text-center p-18 font-semibold ">
        <p>Transactions Speed</p>
        <p className="text-[60px] font-thin text-sky-600">1 second </p>
      </div>
    </div>
  );
};

export default Count;
