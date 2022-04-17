import React, { Component } from "react";
import Logo from "../../components/logo";
import Profile from "../../components/profile";
import SideNav from "../../components/sideNav";
import MenuIcon from "../../icons/Menu";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: "hidden" };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    if (this.state.menu === "hidden") {
      this.setState({ menu: "" });
    } else {
      this.setState({ menu: "hidden" });
    }
  }
  render() {
    return (
      <div className="h-screen w-screen bg-gray-100  ">
        <div className="md:fixed">
          <div className=" h-screen w-screen md:h-24 relative transform transition ease-out duration-500">
            {/* cover image for phones */}
            <img
              src="./images/ca-1.jpeg"
              alt="background"
              className="h-full w-full object-cover md:hidden z-0 "
            />
            {/* cover image for web */}
            <img
              src="./images/ca-1.jpeg"
              alt="background"
              className="h-full w-full object-cover hidden md:block z-0"
            />
            {/* black transparent cover */}
            <div className="w-full h-full md:h-24 bg-black absolute z-10 top-0 opacity-70"></div>
            {/* logo */}
            <div className=" flex absolute top-0 z-20 justify-center items-center w-full h-full">
              <Logo />
            </div>
          </div>
          <div className="fixed top-7 left-8 z-30 ">
            <MenuIcon onClick={() => this.toggleMenu()} />
          </div>
          <div className="fixed top-7 right-8 z-30 ">
            <Profile />
          </div>
        </div>
        <div
          className={`w-44 md:w-64 border fixed top-24 h-screen z-40 ${this.state.menu}`}
        >
          <SideNav />
        </div>
        <div className="">
          <div className="h-96"></div>
          <div className="h-96"></div>
          <div className="h-96"></div>
          <div className="h-96"></div>
          <div className="h-96"></div>
          <div className="h-96"></div>
          <div className="h-96"></div>
        </div>
      </div>
    );
  }
}
