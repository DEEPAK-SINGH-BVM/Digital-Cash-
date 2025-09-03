import React from "react";
import { Link } from "react-router-dom";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";

import "./Navbar.css";

export default function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  const [openMenu3, setOpenMenu3] = React.useState(false);
  const [openMenu4, setOpenMenu4] = React.useState(false);
  const [openMenu5, setOpenMenu5] = React.useState(false);

  return (
    <div>
      <Disclosure
        as="nav"
        className="z-50 fixed font-semibold w-full z-50 flex justify-center rounded-xl border-black bg-white lg:rounded-sm border-none"
      >
        <div className="mainSection shadow-md absolute bg-white mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 rounded-xl">
          <div className="relative flex h-16 items-center justify-between ">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-black focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block size-6 group-data-open:hidden" />
                <XMarkIcon className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="https://miro.medium.com/v2/resize:fit:1400/1*_DHG7Np0LSZUWpyrpvnyyA.png"
                  className="h-8 w-auto"
                />
              </div>

              <div className="hidden sm:ml-6 sm:block w-full ">
                <div className="flex space-x-4 justify-end ">
                  <Menu open={openMenu} handler={setOpenMenu} allowHover>
                    <MenuHandler>
                      <Button variant="text" className="text-sm font-semibold">
                        Get Started
                      </Button>
                    </MenuHandler>
                    <MenuList className="bg-white w-[13rem]  border-none">
                      <Link to="/individual">
                        <MenuItem className="border-none">
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500"
                          >
                            Individual
                          </Typography>
                        </MenuItem>
                      </Link>
                      <Link to="">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500  pt-3"
                          >
                            Business
                          </Typography>
                        </MenuItem>
                      </Link>
                      <Link to="">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500  pt-3"
                          >
                            Downloads
                          </Typography>
                        </MenuItem>
                      </Link>
                      <Link to="">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500  pt-3"
                          >
                            Buy Online
                          </Typography>
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </Menu>

                  <Menu open={openMenu2} handler={setOpenMenu2} allowHover>
                    <MenuHandler>
                      <Button variant="text" className="text-sm font-semibold">
                        Institution
                      </Button>
                    </MenuHandler>
                    <MenuList className="bg-white w-[13rem]">
                      <Link to="/traders">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500"
                          >
                            Dashboard
                          </Typography>
                        </MenuItem>
                      </Link>
                      <Link to="">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500  pt-3"
                          >
                            Financial Service
                          </Typography>
                        </MenuItem>
                      </Link>
                      <Link to="">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500  pt-3"
                          >
                            Regulatory
                          </Typography>
                        </MenuItem>
                      </Link>
                      <Link to="">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500  pt-3"
                          >
                            FastPass
                          </Typography>
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </Menu>

                  <Menu open={openMenu3} handler={setOpenMenu3} allowHover>
                    <MenuHandler>
                      <Button variant="text" className="text-sm font-semibold">
                        Developers
                      </Button>
                    </MenuHandler>
                    <MenuList className="bg-white w-[13rem] border-none">
                      <Link to="/platforms">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500"
                          >
                            Platform
                          </Typography>
                        </MenuItem>
                      </Link>
                      <Link to="">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500  pt-3"
                          >
                            Documentation{" "}
                          </Typography>
                        </MenuItem>
                      </Link>
                      <Link to="">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500  pt-3"
                          >
                            Contribution
                          </Typography>
                        </MenuItem>
                      </Link>
                      <Link to="">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500  pt-3"
                          >
                            Provider
                          </Typography>
                        </MenuItem>
                      </Link>
                      <Link to="">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500  pt-3"
                          >
                            RoadMap
                          </Typography>
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </Menu>

                  <Menu open={openMenu4} handler={setOpenMenu4} allowHover>
                    <MenuHandler>
                      <Button variant="text" className="text-sm font-semibold">
                        Community
                      </Button>
                    </MenuHandler>
                    <MenuList className="bg-white w-[13rem] border-none ">
                      <Link to="/BugBounty">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500"
                          >
                            Bug Bounty Program
                          </Typography>
                        </MenuItem>
                      </Link>
                      <Link to="">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500 pt-3"
                          >
                            Learning Source
                          </Typography>
                        </MenuItem>
                      </Link>
                      <Link to="">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500  pt-3"
                          >
                            Contact With US
                          </Typography>
                        </MenuItem>
                      </Link>
                      <Link to="">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500  pt-3"
                          >
                            Forum
                          </Typography>
                        </MenuItem>
                      </Link>
                      <Link to="">
                        <MenuItem>
                          <Typography
                            variant="h6"
                            className=" hover:text-sky-500  pt-3"
                          >
                            Mining
                          </Typography>
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </Menu>

                  <Menu open={openMenu5} handler={setOpenMenu5} allowHover>
                    <MenuHandler>
                      <Button variant="text" className="text-sm font-semibold">
                        English
                      </Button>
                    </MenuHandler>
                    <MenuList className="bg-white w-[13rem] border-none">
                      <a href="/">
                        <MenuItem className="border-none">
                          <Typography variant="h6" className="flex gap-2 ">
                            <img
                              className="w-10 h-6 rounded-full"
                              src="https://www.dash.org/wp-content/uploads/flags/USFlag.svg"
                              alt="Rounded avatar"
                            ></img>
                            English{" "}
                          </Typography>
                        </MenuItem>
                      </a>
                      <a href="/">
                        <MenuItem>
                          <Typography variant="h6" className="flex gap-2  pt-3">
                            <img
                              className="w-10 h-6 rounded-full"
                              src="https://www.dash.org/wp-content/uploads/flags/german.svg"
                              alt="Rounded avatar"
                            ></img>
                            Deutsch
                          </Typography>
                        </MenuItem>
                      </a>
                      <a href="/">
                        <MenuItem>
                          <Typography variant="h6" className="flex gap-2  pt-3">
                            <img
                              className="w-10 h-6 rounded-full"
                              src="https://www.dash.org/wp-content/uploads/flags/greek.svg"
                              alt="Rounded avatar"
                            ></img>
                            Ελληνικά
                          </Typography>
                        </MenuItem>
                      </a>
                      <a href="/">
                        <MenuItem>
                          <Typography variant="h6" className="flex gap-2  pt-3">
                            <img
                              className="w-10 h-6 rounded-full"
                              src="	https://www.dash.org/wp-content/uploads/flags/spanish.svg"
                              alt="Rounded avatar"
                            ></img>
                            Español
                          </Typography>
                        </MenuItem>
                      </a>
                      <a href="/">
                        <MenuItem>
                          <Typography variant="h6" className="flex gap-2  pt-3">
                            <img
                              className="w-10 h-6 rounded-full"
                              src="	https://www.dash.org/wp-content/uploads/flags/filipino.svg"
                              alt="Rounded avatar"
                            ></img>
                            Filipino
                          </Typography>
                        </MenuItem>
                      </a>
                      <a href="/">
                        <MenuItem>
                          <Typography variant="h6" className="flex gap-2  pt-3">
                            <img
                              className="w-10 h-6 rounded-full"
                              src="	https://www.dash.org/wp-content/uploads/flags/french.svg"
                              alt="Rounded avatar"
                            ></img>
                            Français
                          </Typography>
                        </MenuItem>
                      </a>
                      <a href="/">
                        <MenuItem>
                          <Typography variant="h6" className="flex gap-2  pt-3">
                            <img
                              className="w-10 h-6 rounded-full"
                              src="https://www.dash.org/wp-content/uploads/flags/italian.svg"
                              alt="Rounded avatar"
                            ></img>
                            Italiano
                          </Typography>
                        </MenuItem>
                      </a>
                    </MenuList>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden mainSection absolute bg-white pt-10 border-none">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full justify-between px-3 py-2 text-sm font-medium text-black hover:bg-gray-100">
                    Get Started{" "}
                    <ChevronDownIcon
                      className={`${open ? "rotate-180" : ""} h-5 w-5`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="pl-5">
                    <Link to="/individual" className="block px-3 py-2 text-sm">
                      Individual
                    </Link>
                    <Link to="" className="block px-3 py-2 text-sm">
                      Business
                    </Link>
                    <Link to="" className="block px-3 py-2 text-sm">
                      Downloads
                    </Link>
                    <Link to="" className="block px-3 py-2 text-sm">
                      Buy Online
                    </Link>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full justify-between px-3 py-2 text-sm font-medium text-black hover:bg-gray-100">
                    Institution{" "}
                    <ChevronDownIcon
                      className={`${open ? "rotate-180" : ""} h-5 w-5`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="pl-5">
                    <Link to="/traders" className="block px-3 py-2 text-sm">
                      Dashboard
                    </Link>
                    <Link to="" className="block px-3 py-2 text-sm">
                      Team
                    </Link>
                    <Link to="" className="block px-3 py-2 text-sm">
                      Projects
                    </Link>

                    <Link to="" className="block px-3 py-2 text-sm">
                      Calendar
                    </Link>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full justify-between px-3 py-2 text-sm font-medium text-black hover:bg-gray-100">
                    Developers{" "}
                    <ChevronDownIcon
                      className={`${open ? "rotate-180" : ""} h-5 w-5`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="pl-5">
                    <Link to="/platforms" className="block px-3 py-2 text-sm">
                      Platform
                    </Link>

                    <Link to="" className="block px-3 py-2 text-sm">
                      Forum
                    </Link>
                    <Link to="" className="block px-3 py-2 text-sm">
                      Blog
                    </Link>

                    <Link to="" className="block px-3 py-2 text-sm">
                      Mining
                    </Link>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full justify-between px-3 py-2 text-sm font-medium text-black hover:bg-gray-100">
                    Community{" "}
                    <ChevronDownIcon
                      className={`${open ? "rotate-180" : ""} h-5 w-5`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="pl-5">
                    <Link to="/BugBounty" className="block px-3 py-2 text-sm">
                      Bug Bounty Program
                    </Link>
                    <Link to="" className="block px-3 py-2 text-sm">
                      Document
                    </Link>
                    <Link to="" className="block px-3 py-2 text-sm">
                      Contributing
                    </Link>
                    <Link to="" className="block px-3 py-2 text-sm">
                      RoadMap
                    </Link>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full justify-between px-3 py-2 text-sm font-medium text-black hover:bg-gray-100">
                    Language{" "}
                    <ChevronDownIcon
                      className={`${open ? "rotate-180" : ""} h-5 w-5`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="pl-5">
                    <a href="/">
                      <MenuItem className="border-none">
                        <Typography variant="h6" className="flex gap-2 ">
                          <img
                            className="w-10 h-6 rounded-full"
                            src="https://www.dash.org/wp-content/uploads/flags/USFlag.svg"
                            alt="Rounded avatar"
                          ></img>
                          English{" "}
                        </Typography>
                      </MenuItem>
                    </a>
                    <a href="/">
                      <MenuItem>
                        <Typography variant="h6" className="flex gap-2  pt-3">
                          <img
                            className="w-10 h-6 rounded-full"
                            src="https://www.dash.org/wp-content/uploads/flags/german.svg"
                            alt="Rounded avatar"
                          ></img>
                          Deutsch
                        </Typography>
                      </MenuItem>
                    </a>
                    <a href="/">
                      <MenuItem>
                        <Typography variant="h6" className="flex gap-2  pt-3">
                          <img
                            className="w-10 h-6 rounded-full"
                            src="https://www.dash.org/wp-content/uploads/flags/greek.svg"
                            alt="Rounded avatar"
                          ></img>
                          Ελληνικά
                        </Typography>
                      </MenuItem>
                    </a>
                    <a href="/">
                      <MenuItem>
                        <Typography variant="h6" className="flex gap-2  pt-3">
                          <img
                            className="w-10 h-6 rounded-full"
                            src="	https://www.dash.org/wp-content/uploads/flags/spanish.svg"
                            alt="Rounded avatar"
                          ></img>
                          Español
                        </Typography>
                      </MenuItem>
                    </a>
                    <a href="/">
                      <MenuItem>
                        <Typography variant="h6" className="flex gap-2  pt-3">
                          <img
                            className="w-10 h-6 rounded-full"
                            src="	https://www.dash.org/wp-content/uploads/flags/filipino.svg"
                            alt="Rounded avatar"
                          ></img>
                          Filipino
                        </Typography>
                      </MenuItem>
                    </a>
                    <a href="/">
                      <MenuItem>
                        <Typography variant="h6" className="flex gap-2  pt-3">
                          <img
                            className="w-10 h-6 rounded-full"
                            src="	https://www.dash.org/wp-content/uploads/flags/french.svg"
                            alt="Rounded avatar"
                          ></img>
                          Français
                        </Typography>
                      </MenuItem>
                    </a>
                    <a href="/">
                      <MenuItem>
                        <Typography variant="h6" className="flex gap-2  pt-3">
                          <img
                            className="w-10 h-6 rounded-full"
                            src="https://www.dash.org/wp-content/uploads/flags/italian.svg"
                            alt="Rounded avatar"
                          ></img>
                          Italiano
                        </Typography>
                      </MenuItem>
                    </a>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
