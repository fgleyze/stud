import React, { Component } from "react";
import PropTypes from "prop-types";
import { pxToCm } from "../modules/dimensionsConverter.js";

class Member extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired
  };

  state = {
    hover: false
  };

  hoverOn = value => {
    console.log(pxToCm(value.currentTarget.clientHeight));
    console.log(pxToCm(value.currentTarget.clientWidth));
    this.setState({ hover: true });
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
