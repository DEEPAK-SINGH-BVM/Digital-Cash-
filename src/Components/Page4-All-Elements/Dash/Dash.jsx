import React from "react";

const Dash = () => {
  return (
    <div>
      <div className="text-center text-sky-500 pt-75 md:pt-30">
        <div class="flex flex-col  justify-between p-4 leading-normal">
          <div className="">
            <h5 className="sm:pt-20  mb-2 md:text-4xl font-bold tracking-tight  ">
              What is Dash Platform?
            </h5>
            <div className="w-full flex justify-center">
              <p className="text-black w-[650px] font-semibold pb-4">
                Dash Platform is a technology stack for building decentralized
                applications on the Dash network. The two main architectural
                components, Drive and DAPI, turn the Dash P2P network into a
                cloud that developers can integrate with their applications
              </p>
            </div>
          </div>
        </div>
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
