import React from "react";
import "./ImgData3.css";
const ImgData3 = () => {
  return (
    <div
      id="theNetWorkFunds"
      className={`bgColor flex justify-center sm:pt-10 lg:gap-20 flex  flex-col lg:flex-row py-27 `}
    >
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div>
          <h5
            className={`sm:pt-20  mb-2 text-4xl font-bold tracking-tight text-sky-500`}
          >
            Bounty Rewards
          </h5>

          <p className={`mb-2 sm:w-[400px] font-normal font-semibold text-white`}>
            The goal of the DCG Bounty program is to uncover significant
            vulnerabilities that have a direct and demonstrable impact on the
            security of our users. Vulnerability submissions must meet certain
            criteria to be eligible for bounty rewards. Bounty rewards are based
            on a combination of priority and severity.
          </p>
          <div className="text-white font-semibold ">
            <li>Level 1 (60 Points) = $5,000</li>
            <li>Level 2 (50 Points) = $2,000</li>
            <li>Level 3 (40 Points) = $750</li>
            <li>Level 4 (30 Points) = $200</li>
            <li>Level 5 (20 Points) = $50</li>
          </div>
          <div>
            <button className="mt-15 cursor-pointer border-white text-white hover:border-sky-600 hover:text-sky-600 mt-5 p-3 border border-1  w-[200px]  rounded-sm font-semibold">
              learn More
            </button>
          </div>
        </div>
      </div>
      <div className="pt-20 ">
        <div className="overflow-auto ">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <table className="w-full  text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs  uppercase  text-white">
                <tr className="text-sm">
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3">
                    Priority <br /> (High)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Priority <br /> (Medium)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Priority <br /> (Low)
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="px-20 shadow-2xl odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white font-medium "
                  >
                    Severity <br /> (High)
                  </th>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    60 points
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    50 points
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    $2999
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold"></td>
                </tr>
                <tr className="bg-transparent">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Reward
                  </th>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    $5,000
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    $2,000
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    $750
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold"></td>
                </tr>
                <tr className="shadow-2xl odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white font-medium "
                  >
                    Severity <br /> (Medium)
                  </th>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    50 points
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    40 points
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    30 points
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold"></td>
                </tr>
                <tr className="bg-transparent">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Reward
                  </th>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    $2,000
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    $750
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    $200
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold"></td>
                </tr>
                <tr className="shadow-2xl odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white font-medium "
                  >
                    Severity <br /> (Low)
                  </th>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    40 points
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    30 points
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    20 points
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold"></td>
                </tr>
                <tr className="bg-transparent">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Reward
                  </th>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    $2,000
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    $750
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold">
                    $200
                  </td>
                  <td className="px-6 py-4 text-lg text-sky-500 font-semibold"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImgData3;
