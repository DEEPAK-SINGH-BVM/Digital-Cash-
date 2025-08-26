import React from "react";
import "./Dash.css"
const Dash = () => {
  return (
    <>
      <div class="BackGround grid mb-8   rounded-lg shadow-xs md:mb-12 md:grid-cols-2  ">
        <figure class="  flex flex-col items-center justify-center p-8 text-center rounded-t-lg md:rounded-t-none md:rounded-ss-lg">
          <blockquote class=" max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-white">
            <h1 class="text-4xl font-semibold text-white">
              Whats New with Dash
            </h1>
          </blockquote>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center  md:rounded-se-lg">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-white">
            {/* <h1>SECTION - 1</h1> */}
            <div className=" flex gap-5 row text-center grid-item-container">
              <div className="box-hover">
                <a href="">
                  <div className="image ">
                    <img
                      src="https://media.dash.org/wp-content/uploads/icon-medium-medium.svg"
                      alt=""
                      className="image "
                    />
                  </div>
                  <span className="text-gray-300">Medium Blog</span>
                </a>
              </div>
              <div className="box-hover">
                <a href="">
                  <div className="image ">
                    <img
                      src="https://media.dash.org/wp-content/uploads/icon-twitter-white.svg"
                      alt=""
                      className="image "
                    />
                  </div>
                  <span className="text-gray-300">Medium Blog</span>
                </a>
              </div>
              <div className="box-hover">
                <a href="">
                  <div className="image ">
                    <img
                      src="	https://media.dash.org/wp-content/uploads/icon-reddit-white.svg"
                      alt=""
                      className="image "
                    />
                  </div>
                  <span className="text-gray-300">Medium Blog</span>
                </a>
              </div>
              <div className="box-hover">
                <a href="">
                  <div className="image ">
                    <img
                      src="https://media.dash.org/wp-content/uploads/icon-facebook-white.svg"
                      alt=""
                      className="image"
                    />
                  </div>
                  <span className="text-gray-300">Medium Blog</span>
                </a>
              </div>
            </div>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <div className=" flex gap-5 row text-center grid-item-container">
              <div className="box-hover">
                <a href="">
                  <div className="image ">
                    <img
                      src="	https://media.dash.org/wp-content/uploads/icon-youtube-white.svg"
                      alt=""
                      className="image "
                    />
                  </div>
                  <span className="text-gray-300">Medium Blog</span>
                </a>
              </div>
              <div className="box-hover">
                <a href="">
                  <div className="image ">
                    <img
                      src="https://media.dash.org/wp-content/uploads/icon-github-white.svg"
                      alt=""
                      className="image "
                    />
                  </div>
                  <span className="text-gray-300">Medium Blog</span>
                </a>
              </div>
              <div className="box-hover">
                <a href="">
                  <div className="image ">
                    <img
                      src="https://media.dash.org/wp-content/uploads/icon-forum-white-1.svg"
                      alt=""
                      className="image "
                    />
                  </div>
                  <span className="text-gray-300">Medium Blog</span>
                </a>
              </div>
              <div className="box-hover">
                <a href="">
                  <div className="image ">
                    <img
                      src="https://media.dash.org/wp-content/uploads/icon-github-white.svg"
                      alt=""
                      className="image"
                    />
                  </div>
                  <span className="text-gray-300">Medium Blog</span>
                </a>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center  md:rounded-es-lg md:border-b-0  ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-white">
            <h1 class="text-4xl font-semibold text-white dark:text-white">
              Find Your Fit
            </h1>
            <p class="my-4 w-[300px] text-left">
              Join us online and in your community! Dash users discuss ideas,
              share their skills, and work together to fix payments for
              everyone.
            </p>
          </blockquote>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center  border-gray-200 rounded-b-lg md:rounded-se-lg  ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-white">
            {/* <h1>Section -1</h1> */}
            <figcaption class="flex items-center justify-center ">
              <div className=" flex gap-5 row text-center grid-item-container">
                <div className="box-hover">
                  <a href="">
                    <div className="image ">
                      <img
                        src="		https://media.dash.org/wp-content/uploads/icon-discord-white.svg"
                        alt=""
                        className="image "
                      />
                    </div>
                    <span className="text-gray-300">Medium Blog</span>
                  </a>
                </div>
                <div className="box-hover">
                  <a href="">
                    <div className="image ">
                      <img
                        src="https://media.dash.org/wp-content/uploads/icon-instagram-white-1.svg"
                        alt=""
                        className="image "
                      />
                    </div>
                    <span className="text-gray-300">Medium Blog</span>
                  </a>
                </div>
                <div className="box-hover">
                  <a href="">
                    <div className="image ">
                      <img
                        src="https://media.dash.org/wp-content/uploads/icon-telegram-white-1.svg"
                        alt=""
                        className="image "
                      />
                    </div>
                    <span className="text-gray-300">Medium Blog</span>
                  </a>
                </div>
                <div className="box-hover">
                  <a href="">
                    <div className="image ">
                      <img
                        src="	https://media.dash.org/wp-content/uploads/icon-discord-white.svg"
                        alt=""
                        className="image"
                      />
                    </div>
                    <span className="text-gray-300">Medium Blog</span>
                  </a>
                </div>
              </div>
            </figcaption>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-white">
              {/* <h1>Section -1</h1> */}
              <figcaption class="flex items-center justify-center ">
                <div className=" flex gap-5 row text-center grid-item-container">
                  <div className="box-hover">
                    <a href="">
                      <div className="image ">
                        <img
                          src="https://media.dash.org/wp-content/uploads/icon-linkedin-white.svg"
                          alt=""
                          className="image "
                        />
                      </div>
                      <span className="text-gray-300">Medium Blog</span>
                    </a>
                  </div>
                
                  <div className="box-hover">
                    <a href="">
                      <div className="image ">
                        <img
                          src="https://media.dash.org/wp-content/uploads/icon-telegram-white-1.svg"
                          alt=""
                          className="image "
                        />
                      </div>
                      <span className="text-gray-300">Medium Blog</span>
                    </a>
                  </div>
              
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
