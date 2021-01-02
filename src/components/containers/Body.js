import React, { Component } from "react";
import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Homepage from "../pages/HomePage.js";
import Connect from "../pages/Connect.js";
import Portfolio from "../pages/Portfolio.js";
import Timeline from "../pages/Timeline.js";
import ErrorPage from "../pages/ErrorPage.js";


//user ROUTE to switch from different pages
class Body extends Component {
  render() {
    return (
      <div>
        <div style={{minHeight: 70}}></div>
        <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/connect" exact component={Connect} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/timeline" exact component={Timeline} />
          <Route path="/404" exact component={ErrorPage}/>
          <Redirect to="/404"/>
        </Switch>
        </Router>
      </div>
      
    );
  }
}
export default Body;