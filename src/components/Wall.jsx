import React, { Component } from "react";
import PropTypes from "prop-types";
import { pxToCm } from "../modules/dimensionsConverter.js";
import Frame from "./Frame.jsx";
import Member from "./Member.jsx";

class Wall extends Component {
  static propTypes = {
    wallWidth: PropTypes.number.isRequired,
    wallHeight: PropTypes.number.isRequired,
    leftSideType: PropTypes.string.isRequired,
    rightSideType: PropTypes.string.isRequired
  };

  renderStuds = (wallWidth, maleRightSide) => {
    const sideStudsWidth = 16;
    const rightOffset = maleRightSide ? 27 : 0;

    const numberOfStuds = Math.floor(
      (wallWidth - (sideStudsWidth + rightOffset)) / 120
    );
    const studOffsets = [];

    let i = 1;

    while (i <= numberOfStuds) {
      studOffsets.push(i * 120);
      i++;
    }

    return studOffsets.map(offset => {
      return (
        <Member key={offset} className="member--stud" style={{ left: `${offset}px` }}/>
      );
    });
  };

  render() {
    const { wallWidth, wallHeight, leftSideType, rightSideType } = this.props;

    return (
      <div
        id="wall"
        style={{ width: `${wallWidth}px`, height: `${wallHeight}px` }}
      >
        <div className="dimensionLine dimensionLine--wallWidth">
          <div>{pxToCm(wallWidth)} cm</div>
        </div>
        <div className="dimensionLine dimensionLine--wallHeight">
          <div>{pxToCm(wallHeight)} cm</div>
        </div>

        <Frame leftSideType={leftSideType} rightSideType={rightSideType} />

        {this.renderStuds(
          wallWidth,
          rightSideType === "male"
        )}
      </div>
    );
  }
}

export default Wall;
