import React, { useState } from "react";
import CountUp from "react-countup";

const Count = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-center">
      <div className=" bg-white   text-center p-18 font-semibold ">
        <p>PAYMENT VOLUME $</p>
        <p className="text-[60px] font-thin text-sky-600">
          {<CountUp start={0} end={48} duration={3} delay={0} />} Billion +{" "}
        </p>
      </div>
      <div className=" bg-white   text-center p-18 font-semibold ">
        <p>Daily Active Addresses</p>
        <p className="text-[60px] font-thin text-sky-600">
          {<CountUp start={0} end={54300} duration={2} delay={0} />} +{" "}
        </p>
      </div>
      <div className=" bg-white   text-center p-18 font-semibold ">
        <p>Transactions/day</p>
        <p className="text-[60px] font-thin text-sky-600">
          {<CountUp start={0} end={8220} duration={3} delay={0} />} +{" "}
        </p>
      </div>
    </div>
  );
};

export default Count;
