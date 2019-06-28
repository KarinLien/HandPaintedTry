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
      <div className="bar-content-title">
        <div
          onClick={() => props.closeClick()}
          className="bar-content-close-btn"
        >
          <span>X</span>
        </div>
        <h2 style={{ margin: "10px auto" }}>MENU</h2>
      </div>
      <div>
        <ul style={{ cursor: "pointer" }} className="menu-list">
          <li onClick={() => props.closeClick()} className="menu-tag">
            <span className="light" />
            <Link to="/login" className="menu-link">
              Login
            </Link>
          </li>
          <li onClick={() => props.closeClick()} className="menu-tag">
            <span className="light" />
            <Link to="/list" className="menu-link">
              List
            </Link>
          </li>
          <li onClick={() => props.closeClick()} className="menu-tag">
            <span className="light" />
            <Link to="/member" className="menu-link">
              Member
            </Link>
          </li>
          <li onClick={() => props.closeClick()} className="menu-tag">
            <span className="light" />
            <Link to="/" className="menu-link">
              HOME
            </Link>
          </li>
          <li onClick={() => props.closeClick()} className="menu-tag">
            <span className="light" />
            <Link to="/home" className="menu-link">
              REAL HOME
            </Link>
          </li>
          <li onClick={() => props.closeClick()} className="menu-tag">
            <span className="light" />
            <Link to="/tabs" className="menu-link">
              TAB EXAMPLE
            </Link>
          </li>
          <li onClick={() => props.closeClick()} className="menu-tag">
            <span className="light" />
            <Link to="/slider" className="menu-link">
              SLIDER EXAMPLE
            </Link>
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
