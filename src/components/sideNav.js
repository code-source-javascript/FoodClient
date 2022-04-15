import React from "react";
import SideNavItem from "./sideNavItem";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoMdRestaurant } from "react-icons/io";
import { FaPercentage, FaHome } from "react-icons/fa";
import { GiOpenedFoodCan } from "react-icons/gi";
import Logo from "./logo";
import Button from "./button";
import Profile from "./profile";
export default function SideNav() {
  return (
    <div className="bg-white relative h-full shadow-md">
      <div className="py-10">
        <Logo />
      </div>
      <div className="flex sm:block ">
        <SideNavItem name="Home" icon={<FaHome />} />
        <SideNavItem name="Inspirations" icon={<HiOutlineLightBulb />} />
        <SideNavItem name="Groceries" icon={<GiOpenedFoodCan />} />
        <SideNavItem name="Promotion" icon={<FaPercentage />} />
        <SideNavItem name="Restaurants" icon={<IoMdRestaurant />} />
      </div>
      <div className=" w-full  sm:absolute sm:bottom-12  flex justify-between item-center sm:items-end sm:flex-col my-2 py-2">
        <div className="sm:my-2 mx-2 sm:self-start">
          <Profile />
        </div>
        <div className=" mx-2 ">
          <Button name="Sign Out" />
        </div>
      </div>
    </div>
  );
}
