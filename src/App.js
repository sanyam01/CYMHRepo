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
import Header from "./components/Pages/Header/Header";
import HeaderLogo from "./components/Pages/Header/HeaderLogo";
import Feeling from "./components/Pages/FeelingPage/Feeling";
import MoodTracker from "./components/Pages/MoodPage/MoodTracker";
import Journal from "./components/Pages/JournalPage/Journal";
import ResourcesMaterial from "./components/Pages/Resources/ResourcesMaterial";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Switch>
          <Route path="/SignUp">
            <Header />
            <HomePage />
            <SignUp />
          </Route>

          <Route path="/Login">
            <Header />
            <HomePage />
            <Login />
          </Route>

          <Route path="/AfterLogin">
            <HeaderLogo/>
            <HomePage/>
            <AfterLogin/>
          </Route>

         {/* <Route path="/AfterLogin" component = {AfterLogin}/> */}
          

          <Route path="/Journal">
            <HeaderLogo />
            <Journal />
          </Route>

          <Route path="/Feeling">
            <HeaderLogo />
            <HomePage />
            <Feeling />
          </Route>

          <Route path="/home">
            <Header />
            <HomePage />
            <Home />
          </Route>

          <Route path="/about">
            <Header />
            <HomePage />
            <About />
          </Route>

          <Route path="/resources">
            <Header />
            <HomePage />
            <ResourcesMaterial />
          </Route>

          <Route path="/contact">
            <Header />
            <HomePage />
            <Contact />
          </Route>

          <Route path="/Tracker">
            <Header />
            <HomePage />
            <MoodTracker />
          </Route>

          <Route path="/">
            <Header />
            <HomePage />
            <Home />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
