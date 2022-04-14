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
      <div className=" relative grid md:grid-cols-5">
        {/* nav bar  */}
        <nav className="md:col-span-1 bg-black ">
          {/* side nav */}
          <SideNav />
        </nav>
        {/* content */}
        <main className="md:col-span-4 overflow-y-scroll h-screen">
          <div className="h-screen bg-red-500"></div>
          <div className="h-screen bg-red-400"></div>
        </main>
      </div>
    );
  }
}
