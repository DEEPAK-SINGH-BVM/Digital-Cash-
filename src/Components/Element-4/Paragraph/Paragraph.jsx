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
      <div class="flex flex-col  justify-between p-4 leading-normal">
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
