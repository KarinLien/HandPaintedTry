import React from "react";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import RightContent from "./components/RightContent";
import "./App.css";
//https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a
class App extends React.Component {
  state = {
    menuItem: ""
  };
  clickMenuItem = menuItem => {
    this.setState({
      menuItem
    });
  };
  render() {
    const { menuItem } = this.state;
    return (
      <div className="main-app">
        <Header />
        <div className="container">
          <LeftMenu
            clickMenuItem={this.clickMenuItem}
            menuItem={menuItem ? menuItem : undefined}
          />
          <RightContent menuItem={menuItem} />
          <div style={{ clear: "both" }} />
        </div>
      </div>
    );
  }
}

export default App;
