import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Main from "../components/Main";
import Home from "../components/Home";
import PromptContainer from "../containers/PromptContainer";

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="playerOne" component={PromptContainer} header="PlayerOne" />
    </Route>
  </Router>
);

export default routes;