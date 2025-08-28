import React from "react";
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

export function MenuCustomList() {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className="flex font-semibold items-center  gap-3 text-base font-normal capitalize tracking-normal"
        >
          Get Started
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className=" hidden w-[10rem] grid-cols-7overflow-visible lg:grid">
        <ul className="pl-5 font-semibold text-left col-span-4 flex w-full flex-col gap-1">
          <a href="">Individual</a>
          <a href="">Businesses</a>
          <a href="">Downloads</a>
          <a href="">Buy Online</a>
          <a href="">Where to Speed </a>
          <a href="">New Merchant Kit</a>
        </ul>
      </MenuList>
    </Menu>
  );
}
