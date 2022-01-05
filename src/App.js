import HomePage from "./components/Pages/HomePage/HomePage";
import "./App.css";
import About from "./components/Pages/About/About";
import Home from "./components/Pages/Home/Home";
import Resources from "./components/Pages/Resources/Resources";
import Contact from "./components/Pages/Contact/Contact";
import AfterLogin from "./components/Pages/AfterLogin/AfterLogin";
import { Route, Switch, Redirect } from "react-router-dom";

import React, { Fragment } from "react";
import SignUp from "./components/Pages/SignUp/SignUp";
import Login from "./components/Pages/Login/Login";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Switch>
          <Route path="/SignUp">
          <HomePage />
            <SignUp />
          </Route>

          <Route path="/Login">
          <HomePage />
            <Login />
          </Route>

          <Route path="/home">
            <HomePage />
            <Home />
          </Route>

          <Route path="/about">
            <HomePage />
            <About />
          </Route>

          <Route path="/resources">
            <HomePage />
            <Resources />
          </Route>

          <Route path="/contact">
            <HomePage />
            <Contact />
          </Route>

          <Route path = "/afterLogin">
            <HomePage/>
            <AfterLogin/>
          </Route>

          <Route path="/">
            <HomePage />
            <Home />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
