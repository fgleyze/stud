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
          className={`member--topChaining ${maleLeftSide &&
            "member--topChaining--maleOnLeft"} ${maleRightSide &&
            "member--topChaining--maleOnRight"}`}
        />
        <Member
          className={`member--topPlate ${femaleLeftSide &&
            "member--topPlate--femaleOnLeft"} ${femaleRightSide &&
            "member--topPlate--femaleOnRight"}`}
        />
        <Member
          className={`member--bottomPlate ${femaleLeftSide &&
            "member--bottomPlate--femaleOnLeft"} ${femaleRightSide &&
            "member--bottomPlate--femaleOnRight"}`}
        />
        <Member
          className={`member--leftStud ${femaleLeftSide &&
            "member--leftStud--female"}`}
        />
        <Member
          className={`member--rightStud ${femaleRightSide &&
            "member--rightStud--female"}`}
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
