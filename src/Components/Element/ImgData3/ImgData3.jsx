import React from "react";

const ImgData3 = ({
  image,
  title,
  paragraph,
  button,
  titleColor,
  paragraphColor,
  bgColor,
  paragraph2,
  table,
}) => {
  return (
    <div
      id="theNetWorkFunds"
      className={` flex justify-center sm:pt-10 lg:gap-30  flex  flex-col lg:flex-row  ${bgColor}`}
    >
      <div className="pt-20 ">
        <div className="overflow-auto">
          <table className="cursor-pointer w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-sky-600 uppercase bg-gray-50  gap-3">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Latest Proposals
                </th>
                <th scope="col" className="px-6 py-3">
                  Votes (y/n)
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Funding
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-1 hover:border-sky-300 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap "
                >
                  Adjusting Block Reward
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="bg-white border-none border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
          
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
              </tr>
              <tr className="bg-white border-1 hover:border-sky-300 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap "
                >
                  Reduce selling pressure
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4 ">
                  <p className=" text-2xl text-green-500">
                    <i className="fa-solid fa-circle-check"></i>
                  </p>
                </td>
              </tr>
              <tr className="bg-white ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                ></th>
              </tr>
              <tr className="bg-white border-1 hover:border-sky-300 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="bg-white ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                ></th>
              </tr>
              <tr className="bg-white border-1 hover:border-sky-300 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4 ">
                  <p className=" text-2xl text-green-500">
                    <i className="fa-solid fa-circle-check"></i>
                  </p>
                </td>
              </tr>
              <tr className="bg-white ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                ></th>
              </tr>
              <tr className="bg-white border-1 hover:border-sky-300 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4 ">
                  <p className=" text-2xl text-green-500">
                    <i className="fa-solid fa-circle-check"></i>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col justify-between p-4 leading-normal">
        <div>
          <h5
            className={`sm:pt-20  mb-2 text-3xl font-bold tracking-tight  ${titleColor}`}
          >
            {title}
          </h5>

          <p
            className={`mb-2 sm:w-[340px] font-normal font-semibold ${paragraphColor}`}
          >
            {paragraph}
          </p>
          <p
            className={`mb-2 sm:w-[340px] font-normal font-semibold ${paragraphColor}`}
          >
            {paragraph2}
          </p>
          <div>
            <button className="cursor-pointer border-sky-600 text-sky-600 mt-5 p-4 border border-1  w-[300px]  rounded-sm font-semibold">
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImgData3;
