import React, { Component } from "react";
import CategoryItem from "../../components/categoryItem";
import OrderButton from "../../components/orderButton";
import SearchBar from "../../components/searchBar";
import SideNav from "../../components/sideNav";
import { MdOutlineFastfood } from "react-icons/md";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className=" relative grid sm:grid-cols-6">
        {/* nav bar  */}
        <nav className="sm:col-span-1">
          {/* side nav */}
          <SideNav />
        </nav>
        {/* content */}
        <main className="sm:col-span-5 overflow-scroll overflow-y-scroll h-screen pt-10">
          {/* search and order */}
          <div className="grid grid-cols-8 m-auto">
            <div className="col-span-6 lg:col-span-7 pl-10">
              <SearchBar />
            </div>
            <div className=" col-span-2 lg:col-span-1 item-center pr-10">
              <OrderButton />
            </div>
          </div>
          {/* category */}
          <div className="mt-10 px-10">
            <div className="">
              <span>Categories</span>
            </div>
            <div className="flex  overflow-scroll  p-5">
             
            </div>
          </div>
          {/* inspiration */}
          <div className=""></div>
          {/* promotion*/}
          <div className=""></div>
        </main>
      </div>
    );
  }
}
