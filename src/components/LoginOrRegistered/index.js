import React from "react";
import "./style.css";
import Login from "./Login";
import Registered from "./Registered";

const type = [{ name: "Login" }, { name: "Registered" }];

//https://codepen.io/jonathanobino/pen/gPKvLP

class LoginOrRegistered extends React.Component {
  state = {
    typeName: "",
    chooseWitch: 0
  };
  setType = (typeName, index) => {
    this.setState({
      typeName,
      chooseWitch: index
    });
  };

  render() {
    const WhichType = () => {
      const { typeName } = this.state;
      if (typeName === "Login") {
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
          {type.map((item, index) => {
            return (
              <p
                key={item.name}
                style={{
                  borderBottom:
                    this.state.chooseWitch === index
                      ? "2px solid #337ab7"
                      : "2px solid #eee"
                }}
                className="title-margin login-cursor"
                onClick={() => this.setType(item.name, index)}
              >
                {item.name}
              </p>
            );
          })}
        </div>
        <WhichType />
      </div>
    );
  }
}
export default LoginOrRegistered;
