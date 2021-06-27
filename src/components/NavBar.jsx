import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import {
  PlaceOfInterest,
  Home,
  Events,
  Products,
  About,
  Contact,
  NotFound,
} from "./index";

function NavBar() {
  const headerStyle = {
    display: "flex",
    justifyContent: "center",
    background: "blue",
    height: "auto",
  };

  const navMenu = {
    display: "flex",
    justifyContent: "space-around",
    background: "yellow",
  };

  const routes = {
    display: "flex",
    justifyContent: "space-around",
    background: "#dbcf15",
  };

  return (
    <Router>
      <div style={headerStyle}>
        <h2>Buiding API</h2>
      </div>

      <nav style={navMenu}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div style={routes}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/events" component={Events} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/about/:id" component={PlaceOfInterest} />
        </Switch>
      </div>
    </Router>
  );
}

export default NavBar;
