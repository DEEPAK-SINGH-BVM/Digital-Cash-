// const ImgData6 = ({}) => {
//   return (
//     <div className="flex justify-center pt-30 md:pt-20 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
//       <div className="flex flex-col grid grid:col-2 lg:flex-row  justify-center sm:pt-35  pt-35 ">
//         <div className=" bg-white  text-center p-10 font-semibold item-center border-2 border-red-500 text-center justify-items-center ">
//           <img
//             src="https://media.dash.org/wp-content/uploads/severity_high.svg"
//             alt=""
//             className="h-[100px]"
//           />
//           <p className="pt-5 sm:text-[35px] text-sky-600 font-bold  italic">
//             Severity High
//           </p>

//           <p className="font-bold">30 Points Could cause a loss of funds</p>
//           <p className="font-normal italic">Without a device access</p>
//           <br />
//           <p className=" w-[300px]  font-semibold text-gray-700">
//             Private key exposure, recovery phrase exposure, pin code
//             attack/bypass
//           </p>
//           {/*  */}
//           <p className="font-bold">Breach of privacy</p>
//           <p className="font-normal italic">With device access</p>
//           <br />
//           <p className=" w-[300px]  font-semibold text-gray-700">
//             Private key exposure, recovery phrase exposure, pin code
//             attack/bypass, balance or transaction visibility without the
//             required authentication
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImgData6;
import React from "react";
import ImageData5 from "../../Element-5/ImgData5/ImgData5";
/*
 Img,
  title,
  subTitle,
  paragraph1,
  paragraph2,
  subTitle2,
  paragraph3,
  paragraph4,
*/
// import "./ImgData2.css"
const ImgData6 = () => {
  return (
    <div className="flex justify-center item-center flex-wrap">
      <ImageData5
        Img={"https://media.dash.org/wp-content/uploads/severity_high.svg"}
        title={"Severity High"}
        subTitle={"30 Points Could cause a loss of funds"}
        paragraph1={"Without a device access"}
        paragraph2={
          "Private key exposure, recovery phrase exposure, pin code attack/bypass"
        }
      />
      <ImageData5
        Img={"https://media.dash.org/wp-content/uploads/severity_medium.svg"}
        title={"Severity Medium"}
        subTitle={"20 Points Prevents the use or receipt of funds"}
        paragraph1={"Without a device access"}
        paragraph2={
          "Cannot sync with the chain, persistent error when trying to send Dash, cannot receive a transaction that was successfully submitted to the network"
        }
        subTitle2={"Breach of privacy"}
        paragraph3={"With device access"}
        paragraph4={
          "Private key exposure, recovery phrase exposure, pin code attack/bypass, balance or transaction visibility without the required authentication"
        }
      />
      <ImageData5
        Img={"	https://media.dash.org/wp-content/uploads/severity_low.svg"}
        title={"Severity Low"}
        subTitle={"30 Points Could cause a loss of funds"}
        paragraph1={"Without a device access"}
        paragraph2={
          "Private key exposure, recovery phrase exposure, pin code attack/bypass"
        }
      />
      <div className="bg-sky-500 pt-0 ">
        <hr className="w-[60%] h-0.5 mx-auto  bg-white  rounded-sm border-0 "></hr>
      </div>
    </div>
  );
};

export default ImgData6;
