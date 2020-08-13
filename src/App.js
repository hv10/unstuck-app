import React from "react";
import logo from "./logo.svg";
import { MainPage } from "./pages/MainPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { TipPage } from "./pages/TipPage";
import { QuestionsPage } from "./pages/QuestionsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/tip/:mode/:id" component={TipPage} />
        <Route path="/questions" component={QuestionsPage} />
      </Switch>
    </Router>
  );
}

export default App;
