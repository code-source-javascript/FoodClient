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
      <div className="flex w-screen ">
        <div className="w-1/4">
          {" "}
          <SideNav />
        </div>
        <div className="w-3/4">
          {/* search */}
          <div className="flex justify-around mt-16 mb-10 mr-16 h-12 ">
            <SearchBar />
            <OrderButton />
          </div>
          {/* category */}
          <div>
            <CategoryItem name="Dinner" icon={<MdOutlineFastfood />} />
          </div>
          {/* Dinner Inspiration */}
          <div></div>
          {/* Promotions */}
          <div></div>
        </div>
        {/* <div className="w-1/4"></div> */}
      </div>
    );
  }
}
