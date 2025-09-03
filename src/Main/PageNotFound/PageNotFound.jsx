import React from "react";
import { useNavigate, Link } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center pt-10">
        <img
          src="https://www.cloudns.net/blog/wp-content/uploads/2023/10/Error-404-Page-Not-Found.png"
          alt=""
        />
      </div>
      <div className="flex justify-center ">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        {/* <Link to={-1}>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Go Back
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default PageNotFound;
