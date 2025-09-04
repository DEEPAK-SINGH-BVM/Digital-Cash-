import React from "react";
import ImageData2 from "../../Element-5/ImgData2/ImgData";
const ImgData2 = () => {
  const points = [
    "Vulnerabilities that require root/jailbreak access to exploit unless the root/jailbreak is initiated by the attacker after gaining physical access to the device",
    "Third-party libraries that are not owned by DCG",
  ];
  return (
    <div>
      <ImageData2
        image={"https://media.dash.org/wp-content/uploads/ineligibile.svg"}
        bgColor={"bg-gray-100"}
        title={"INELIGIBLE"}
        titleColor={"text-sky-500"}
        points={points}
        pointsColor={"text-black"}
        button={"Report a Bug"}
        className={
          "cursor-pointer bg-sky-600 hover:border-sky-400 hover:text-sky-400 mt-5 text-white p-4 border border-1  border-white w-[210px]  rounded-sm font-semibold"
        }
      />
    </div>
  );
};
export default ImgData2;
