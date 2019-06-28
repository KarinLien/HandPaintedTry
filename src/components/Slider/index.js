import React from "react";
import "./style.css";
import BasicSlider from "./BasicSlider";
import CitiesSlider from "./CitiesSlider";
//https://codepen.io/suez/pen/OjGQza

class Slider extends React.Component {
  render() {
    const { type, children, slides } = this.props;
    if (type === "Basic") {
      return <BasicSlider children={children} />;
    } else if (type === "Cities") {
      return <CitiesSlider slides={slides} />;
    }
  }
}
export default Slider;
