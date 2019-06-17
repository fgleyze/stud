import React, { Component } from "react";
import PropTypes from "prop-types";
import { pxToCm } from "../modules/dimensionsConverter.js";

class Wall extends Component {
  static propTypes = {
    wallWidth: PropTypes.number.isRequired,
    wallHeight: PropTypes.number.isRequired,
    leftSideType: PropTypes.string.isRequired,
    rightSideType: PropTypes.string.isRequired
  };

  renderStuds = (wallWidth, femaleLeftSide, femaleRightSide) => {
      const sideStudsWidth = 16;
      const leftOffset = femaleLeftSide ? 27 : 0;
      const rightOffset = femaleRightSide ? 27 : 0;

      const numberOfStuds = Math.floor((wallWidth - (sideStudsWidth + leftOffset + rightOffset))/120);
      const studOffsets = [];
    
    let i = 1;

    while (i <= numberOfStuds) {
        studOffsets.push(i*120 + leftOffset);
        i++;
    }

    return studOffsets.map(studOffset => {
        return<div class="member member--stud" style={{ left: `${studOffset}px` }}>{}</div>;
    });
  };

  render() {
    const { wallWidth, wallHeight, leftSideType, rightSideType } = this.props;

    const femaleLeftSide = leftSideType === 'female';
    const maleLeftSide = leftSideType === 'male';
    const femaleRightSide = rightSideType === 'female';
    const maleRightSide = rightSideType === 'male';

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

        <div className={`member member--topChaining ${maleLeftSide && "member--topChaining--maleOnLeft"} ${maleRightSide && "member--topChaining--maleOnRight"}`} />
        <div className={`member member--topPlate ${femaleLeftSide && "member--topPlate--femaleOnLeft"} ${femaleRightSide && "member--topPlate--femaleOnRight"}`} />
        <div className={`member member--bottomPlate ${femaleLeftSide && "member--bottomPlate--femaleOnLeft"} ${femaleRightSide && "member--bottomPlate--femaleOnRight"}`} />
        <div className={`member member--leftStud ${femaleLeftSide && "member--leftStud--female"}`} />
        <div className={`member member--rightStud ${femaleRightSide && "member--rightStud--female"}`} />

        <div className={`member member--leftChaining ${maleLeftSide && "u-show"}`}></div>
        <div className={`member member--rightChaining ${maleRightSide && "u-show"}`}></div>

        {this.renderStuds(wallWidth, femaleLeftSide, femaleRightSide)}
      </div>
    );
  }
}

export default Wall;