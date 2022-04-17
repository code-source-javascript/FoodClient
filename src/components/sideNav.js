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
    <div className="">
      <div className="">
        <Logo />
      </div>
      <div className="">
        <SideNavItem name="Home" icon={<HomeIcon />} />
        <SideNavItem name="Inspirations" icon={<InspirationIcon />} />
        <SideNavItem name="Groceries" icon={<GroceriesIcon />} />
        <SideNavItem name="Promotion" icon={<DiscountIcon />} />
        <SideNavItem name="Restaurants" icon={<RestaurantIcon />} />
      </div>
      <div className="">
        <div className="">
          <Profile />
        </div>
        <div className=" mx-2 ">
          <Button name="Sign Out" />
        </div>
      </div>
    </div>
  );
}
