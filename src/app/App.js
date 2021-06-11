import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Panel from "./pages/Panel";
import Success from "./pages/Success";
import Failed from "./pages/Failed";
import "./style/index.scss";

const App = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/panel" component={Panel} />
          <Route path="/success" component={Success} />
          <Route path="/failed" component={Failed} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
