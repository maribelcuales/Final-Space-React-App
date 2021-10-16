import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";

import App from "./App";
import Episodes from "./Routes/Episodes.js";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/episodes" component={Episodes} />
      <Route path="/c0haracter" component={Character} />
      <Route path="/location" component={Location} />
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
