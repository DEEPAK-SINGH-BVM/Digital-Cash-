import React from "react";
import Paragraph from "../../Element-4/Paragraph/Paragraph";

const Dash = () => {
  return (
    <div>
      <div className="text-center text-sky-500 pt-75 md:pt-30">
        <Paragraph
          ParagraphTitle={" What is Dash Platform?"}
          paragraph={
            "Dash Platform is a technology stack for building decentralized applications on the Dash network. The two main architectural components, Drive and DAPI, turn the Dash P2P network into a cloud that developers can integrate with their applications."
          }
          paragraphStyle={
            "sm:pt-20  mb-2 md:text-4xl font-bold tracking-tight  "
          }
          paragraphWidth={"text-black w-[650px] font-semibold pb-4"}
        />
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9WqUMrIN58Q?si=hmiKneaAUXP7EGg4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dash;
