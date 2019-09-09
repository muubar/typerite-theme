import React from "react";
import "./SmoothScroll.scss";
import throttle from "lodash-es/throttle";

export default class SmoothScroll extends React.Component {
  constructor() {
    super();
    this.state = { visible: false };
    this.throttledHandleScroll = throttle(this.handleScroll, 200);
  }

  handleScroll = () => {
    if (window.innerWidth < 1100) {
      if (window.scrollY > 200) {
        this.setState({ visible: true });
      }
      else this.setState({ visible: false });
    }
    else this.setState({ visible: false });
  }

  handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.throttledHandleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.throttledHandleScroll);
  }

  render() {
    return (
      <div><a className={`scroll-top ${this.state.visible ? "scroll-top--visible" : ""}`} onClick={this.handleClick}></a></div>
    )
  }
}