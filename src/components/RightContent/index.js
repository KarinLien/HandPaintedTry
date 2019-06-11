import React from "react";
import "./RightContent.css";

const Content = props => {
  const { menuItem } = props;
  switch (menuItem) {
    case "1":
      return (
        <wired-card elevation="1" style={{ width: "60%" }}>
          <p>title: 1</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </wired-card>
      );
    case "2":
      return (
        <wired-card elevation="2" style={{ width: "60%" }}>
          <p>title: 2</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitlamco.
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </wired-card>
      );
    case "3":
      return (
        <wired-card elevation="3" style={{ width: "60%" }}>
          <p>title: 3</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </wired-card>
      );
    default:
      return "";
  }
};

Content.defaultProps = {
  menuItem: "1"
};

class RightContent extends React.Component {
  render() {
    const { menuItem } = this.props;
    return (
      <div className="right-div">
        <Content menuItem={menuItem ? menuItem : undefined} />
      </div>
    );
  }
}

export default RightContent;
