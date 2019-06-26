import React from "react";
import Bar from "../Bar";
import { Link } from "react-router-dom";
import "./style.css";
const Btn = () => {
  return (
    <div className="menuToggle">
      <span />
      <span />
      <span />
    </div>
  );
};
const BarContent = props => {
  return (
    <div>
      <div
        className="bar-content-title"
        style={{ display: "flex", borderBottom: "1px solid black" }}
      >
        <div
          onClick={() => props.closeClick()}
          style={{
            width: "45px",
            height: "45px"
          }}
        >
          <span
            style={{
              width: "45px",
              height: "45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            X
          </span>
        </div>
        <h2 style={{ margin: "10px auto" }}>MENU</h2>
      </div>
      <div>
        <ul style={{ cursor: "pointer" }}>
          <li onClick={() => props.closeClick()}>
            <Link to="/login">LogIN</Link>
          </li>
          <li onClick={() => props.closeClick()}>
            <Link to="/list">List</Link>
          </li>
          <li onClick={() => props.closeClick()}>
            <Link to="/member">Member</Link>
          </li>
          <li onClick={() => props.closeClick()}>
            <Link to="/">HOME</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default class Header extends React.Component {
  state = {
    open: false
  };
  render() {
    const { open } = this.state;
    return (
      <div className="header">
        <div
          style={{ margin: "1% 10px", display: "inline-block" }}
          onClick={() => {
            this.setState({
              open: true
            });
          }}
        >
          <Btn />
        </div>
        <Bar
          open={open}
          content={
            <BarContent
              closeClick={() => {
                this.setState({ open: false });
              }}
            />
          }
        />
        <div className="right-side">
          <wired-icon-button className="pinkbg wired-rendered">
            favorite
          </wired-icon-button>
          <wired-icon-button className="pinkbg wired-rendered">
            close
          </wired-icon-button>
          <wired-icon-button className="pinkbg wired-rendered">
            star
          </wired-icon-button>
        </div>
        <div className="clear" />
      </div>
    );
  }
}
