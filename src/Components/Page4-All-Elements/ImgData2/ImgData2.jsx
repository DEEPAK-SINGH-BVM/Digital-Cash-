import React from "react";
import ImgData2 from "../../Element-4/ImgData2/ImgData";

const ImgData = () => {
  return (
    <div className="pt-0">
      <ImgData2
        bgColor={"bg-gradient-to-t from-blue-800 via-blue-500 to-blue-800"}
        title={"Application Data Storage"}
        titleColor={"text-white"}
        paragraph={
          "Enhance your financial applications with robust user metadata. Leverage the blockchain to store data in a document-oriented database."
        }
        image={
          "https://media.dash.org/wp-content/uploads/applicationdatastorage.png"
        }
        paragraphColor={"text-white"}
      />
    </div>
  );
};

export default ImgData;
