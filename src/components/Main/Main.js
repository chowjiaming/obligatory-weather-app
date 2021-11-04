import React, { Component } from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar.js";
import Forecast from "../Forecast/Forecast.js";

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
        <Forecast activeTab={this.state.activeTab} />
      </div>
    );
  }
}

export default Main;
