import React, { Component } from "react";
import Logo from "../../components/logo";
import LogoIcon from "../../icons/logo";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* top */}
        <div className="h-screen w-screen bg-gray-100 ">
          <div className=" h-screen w-screen md:h-24 relative ">
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
            <div className="absolute top-7 left-4">hie</div>
          </div>
        </div>
        {/* main */}
        <div className=""></div>
      </div>
    );
  }
}
