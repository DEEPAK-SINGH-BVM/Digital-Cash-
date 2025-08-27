import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Count = () => {
  const [count, setCount] = useState(false);

  return (
    // <ScrollTrigger
    //   onEnter={() => setCount(true)}
    //   onExit={() => setCount(false)}
    // >
    //   <div className="bg-black text-[34px] text-white text-center p-8">
    //     <h1>
    //       {count && <CountUp start={0} end={100} duration={2} delay={0} />}
    //     </h1>
    //   </div>
    // </ScrollTrigger>
    <div></div>
  );
};

export default Count;
