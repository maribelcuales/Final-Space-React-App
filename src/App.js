import React from "react";
import { Route, Switch } from "react-router-dom";

import Characters from "./Routes/Characters";
import Home from "./Routes/Home.js"; 

function App() {
  return (
    <div>
      <Switch>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
