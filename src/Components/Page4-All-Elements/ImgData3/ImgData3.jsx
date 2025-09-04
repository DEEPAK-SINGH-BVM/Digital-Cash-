import React from "react";
import ImgData1 from "../../Element-4/ImgData1/ImgData";

const ImgData3 = () => {
  return (
    <div className="">
      <ImgData1
        bgColor={"bg-blue-200"}
        image={"https://media.dash.org/wp-content/uploads/identity.png"}
        title={"Identities & Usernames"}
        titleColor={"text-sky-600"}
        paragraph={
          "Robust, flexible user data structures that are fully decentralized and always available. Usernames make it easier than ever to transact."
        }
      />
    </div>
  );
};

export default ImgData3;
