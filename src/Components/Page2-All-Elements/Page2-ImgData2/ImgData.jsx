// import React from "react";
// import ImageData2 from "../../Element/ImgData2/ImgData";
// // import "./ImgData2.css";
// const ImgData2 = () => {
//   return (
    //     <div>
    //       <ImageData2
    //         bgColor={"bg-sky-500"}
    //         title={"Get Going!"}
    //         titleColor={"text-white "}
    //         paragraph={
//           "Grab a coffee, buy a plane ticket, or pay your phone bill. Dash is growing and is accepted by new businesses every day."
//         }
//         paragraphColor={"text-white"}
//         button={"Use Your Dash"}
//       />
//       {/* dashImg, dashText, paragraph */}
     
//     </div>
//   );
// };
// export default ImgData2;
import React from "react";
import DashBox from "../../Elements-2/DashBox/Dash";
import DashButton from "../../Elements-2/Button/Button";
import Button from "../../Elements-2/Button2/Button";
// import "";
const ImgData2 = () => {
  return (
    <div>
      <div
        className={` flex justify-center sm:pt-20 sm:gap-30  flex flex-col md:flex-row bg-sky-500`}
      >
        <div class="flex flex-col justify-between p-4 leading-normal">
          <div>
            <h5
              className={`sm:pt-20  mb-2 text-3xl font-bold tracking-tight  text-white`}
            >
              Get Going!
            </h5>

            <p class={`mb-2 sm:w-[340px] font-normal font-semibold text-white`}>
              Grab a coffee, buy a plane ticket, or pay your phone bill. Dash is
              growing and is accepted by new businesses every day.
            </p>

            <div>
              <button className="cursor-pointer hover:border-sky-300 hover:text-sky-300 mt-5 text-white p-4 border border-1  border-white w-[200px]  rounded-sm font-semibold">
                Use Your Dash
              </button>
            </div>
          </div>
        </div>
        <div className="">
          {/*  */}
          <DashBox
            dashImg={
              "https://media.dash.org/wp-content/uploads/use-peers-1.svg"
            }
            dashText={"Pay Your Friends "}
            paragraph={""}
          />
          <DashBox
            dashImg={"https://media.dash.org/wp-content/uploads/use-shop-1.svg"}
            dashText={"Pay Your Friends "}
            paragraph={""}
          />
        </div>
        <div className=" ">
          {/*  */}
          <DashBox
            dashImg={
              "https://media.dash.org/wp-content/uploads/use-airfares-1.svg"
            }
            dashText={"Pay Your Friends "}
            paragraph={""}
          />
          <DashBox
            dashImg={
              "https://media.dash.org/wp-content/uploads/use-hotels-1.svg"
            }
            dashText={"Pay Your Friends "}
            paragraph={""}
          />
        </div>
        <div className=" ">
          {/*  */}
          <DashBox
            dashImg={
              "https://media.dash.org/wp-content/uploads/use-business-1.svg"
            }
            dashText={"Pay Your Friends "}
            paragraph={""}
          />
          <DashBox
            dashImg={
              "https://media.dash.org/wp-content/uploads/use-airfares-1.svg"
            }
            dashText={"Pay Your Friends "}
            paragraph={""}
          />
        </div>
        <div></div>
      </div>

      <div className="pt-10 flex justify-center bg-sky-500 gap-10   ">
        <Button
          btnImg={
            "https://media.dash.org/wp-content/uploads/Travala-Logo_Icon-Tight.png"
          }
          btnTitle={"Karken"}
          btnSub={"karken.com"}
        />
        <Button
          btnImg={"	https://media.dash.org/wp-content/uploads/bitrefill-1.svg"}
          btnTitle={"Karken"}
          btnSub={"karken.com"}
        />
        <Button
          btnImg={"https://media.dash.org/wp-content/uploads/mobiletopup.png"}
          btnTitle={"Karken"}
          btnSub={"karken.com"}
        />
      </div>
    </div>
  );
};
export default ImgData2;
