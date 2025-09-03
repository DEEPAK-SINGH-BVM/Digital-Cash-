import React, { useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  // let lastPageUrl = document.referrer;
  // console.log(`Last visited page URL is ${lastPageUrl}`);
  // console.log(document.referrer);
  // let referrer = document.referrer;
  // console.log(referrer);
  // alert("previous url is: " + window.history.previous.href);
  // const lastPageUrl = document.referrer;
  // console.log(`Last visited page URL: ${lastPageUrl}`);
  // window.history.back();
  // window.alert("404 Page Not Found !!");
  // function goBack() {
  // window.history.back();
  // }
  // function NextPage() {
  //   window.history.go(-1);
  // }
  let length = history.length;
  console.log(length, "HISTORY");
  return (
    <div>
      <div className="z-10 pt-10 flex justify-center">
        <img
          src="https://www.cloudns.net/blog/wp-content/uploads/2023/10/Error-404-Page-Not-Found.png"
          alt=""
        />
      </div>

      {/* <Link
      
        to={-1}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Individual
      </Link> */}

      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
