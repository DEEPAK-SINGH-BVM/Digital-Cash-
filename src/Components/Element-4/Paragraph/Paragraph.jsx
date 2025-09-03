import React from "react";

const Paragraph = ({
  ParagraphTitle,
  paragraph,
  paragraphStyle,
  web,
  paragraphWidth,
}) => {
  return (
    <div>
      <div className="flex flex-col  justify-between p-4 leading-normal pb-15 ">
        <div className="">
          <h5 className={paragraphStyle}>{ParagraphTitle}</h5>
          <div className="w-full flex justify-center">
            <p className={paragraphWidth}>{paragraph}</p>
          </div>
          <a href="">{web}</a>
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
