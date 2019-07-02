import React from "react";
import Header from "./components/Header";

import { TimelineLite } from "gsap";

import "./App.css";

//https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a

// const styles = {
//   button: {
//     width: 200,
//     height: 45,
//     border: "none",
//     outline: "none"
//   },
//   container: {
//     padding: 100
//   },
//   box: {
//     marginTop: 10,
//     width: 100,
//     height: 100,
//     backgroundColor: "#ffc107",
//     borderRadius: 4,
//     boxShadow: "1px 1px 27px rgba(0, 0, 0, .3)"
//   }
// };

class App extends React.Component {
  state = {
    menuItem: ""
  };
  clickMenuItem = menuItem => {
    this.setState({
      menuItem
    });
  };
  animate = () => {
    var animation = new TimelineLite();
    animation
      .to(this.box, 0.1, { x: 200 })
      .to(this.box, 0.1, { y: 200 })
      .to(this.box, 0.1, { x: 0 })
      .to(this.box, 0.1, { y: 0 })
      .to(this.box, 0.1, { width: "200px" })
      .to(this.box, 0.1, { width: "100px" })
      .to(this.box, 0.1, { height: "200px" })
      .to(this.box, 0.1, { height: "100px" });
  };

  render() {
    // const { menuItem } = this.state;
    return (
      <div className="main-app">
        <Header />
        <div className="container">
          {/* <div style={styles.container}>
              <button style={styles.button} onClick={this.animate}>
                Animate BTN
              </button>
              <div
                style={styles.box}
                ref={box => (this.box = box)}
                className="box"
              />
            </div> */}
        </div>
      </div>
    );
  }
}

export default App;
