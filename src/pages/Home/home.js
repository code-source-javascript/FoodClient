import React, { Component } from "react";
import Logo from "../../components/logo";
import Profile from "../../components/profile";
import LogoIcon from "../../icons/logo";
import MenuIcon from "../../icons/Menu";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <div className="w-full h-full md:h-24 bg-black absolute z-30 top-0 opacity-70"></div>
            {/* logo */}
            <div className=" flex absolute top-0 z-40 justify-center items-center w-full h-full">
              <Logo />
            </div>
          </div>
          <div className="fixed top-7 left-8 z-50 ">
            <MenuIcon />
          </div>
          <div className="fixed top-7 right-8 z-50 ">
            <Profile />
          </div>
        </div>
        <div className=" flex flex-col  ">
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
