import React from "react";
import Header from "./components/Header";
import ProductList from "./components/productList";
import MemberList from "./components/MemberList";
import Home from "./components/Home";
import LoginOrRegistered from "./components/LoginOrRegistered";
import TabsExam from "./components/TabsExam";

import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
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
      <BrowserRouter>
        <div className="main-app">
          <Header />
          <div className="container">
            {/* <RightContent menuItem={menuItem} />
            <div style={{ clear: "both" }} />  */}
          </div>
        </div>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/list" component={ProductList} />
        <Route path="/member" component={MemberList} />
        <Route path="/login" component={LoginOrRegistered} />
        <Route path="/home" component={Home} />
        <Route path="/tabs" component={TabsExam} />
      </BrowserRouter>
    );
  }
}

export default App;
