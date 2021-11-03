import React, { Component } from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar.js";

class Main extends Component {
  state = {
    activeTab: 0,
  };

  setActiveTab = (tabId) => {
    this.setState({
      activeTab: tabId,
    });
  };

  render() {
    return (
      <div className="main-container">
        <Navbar
          activeTab={this.state.activeTab}
          setActiveTab={this.setActiveTab}
        />
      </div>
    );
  }
}

export default Main;
