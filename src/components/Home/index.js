import React from "react";
import "./style.css";
import Slider from "../Slider";

class Home extends React.Component {
  render() {
    return (
      <div className="home-layout">
        <h3 className="home-title">HERE IS　HOME PAGE</h3>
        <div>
          <Slider>
            <div>
              <h2>Slide1</h2>Slide 1 is plain
            </div>
            <div>
              <h2>Slide2</h2>Slide 2 is plain
            </div>
            <div>
              <h2>Slide3</h2>Slide 3 is plain
            </div>
            <div>
              <h2>Slide4</h2>Slide 4 is plain
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
export default Home;
