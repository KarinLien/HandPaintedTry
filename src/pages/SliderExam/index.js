import React from "react";
import Slider from "../../components/Slider";
const slides = [
  {
    city: "Paris",
    country: "France",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg"
  },
  {
    city: "Singapore",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg"
  },
  {
    city: "Prague",
    country: "Czech Republic",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg"
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg"
  },
  {
    city: "Moscow",
    country: "Russia",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg"
  }
];
class SliderExam extends React.Component {
  render() {
    return (
      <div>
        <Slider type="Cities" slides={slides} />
      </div>
    );
  }
}
export default SliderExam;
