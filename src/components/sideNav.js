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
    <div className="bg-white w-full  border h-screen">
      <div className="m-10">
        <Logo />
      </div>
      <div className="border w-full ">
        <SideNavItem name="Home" icon={<FaHome />} />
        <SideNavItem name="Inspirations" icon={<HiOutlineLightBulb />} />
        <SideNavItem name="Groceries" icon={<GiOpenedFoodCan />} />
        <SideNavItem name="Promotion" icon={<FaPercentage />} />
        <SideNavItem name="Restaurants" icon={<IoMdRestaurant />} />
      </div>
      <div className="absolute bottom-5">
        <div className="ml-4">
          <Profile />
        </div>
        <div className="block w-56 text-right">
          <Button name="Sign Out" />
        </div>
      </div>
    </div>
  );
}
