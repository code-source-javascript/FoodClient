import React, { Component } from "react";

// components
import CategoryItem from "../../components/categoryItem";
import Detail from "../../components/detail";
import Inspiration from "../../components/inspiration";
import OrderButton from "../../components/orderButton";
import SearchBar from "../../components/searchBar";
import SideNav from "../../components/sideNav";

// icons
import DinnerIcon from "../../icons/Dinner";
import DrinkIcon from "../../icons/Drink";
import LocalIcon from "../../icons/Local";
import PizzaIcon from "../../icons/Pizza";
import BurgerIcon from "../../icons/Burger";
import ChickenIcon from "../../icons/chicken";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="grid sm:grid-cols-6 ">
        {/* nav bar  */}
        <nav className="sm:col-span-2 lg:col-span-1 bg-black">
          {/* side nav */}
          <SideNav />
        </nav>
        {/* content */}
        <main className=" lg:col-span-5 sm:col-span-4 overflow-scroll overflow-y-scroll h-screen pt-10">
          {/* search and order */}
          <div className="grid grid-cols-8 m-auto">
            <div className="col-span-6 lg:col-span-7 pl-10 ">
              <SearchBar />
            </div>
            <div className=" col-span-2 lg:col-span-1 item-center flex justify-center items-center pr-2">
              <OrderButton />
            </div>
          </div>
          {/* category */}
          <div className="mt-10 px-10">
            <div className="flex  overflow-scroll overflow-x-scroll pt-2  lg:justify-center">
              <CategoryItem name="Dinner" icon={<DinnerIcon />} />
              <CategoryItem name="Pizza" icon={<PizzaIcon />} />
              <CategoryItem name="Locals" icon={<LocalIcon />} />
              <CategoryItem name="Chicken" icon={<ChickenIcon />} />
              <CategoryItem name="Burger" icon={<BurgerIcon />} />
              <CategoryItem name="Drinks" icon={<DrinkIcon />} />
            </div>
          </div>
          {/* inspiration */}
          <div className="mt-10 px-10 ">
            <Detail name="Dinner Inspirations" />
            <div className="  flex mt-10 overflow-x-scroll ">
              <Inspiration
                food="Spaghtetti Special"
                image="./images/122.jpg"
                restaurant="KTV Fast Foods"
                price="GHS 50"
              />
              <Inspiration
                food="Jollof and  Grilled Chicken"
                image="./images/351.jpeg"
                restaurant="Paparazzi Foods"
                price="GHS 100"
              />
              <Inspiration
                food="Yam and Stew"
                image="./images/315.jpeg"
                restaurant="Kojo Krom Local Foods"
                price="GHS 35"
              />
            </div>
          </div>
          {/* promotion*/}
          <div className=""></div>
        </main>
      </div>
    );
  }
}
