import React from "react";
import { Route, Switch } from "react-router-dom";

import Characters from "./Routes/Characters";

function App() {
  return (
    <div>
      <h1>Welcome to Final Space!</h1>
      <Switch>
        <Route path="/characters">
          <Characters />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
