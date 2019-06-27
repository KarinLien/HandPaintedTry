import React from "react";
import "./style.css";

const BasicContent = () => {
  return (
    <div className="basic-box">
      <div className="basic-input">
        <label>name:</label>
        <input type="text" />
      </div>
      <div className="basic-input">
        <label>Email:</label>
        <input type="text" />
      </div>
      <div className="basic-input">
        <label>address:</label>
        <input type="text" />
      </div>
    </div>
  );
};

const data = [
  { title: "BASIC INFORMATION", content: <BasicContent /> },
  { title: "Number Two", content: "EFGHIJK" },
  { title: "Number Three", content: "LMNOPQR" }
];
class TabsExam extends React.Component {
  state = {
    click: 0
  };
  changeTitle = index => {
    this.setState({
      click: index
    });
  };
  render() {
    return (
      <div style={{ width: "80%", display: "flex", margin: "0 auto" }}>
        <div className="tab-tag-box">
          {data.map((item, index) => (
            <div
              className="tab-tag"
              onClick={() => this.changeTitle(index)}
              key={index}
            >
              <span
                className={`${
                  this.state.click === index ? "tab-active-light" : ""
                } tab-light`}
              />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div className="tab-content-big-box">
          {data.map((item, index) => (
            <div className="tab-content-box" key={index}>
              <div
                className="tab-content"
                style={{
                  height: this.state.click === index ? "100%" : "0",
                  opacity: this.state.click === index ? "1" : "0"
                }}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default TabsExam;
