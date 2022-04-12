import React, { Component } from "react";
import OrderButton from "../../components/orderButton";
import SearchBar from "../../components/searchBar";
import SideNav from "../../components/sideNav";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="flex w-screen">
        <div className="">
          {" "}
          <SideNav />
        </div>

        {/* search */}
        <div className="flex justify-around w-full mx-24 my-16 h-12">
          <SearchBar />
          <OrderButton />
        </div>
        {/* category */}
        <div></div>
        {/* Dinner Inspiration */}
        <div></div>
        {/* Promotions */}
        <div></div>
      </div>
    );
  }
}
