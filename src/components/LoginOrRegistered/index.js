import React from "react";
import "./style.css";
import Login from "./Login";
import Registered from "./Registered";

//https://codepen.io/jonathanobino/pen/gPKvLP
class LoginOrRegistered extends React.Component {
  state = {
    typeName: ""
  };
  setType = typeName => {
    this.setState({
      typeName
    });
  };

  render() {
    const WhichType = () => {
      const { typeName } = this.state;
      if (typeName === "LOGIN") {
        return <Login />;
      } else if (typeName === "Registered") {
        return <Registered />;
      } else {
        return <Login />;
      }
    };
    return (
      <div className="login-layout">
        <div className="login-title">
          <p
            className="title-margin cursor"
            onClick={() => this.setType("LOGIN")}
          >
            LOGIN
          </p>
          <p
            className="title-margin cursor "
            onClick={() => this.setType("Registered")}
          >
            Registered
          </p>
        </div>
        <div className="slider" />
        <WhichType />
      </div>
    );
  }
}
export default LoginOrRegistered;
