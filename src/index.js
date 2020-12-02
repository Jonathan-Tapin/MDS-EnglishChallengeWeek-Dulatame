import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./footer";
import Home from "./home";
import Cart from "./cart";
import Catalog from "./catalog";
import Header from "./header";
import Market from "./market";

const routing = (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
      <Route path="/market" component={Market} />
    </Switch>
    <Footer />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
