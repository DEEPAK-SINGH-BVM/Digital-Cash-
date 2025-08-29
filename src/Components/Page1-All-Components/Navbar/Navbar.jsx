import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import "./Navbar.css";
const navigation = [
  { name: "Get Started", current: false },
  { name: "Institutions", href: "", current: false },
  { name: "Developers", href: "", current: false },
  { name: "Community", href: "", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  const menuItems = [
    {
      title: "Individual",
    },
    {
      title: "Businesses",
    },
    {
      title: "Downloads",
    },
    {
      title: "Buy Online",
    },
  ];
 const menuItems2 = [
   { name: "Dashboard", href: "/traders", current: true },
   { name: "Team", href: "#", current: false },
   { name: "Projects", href: "#", current: false },
   { name: "Calendar", href: "#", current: false },
 ];
  return (
    <div>
      <Disclosure
        as="nav"
        className=" fixed font-semibold  w-full z-50 flex justify-center rounded-xl border-black bg-white lg:rounded-sm"
      >
        <div className="shadow-md  mainSection absolute  bg-white mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 rounded-xl ">
          <div className="relative flex h-16 items-center justify-between ">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-black focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center ">
                <img
                  alt="Your Company"
                  src="https://miro.medium.com/v2/resize:fit:1400/1*_DHG7Np0LSZUWpyrpvnyyA.png"
                  className="h-8 w-auto"
                />
              </div>

              <div className="hidden sm:ml-6 sm:block  w-full ">
                <div className="flex space-x-4 justify-end  ">
                  {/* {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-950/50 text-black"
                          : "text-black hover:bg-white/5 hover:text-black",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))} */}
                  <Menu open={openMenu} handler={setOpenMenu} allowHover>
                    <MenuHandler>
                      <Button
                        variant="text"
                        className="border-none  items-center  gap-3 text-base font-normal capitalize tracking-normal"
                      >
                        <p className="font-semibold">Get Started</p>
                      </Button>
                    </MenuHandler>
                    <MenuList className="z-10 border-none  bg-white hidden w-[10rem] grid-cols-7overflow-visible lg:grid">
                      <ul className="border-none pl-5 p-5 gap-3 font-semibold text-left col-span-4 flex w-full flex-col gap-1">
                        {menuItems.map(({ title }) => (
                          <a href="/individual" key={title}>
                            <MenuItem>
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-1"
                              >
                                {title}
                              </Typography>
                            </MenuItem>
                          </a>
                        ))}
                      </ul>
                    </MenuList>
                  </Menu>
                  <Menu open={openMenu2} handler={setOpenMenu2} allowHover>
                    <MenuHandler>
                      <Button
                        variant="text"
                        className="border-none  items-center  gap-3 text-base font-normal capitalize tracking-normal"
                      >
                        <p className="font-semibold">Institution</p>
                      </Button>
                    </MenuHandler>
                    <MenuList className="z-10 border-none  bg-white hidden w-[10rem] grid-cols-7overflow-visible lg:grid">
                      <ul className="border-none pl-5 p-5 gap-3 font-semibold text-left col-span-4 flex w-full flex-col gap-1">
                        {menuItems2.map(({ name }) => (
                          <a href="/traders" key={name}>
                            <MenuItem>
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-1"
                              >
                                {name}
                              </Typography>
                            </MenuItem>
                          </a>
                        ))}
                      </ul>
                    </MenuList>

                    <a href="" className="pt-3">
                      Developers
                    </a>
                    <a href="" className="pt-3">
                      {" "}
                      Community
                    </a>
                    <a href="" className="pt-3">
                      English
                    </a>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden mainSection absolute bg-white pt-10 ">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-950/50 text-black"
                    : "text-black hover:bg-white/5 hover:text-black",
                  "block rounded-md px-3 py-2 text-base font-medium "
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
            {menuItems.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-950/50 text-black"
                    : "text-black hover:bg-white/5 hover:text-black",
                  "block rounded-md px-3 py-2 text-base font-medium "
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
