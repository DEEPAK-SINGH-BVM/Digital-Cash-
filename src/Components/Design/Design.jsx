import "./Design.css";
const DesignBox = ({}) => {
  return (
    <div className="flex justify-center w-full">
      {/* //   <div className="banner-shape container pull-up ">
    //     <h1 className="text-sky-300">dfdfsdfsdfsf</h1>
    //     <div className="bg"></div>
    //   </div> */}

      <div className="banner-shape container pull-up">
        <div className="banner-size text-left bg bg-gradient-v flex justify-center grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 text-center pl-35">
          <div className="miniBox w-[200px] h-[100px] pt-9 ">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Join
              </h5>
              <p class="font-normal text-white dark:text-white">
                Engage with the community. Twitter, Reddit or Discord are just a
                few of the places you will find Dash users.
              </p>
            </a>
          </div>
          <div className="w-[200px] h-[120px] pt-9">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Learn Together
              </h5>
              <p class="font-normal text-white dark:text-white">
                Engage with the community. Twitter, Reddit or Discord are just a
                few of the places you will find Dash users.
              </p>
            </a>
          </div>
          <div className="w-[200px] h-[100px] pt-9">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Share your voice
              </h5>
              <p class="font-normal text-white dark:text-white">
                Engage with the community. Twitter, Reddit or Discord are just a
                few of the places you will find Dash users.
              </p>
            </a>
          </div>
        </div>

        <div className="row flex-lg-nowrap"></div>
      </div>
    </div>
  );
};

export default DesignBox;
