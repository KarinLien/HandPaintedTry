import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
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
