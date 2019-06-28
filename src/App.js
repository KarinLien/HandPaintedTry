import React from "react";
import Header from "./components/Header";
import ProductList from "./pages/productList";
import MemberList from "./pages/MemberList";
import Home from "./pages/Home";
import LoginOrRegistered from "./pages/LoginOrRegistered";
import TabsExam from "./pages/TabsExam";
import SliderExam from "./pages/SliderExam";
import CountryVisited from "./pages/CountryVisited";

import "./App.css";
import { Route, HashRouter } from "react-router-dom";
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
      <HashRouter basename="/">
        <div className="main-app">
          <Header />
          <div className="container" />
        </div>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/list" component={ProductList} />
        <Route path="/member" component={MemberList} />
        <Route path="/login" component={LoginOrRegistered} />
        <Route path="/home" component={Home} />
        <Route path="/tabs" component={TabsExam} />
        <Route path="/slider" component={SliderExam} />
        <Route path="/countryvisited" component={CountryVisited} />
      </HashRouter>
    );
  }
}

export default App;
