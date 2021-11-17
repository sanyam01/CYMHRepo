import HomePage from "./components/Pages/HomePage/HomePage";
import "./App.css";
import About from "./components/Pages/About/About";
import Home from "./components/Pages/Home/Home";
import Resources from "./components/Pages/Resources/Resources";
import Contact from "./components/Pages/Contact/Contact";
import { Route, Switch, Redirect } from "react-router-dom";

import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="App">
        <HomePage />

        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/resources">
            <Resources />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>



          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
