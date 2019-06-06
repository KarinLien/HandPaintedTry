import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main-app">
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
      <div className="container">
        <wired-card elevation="3">
          <p>Elevation: 3</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </wired-card>
      </div>
    </div>
  );
}

export default App;
