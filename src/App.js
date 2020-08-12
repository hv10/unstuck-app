import React from "react";
import logo from "./logo.svg";
import { MainPage } from "./pages/MainPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { TipPage } from "./pages/TipPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/tip/:id" component={TipPage} />
      </Switch>
    </Router>
  );
}

export default App;
