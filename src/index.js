import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, HashRouter } from "react-router-dom";
import ProductList from "./pages/productList";
import MemberList from "./pages/MemberList";
import Home from "./pages/Home";
import LoginOrRegistered from "./pages/LoginOrRegistered";
import TabsExam from "./pages/TabsExam";
import SliderExam from "./pages/SliderExam";
import CountryVisited from "./pages/CountryVisited";
import TodoList from "./components/TodoList";
import ReactHooks from "./components/ReactHooksTest";

ReactDOM.render(
  <HashRouter basename="/">
    <div>
      <App />
      <Route path="/list" component={ProductList} />
      <Route path="/member" component={MemberList} />
      <Route path="/login" component={LoginOrRegistered} />
      <Route path="/home" component={Home} />
      <Route path="/tabs" component={TabsExam} />
      <Route path="/slider" component={SliderExam} />
      <Route path="/countryvisited" component={CountryVisited} />
      <Route path="/react-hooks" component={ReactHooks} />
      <Route path="/todo-list" component={TodoList} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
