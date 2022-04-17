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
import CloseIcon from "../icons/Close";

export default function SideNav(props) {
  return (
    <div className="bg-white h-full pt-5 relative">
      <div className="flex justify-end p-5 ">
        <CloseIcon onClick={props.menuToggle} />
      </div>
      <SideNavItem name="Home" icon={<HomeIcon />} />
      <SideNavItem name="Inspirations" icon={<InspirationIcon />} />
      <SideNavItem name="Groceries" icon={<GroceriesIcon />} />
      <SideNavItem name="Promotion" icon={<DiscountIcon />} />
      <SideNavItem name="Restaurants" icon={<RestaurantIcon />} />
    </div>
  );
}
