import React, { Component } from "react";
import Wall from "./Wall.jsx";
import { cmToPx, pxToCm } from "../modules/dimensionsConverter.js";

class StudContainer extends Component {
  state = {
    wallWidth: cmToPx(400),
    wallHeight: cmToPx(250),
    leftSideType: "neutral",
    rightSideType: "neutral",
  };

  handleWidthChange = event => {
    this.setState({ wallWidth: cmToPx(event.target.value) });
  };

  handleHeightChange = event => {
    this.setState({ wallHeight: cmToPx(event.target.value) });
  };

  handleLeftSideTypeChange = event => {
    this.setState({ leftSideType: event.target.value });
  };

  handleRightSideTypeChange = event => {
    this.setState({ rightSideType: event.target.value });
  };

  render() {
    return (
      <div>
        <form className="wallDimensionsForm">
          width:{" "}
          <input
            type="number"
            value={pxToCm(this.state.wallWidth)}
            onChange={this.handleWidthChange}
          />
          <br />
          height:{" "}
          <input
            type="number"
            value={pxToCm(this.state.wallHeight)}
            onChange={this.handleHeightChange}
          />
          <br />
          left side:{" "}
          <select
            value={this.state.leftSideType}
            onChange={this.handleLeftSideTypeChange}
          >
            <option value="neutral">Female straigth junction</option>
            <option value="male">Male corner</option>
            <option value="female">Female corner / Male straigth junction</option>
          </select>
          <br />
          right side:{" "}
          <select
            value={this.state.rightSideType}
            onChange={this.handleRightSideTypeChange}
          >
            <option value="neutral">Female straigth junction</option>
            <option value="male">Male corner</option>
            <option value="female">Female corner / Male straigth junction</option>
          </select>
          <br />
        </form>
        <Wall
          wallWidth={this.state.wallWidth}
          wallHeight={this.state.wallHeight}
          leftSideType={this.state.leftSideType}
          rightSideType={this.state.rightSideType}
        />
      </div>
    );
  }
}

export default StudContainer;
