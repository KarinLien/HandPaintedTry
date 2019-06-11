import React from "react";
import "./LeftMenu.css";

const data = ["1", "2", "3"];

class LeftMenu extends React.Component {
  render() {
    return (
      <div className="left-div">
        <ul className="menu-outside-border">
          {data.map(item => (
            <li
              key={item}
              onClick={() => this.props.clickMenuItem(item)}
              className="menu-item-style"
              style={{
                background: item === this.props.menuItem ? "pink" : ""
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

LeftMenu.defaultProps = {
  menuItem: "1"
};

export default LeftMenu;
