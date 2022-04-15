import React from "react";
import SideNavItem from "./sideNavItem";
import Logo from "./logo";
import Button from "./button";
import Profile from "./profile";

// Icons
import RestaurantIcon from "../icons/Restaurant";
import InspirationIcon from "../icons/Inspiration";
import DiscountIcon from "../icons/Discount";
import HomeIcon from "../icons/Home";
import GroceriesIcon from "../icons/Groceries";

export default function SideNav() {
  return (
    <div className="bg-white relative h-full shadow-md">
      <div className="py-10">
        <Logo />
      </div>
      <div className="flex sm:block ">
        <SideNavItem name="Home" icon={<HomeIcon />} />
        <SideNavItem name="Inspirations" icon={<InspirationIcon />} />
        <SideNavItem name="Groceries" icon={<GroceriesIcon />} />
        <SideNavItem name="Promotion" icon={<DiscountIcon />} />
        <SideNavItem name="Restaurants" icon={<RestaurantIcon />} />
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
