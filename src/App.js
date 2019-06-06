import React from "react";
import "./App.css";
//https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a
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
