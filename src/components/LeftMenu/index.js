import React from "react";
import "./LeftMenu.css";
import img from "../../assets/abc.jpg";

const data = ["1", "2", "3"];

class LeftMenu extends React.Component {
  render() {
    const { menuItem } = this.props;
    return (
      <div className="left-div">
        <ul className="menu-outside-border">
          {data.map(item => (
            <li
              key={item}
              onClick={() => this.props.clickMenuItem(item)}
              className="menu-item-style"
              style={{
                background:
                  item === menuItem
                    ? `url(${img})  no-repeat center center`
                    : ""
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
