import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  let lastPageUrl = document.referrer;
  console.log(`Last visited page URL is ${lastPageUrl}`);

  return (
    <div>
      <div className="z-10 pt-10 flex justify-center">
        <img
          src="https://www.cloudns.net/blog/wp-content/uploads/2023/10/Error-404-Page-Not-Found.png"
          alt=""
        />
      </div>

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
