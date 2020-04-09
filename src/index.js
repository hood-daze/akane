import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.7.0";

// pages for this product

import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import CharaPage from "views/CharaPage/CharaPage.jsx";
import Story1Page from "./views/story1Page/Story1Page";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
        <Route path="/story-one" component={Story1Page} />
      <Route path="/chara-page" component={CharaPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
