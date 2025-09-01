import React from "react";
import ImageData from "../../Element-5/ImgData1/ImgData1";
import Paragraph from "../../Element-4/Paragraph/Paragraph";
// import "./imgData.css";
const ImgData1 = () => {
  // const points = [
  //   { name: "please do not discuss this program or any" },
  //   { name: "please do not discuss this program or any" },
  //   { name: "please do not discuss this program or any" },
  //   { name: "please do not discuss this program or any" },
  // ];
  return (
    <div>
      {/* 
         const menuItems2 = [
         { name: "Dashboard", href: "/traders", current: true },
         { name: "Team", href: "", current: false },
         { name: "Projects", href: "", current: false },
         { name: "Calendar", href: "", current: false },
        ];
         <ul className="border-none pl-5 p-5 gap-3 font-semibold text-left col-span-4 flex w-full flex-col gap-1">
                                {menuItems5.map(({ name }) => (
                                  <a href="/" key={name}>
                                    <MenuItem>
                                      <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="mb-1"
                                      >
                                        {name}
                                      </Typography>
                                    </MenuItem>
                                  </a>
                                ))}
                              </ul>
      */}

      <ImageData
        image={"https://media.dash.org/wp-content/uploads/bugbounty.svg"}
        bgColor={"bg-gray-100"}
        title={"Bug Bounty Program"}
        titleColor={"text-sky-500"}
        paragraph={
          "The Dash Core Group Bug Bounty Program allows developers to discover and resolve bugs before the general public is aware of such bugs. If you find a security vulnerability on any of the in-scope products mentioned below, please let us know right away by reporting it."
        }
        // point1={"point1"}
        point2={"point2"}
        paragraphColor={"text-black"}
        button={"Report a Bug"}
        className={
          "cursor-pointer bg-sky-600 hover:border-sky-400 hover:text-sky-400 mt-5 text-white p-4 border border-1  border-white w-[210px]  rounded-sm font-semibold"
        }
      />
      {/* {points.map(({ name }) => (
        <li key={name}>{name}</li>
      ))} */}
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
