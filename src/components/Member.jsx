import React, { Component } from "react";
import PropTypes from "prop-types";
import { pxToCm } from "../modules/dimensionsConverter.js";

class Member extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
    addToMembers: PropTypes.func.isRequired,
    removeToMembers: PropTypes.func.isRequired
  };

  state = {
    hover: false
  };

  hoverOn = value => {
    this.setState({ hover: true });
    const lenght = Math.max(
      pxToCm(value.currentTarget.clientHeight),
      pxToCm(value.currentTarget.clientWidth)
    );
    console.log(lenght);
  };

  hoverOff = () => {
    this.setState({ hover: false });
  };

  render() {
    const { className, style } = this.props;

    return (
      <div
        className={`member ${className} ${this.state.hover ? "u-bg" : ""}`}
        style={style}
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
      />
    );
  }
}

export default Member;
