import React, { Component } from "react";
import SideNav from "../../components/Sidenav/sideNav";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <SideNav />
      </div>
    );
  }
}
