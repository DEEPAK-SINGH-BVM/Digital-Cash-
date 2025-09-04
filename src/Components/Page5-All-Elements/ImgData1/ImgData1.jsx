import React from "react";
import ImageData from "../../Element-5/ImgData1/ImgData1";
import Paragraph from "../../Element-4/Paragraph/Paragraph";
const ImgData1 = () => {
  const points = [
    "Mainnet",
    "Dash Core Desktop Wallet",
    "DashPay Android",
    "DashPay iOS",
  ];
  return (
    <div>
      <ImageData
        image={"https://media.dash.org/wp-content/uploads/bugbounty.svg"}
        bgColor={"bg-gray-100"}
        title={"Bug Bounty Program"}
        titleColor={"text-sky-500"}
        paragraph={
          "The Dash Core Group Bug Bounty Program allows developers to discover and resolve bugs before the general public is aware of such bugs. If you find a security vulnerability on any of the in-scope products mentioned below, please let us know right away by reporting it."
        }
        points={points}
        paragraphColor={"text-black"}
        button={"Report a Bug"}
        className={
          "cursor-pointer bg-sky-600 hover:border-sky-400 hover:text-sky-400 mt-5 text-white p-4 border border-1  border-white w-[210px]  rounded-sm font-semibold"
        }
      />
      <div>
        <div className="text-center text-sky-500 pt-75 md:pt-10">
          <Paragraph
            ParagraphTitle={"Responsible Disclosure"}
            paragraph={
              "As this is a private program, please do not discuss this program or any vulnerabilities (even resolved ones) outside of the program without express consent from the organization.  If you prefer to submit via an encrypted email you can download the key above and email the details to"
            }
            paragraphStyle={
              "sm:pt-20  mb-2 text-5xl font-bold tracking-tight  "
            }
            web={"infosec@dash.org."}
            paragraphWidth={"text-black w-[1050px] font-semibold pb-4"}
          />
        </div>
      </div>
    </div>
  );
};
export default ImgData1;
