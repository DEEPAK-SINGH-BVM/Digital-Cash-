import React from "react";
import "./Dash.css";
import DashBox from "../../Element/DashBox/DashBox";

const dashData = [
  {
    image: "https://media.dash.org/wp-content/uploads/icon-medium-medium.svg",
    text: "Medium ",
  },
  {
    image: "https://media.dash.org/wp-content/uploads/icon-twitter-white.svg",
    text: "Twitter",
  },
  {
    image: "https://media.dash.org/wp-content/uploads/icon-reddit-white.svg",
    text: "Reddit",
  },
  {
    image: "https://media.dash.org/wp-content/uploads/icon-facebook-white.svg",
    text: "FaceBook",
  },
  //
  {
    image: "	https://media.dash.org/wp-content/uploads/icon-github-white.svg",
    text: "GitHub",
  },
  {
    image: "https://media.dash.org/wp-content/uploads/icon-youtube-white.svg",
    text: "YouTube",
  },
  {
    image: "https://media.dash.org/wp-content/uploads/icon-forum-white-1.svg",
    text: "Forum",
  },
  {
    image: "https://media.dash.org/wp-content/uploads/icon-discord-white.svg",
    text: "Dash Talk",
  },
];
const dashDataDiv = [
  {
    image:
      "https://media.dash.org/wp-content/uploads/icon-instagram-white-1.svg",
    text: "Reddit",
  },
  {
    image:
      "	https://media.dash.org/wp-content/uploads/icon-telegram-white-1.svg",
    text: "Reddit",
  },
];
const Dash = () => {
  return (
    <>
      <div
        id="Whats"
        className="BackGround grid mt-10  shadow-xs  md:grid-cols-2  "
      >
        <figure className="flex flex-col items-center justify-center text-center rounded-t-lg md:rounded-t-none md:rounded-ss-lg">
          <blockquote className=" max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-white">
            <h1 className="text-4xl font-semibold text-white ">
              Whats New with Dash
            </h1>
          </blockquote>
        </figure>
        <figure className="flex flex-col items-center justify-center lg:items-start text-center md:rounded-se-lg lg:mt-15 sm:pt-10  ">
          <figcaption className="flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 text-center grid-item-container ">
              {dashData.map((item, index) => (
                <DashBox key={index} image={item.image} text={item.text} />
              ))}
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center  text-start  md:rounded-es-lg md:border-b-0  ">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-white">
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Find Your Fit
            </h1>
            <p className="my-4 w-[300px] text-left">
              Join us online and in your community! Dash users discuss ideas,
              share their skills, and work together to fix payments for
              everyone.
            </p>
          </blockquote>
        </figure>
        <figure className="flex flex-col items-center justify-center lg:items-start border-gray-200 rounded-b-lg md:rounded-se-lg  ">
          <figcaption className="flex items-center justify-center ">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-white">
              <figcaption className="flex items-center justify-center ">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 text-center grid-item-container">
                  {dashDataDiv.map((item, index) => (
                    <DashBox key={index} image={item.image} text={item.text} />
                  ))}
                </div>
              </figcaption>
            </blockquote>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default Dash;
