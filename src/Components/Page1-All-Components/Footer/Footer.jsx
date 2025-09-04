import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*_DHG7Np0LSZUWpyrpvnyyA.png"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap "></span>
            </a>
          </div>
        </div>
      </footer>

      <footer className="bg-white ">
        <div className="mx-auto w-full max-w-screen-xl ">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Company
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline hover:text-sky-500">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-sky-500">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-sky-500">
                    Brand Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-sky-500">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Help center
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-sky-500">
                    Discord Server
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-sky-500">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-sky-500">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-sky-500">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-sky-500">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-sky-500">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-sky-500">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Download
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-sky-500">
                    iOS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-sky-500">
                    Android
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-sky-500">
                    Windows
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-sky-500">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-white rounded-lg shadow-sm m-4 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
