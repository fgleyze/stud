import React, { Component } from "react";
import PropTypes from "prop-types";
import Member from "./Member.jsx";

class Frame extends Component {
  static propTypes = {
    leftSideType: PropTypes.string.isRequired,
    rightSideType: PropTypes.string.isRequired
  };

  render() {
    const { leftSideType, rightSideType } = this.props;

    const femaleLeftSide = leftSideType === "female";
    const maleLeftSide = leftSideType === "male";
    const femaleRightSide = rightSideType === "female";
    const maleRightSide = rightSideType === "male";

    return (
      <div>
        <Member
          className={`member--topChaining ${femaleLeftSide &&
            "member--topChaining--femaleOnLeft"} ${femaleRightSide &&
            "member--topChaining--femaleOnRight"}`}
        />
        <Member
          className={`member--topPlate`}
        />
        <Member
          className={`member--bottomPlate`}
        />
        <Member
          className={`member--leftStud`}
        />
        <Member
          className={`member--rightStud`}
        />
        <Member
          className={`member--leftChaining ${maleLeftSide && "u-show"}`}
        />
        <Member
          className={`member--rightChaining ${maleRightSide &&
            "u-show"}`}
        />
      </div>
    );
  }
}

export default Frame;
