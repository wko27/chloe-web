import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route path="/chloe-web/" exact component={Homepage} />
          <Route path="/chloe-web/connect" exact component={Connect} />
          <Route path="/chloe-web/portfolio" exact component={Portfolio} />
          <Route path="/chloe-web/timeline" exact component={Timeline} />
          <Route component={ErrorPage}/>
        </Switch>
      </div>
      
    );
  }
}
export default Body;